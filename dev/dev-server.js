const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const ROOT = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT, "dist");
const DEV_DIR = path.join(ROOT, "dev");
const PORT = Number(process.env.PORT || 8787);
const BUNDLE_NAME = "userScript.js";
const MAP_NAME = "userScript.js.map";

const clients = new Set();
let version = Date.now();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

function sendEvent(payload) {
  const data = JSON.stringify(payload);
  for (const res of clients) {
    res.write(`data: ${data}\n\n`);
  }
}

function notifyUpdate(reason) {
  version = Date.now();
  sendEvent({ type: "update", version, reason });
}

function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { ...corsHeaders, "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      ...corsHeaders,
      "Content-Type": contentType,
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
}

function serveIndex(res) {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>TizenFlix Dev Server</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <h1>TizenFlix Dev Server</h1>
    <p>Loader: http://localhost:${PORT}/loader.js</p>
    <p>Bundle: http://localhost:${PORT}/userScript.js</p>
  </body>
</html>`;

  res.writeHead(200, { ...corsHeaders, "Content-Type": "text/html" });
  res.end(html);
}

const server = http.createServer((req, res) => {
  if (!req.url || !req.headers.host) {
    res.writeHead(400, { ...corsHeaders, "Content-Type": "text/plain" });
    res.end("Bad request");
    return;
  }

  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = reqUrl.pathname;

  if (pathname === "/__events") {
    res.writeHead(200, {
      ...corsHeaders,
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      Connection: "keep-alive",
    });

    res.write("retry: 1000\n");
    res.write(`data: ${JSON.stringify({ type: "hello", version })}\n\n`);
    clients.add(res);

    req.on("close", () => {
      clients.delete(res);
    });
    return;
  }

  if (pathname === "/loader.js") {
    serveFile(res, path.join(DEV_DIR, "loader.js"), "application/javascript");
    return;
  }

  if (pathname === `/${BUNDLE_NAME}`) {
    serveFile(res, path.join(DIST_DIR, BUNDLE_NAME), "application/javascript");
    return;
  }

  if (pathname === `/${MAP_NAME}`) {
    serveFile(res, path.join(DIST_DIR, MAP_NAME), "application/json");
    return;
  }

  if (pathname === "/") {
    serveIndex(res);
    return;
  }

  res.writeHead(404, { ...corsHeaders, "Content-Type": "text/plain" });
  res.end("Not found");
});

function startPolling() {
  const bundlePath = path.join(DIST_DIR, BUNDLE_NAME);
  let lastMtimeMs = 0;

  const poll = () => {
    fs.stat(bundlePath, (err, stats) => {
      if (err) return;
      if (stats.mtimeMs !== lastMtimeMs) {
        lastMtimeMs = stats.mtimeMs;
        notifyUpdate("bundle-change");
      }
    });
  };

  poll();
  setInterval(poll, 500);
}

server.listen(PORT, () => {
  console.log(`[TizenFlix] Dev server running on http://localhost:${PORT}`);
  console.log(`[TizenFlix] Loader: http://localhost:${PORT}/loader.js`);
  console.log(`[TizenFlix] Bundle: http://localhost:${PORT}/userScript.js`);
});

startPolling();

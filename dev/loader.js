(() => {
  const state = window.__TizenFlixDevLoader || {};
  window.__TizenFlixDevLoader = state;

  if (state.started) {
    return;
  }

  const SERVER = state.server || "http://localhost:8787";
  const SCRIPT_ID = "TizenFlix-dev-script";
  let lastVersion = null;
  let eventSource = null;

  function inject(version) {
    if (version && version === lastVersion) return;
    lastVersion = version || Date.now();

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `${SERVER}/userScript.js?v=${lastVersion}`;
    document.head.appendChild(script);
  }

  function connect() {
    if (eventSource) eventSource.close();

    eventSource = new EventSource(`${SERVER}/__events`);
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "update") {
          inject(data.version);
        }
      } catch (err) {
        // Ignore malformed events
      }
    };

    eventSource.onerror = () => {
      // Auto reconnect is handled by EventSource
    };
  }

  state.started = true;
  state.restart = connect;

  inject(Date.now());
  connect();
})();

/**
 * pointer.js - Curseur desktop custom (orb + trainee)
 */

export function initDesktopPointer() {
  if (document.querySelector(".flx-cursor-orb")) return;

  document.documentElement.classList.add("flx-desktop-pointer");
  const root = document.documentElement;
  const debugEnabled = true;
  const supportsPointerEvents = "onpointermove" in window;
  const canHover =
    window.matchMedia && window.matchMedia("(hover: hover)").matches;
  const finePointer =
    window.matchMedia && window.matchMedia("(pointer: fine)").matches;

  const log = (...args) => {
    if (!debugEnabled) return;
    // eslint-disable-next-line no-console
    console.log("[FlxPointer]", ...args);
  };

  log("initDesktopPointer()", {
    supportsPointerEvents,
    canHover,
    finePointer,
    ua: navigator.userAgent,
  });

  const orb = document.createElement("div");
  orb.className = "flx-cursor-orb";
  document.body.appendChild(orb);

  const trailCount = 10;
  const trails = [];
  for (let i = 0; i < trailCount; i += 1) {
    const dot = document.createElement("div");
    dot.className = "flx-cursor-trail";
    dot.style.opacity = String(Math.max(0.1, 0.42 - i * 0.035));
    dot.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.06})`;
    document.body.appendChild(dot);
    trails.push({ el: dot, x: 0, y: 0 });
  }

  let targetX = window.innerWidth * 0.5;
  let targetY = window.innerHeight * 0.5;
  let currentX = targetX;
  let currentY = targetY;
  let rafId = 0;
  let mouseMode = false;
  let lastMouseMoveAt = 0;
  let inactivityTimer = 0;
  let lastMoveLogAt = 0;
  let moveEventsCount = 0;

  const setMouseMode = (enabled) => {
    if (mouseMode === enabled) return;
    mouseMode = enabled;
    root.classList.toggle("flx-input-mouse", enabled);
    root.classList.toggle("flx-input-keyboard", !enabled);
    log("mode", enabled ? "mouse" : "keyboard");
  };

  const resetInactivityTimer = () => {
    if (inactivityTimer) {
      window.clearTimeout(inactivityTimer);
    }
    inactivityTimer = window.setTimeout(() => {
      const staleFor = Date.now() - lastMouseMoveAt;
      if (staleFor >= 5000) {
        log("inactivity timeout -> keyboard mode", { staleFor });
        setMouseMode(false);
      }
    }, 5200);
  };

  const onMove = (e) => {
    if (e && "pointerType" in e && e.pointerType && e.pointerType !== "mouse") {
      if (e.pointerType === "touch") {
        setMouseMode(false);
      }
      return;
    }

    targetX = e.clientX;
    targetY = e.clientY;
    lastMouseMoveAt = Date.now();
    moveEventsCount += 1;
    if (!mouseMode) setMouseMode(true);
    resetInactivityTimer();

    if (debugEnabled) {
      const now = Date.now();
      if (moveEventsCount <= 6 || now - lastMoveLogAt > 1200) {
        lastMoveLogAt = now;
        log("move", {
          x: Math.round(targetX),
          y: Math.round(targetY),
          type: e.type,
          pointerType: e.pointerType || "mouse",
          count: moveEventsCount,
        });
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    log("keydown -> keyboard mode", { key: e.key });
    setMouseMode(false);
  };

  const onPointerDown = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") {
      log("pointerdown non-mouse", { pointerType: e.pointerType });
      setMouseMode(false);
      return;
    }
    log("pointerdown mouse", {
      x: Math.round(e.clientX),
      y: Math.round(e.clientY),
    });
    onMove(e);
  };

  const onMouseEnter = (e) => {
    log("mouseenter", {
      x: Math.round(e.clientX),
      y: Math.round(e.clientY),
    });
    onMove(e);
  };

  const tick = () => {
    // Lerp principal
    currentX += (targetX - currentX) * 0.24;
    currentY += (targetY - currentY) * 0.24;

    orb.style.left = `${currentX}px`;
    orb.style.top = `${currentY}px`;

    let prevX = currentX;
    let prevY = currentY;
    trails.forEach((trail) => {
      trail.x += (prevX - trail.x) * 0.35;
      trail.y += (prevY - trail.y) * 0.35;
      trail.el.style.left = `${trail.x}px`;
      trail.el.style.top = `${trail.y}px`;
      prevX = trail.x;
      prevY = trail.y;
    });

    rafId = window.requestAnimationFrame(tick);
  };

  if (supportsPointerEvents) {
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
  } else {
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });
  }
  document.addEventListener("keydown", onKeyDown, true);
  window.addEventListener(
    "blur",
    () => {
      log("window blur -> keyboard mode");
      setMouseMode(false);
    },
    { passive: true },
  );
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        log("document hidden -> keyboard mode");
        setMouseMode(false);
      }
    },
    { passive: true },
  );

  setMouseMode(false);
  rafId = window.requestAnimationFrame(tick);
  log("listeners attached");

  window.addEventListener("beforeunload", () => {
    if (supportsPointerEvents) {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onPointerDown);
    }
    if (!supportsPointerEvents) {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onMouseEnter);
    }
    document.removeEventListener("keydown", onKeyDown, true);
    if (inactivityTimer) window.clearTimeout(inactivityTimer);
    if (rafId) window.cancelAnimationFrame(rafId);
    log("cleanup done");
  });
}

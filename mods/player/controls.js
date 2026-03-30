/**
 * controls.js - Gestion des touches media pour le player
 * Note: Les iframes cross-origin ne permettent pas d'envoyer des evenements
 * directement a la video interne. On gere ici le comportement au niveau page.
 */

import { Keys, isMediaKey } from '../navigation/remote-keys.js';
import { focusManager } from '../navigation/focus-manager.js';

let playerActive = false;
let playerIframe = null;

/** Active/desactive le mode player */
export function setPlayerActive(active, iframe = null) {
  playerActive = active;
  playerIframe = iframe;

  if (active) {
    document.body.classList.add('flx-player-active');
    // Placer le focus sur le player
    if (iframe) {
      const wrap = iframe.closest('.flx-player-wrap');
      if (wrap) {
        wrap.setAttribute('data-flx-focusable', '');
        wrap.setAttribute('tabindex', '0');
        wrap.setAttribute('data-flx-zone', 'player-section');
        focusManager.focusElement(wrap);
      }
    }
  } else {
    document.body.classList.remove('flx-player-active');
  }
}

/**
 * Initialise les controles TV.
 * Quand le player est actif et qu'on appuie sur une touche media,
 * on essaie de relayer l'evenement a l'iframe via postMessage.
 */
export function initPlayerControls() {
  document.addEventListener('keydown', (e) => {
    if (!playerActive || !playerIframe) return;
    if (!isMediaKey(e.key)) return;

    // Tenter un postMessage vers l'iframe (fonctionne si le lecteur l'ecoute)
    try {
      const msg = { type: 'mediaKey', key: e.key };
      playerIframe.contentWindow.postMessage(msg, '*');
    } catch (_) {}

    // Gestion specifique Play/Pause pour certains lecteurs
    switch (e.key) {
      case Keys.PLAY_PAUSE:
      case Keys.PLAY:
        tryIframeAction('play');
        break;
      case Keys.PAUSE:
        tryIframeAction('pause');
        break;
      case Keys.STOP:
        tryIframeAction('stop');
        break;
    }
  }, { capture: true });
}

function tryIframeAction(action) {
  if (!playerIframe) return;
  try {
    playerIframe.contentWindow.postMessage({ action }, '*');
  } catch (_) {}
}

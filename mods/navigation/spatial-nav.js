/**
 * spatial-nav.js - Navigation spatiale par D-pad
 */

import {
  Keys,
  NAV_KEYS,
  isArrowKey,
  isBackKey,
  isMediaKey,
} from "./remote-keys.js";
import { focusManager } from "./focus-manager.js";
import { debounce } from "../utils.js";
import {
  isVirtualSearchKeyboardOpen,
  openVirtualSearchKeyboard,
  handleVirtualSearchKeyboardNavKey,
} from "../dom/search-keyboard.js";

let initialized = false;

/** Initialise la navigation spatiale */
export function initSpatialNav() {
  if (initialized) return;
  initialized = true;

  // Debounce pour eviter le spam du D-pad
  const handleKeyDown = debounce(_handleKeyDown, 80);

  document.addEventListener(
    "keydown",
    (e) => {
      if (NAV_KEYS.has(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
      handleKeyDown(e);
    },
    true,
  );

  // Focus initial apres que le DOM soit pret
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      focusManager.focusFirst();
    });
  });
}

function _handleKeyDown(e) {
  const { key } = e;

  if (isVirtualSearchKeyboardOpen() && handleVirtualSearchKeyboardNavKey(key)) {
    return;
  }

  // Ignorer si on est dans un input
  if (e.target && e.target.tagName === "INPUT") {
    if (key === Keys.ENTER) {
      openVirtualSearchKeyboard(e.target);
    }
    return;
  }

  switch (key) {
    case Keys.LEFT:
      if (!focusManager.moveHorizontal(-1)) {
        // Bord gauche atteint, peut-on remonter dans la zone precedente ?
        // Pour l'instant, on ne fait rien
      }
      break;

    case Keys.RIGHT:
      if (!focusManager.moveHorizontal(1)) {
        // Bord droit atteint
      }
      break;

    case Keys.UP:
      focusManager.moveVertical(-1);
      break;

    case Keys.DOWN:
      focusManager.moveVertical(1);
      break;

    case Keys.ENTER: {
      const focused = focusManager.getFocused();
      if (focused) {
        if (focused.tagName === "INPUT") {
          openVirtualSearchKeyboard(focused);
          return;
        }
        focused.click();
      }
      break;
    }

    case Keys.BACK:
    case Keys.BACK2:
      handleBack();
      break;

    default:
      break;
  }
}

/** Gestion de la touche Back */
function handleBack() {
  const zone = focusManager.activeZone;

  // Si on est dans le player, revenir a la liste des lecteurs
  if (zone === "player-section") {
    focusManager.moveVertical(-1);
    return;
  }

  // Sinon, naviguer dans l'historique
  if (window.history.length > 1) {
    const overlay = document.querySelector(".flx-page-transition");
    if (overlay) {
      overlay.classList.add("flx-active");
      setTimeout(() => window.history.back(), 250);
    } else {
      window.history.back();
    }
  }
}

/** Rafraichit les zones apres une modification DOM */
export function refreshNav() {
  focusManager.refresh();
}

/** Donne le focus a un element specifique depuis l'exterieur */
export function setFocus(el) {
  focusManager.focusElement(el);
}

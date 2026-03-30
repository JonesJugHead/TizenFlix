/**
 * remote-keys.js - Mapping des touches de telecommande Samsung
 */

export const Keys = {
  // D-pad
  UP:    'ArrowUp',
  DOWN:  'ArrowDown',
  LEFT:  'ArrowLeft',
  RIGHT: 'ArrowRight',
  ENTER: 'Enter',

  // Back / Return
  BACK: 'XF86Back',
  BACK2: 'Backspace',

  // Media
  PLAY_PAUSE: 'MediaPlayPause',
  PLAY:       'MediaPlay',
  PAUSE:      'MediaPause',
  STOP:       'MediaStop',
  FF:         'MediaFastForward',
  RW:         'MediaRewind',
  NEXT:       'MediaTrackNext',
  PREV:       'MediaTrackPrevious',

  // Couleurs
  RED:    'ColorF0Red',
  GREEN:  'ColorF1Green',
  YELLOW: 'ColorF2Yellow',
  BLUE:   'ColorF3Blue',
};

/** Set de toutes les touches de navigation (pour preventDefault) */
export const NAV_KEYS = new Set([
  Keys.UP, Keys.DOWN, Keys.LEFT, Keys.RIGHT, Keys.ENTER,
  Keys.BACK, Keys.BACK2,
]);

/** Verifie si une touche est une fleche de direction */
export function isArrowKey(key) {
  return key === Keys.UP || key === Keys.DOWN || key === Keys.LEFT || key === Keys.RIGHT;
}

/** Verifie si une touche est Back */
export function isBackKey(key) {
  return key === Keys.BACK || key === Keys.BACK2;
}

/** Verifie si une touche est une touche media */
export function isMediaKey(key) {
  return [Keys.PLAY_PAUSE, Keys.PLAY, Keys.PAUSE, Keys.STOP, Keys.FF, Keys.RW, Keys.NEXT, Keys.PREV].includes(key);
}

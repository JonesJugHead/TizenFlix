/**
 * player-enhance.js - Enhancement du player iframe
 */

import { createElement, showToast } from '../utils.js';

/** Detecte l'ID de l'iframe player selon le type de page */
export function getPlayerIframeId() {
  if (document.getElementById('x_player_wfx')) return 'x_player_wfx';
  if (document.getElementById('x_player')) return 'x_player';
  return null;
}

/** Intercepte window.loadVideo pour integrer le skeleton et les erreurs */
export function patchLoadVideo() {
  const originalLoadVideo = window.loadVideo;

  window.loadVideo = function (url) {
    const iframeId = getPlayerIframeId();
    if (!iframeId) {
      if (originalLoadVideo) originalLoadVideo(url);
      return;
    }

    const iframe = document.getElementById(iframeId);
    if (!iframe) {
      if (originalLoadVideo) originalLoadVideo(url);
      return;
    }

    // Montrer le skeleton du player flx si present
    const playerWrap = iframe.closest('.flx-player-wrap');
    const skeleton = playerWrap ? playerWrap.querySelector('.flx-player-skeleton') : null;
    if (skeleton) skeleton.classList.remove('flx-hidden');

    // Changer la source
    iframe.src = url;

    // Timeout fallback
    const timer = setTimeout(() => {
      if (skeleton) skeleton.classList.add('flx-hidden');
      showToast('Chargement lent. Essayez un autre lecteur.');
    }, 15000);

    iframe.onload = () => {
      clearTimeout(timer);
      if (skeleton) skeleton.classList.add('flx-hidden');
    };
  };
}

/**
 * Rend le player responsive 16:9.
 * Les iframes originales ont souvent des dimensions fixes.
 */
export function makePlayerResponsive() {
  const iframeId = getPlayerIframeId();
  if (!iframeId) return;

  const iframe = document.getElementById(iframeId);
  if (!iframe) return;

  // Si l'iframe est deja dans un .flx-player-wrap, rien a faire
  if (iframe.closest('.flx-player-wrap')) return;

  // Creer le wrapper
  const wrap = createElement('div', ['flx-player-wrap']);
  const skeleton = createElement('div', ['flx-player-skeleton', 'flx-hidden']);
  skeleton.innerHTML = '<div class="flx-player-loading"><div class="flx-player-loading__spinner"></div><p class="flx-player-loading__text">Chargement...</p></div>';

  iframe.parentNode.insertBefore(wrap, iframe);
  wrap.appendChild(skeleton);
  wrap.appendChild(iframe);

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; fullscreen');
}

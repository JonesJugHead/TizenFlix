/**
 * performance.js - Optimisations performance pour Samsung TV
 */

/** Desactive les animations CSS du site original */
export function disableOriginalAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    /* Stopper les animations owl.carousel et marquee */
    .owl-carousel,
    .owl-stage,
    .owl-stage-outer,
    .marquee,
    .marquee span,
    .marquee-inner {
      transition: none !important;
      animation: none !important;
    }
  `;
  document.head.appendChild(style);
}

/** Detruit les instances owl.carousel pour liberer la memoire */
export function destroyOwlCarousels() {
  if (!window.jQuery && !window.$) return;

  const $ = window.jQuery || window.$;

  const tryDestroy = () => {
    try {
      $('.owl-carousel.owl-loaded').each(function () {
        try {
          $(this).owlCarousel('destroy');
        } catch (_) {}
      });
    } catch (_) {}
  };

  // Attendre que owl soit initialise
  if (document.querySelector('.owl-loaded')) {
    tryDestroy();
  } else {
    const observer = new MutationObserver((_, obs) => {
      if (document.querySelector('.owl-loaded')) {
        obs.disconnect();
        tryDestroy();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    // Timeout de securite
    setTimeout(() => observer.disconnect(), 10000);
  }
}

/** Active l'acceleration hardware sur les conteneurs scrollables */
export function enableHardwareAcceleration() {
  const style = document.createElement('style');
  style.textContent = `
    .flx-row__track,
    .flx-episodes,
    .flx-card {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      will-change: transform;
    }
    .flx-card__poster {
      will-change: transform;
    }
  `;
  document.head.appendChild(style);
}

/** Supprime les scripts publicitaires connus */
export function removeAdScripts() {
  const adKeywords = [
    'scandiakenyan', 'wapperrattage', 'mopusescrusca',
    'doubleclick', 'googlesyndication', 'adnxs',
    'popads', 'popcash', 'juicyads',
    'exosrv', 'adsterra', 'propellerads',
  ];

  // Supprimer les scripts existants
  document.querySelectorAll('script[src]').forEach(script => {
    const src = script.getAttribute('src') || '';
    if (adKeywords.some(kw => src.includes(kw))) {
      script.parentNode.removeChild(script);
    }
  });

  // Supprimer les iframes publicitaires
  document.querySelectorAll('iframe:not(#x_player):not(#x_player_wfx):not(.flx-player-wrap iframe)').forEach(iframe => {
    const src = iframe.getAttribute('src') || '';
    if (adKeywords.some(kw => src.includes(kw))) {
      iframe.parentNode.removeChild(iframe);
    }
    // Iframes sans src et taille 0 ou cachees
    if (!src && (iframe.style.display === 'none' || iframe.offsetWidth === 0)) {
      iframe.parentNode.removeChild(iframe);
    }
  });

  // Observer pour les scripts injectes dynamiquement
  const scriptObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.tagName === 'SCRIPT') {
          const src = node.getAttribute('src') || '';
          if (adKeywords.some(kw => src.includes(kw))) {
            try { node.parentNode.removeChild(node); } catch (_) {}
          }
        }
      });
    });
  });

  scriptObserver.observe(document.head || document.documentElement, {
    childList: true,
    subtree: true,
  });
}

/** Optimisations globales de scroll */
export function optimizeScrollPerformance() {
  const style = document.createElement('style');
  style.textContent = `
    .flx-row__track {
      overflow-x: auto;
      overflow-y: visible;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
    }
  `;
  document.head.appendChild(style);
}

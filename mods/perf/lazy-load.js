/**
 * lazy-load.js - Lazy loading des images hors viewport
 */

/** Active le lazy loading natif sur toutes les images */
export function enableNativeLazyLoad() {
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
}

/** Intersection Observer pour les images data-src (lazy custom) */
export function initLazyObserver() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: charger toutes les images immediatement
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.setAttribute('src', img.getAttribute('data-src'));
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.setAttribute('src', src);
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '200px 0px',
      threshold: 0,
    }
  );

  document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
  });

  return observer;
}

/** Observe les nouvelles rows ajoutees dynamiquement */
export function watchNewRows(observer) {
  if (!observer) return;

  const mutationObs = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        node.querySelectorAll('img[data-src]').forEach(img => {
          observer.observe(img);
        });
      });
    });
  });

  mutationObs.observe(document.body, { childList: true, subtree: true });
}

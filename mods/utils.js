/**
 * utils.js - Utilitaires FlemmixTV
 */

/** Detecte le type de page courant */
export function detectPageType() {
  const path = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);

  // Page recherche
  if (
    document.querySelector('.search-page') ||
    searchParams.get('do') === 'search' ||
    document.querySelector('#fullsearch')
  ) {
    return 'search';
  }

  if (path === '/' || path === '' || path === '/index.php') return 'home';

  // Page detail serie : contient .epblocks OU .blocvostfr
  if (document.querySelector('.epblocks') || document.querySelector('.blocvostfr')) {
    return 'serie';
  }

  // Page detail film : contient .filmlinks OU .linkstab
  if (
    document.querySelector('.tabsbox.filmlinks') ||
    document.querySelector('.tabs-sel.linkstab')
  ) {
    return 'film';
  }

  // Page categorie : liste de .mov sans article.full
  if (document.querySelector('.mov') && !document.querySelector('article.full')) {
    return 'category';
  }

  // Paths de categories
  if (
    path.includes('/film-en-streaming') ||
    path.includes('/serie-en-streaming') ||
    path.includes('/film-ancien') ||
    path.includes('/category') ||
    path.includes('/xfsearch')
  ) {
    return 'category';
  }

  return 'other';
}

/** Cree un element DOM avec attributs et classes */
export function createElement(tag, classes = [], attrs = {}) {
  const el = document.createElement(tag);
  if (classes.length) el.className = classes.join(' ');
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

/** Injecte du CSS dans le document */
export function injectCSS(css) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

/** Ajoute une classe a un element existant */
export function addClass(el, ...classes) {
  if (el) el.classList.add(...classes);
}

/** Supprime un element du DOM */
export function removeEl(selector) {
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

/** Cache un element */
export function hideEl(selector) {
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (el) el.style.display = 'none';
}

/** Extraire l'URL d'un loadVideo() ou d'un href */
export function extractVideoUrl(el) {
  if (!el) return null;
  const onclick = el.getAttribute('onclick') || '';
  const match = onclick.match(/loadVideo\(['"]([^'"]+)['"]\)/);
  if (match) return match[1];
  const href = el.getAttribute('href');
  if (href && href !== '#' && href !== 'javascript:void(0)') return href;
  return null;
}

/** Extrait le texte propre d'un element */
export function getText(el) {
  if (!el) return '';
  return (el.textContent || '').trim();
}

/** Extrait une donnee d'un ul.mov-list par label */
export function getMovListValue(container, labelText) {
  if (!container) return '';
  const items = container.querySelectorAll('li');
  for (const li of items) {
    const label = li.querySelector('.mov-label');
    if (label && getText(label).toLowerCase().includes(labelText.toLowerCase())) {
      const desc = li.querySelector('.mov-desc');
      return desc ? getText(desc) : '';
    }
  }
  return '';
}

/** Debounce d'une fonction */
export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/** Attend qu'un selecteur soit present dans le DOM */
export function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const el = document.querySelector(selector);
    if (el) { resolve(el); return; }

    const observer = new MutationObserver(() => {
      const found = document.querySelector(selector);
      if (found) {
        observer.disconnect();
        resolve(found);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Timeout: ${selector} not found`));
    }, timeout);
  });
}

/** Affiche un toast en bas de l'ecran */
export function showToast(message, duration = 4000) {
  let container = document.querySelector('.flx-toast-container');
  if (!container) {
    container = createElement('div', ['flx-toast-container']);
    document.body.appendChild(container);
  }

  const toast = createElement('div', ['flx-toast']);
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('flx-toast--visible');
    });
  });

  setTimeout(() => {
    toast.classList.remove('flx-toast--visible');
    setTimeout(() => removeEl(toast), 400);
  }, duration);
}

/** Fait un scroll smooth pour rendre un element visible */
export function scrollIntoFocus(el) {
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
}

/** Determine le label lisible d'un lecteur depuis son URL */
export function getServerLabel(url) {
  if (!url) return 'Lecteur';
  const lurl = url.toLowerCase();
  if (lurl.includes('voe')) return 'Voe';
  if (lurl.includes('lulutv')) return 'LuluTV';
  if (lurl.includes('ddstream')) return 'DdStream';
  if (lurl.includes('uqload')) return 'Uqload';
  if (lurl.includes('sibnet')) return 'Sibnet';
  if (lurl.includes('filemoon')) return 'Filemoon';
  if (lurl.includes('streamvid')) return 'StreamVid';
  if (lurl.includes('dood')) return 'Dood';
  if (lurl.includes('upstream')) return 'Upstream';
  if (lurl.includes('streamtape')) return 'Streamtape';
  if (lurl.includes('sendvid')) return 'SendVid';
  if (lurl.includes('vidmoly')) return 'VidMoly';
  if (lurl.includes('okru') || lurl.includes('ok.ru')) return 'Ok.ru';
  if (lurl.includes('youtube')) return 'YouTube';
  if (lurl.includes('dailymotion')) return 'Dailymotion';
  // Extraire le domaine comme fallback
  try {
    const domain = new URL(url).hostname.replace('www.', '').split('.')[0];
    return domain.charAt(0).toUpperCase() + domain.slice(1);
  } catch {
    return 'Lecteur';
  }
}

/** Parse le badge langue d'un texte */
export function parseLangBadge(text) {
  const t = (text || '').toLowerCase();
  if (t.includes('truefrench')) return { type: 'tf', label: 'TrueFR' };
  if (t.includes('french') || t.includes('vf')) return { type: 'vf', label: 'VF' };
  if (t.includes('vostfr')) return { type: 'vostfr', label: 'VOSTFR' };
  if (t.includes('vost')) return { type: 'vostfr', label: 'VOST' };
  return null;
}

/** Parse le badge qualite */
export function parseQualityBadge(text) {
  const t = (text || '').toUpperCase();
  if (t.includes('4K')) return '4K';
  if (t.includes('BLURAY') || t.includes('BLU-RAY')) return 'Blu-Ray';
  if (t.includes('1080')) return '1080p';
  if (t.includes('720') || t.includes('HDLIGHT') || t.includes('HD')) return 'HD';
  if (t.includes('DVDRIP') || t.includes('DVDSCR') || t.includes('DVD')) return 'DVDRip';
  if (t.includes('WEBRIP') || t.includes('WEB-RIP') || t.includes('WEBDL')) return 'WEB';
  return null;
}

/** Cree un badge HTML */
export function createBadge(type, label) {
  const badge = createElement('span', ['flx-badge', `flx-badge--${type}`]);
  badge.textContent = label;
  return badge;
}

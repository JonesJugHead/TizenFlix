/**
 * home.js - Transformation DOM page d'accueil
 */

import {
  createElement,
  addClass,
  getText,
  parseLangBadge,
  parseQualityBadge,
  createBadge,
} from '../utils.js';
import { navigateWithTransition as navTransition } from './common.js';

/** Point d'entree: transforme la page d'accueil */
export function transformHome() {
  document.body.classList.add('flx-home');
  hideHomeUnwanted();
  buildHeroBanner();
  transformBlocksToRows();
  transformLastAdded();
  fixLayout();
}

/** Masque les elements specifiques a l'accueil */
function hideHomeUnwanted() {
  [
    '.blocklastadded',
    'div.marquee',
    '.adsb',
    'aside.sidebar',
    '.fav-info',
    '.main-title',
  ].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => (el.style.display = 'none'));
  });
}

/** Fixe le layout pour utiliser toute la largeur */
function fixLayout() {
  const content = document.querySelector('.content.insideblock');
  if (content) {
    content.style.cssText = 'float:none!important;width:100%!important;margin:0!important;padding:0!important;';
  }
  const cols = document.querySelector('.cols.clearfix#cols');
  if (cols) {
    cols.style.cssText = 'display:block!important;width:100%!important;';
  }
}

/** Construit le Hero Banner a partir de la premiere .mov de la premiere .block-main */
function buildHeroBanner() {
  const firstBlock = document.querySelector('.block-main');
  if (!firstBlock) return;

  const firstMov = firstBlock.querySelector('.mov');
  if (!firstMov) return;

  const data = extractCardData(firstMov);
  if (!data) return;
  const heroMeta = extractHeroMeta(firstMov);

  const hero = createElement('div', ['flx-hero']);
  hero.setAttribute('data-href', data.href);

  // Backdrop
  const backdrop = createElement('div', ['flx-hero__backdrop']);
  if (data.poster) backdrop.style.backgroundImage = `url("${data.poster}")`;
  hero.appendChild(backdrop);

  // Gradients
  hero.appendChild(createElement('div', ['flx-hero__gradient']));
  hero.appendChild(createElement('div', ['flx-hero__gradient-left']));

  // Contenu
  const content = createElement('div', ['flx-hero__content']);

  const title = createElement('h1', ['flx-hero__title']);
  title.textContent = data.title;
  content.appendChild(title);

  const meta = createElement('div', ['flx-hero__meta']);
  if (heroMeta.rating) {
    const rating = createElement('span', ['flx-hero__meta-chip', 'flx-hero__meta-chip--rating']);
    rating.textContent = `★ ${heroMeta.rating}`;
    meta.appendChild(rating);
  }
  if (heroMeta.year) {
    const year = createElement('span', ['flx-hero__meta-chip']);
    year.textContent = heroMeta.year;
    meta.appendChild(year);
  }
  if (heroMeta.genre) {
    const genre = createElement('span', ['flx-hero__meta-chip']);
    genre.textContent = heroMeta.genre;
    meta.appendChild(genre);
  }
  if (heroMeta.lang) {
    const lang = createElement('span', ['flx-hero__meta-chip']);
    lang.textContent = heroMeta.lang;
    meta.appendChild(lang);
  }
  if (meta.childNodes.length > 0) {
    content.appendChild(meta);
  }

  if (data.synopsis) {
    const synopsis = createElement('p', ['flx-hero__synopsis']);
    synopsis.textContent = data.synopsis;
    content.appendChild(synopsis);
  }

  // Actions
  const actions = createElement('div', ['flx-hero__actions']);

  const btnPlay = createElement('a', ['flx-btn', 'flx-btn--play']);
  btnPlay.setAttribute('href', data.href);
  btnPlay.setAttribute('tabindex', '0');
  btnPlay.setAttribute('data-flx-zone', 'hero');
  btnPlay.setAttribute('data-flx-focusable', '');
  btnPlay.textContent = '▶ Regarder';
  btnPlay.addEventListener('click', e => {
    e.preventDefault();
    navTransition(data.href);
  });
  actions.appendChild(btnPlay);

  const btnInfo = createElement('a', ['flx-btn', 'flx-btn--info']);
  btnInfo.setAttribute('href', data.href);
  btnInfo.setAttribute('tabindex', '0');
  btnInfo.setAttribute('data-flx-zone', 'hero');
  btnInfo.setAttribute('data-flx-focusable', '');
  btnInfo.textContent = 'ℹ Plus d\'infos';
  btnInfo.addEventListener('click', e => {
    e.preventDefault();
    navTransition(data.href);
  });
  actions.appendChild(btnInfo);

  content.appendChild(actions);
  hero.appendChild(content);

  // Inserer avant le premier .block-main (ou apres le header)
  const refNode = firstBlock.parentNode;
  if (refNode) {
    refNode.insertBefore(hero, firstBlock);
  }
}

/**
 * Transforme chaque .block-main en row Netflix horizontale.
 * Gere aussi le carousel .newcarusel.
 */
function transformBlocksToRows() {
  // Transformer le carousel
  transformCarousel();

  // Transformer les .block-main
  document.querySelectorAll('.block-main').forEach((block, idx) => {
    transformBlockToRow(block, idx);
  });
}

/** Transforme le carousel owl en row */
function transformCarousel() {
  const carousel = document.querySelector('.related.newcarusel');
  if (!carousel) return;
  carousel.style.display = 'none'; // Masque, la premiere card est deja dans le hero
}

/** Transforme un .block-main en row */
function transformBlockToRow(block, idx) {
  // Extraire le titre de la section
  const blockTitle = block.querySelector('.block-title');
  let titleText = '';
  let seeAllHref = '';

  if (blockTitle) {
    const leftMa = blockTitle.querySelector('.left-ma');
    titleText = leftMa ? getText(leftMa) : getText(blockTitle);
    const rightMa = blockTitle.querySelector('.right-ma a');
    if (rightMa) seeAllHref = rightMa.getAttribute('href') || '';
    blockTitle.style.display = 'none';
  }

  const normalizedTitle = normalizeSectionName(titleText, idx);
  const isTopTenRow = isTopTenSection(normalizedTitle, idx);
  const isTrendingRow = isTrendingSection(normalizedTitle, idx);

  // Creer le wrapper row
  const row = createElement('div', ['flx-row']);
  if (isTopTenRow) row.classList.add('flx-row--top10');
  if (isTrendingRow) row.classList.add('flx-row--trending');
  row.setAttribute('data-flx-zone', `row-${idx}`);

  // Header de row
  const rowHeader = createElement('div', ['flx-row__header']);

  const titleEl = createElement('span', ['flx-row__title']);
  titleEl.textContent = normalizedTitle;
  rowHeader.appendChild(titleEl);

  if (seeAllHref) {
    const seeAll = createElement('a', ['flx-row__see-all']);
    seeAll.textContent = 'Voir tout ›';
    seeAll.setAttribute('href', seeAllHref);
    seeAll.setAttribute('tabindex', '0');
    seeAll.setAttribute('data-flx-zone', `row-${idx}`);
    seeAll.setAttribute('data-flx-focusable', '');
    rowHeader.appendChild(seeAll);
  }

  row.appendChild(rowHeader);

  // Track (scroll horizontal)
  const track = createElement('div', ['flx-row__track']);
  track.setAttribute('data-flx-track', `row-${idx}`);

  // Transformer chaque .mov en card
  const movs = block.querySelectorAll('.mov');
  movs.forEach((mov, cardIdx) => {
    const card = buildCard(mov, idx, cardIdx);
    if (!card) return;
    if (isTopTenRow) {
      decorateTopTenCard(card, cardIdx);
    }
    track.appendChild(card);
  });

  row.appendChild(track);

  // Remplacer le contenu du block par la row
  block.innerHTML = '';
  block.appendChild(row);
}

/** Construit une .flx-card a partir d'un .mov */
function buildCard(mov, rowIdx, cardIdx) {
  const data = extractCardData(mov);
  if (!data) return null;

  const card = createElement('div', ['flx-card']);
  card.setAttribute('tabindex', '0');
  card.setAttribute('data-flx-zone', `row-${rowIdx}`);
  card.setAttribute('data-flx-focusable', '');
  card.setAttribute('data-flx-row', String(rowIdx));
  card.setAttribute('data-flx-col', String(cardIdx));
  card.setAttribute('data-href', data.href);

  // Lien
  const link = createElement('a', []);
  link.setAttribute('href', data.href);
  link.tabIndex = -1;
  link.setAttribute('aria-label', data.title);

  // Poster wrap
  const posterWrap = createElement('div', ['flx-card__poster-wrap']);

  const poster = createElement('img', ['flx-card__poster']);
  poster.setAttribute('src', normalizePosterUrl(data.poster || ''));
  poster.setAttribute('alt', data.title);
  poster.setAttribute('loading', 'lazy');
  posterWrap.appendChild(poster);

  // Badge episode (serie)
  if (data.episode) {
    const epBadge = createBadge('ep', `Ep ${data.episode}`);
    epBadge.style.cssText = 'position:absolute;top:6px;right:6px;';
    posterWrap.appendChild(epBadge);
  }

  // Badge EXCLU
  if (data.exclu) {
    const excluBadge = createBadge('exclu', 'EXCLU');
    excluBadge.style.cssText = 'position:absolute;top:6px;left:6px;';
    posterWrap.appendChild(excluBadge);
  }

  // Overlay info
  const overlay = createElement('div', ['flx-card__overlay']);

  const titleEl = createElement('span', ['flx-card__title']);
  titleEl.textContent = data.title;
  overlay.appendChild(titleEl);

  const badges = createElement('div', ['flx-card__badges']);
  if (data.lang) {
    const langBadge = parseLangBadge(data.lang);
    if (langBadge) badges.appendChild(createBadge(langBadge.type, langBadge.label));
  }
  if (data.quality) {
    const qBadge = parseQualityBadge(data.quality);
    if (qBadge) badges.appendChild(createBadge('hd', qBadge));
  }
  overlay.appendChild(badges);
  posterWrap.appendChild(overlay);

  link.appendChild(posterWrap);
  card.appendChild(link);

  // Navigation par click
  card.addEventListener('click', e => {
    e.preventDefault();
    navTransition(data.href);
  });

  return card;
}

/** Extrait les donnees d'un element .mov */
export function extractCardData(mov) {
  if (!mov) return null;

  // Href
  const linkEl = mov.querySelector('a.mov-t') || mov.querySelector('a[href]') || mov.querySelector('.mov-mask.ps-link');
  const href = linkEl ? (linkEl.getAttribute('href') || linkEl.getAttribute('data-link') || '') : '';

  // Titre
  const titleEl = mov.querySelector('a.mov-t');
  const title = titleEl ? getText(titleEl) : '';

  // Poster
  const imgEl = mov.querySelector('.mov-i img') || mov.querySelector('img');
  const poster = imgEl ? (imgEl.getAttribute('src') || imgEl.getAttribute('data-src') || '') : '';

  // Episode
  const epEl = mov.querySelector('.mov-m');
  const episode = epEl ? getText(epEl) : '';

  // EXCLU
  const excluEl = mov.querySelector('div[style*="EXCLU"]');
  const exclu = !!excluEl;

  // Langue
  const langEl = mov.querySelector('.nbloc1');
  const lang = langEl ? getText(langEl) : '';

  // Qualite
  const qualEl = mov.querySelector('.nbloc2');
  const quality = qualEl ? getText(qualEl) : '';

  // Synopsis (movie-text)
  const synopsisEl = mov.querySelector('.movie-text .movie-synopsis') ||
                     mov.querySelector('.movie-text ul.movie-lines li:last-child');
  const synopsis = synopsisEl ? getText(synopsisEl) : '';

  return { href, title, poster, episode, exclu, lang, quality, synopsis };
}

function extractHeroMeta(mov) {
  const textFromLines = (labelNeedle) => {
    const lines = mov.querySelectorAll('.movie-lines li');
    for (const line of lines) {
      const label = getText(line.querySelector('.ml-label')).toLowerCase();
      if (label.includes(labelNeedle)) {
        const desc = getText(line.querySelector('.ml-desc'));
        if (desc) return desc;
      }
    }
    return '';
  };

  const yearRaw = textFromLines('date de sortie');
  const year = (yearRaw.match(/\b(19|20)\d{2}\b/) || [])[0] || '';

  const genreRaw = textFromLines('genre');
  const genre = cleanTextToken(genreRaw);

  const ratingRaw =
    getText(mov.querySelector('.imdb')) ||
    getText(mov.querySelector('.rating')) ||
    getText(mov.querySelector('.rate_like-dislike'));
  const rating = (ratingRaw.match(/\b\d(?:[.,]\d)?\b/) || [])[0] || '';

  const lang = cleanTextToken(getText(mov.querySelector('.nbloc1')) || '');
  const quality = cleanTextToken(getText(mov.querySelector('.nbloc2')) || '');

  return {
    year,
    genre: genre && !genre.includes('[xfvalue') ? genre : '',
    rating,
    lang: [lang, quality].filter(Boolean).join(' • '),
  };
}

function cleanTextToken(input) {
  return (input || '').replace(/\s+/g, ' ').trim();
}

function normalizePosterUrl(url) {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('//')) return `${window.location.protocol}${url}`;
  if (url.startsWith('/')) return `${window.location.origin}${url}`;
  return url;
}

function normalizeUrlKey(url) {
  if (!url) return '';
  try {
    return new URL(url, window.location.origin).pathname.replace(/\/+$/, '');
  } catch {
    return String(url).replace(window.location.origin, '').replace(/\/+$/, '');
  }
}

function normalizeSectionName(titleText, idx) {
  const clean = cleanTextToken(titleText);
  if (!clean) {
    if (idx === 0) return 'Top 10 Today';
    if (idx === 1) return 'Trending Today';
    return `Section ${idx + 1}`;
  }
  if (/top\s*10/i.test(clean)) return 'Top 10 Today';
  if (/tendance|trending/i.test(clean)) return 'Trending Today';
  return clean;
}

function isTopTenSection(normalizedTitle, idx) {
  return /top\s*10/i.test(normalizedTitle) || idx === 0;
}

function isTrendingSection(normalizedTitle, idx) {
  return /trending|tendance/i.test(normalizedTitle) || idx === 1;
}

function decorateTopTenCard(card, cardIdx) {
  card.classList.add('flx-card--top10');
  const rank = createElement('span', ['flx-card__rank']);
  rank.textContent = String(cardIdx + 1);
  const posterWrap = card.querySelector('.flx-card__poster-wrap');
  if (!posterWrap) return;
  posterWrap.appendChild(rank);
}

/** Transforme .blocklastadded en row "Derniers ajouts" */
function transformLastAdded() {
  const bloc = document.querySelector('.blocklastadded');
  if (!bloc) return;

  // Index des posters disponibles sur la page pour enrichir "Derniers ajouts"
  const posterByHref = new Map();
  document.querySelectorAll('.block-main .mov').forEach(mov => {
    const data = extractCardData(mov);
    if (!data || !data.href) return;
    const hrefKey = normalizeUrlKey(data.href);
    if (data.poster && hrefKey && !posterByHref.has(hrefKey)) {
      posterByHref.set(hrefKey, normalizePosterUrl(data.poster));
    }
  });

  const items = [];

  // Dernieres series
  bloc.querySelectorAll('.lastserieadd li').forEach(li => {
    const a = li.querySelector('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const title = getText(a);
    const langEl = li.querySelector('.langue');
    const lang = langEl ? (langEl.className.includes('vf') ? 'VF' : 'VOSTFR') : '';
    items.push({
      href,
      title,
      lang,
      type: 'serie',
      poster: posterByHref.get(normalizeUrlKey(href)) || '',
    });
  });

  // Derniers films
  bloc.querySelectorAll('.lastfilmadd li').forEach(li => {
    const a = li.querySelector('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const title = getText(a);
    items.push({
      href,
      title,
      lang: '',
      type: 'film',
      poster: posterByHref.get(normalizeUrlKey(href)) || '',
    });
  });

  if (items.length === 0) return;

  const posterCount = items.filter(item => !!item.poster).length;
  // Sur la source officielle, ce bloc ne fournit pas d'images fiables.
  // On le masque si on n'a pas assez de posters pour eviter une rangee degradee.
  if (posterCount < 4) {
    bloc.style.display = 'none';
    return;
  }

  const row = createElement('div', ['flx-row', 'flx-row--latest']);
  row.setAttribute('data-flx-zone', 'row-latest');

  const rowHeader = createElement('div', ['flx-row__header']);
  const titleEl = createElement('span', ['flx-row__title']);
  titleEl.textContent = 'Derniers ajouts';
  rowHeader.appendChild(titleEl);
  row.appendChild(rowHeader);

  const track = createElement('div', ['flx-row__track']);
  track.setAttribute('data-flx-track', 'row-latest');

  items.forEach((item, i) => {
    const hasPoster = !!item.poster;
    const card = createElement('div', ['flx-card', ...(hasPoster ? [] : ['flx-card--text-only'])]);
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-flx-zone', 'row-latest');
    card.setAttribute('data-flx-focusable', '');
    card.setAttribute('data-flx-col', String(i));
    card.setAttribute('data-href', item.href);
    if (!hasPoster) {
      card.style.cssText = 'width:200px;height:60px;display:flex;align-items:center;padding:0 12px;background:var(--card-bg);border-radius:6px;';
    }

    const inner = createElement('a', hasPoster ? [] : []);
    inner.setAttribute('href', item.href);
    inner.tabIndex = -1;
    inner.style.cssText = hasPoster
      ? 'display:block;width:100%;height:100%;text-decoration:none;color:inherit;'
      : 'display:flex;align-items:center;gap:8px;width:100%;text-decoration:none;color:inherit;';

    if (hasPoster) {
      const posterWrap = createElement('div', ['flx-card__poster-wrap']);
      const img = createElement('img', ['flx-card__poster']);
      img.setAttribute('src', item.poster);
      img.setAttribute('alt', item.title);
      img.setAttribute('loading', 'lazy');
      posterWrap.appendChild(img);

      const overlay = createElement('div', ['flx-card__overlay']);
      const titleSpan = createElement('span', ['flx-card__title']);
      titleSpan.textContent = item.title;
      overlay.appendChild(titleSpan);

      if (item.lang) {
        const badges = createElement('div', ['flx-card__badges']);
        const langBadge = parseLangBadge(item.lang);
        if (langBadge) badges.appendChild(createBadge(langBadge.type, langBadge.label));
        overlay.appendChild(badges);
      }

      posterWrap.appendChild(overlay);
      inner.appendChild(posterWrap);
    } else {
      const titleSpan = createElement('span', []);
      titleSpan.style.cssText = 'font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-primary);font-family:Lexend,sans-serif;';
      titleSpan.textContent = item.title;
      inner.appendChild(titleSpan);
    }

    if (item.lang) {
      const langBadge = parseLangBadge(item.lang);
      if (langBadge && !hasPoster) inner.appendChild(createBadge(langBadge.type, langBadge.label));
    }

    card.appendChild(inner);
    card.addEventListener('click', e => {
      e.preventDefault();
      navTransition(item.href);
    });
    track.appendChild(card);
  });

  row.appendChild(track);

  // Inserer apres le hero (ou au debut du contenu)
  const content = document.querySelector('.content.insideblock');
  const hero = document.querySelector('.flx-hero');
  if (hero && hero.nextSibling) {
    hero.parentNode.insertBefore(row, hero.nextSibling);
  } else if (content) {
    content.insertBefore(row, content.firstChild);
  }

  // Cacher le bloc original
  bloc.style.display = 'none';
}

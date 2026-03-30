/**
 * detail-film.js - Transformation DOM page detail film
 */

import {
  createElement,
  getText,
  getMovListValue,
  extractVideoUrl,
  getServerLabel,
  parseLangBadge,
  createBadge,
  showToast,
} from '../utils.js';
import { buildRelatedRow } from './related.js';

/** Point d'entree */
export function transformFilm() {
  hideFilmUnwanted();
  buildDetailHero();
  buildPlayerSection();
  buildRelatedRow();
}

function hideFilmUnwanted() {
  [
    'aside.sidebar',
    '.adsb',
    '.full-taglist',
    '.full-soc',
    '.std-block-title2',
    '.sadst',
    '.full-comms',
    '.fav-info',
    '.screenshots-full',    // Masque la section screenshots/synopsis SEO
  ].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => (el.style.display = 'none'));
  });
}

/** Construit le hero de detail film */
function buildDetailHero() {
  const article = document.querySelector('article.full');
  if (!article) return;

  // Titre
  const titleEl = article.querySelector('h1[itemprop="name"]') || article.querySelector('header.full-title h1');
  const title = titleEl ? getText(titleEl) : document.title;

  // Poster
  const posterImg = article.querySelector('#posterimg') || article.querySelector('.mov-img img');
  const posterSrc = posterImg ? (posterImg.getAttribute('src') || '') : '';

  // Metadonnees
  const movList = article.querySelector('ul.mov-list');
  const synopsis =
    getMovListValue(movList, 'synopsis') ||
    getMovListValue(movList, 'description') ||
    (() => {
      const p = article.querySelector('.screenshots-full p[itemprop="description"]');
      return p ? getText(p) : '';
    })();
  const annee   = getMovListValue(movList, 'date') || getMovListValue(movList, 'ann');
  const duree   = getMovListValue(movList, 'dur');
  const version = getMovListValue(movList, 'version');
  const genres  = getMovListValue(movList, 'genre');

  const hero = createElement('div', ['flx-detail-hero']);

  const backdrop = createElement('div', ['flx-detail-hero__backdrop']);
  if (posterSrc) backdrop.style.backgroundImage = `url("${posterSrc}")`;
  hero.appendChild(backdrop);
  hero.appendChild(createElement('div', ['flx-detail-hero__gradient']));

  const content = createElement('div', ['flx-detail-hero__content']);

  // Poster
  const posterWrap = createElement('div', ['flx-detail-hero__poster']);
  if (posterSrc) {
    const img = createElement('img', []);
    img.setAttribute('src', posterSrc);
    img.setAttribute('alt', title);
    posterWrap.appendChild(img);
  }
  content.appendChild(posterWrap);

  // Info
  const info = createElement('div', ['flx-detail-hero__info']);

  const titleEl2 = createElement('h1', ['flx-detail-hero__title']);
  titleEl2.textContent = title;
  info.appendChild(titleEl2);

  const meta = createElement('div', ['flx-detail-hero__meta']);
  if (annee) {
    const y = createElement('span', ['flx-detail-hero__meta-item']);
    y.textContent = annee;
    meta.appendChild(y);
  }
  if (duree) {
    const d = createElement('span', ['flx-detail-hero__meta-item']);
    d.textContent = duree;
    meta.appendChild(d);
  }
  if (version) {
    const langBadge = parseLangBadge(version);
    if (langBadge) meta.appendChild(createBadge(langBadge.type, langBadge.label));
  }
  if (genres) {
    const g = createElement('span', ['flx-detail-hero__meta-item']);
    g.style.color = 'var(--text-muted)';
    g.textContent = genres;
    meta.appendChild(g);
  }
  info.appendChild(meta);

  if (synopsis) {
    const synEl = createElement('p', ['flx-detail-hero__synopsis']);
    synEl.textContent = synopsis;
    info.appendChild(synEl);
  }

  content.appendChild(info);
  hero.appendChild(content);

  const detail = createElement('div', ['flx-detail']);
  detail.appendChild(hero);

  // Masquer layout original
  const colsMov = article.querySelector('.cols-mov');
  if (colsMov) colsMov.style.display = 'none';
  const fullTitle = article.querySelector('header.full-title');
  if (fullTitle) fullTitle.style.display = 'none';

  article.insertBefore(detail, article.firstChild);
}

/** Construit la section player pour un film */
function buildPlayerSection() {
  const article = document.querySelector('article.full');
  if (!article) return;

  const tabsbox = article.querySelector('.tabsbox');
  if (!tabsbox) return;

  // Parser les lecteurs depuis .tabs-sel.linkstab
  const serverData = parseFilmServers(article);
  if (serverData.vf.length === 0 && serverData.vostfr.length === 0) return;

  const section = createElement('div', ['flx-player-section']);
  section.setAttribute('data-flx-zone', 'player-section');

  const langs = [];
  if (serverData.vf.length)     langs.push({ key: 'vf',     label: 'VF',     servers: serverData.vf });
  if (serverData.vostfr.length) langs.push({ key: 'vostfr', label: 'VOSTFR', servers: serverData.vostfr });

  let activeLang   = langs[0].key;
  let activeServer = 0;

  // Tabs langue (seulement si les deux existent)
  if (langs.length > 1) {
    const tabsEl = createElement('div', ['flx-tabs']);
    tabsEl.setAttribute('data-flx-zone', 'lang-tabs');

    const tabEls = {};
    langs.forEach(l => {
      const tab = createElement('button', ['flx-tab']);
      tab.textContent = l.label;
      tab.setAttribute('tabindex', '0');
      tab.setAttribute('data-lang', l.key);
      tab.setAttribute('data-flx-zone', 'lang-tabs');
      tab.setAttribute('data-flx-focusable', '');
      if (l.key === activeLang) tab.classList.add('flx-tab--active');
      tab.addEventListener('click', () => {
        activeLang = l.key;
        activeServer = 0;
        Object.values(tabEls).forEach(t => t.classList.remove('flx-tab--active'));
        tab.classList.add('flx-tab--active');
        renderServers();
      });
      tabsEl.appendChild(tab);
      tabEls[l.key] = tab;
    });
    section.appendChild(tabsEl);
  }

  // Lecteurs
  const serversEl = createElement('div', ['flx-servers']);
  serversEl.setAttribute('data-flx-zone', 'servers');
  section.appendChild(serversEl);

  // Player
  const playerWrap = createElement('div', ['flx-player-wrap']);
  const skeleton = createElement('div', ['flx-player-skeleton']);
  skeleton.innerHTML = '<div class="flx-player-loading"><div class="flx-player-loading__spinner"></div><p class="flx-player-loading__text">Chargement...</p></div>';
  playerWrap.appendChild(skeleton);

  // Iframe film : ID = x_player_wfx (fallback x_player)
  const existingIframe =
    tabsbox.querySelector('iframe#x_player_wfx') ||
    tabsbox.querySelector('iframe#x_player') ||
    tabsbox.querySelector('iframe');

  if (existingIframe) {
    existingIframe.setAttribute('allowfullscreen', '');
    existingIframe.setAttribute('allow', 'autoplay; fullscreen');
    playerWrap.appendChild(existingIframe);
    existingIframe.addEventListener('load', () => skeleton.classList.add('flx-hidden'));
  }
  section.appendChild(playerWrap);

  const relatedEl = article.querySelector('.related');
  if (relatedEl) {
    article.insertBefore(section, relatedEl);
  } else {
    article.appendChild(section);
  }

  tabsbox.style.display = 'none';

  function renderServers() {
    serversEl.innerHTML = '';
    const lang = langs.find(l => l.key === activeLang);
    if (!lang) return;

    lang.servers.forEach((srv, i) => {
      const btn = createElement('button', ['flx-server']);
      btn.textContent = srv.label;
      btn.setAttribute('tabindex', '0');
      btn.setAttribute('data-flx-zone', 'servers');
      btn.setAttribute('data-flx-focusable', '');
      if (i === activeServer) btn.classList.add('flx-server--active');
      btn.addEventListener('click', () => {
        activeServer = i;
        serversEl.querySelectorAll('.flx-server').forEach((b, j) => {
          b.classList.toggle('flx-server--active', j === i);
        });
        loadVideo(srv.url);
      });
      serversEl.appendChild(btn);
    });

    // Auto-charger le premier lecteur
    if (lang.servers[0]) loadVideo(lang.servers[0].url);
  }

  function loadVideo(url) {
    const iframe = playerWrap.querySelector('iframe');
    if (!iframe) return;
    skeleton.classList.remove('flx-hidden');
    iframe.src = url;

    const timer = setTimeout(() => {
      skeleton.classList.add('flx-hidden');
      showToast('Chargement lent. Essayez un autre lecteur.');
    }, 15000);

    iframe.onload = () => {
      clearTimeout(timer);
      skeleton.classList.add('flx-hidden');
    };
  }

  renderServers();
}

/** Parse les lecteurs d'un film depuis .tabs-sel.linkstab */
function parseFilmServers(article) {
  const result = { vf: [], vostfr: [] };

  const linkstab = article.querySelector('.tabs-sel.linkstab');
  if (!linkstab) return result;

  // Liens principaux (VF) et sous-groupe VOSTFR
  // Structure : a[onclick] (VF) et div > a[onclick] (VOSTFR)
  linkstab.querySelectorAll(':scope > a[onclick]').forEach((a, i) => {
    const url = extractVideoUrl(a);
    if (!url) return;
    const label = getText(a.querySelector('span.clichost') || a) || getServerLabel(url);
    result.vf.push({ label, url });
  });

  // Sous-groupe VOSTFR (les div qui contiennent des a avec "vostfr" / "vost")
  linkstab.querySelectorAll(':scope > div').forEach(div => {
    div.querySelectorAll('a[onclick]').forEach(a => {
      const url = extractVideoUrl(a);
      if (!url) return;
      const label = getText(a.querySelector('span.clichost') || a) || getServerLabel(url);
      result.vostfr.push({ label, url });
    });
  });

  // Si on n'a pas detecte de separation, tout est en VF par defaut
  if (result.vf.length === 0 && result.vostfr.length === 0) {
    linkstab.querySelectorAll('a[onclick]').forEach((a, i) => {
      const url = extractVideoUrl(a);
      if (!url) return;
      const label = getServerLabel(url) || `Lecteur ${i + 1}`;
      result.vf.push({ label, url });
    });
  }

  return result;
}

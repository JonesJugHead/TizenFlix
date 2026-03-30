/**
 * related.js - Section "A voir egalement" (recommandations)
 */

import { createElement, getText, parseLangBadge, parseQualityBadge, createBadge } from '../utils.js';
import { navigateWithTransition } from './common.js';

/** Transforme la section .related .relatedcarrou en row Netflix */
export function buildRelatedRow() {
  const relatedSection = document.querySelector('.related');
  if (!relatedSection) return;

  // Titre de la section
  const relTitle = relatedSection.querySelector('.rel-title');
  const titleText = relTitle ? getText(relTitle) : 'À voir également';

  // Chercher les items du carousel
  const items = relatedSection.querySelectorAll('.owl-carousel .item, .relatedcarrou .item, .caroustyle .item');
  if (items.length === 0) return;

  const row = createElement('div', ['flx-row', 'flx-row--related']);
  row.setAttribute('data-flx-zone', 'row-related');

  const rowHeader = createElement('div', ['flx-row__header']);
  const titleEl = createElement('span', ['flx-row__title']);
  titleEl.textContent = titleText;
  rowHeader.appendChild(titleEl);
  row.appendChild(rowHeader);

  const track = createElement('div', ['flx-row__track']);
  track.setAttribute('data-flx-track', 'row-related');

  items.forEach((item, i) => {
    const a = item.querySelector('a');
    if (!a) return;
    const href = a.getAttribute('href') || '#';

    const img = item.querySelector('img');
    const poster = img ? (img.getAttribute('src') || img.getAttribute('data-src') || '') : '';

    const title1 = item.querySelector('.title1') || item.querySelector('.mov-t');
    const title = title1 ? getText(title1) : (img ? img.getAttribute('alt') || '' : '');

    const card = createElement('div', ['flx-card']);
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-flx-zone', 'row-related');
    card.setAttribute('data-flx-focusable', '');
    card.setAttribute('data-flx-col', String(i));
    card.setAttribute('data-href', href);

    const link = createElement('a', []);
    link.setAttribute('href', href);
    link.tabIndex = -1;
    link.setAttribute('aria-label', title);

    const posterWrap = createElement('div', ['flx-card__poster-wrap']);

    if (poster) {
      const posterImg = createElement('img', ['flx-card__poster']);
      posterImg.setAttribute('src', poster);
      posterImg.setAttribute('alt', title);
      posterImg.setAttribute('loading', 'lazy');
      posterWrap.appendChild(posterImg);
    }

    const overlay = createElement('div', ['flx-card__overlay']);
    const titleEl2 = createElement('span', ['flx-card__title']);
    titleEl2.textContent = title;
    overlay.appendChild(titleEl2);
    posterWrap.appendChild(overlay);

    link.appendChild(posterWrap);
    card.appendChild(link);

    card.addEventListener('click', e => {
      e.preventDefault();
      navigateWithTransition(href);
    });

    track.appendChild(card);
  });

  row.appendChild(track);

  // Remplacer la section related
  relatedSection.parentNode.replaceChild(row, relatedSection);
}

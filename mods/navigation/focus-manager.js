/**
 * focus-manager.js - Gestion du focus et des zones de navigation
 */

import { scrollIntoFocus } from '../utils.js';

/**
 * Gestionnaire central du focus.
 * Maintient une liste de zones ordonnees et la position du focus dans chaque zone.
 */
export class FocusManager {
  constructor() {
    /** Ordre des zones (du haut vers le bas) */
    this.zones = [];

    /** Zone active courante */
    this.activeZone = null;

    /** Element actuellement focus */
    this.focused = null;

    /** Memoire de position par zone : { zoneName: lastFocusedEl } */
    this.memory = {};
  }

  /** Enregistre les zones de navigation dans l'ordre DOM */
  buildZones() {
    this.zones = [];

    // Zones dans l'ordre du DOM
    const zoneSelectors = [
      { id: 'header',       selector: '[data-flx-zone="header"]' },
      { id: 'hero',         selector: '[data-flx-zone="hero"]' },
      { id: 'lang-tabs',    selector: '[data-flx-zone="lang-tabs"]' },
      { id: 'episodes',     selector: '[data-flx-zone="episodes"]' },
      { id: 'servers',      selector: '[data-flx-zone="servers"]' },
      { id: 'player-section', selector: '.flx-player-wrap' },
    ];

    // Rows dynamiques
    document.querySelectorAll('[data-flx-zone^="row-"]').forEach(el => {
      const zone = el.getAttribute('data-flx-zone');
      if (!zoneSelectors.find(z => z.id === zone)) {
        zoneSelectors.push({ id: zone, selector: `[data-flx-zone="${zone}"]` });
      }
    });

    zoneSelectors.forEach(({ id, selector }) => {
      const elements = Array.from(document.querySelectorAll(`${selector} [data-flx-focusable]`));
      if (elements.length === 0) {
        // La zone elle-meme est peut-etre focusable
        const zoneEl = document.querySelector(selector);
        if (zoneEl && zoneEl.hasAttribute('data-flx-focusable')) {
          this.zones.push({ id, elements: [zoneEl] });
        }
        return;
      }
      this.zones.push({ id, elements });
    });

    return this;
  }

  /** Retourne les elements focusables de la zone active */
  get activeElements() {
    const zone = this.zones.find(z => z.id === this.activeZone);
    return zone ? zone.elements : [];
  }

  /** Indice de la zone active dans this.zones */
  get activeZoneIndex() {
    return this.zones.findIndex(z => z.id === this.activeZone);
  }

  /** Donne le focus a un element specifique */
  focusElement(el) {
    if (!el) return;

    // Retirer la classe du precedent element
    if (this.focused && this.focused !== el) {
      this.focused.classList.remove('flx-focused');
      this.focused.blur();
    }

    this.focused = el;
    el.classList.add('flx-focused');

    // Mettre le focus natif si possible
    try {
      el.focus({ preventScroll: true });
    } catch (_) {}

    // Scroll pour rendre visible
    scrollIntoFocus(el);

    // Memoriser la position dans la zone
    const zone = el.getAttribute('data-flx-zone');
    if (zone) {
      this.activeZone = zone;
      this.memory[zone] = el;
    }
  }

  /** Focus initial : premier element de la premiere zone */
  focusFirst() {
    this.buildZones();
    if (this.zones.length === 0) return;
    const firstZone = this.zones[0];
    if (firstZone.elements.length > 0) {
      this.focusElement(firstZone.elements[0]);
    }
  }

  /**
   * Navigation dans la zone courante (gauche/droite)
   * @param {number} dir - -1 (gauche) ou +1 (droite)
   */
  moveHorizontal(dir) {
    const elements = this.activeElements;
    if (elements.length === 0) return false;

    const currentIdx = elements.indexOf(this.focused);
    const nextIdx = currentIdx + dir;

    if (nextIdx >= 0 && nextIdx < elements.length) {
      this.focusElement(elements[nextIdx]);
      return true;
    }
    return false; // Bord atteint
  }

  /**
   * Navigation entre zones (haut/bas)
   * @param {number} dir - -1 (haut) ou +1 (bas)
   */
  moveVertical(dir) {
    this.buildZones(); // Re-scanner pour les zones dynamiques
    const currentIdx = this.activeZoneIndex;

    if (currentIdx === -1) {
      this.focusFirst();
      return;
    }

    const nextIdx = currentIdx + dir;
    if (nextIdx < 0 || nextIdx >= this.zones.length) return;

    const nextZone = this.zones[nextIdx];
    if (!nextZone || nextZone.elements.length === 0) {
      // Sauter les zones vides
      this.activeZone = nextZone.id;
      this.moveVertical(dir);
      return;
    }

    // Retrouver la position memorisee ou prendre le premier
    const remembered = this.memory[nextZone.id];
    const target = (remembered && nextZone.elements.includes(remembered))
      ? remembered
      : nextZone.elements[0];

    this.focusElement(target);
  }

  /** Retourne l'element actuellement focus */
  getFocused() {
    return this.focused;
  }

  /** Remet a jour les zones (apres modifications DOM) */
  refresh() {
    this.buildZones();
    // Si le focus est perdu, remettre sur l'element memorise
    if (this.focused && !document.contains(this.focused)) {
      this.focused.classList.remove('flx-focused');
      this.focused = null;
      const mem = this.memory[this.activeZone];
      if (mem && document.contains(mem)) {
        this.focusElement(mem);
      }
    }
  }
}

/** Instance singleton */
export const focusManager = new FocusManager();

/**
 * userScript.js - Entry point FlemmixTV TizenBrew Module
 *
 * Injecte le theme Netflix-like sur flemmix.golf pour Samsung TV.
 */

// --- CSS (importes comme strings via rollup-plugin-string) ---
import resetCSS from "./theme/reset.css";
import netflixCSS from "./theme/netflix.css";
import animationsCSS from "./theme/animations.css";
import tvFocusCSS from "./theme/tv-focus.css";

// --- Utils ---
import { detectPageType, injectCSS } from "./utils.js";

// --- DOM ---
import {
  transformHeader,
  transformFooter,
  hideUnwantedElements,
  initAppWrapper,
  initToastContainer,
  initPageTransition,
} from "./dom/common.js";
import { transformHome } from "./dom/home.js";
import { transformSerie } from "./dom/detail-serie.js";
import { transformFilm } from "./dom/detail-film.js";
import { initDesktopPointer } from "./dom/pointer.js";

// --- Navigation ---
import { initSpatialNav } from "./navigation/spatial-nav.js";

// --- Player ---
import {
  patchLoadVideo,
  makePlayerResponsive,
} from "./player/player-enhance.js";
import { initPlayerControls } from "./player/controls.js";

// --- Performance ---
import {
  disableOriginalAnimations,
  destroyOwlCarousels,
  enableHardwareAcceleration,
  removeAdScripts,
  optimizeScrollPerformance,
} from "./perf/performance.js";
import {
  enableNativeLazyLoad,
  initLazyObserver,
  watchNewRows,
} from "./perf/lazy-load.js";

/** Point d'entree principal */
function main() {
  // 1. Injecter les CSS
  injectCSS(resetCSS);
  injectCSS(netflixCSS);
  injectCSS(animationsCSS);
  injectCSS(tvFocusCSS);

  // 2. Performance: supprimer les pubs, desactiver animations originales
  removeAdScripts();
  disableOriginalAnimations();
  enableHardwareAcceleration();
  optimizeScrollPerformance();

  // 3. Elements communs
  initAppWrapper();
  initToastContainer();
  initPageTransition();
  hideUnwantedElements();
  transformHeader();
  transformFooter();
  initDesktopPointer();

  // 4. Player patches (disponibles avant la transformation DOM)
  patchLoadVideo();

  // 5. Transformation par type de page
  const pageType = detectPageType();

  switch (pageType) {
    case "home":
      transformHome();
      break;

    case "serie":
      transformSerie();
      makePlayerResponsive();
      break;

    case "film":
      transformFilm();
      makePlayerResponsive();
      break;

    case "category":
      transformCategoryPage();
      break;

    case "search":
      transformSearchPage();
      break;

    default:
      // Appliquer au moins le style de base
      break;
  }

  // 6. Navigation TV (apres les transformations DOM)
  requestAnimationFrame(() => {
    initSpatialNav();
    initPlayerControls();
  });

  // 7. Lazy loading
  const lazyObserver = initLazyObserver();
  enableNativeLazyLoad();
  watchNewRows(lazyObserver);

  // 8. Detruire owl.carousel (apres init)
  destroyOwlCarousels();

  // 9. Transition d'entree
  requestAnimationFrame(() => {
    document.body.classList.add("flx-page-enter");
  });
}

/**
 * Transformation basique pour les pages de categorie.
 * Convertit la grille .mov en rows Netflix.
 */
function transformCategoryPage() {
  // Masquer la sidebar
  const sidebar = document.querySelector("aside.sidebar");
  if (sidebar) sidebar.style.display = "none";

  // Contenu full-width
  const content = document.querySelector(".content.insideblock");
  if (content) {
    content.style.cssText =
      "float:none!important;width:100%!important;margin:0!important;padding:0!important;";
  }

  // Transformer chaque .block-main
  document.querySelectorAll(".block-main").forEach((block, idx) => {
    transformBlockForCategory(block, idx);
  });

  // Transformer les .mov orphelins (hors .block-main)
  const orphanMovs = document.querySelectorAll(
    ".content.insideblock > .mov, .content.insideblock > .clearfix > .mov",
  );
  if (orphanMovs.length > 0) {
    wrapOrphanMovs(orphanMovs);
  }
}

/**
 * Transformation de la page recherche:
 * - habillage du formulaire
 * - conversion des resultats en row horizontale
 */
function transformSearchPage() {
  document.body.classList.add("flx-search-page");

  const content = document.querySelector(".content.insideblock");
  if (content) {
    content.style.cssText =
      "float:none!important;width:100%!important;margin:0!important;padding:0!important;";
  }

  const page = document.querySelector(".search-page");
  if (!page) {
    transformCategoryPage();
    return;
  }

  const applySearchUi = () => {
    const innerPage = document.querySelector(".search-page");
    if (!innerPage) return;

    const fullsearch = innerPage.querySelector("#fullsearch");
    if (fullsearch) {
      fullsearch.classList.add("flx-search-form");
      fullsearch.setAttribute("data-flx-zone", "row-search-form");

      const input = fullsearch.querySelector("#searchinput, input[name='story']");
      if (input) {
        const val = (input.value || "").trim().toLowerCase();
        if (val === "search") input.value = "";
        input.setAttribute("placeholder", "Rechercher...");
        input.setAttribute("tabindex", "0");
        input.setAttribute("data-flx-focusable", "");
      }

      fullsearch
        .querySelectorAll("input[type='button'], input[type='submit'], button")
        .forEach((btn) => {
          btn.setAttribute("tabindex", "0");
          btn.setAttribute("data-flx-focusable", "");
        });
    }

    innerPage.querySelectorAll(".berrors, .sub-title").forEach((el) => {
      el.classList.add("flx-search-info");
    });

    const searchMovs = innerPage.querySelectorAll(".mov");
    if (searchMovs.length > 0) {
      wrapSearchResults(searchMovs);
    } else {
      transformCategoryPage();
    }
  };

  applySearchUi();

  if (!window.__flxSearchObserver) {
    const host = document.querySelector("#dle-content") || page;
    const observer = new MutationObserver(() => {
      const row = document.querySelector(".flx-row--search-results");
      if (row) row.remove();
      document.querySelectorAll(".search-page .mov").forEach((mov) => {
        mov.style.display = "";
      });
      applySearchUi();
    });
    observer.observe(host, { childList: true, subtree: true });
    window.__flxSearchObserver = observer;
  }
}

function wrapSearchResults(movs) {
  if (!movs || movs.length === 0) return;

  const first = movs[0];
  const container =
    first.closest(".search-page") ||
    first.parentNode;
  if (!container) return;

  const existing = container.querySelector(".flx-row--search-results");
  if (existing) return;

  const row = document.createElement("div");
  row.className = "flx-row flx-row--search-results";
  row.setAttribute("data-flx-zone", "row-search-results");

  const rowHeader = document.createElement("div");
  rowHeader.className = "flx-row__header";
  const titleEl = document.createElement("span");
  titleEl.className = "flx-row__title";
  titleEl.textContent = "Resultats";
  rowHeader.appendChild(titleEl);
  row.appendChild(rowHeader);

  const track = document.createElement("div");
  track.className = "flx-row__track";
  track.setAttribute("data-flx-track", "row-search-results");

  movs.forEach((mov, i) => {
    const card = buildMinimalCard(mov, 0, i);
    if (card) track.appendChild(card);
    mov.style.display = "none";
  });

  row.appendChild(track);
  container.appendChild(row);
}

function transformBlockForCategory(block, idx) {
  // Note: Utilise du DOM vanilla pour eviter les imports circulaires
  const blockTitle = block.querySelector(".block-title");
  let titleText = "";
  let seeAllHref = "";

  if (blockTitle) {
    const leftMa = blockTitle.querySelector(".left-ma");
    titleText = leftMa
      ? (leftMa.textContent || "").trim()
      : (blockTitle.textContent || "").trim();
    const rightMa = blockTitle.querySelector(".right-ma a");
    if (rightMa) seeAllHref = rightMa.getAttribute("href") || "";
    blockTitle.style.display = "none";
  }

  const row = document.createElement("div");
  row.className = "flx-row";
  row.setAttribute("data-flx-zone", `row-${idx}`);

  const rowHeader = document.createElement("div");
  rowHeader.className = "flx-row__header";

  const titleEl = document.createElement("span");
  titleEl.className = "flx-row__title";
  titleEl.textContent = titleText || `Section ${idx + 1}`;
  rowHeader.appendChild(titleEl);

  if (seeAllHref) {
    const seeAll = document.createElement("a");
    seeAll.className = "flx-row__see-all";
    seeAll.textContent = "Voir tout ›";
    seeAll.setAttribute("href", seeAllHref);
    seeAll.setAttribute("tabindex", "0");
    seeAll.setAttribute("data-flx-zone", `row-${idx}`);
    seeAll.setAttribute("data-flx-focusable", "");
    rowHeader.appendChild(seeAll);
  }
  row.appendChild(rowHeader);

  const track = document.createElement("div");
  track.className = "flx-row__track";
  track.setAttribute("data-flx-track", `row-${idx}`);

  block.querySelectorAll(".mov").forEach((mov, cardIdx) => {
    const card = buildMinimalCard(mov, idx, cardIdx);
    if (card) track.appendChild(card);
  });

  row.appendChild(track);
  block.innerHTML = "";
  block.appendChild(row);
}

function wrapOrphanMovs(movs) {
  if (movs.length === 0) return;
  const container = movs[0].parentNode;

  const row = document.createElement("div");
  row.className = "flx-row";
  row.setAttribute("data-flx-zone", "row-main");

  const track = document.createElement("div");
  track.className = "flx-row__track";

  movs.forEach((mov, i) => {
    const card = buildMinimalCard(mov, 0, i);
    if (card) track.appendChild(card);
    mov.style.display = "none";
  });

  row.appendChild(track);
  container.insertBefore(row, movs[0]);
}

/** Construit une card minimale sans les imports ES modules */
function buildMinimalCard(mov, rowIdx, cardIdx) {
  const linkEl = mov.querySelector("a.mov-t") || mov.querySelector("a[href]");
  const href = linkEl ? linkEl.getAttribute("href") || "" : "";
  if (!href) return null;

  const titleEl = mov.querySelector("a.mov-t");
  const title = titleEl ? (titleEl.textContent || "").trim() : "";

  const imgEl = mov.querySelector(".mov-i img") || mov.querySelector("img");
  const poster = imgEl
    ? imgEl.getAttribute("src") || imgEl.getAttribute("data-src") || ""
    : "";

  const card = document.createElement("div");
  card.className = "flx-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("data-flx-zone", `row-${rowIdx}`);
  card.setAttribute("data-flx-focusable", "");
  card.setAttribute("data-flx-row", String(rowIdx));
  card.setAttribute("data-flx-col", String(cardIdx));
  card.setAttribute("data-href", href);

  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.tabIndex = -1;

  const posterWrap = document.createElement("div");
  posterWrap.className = "flx-card__poster-wrap";

  if (poster) {
    const img = document.createElement("img");
    img.className = "flx-card__poster";
    img.setAttribute("src", poster);
    img.setAttribute("alt", title);
    img.setAttribute("loading", "lazy");
    posterWrap.appendChild(img);
  }

  const overlay = document.createElement("div");
  overlay.className = "flx-card__overlay";
  const titleSpan = document.createElement("span");
  titleSpan.className = "flx-card__title";
  titleSpan.textContent = title;
  overlay.appendChild(titleSpan);
  posterWrap.appendChild(overlay);

  link.appendChild(posterWrap);
  card.appendChild(link);

  card.addEventListener("click", (e) => {
    e.preventDefault();
    const overlay2 = document.querySelector(".flx-page-transition");
    if (overlay2) {
      overlay2.classList.add("flx-active");
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    } else {
      window.location.href = href;
    }
  });

  return card;
}

// --- Lancement ---
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}

/**
 * common.js - Elements communs a toutes les pages (header, footer)
 */

import { createElement, addClass, debounce } from "../utils.js";

/** Transforme le header original en header Netflix fixe */
export function transformHeader() {
  const header = document.querySelector("header.header");
  if (!header) return;

  addClass(header, "flx-header");

  // Restyle logo
  const logo = header.querySelector("a.logotype");
  if (logo) {
    addClass(logo, "flx-logo");
    logo.removeAttribute("tabindex");
    logo.removeAttribute("data-flx-zone");
    logo.removeAttribute("data-flx-focusable");
    logo.style.display = "none";
  }

  // Restyle search box
  const search = header.querySelector(".search-box");
  if (search) {
    addClass(search, "flx-search");
    const input = search.querySelector("input");
    if (input) {
      const currentValue = (input.value || "").trim().toLowerCase();
      if (currentValue === "search") {
        input.value = "";
      }
      input.setAttribute("placeholder", "Rechercher un film ou une serie");
      input.setAttribute("autocomplete", "off");
      input.setAttribute("tabindex", "0");
      input.setAttribute("data-flx-zone", "header");
      input.setAttribute("data-flx-focusable", "");
    }
  }

  // Restyle login button
  const loginBtn = header.querySelector(".show-login");
  if (loginBtn) {
    // Cache complet du bouton login pour un header plus clean
    loginBtn.style.display = "none";
  }

  // Masquer newmenu
  const newmenu = header.querySelector(".newmenu");
  if (newmenu) newmenu.style.display = "none";

  // Scroll handler: fond opaque apres 100px
  const onScroll = debounce(() => {
    if (window.scrollY > 100) {
      header.classList.add("flx-header--scrolled");
    } else {
      header.classList.remove("flx-header--scrolled");
    }
  }, 16);

  window.addEventListener("scroll", onScroll, { passive: true });
  // Appel initial
  onScroll();
}

/** Transforme le footer */
export function transformFooter() {
  const footer = document.querySelector("footer.footer");
  if (!footer) return;

  addClass(footer, "flx-footer");
  // Suppression du texte marketing en bas
  footer.innerHTML = "";
  footer.style.display = "none";
}

/** Masque les elements non voulus sur toutes les pages */
export function hideUnwantedElements() {
  const selectors = [
    "div.marquee",
    ".adsb",
    ".fav-info",
    ".newmenu",
    "aside.sidebar",
    ".login-box",
  ];

  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.style.display = "none";
    });
  });
}

/** Ajoute la classe .flx-app sur .wrap */
export function initAppWrapper() {
  const wrap =
    document.querySelector(".wrap") ||
    document.querySelector(".main.center") ||
    document.body;
  addClass(wrap, "flx-app");
}

/** Cree et insere le toast container */
export function initToastContainer() {
  if (!document.querySelector(".flx-toast-container")) {
    const container = createElement("div", ["flx-toast-container"]);
    document.body.appendChild(container);
  }
}

/** Ajoute l'overlay de transition de page */
export function initPageTransition() {
  if (!document.querySelector(".flx-page-transition")) {
    const overlay = createElement("div", ["flx-page-transition"]);
    document.body.appendChild(overlay);
  }
}

/** Navigue vers une URL avec transition fondu */
export function navigateWithTransition(url) {
  const overlay = document.querySelector(".flx-page-transition");
  if (!overlay) {
    window.location.href = url;
    return;
  }
  overlay.classList.add("flx-active");
  setTimeout(() => {
    window.location.href = url;
  }, 300);
}

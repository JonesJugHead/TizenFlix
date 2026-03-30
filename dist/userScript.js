(function () {
  'use strict';

  var resetCSS = "/* ============================================================\n   RESET - Neutralise le theme flemmixnew original\n   ============================================================ */\n\n/* Import Google Fonts */\n@import url(\"https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap\");\n\n/* Base reset */\n* {\n  box-sizing: border-box;\n}\n\n/* Masquage d'elements non voulus */\ndiv.marquee,\n.adsb,\n.fav-info,\n.newmenu,\n.sidebar,\naside.sidebar,\n.bot-menu,\n.bot-text + *,\n.login-box,\n.full-taglist,\n.full-soc,\n.std-block-title2,\n.sadst,\n.full-comms,\n.rel-title + br,\n.related.newcarusel > h1.rel-title {\n  display: none !important;\n}\n\n/* Suppression du layout 2 colonnes original */\n.cols.clearfix#cols {\n  display: block !important;\n  width: 100% !important;\n}\n\n.content.insideblock {\n  float: none !important;\n  width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  max-width: 100% !important;\n}\n\n/* Reset header original */\nheader.header {\n  background: transparent !important;\n  border: none !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/* Reset body */\nbody {\n  background: #0a0a0a !important;\n  color: #ffffff !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow-x: hidden !important;\n}\n\n/* Reset .wrap */\n.wrap,\n.main.center {\n  background: transparent !important;\n  max-width: 100% !important;\n  width: 100% !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/* Reset owl carousel */\n.owl-carousel .owl-nav,\n.owl-carousel .owl-dots {\n  display: none !important;\n}\n\n/* Reset carousel container */\n.related.newcarusel {\n  background: transparent !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/* Reset sidebar blocks */\n.side-b,\n.side-t,\n.side-c {\n  display: none !important;\n}\n\n/* Reset footer */\nfooter.footer {\n  background: transparent !important;\n  border: none !important;\n}\n\n/* Reset card original styles */\n.mov {\n  float: none !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  width: auto !important;\n  height: auto !important;\n  background: transparent !important;\n}\n\n.mov-mask,\n.movie-text {\n  display: none !important;\n}\n\n.mov-i.img-box {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* Reset block-main */\n.block-main {\n  clear: none !important;\n  overflow: visible !important;\n  background: transparent !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/* Reset article.full */\narticle.full {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/* Suppression du cursor par defaut */\na,\nbutton,\n[role=\"button\"] {\n}\n\n/* Reset scrollbar */\n::-webkit-scrollbar {\n  display: none;\n}\n\n* {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n";

  var netflixCSS = "/* ============================================================\n   NETFLIX THEME - Design principal FlemmixTV\n   ============================================================ */\n\n/* Variables */\n:root {\n  --bg-primary: #0a0a0a;\n  --bg-secondary: #141414;\n  --bg-tertiary: #1a1a1a;\n  --bg-overlay: rgba(0, 0, 0, 0.6);\n  --text-primary: #ffffff;\n  --text-secondary: #b3b3b3;\n  --text-muted: #808080;\n  --accent: #e50914;\n  --accent-hover: #f40612;\n  --focus-ring: #ffffff;\n  --focus-glow: rgba(255, 255, 255, 0.4);\n  --card-bg: #181818;\n  --badge-vf: #46d369;\n  --badge-vostfr: #ffa500;\n  --badge-exclu: #e50914;\n  --skeleton-base: #1a1a1a;\n  --skeleton-shine: #2a2a2a;\n  --row-padding: 4%;\n  --card-width: 160px;\n  --card-height: 240px;\n  --card-gap: 8px;\n  --header-height: 60px;\n  --border-radius: 6px;\n  --top10-number: #d12f2f;\n}\n\n/* ============================================================\n   GLOBAL APP WRAPPER\n   ============================================================ */\n\n.flx-app {\n  font-family: \"Lexend\", sans-serif;\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 100vh;\n}\n\n/* ============================================================\n   HEADER\n   ============================================================ */\n\n.flx-header {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  right: 0 !important;\n  height: var(--header-height) !important;\n  z-index: 1000 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-end !important;\n  padding: 0 var(--row-padding) !important;\n  background: transparent !important;\n  transition: background 0.3s ease !important;\n  gap: 18px !important;\n}\n\n.flx-header.flx-header--scrolled {\n  background: var(--bg-primary) !important;\n}\n\n.flx-logo {\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 28px !important;\n  font-weight: 800 !important;\n  color: var(--accent) !important;\n  text-decoration: none !important;\n  letter-spacing: -1px !important;\n  flex-shrink: 0 !important;\n  display: none !important;\n}\n\n.flx-search {\n  flex: 0 1 420px !important;\n  width: min(420px, 52vw) !important;\n  max-width: 52vw !important;\n  position: relative !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  left: auto !important;\n  right: auto !important;\n  top: auto !important;\n  bottom: auto !important;\n  transform: none !important;\n  float: none !important;\n  z-index: 2 !important;\n  border-radius: 999px !important;\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.07),\n    rgba(255, 255, 255, 0.03)\n  ) !important;\n  border: 1px solid rgba(255, 255, 255, 0.2) !important;\n  padding: 2px !important;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.08),\n    0 8px 24px rgba(0, 0, 0, 0.28) !important;\n  transition:\n    box-shadow 0.2s ease,\n    border-color 0.2s ease !important;\n}\n\n.flx-header .search-box,\n.flx-header .flx-search {\n  position: relative !important;\n  left: 0 !important;\n  right: auto !important;\n}\n\n.flx-search form,\n.flx-search .search-form {\n  width: 100% !important;\n  display: block !important;\n}\n\n.flx-search input[type=\"text\"],\n.flx-search input[type=\"search\"] {\n  width: 100% !important;\n  background: rgba(8, 8, 8, 0.78) !important;\n  border: 1px solid transparent !important;\n  border-radius: 999px !important;\n  padding: 10px 14px 10px 40px !important;\n  color: var(--text-primary) !important;\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 15px !important;\n  font-weight: 500 !important;\n  outline: none !important;\n  transition:\n    background 0.2s,\n    border-color 0.2s,\n    box-shadow 0.2s !important;\n}\n\n.flx-search input::placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.flx-search input:focus {\n  background: rgba(12, 12, 12, 0.95) !important;\n  border-color: rgba(255, 255, 255, 0.45) !important;\n  box-shadow:\n    0 0 0 2px rgba(229, 9, 20, 0.45),\n    0 0 20px rgba(229, 9, 20, 0.3) !important;\n}\n\n.flx-search:focus-within {\n  border-color: rgba(229, 9, 20, 0.7) !important;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.1),\n    0 0 0 1px rgba(229, 9, 20, 0.45),\n    0 12px 30px rgba(229, 9, 20, 0.24) !important;\n}\n\n.flx-search::before {\n  content: \"🔍\" !important;\n  position: absolute !important;\n  left: 10px !important;\n  top: 50% !important;\n  transform: translateY(-50%) !important;\n  font-size: 14px !important;\n  pointer-events: none !important;\n}\n\n.flx-profile {\n  display: flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n  color: var(--text-primary) !important;\n  text-decoration: none !important;\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 14px !important;\n  flex-shrink: 0 !important;\n}\n\n.show-login.flx-profile,\n.flx-header #loginbtn {\n  display: none !important;\n}\n\n/* ============================================================\n   HERO BANNER (page accueil)\n   ============================================================ */\n\n.flx-hero {\n  position: relative !important;\n  width: 100% !important;\n  min-height: min(80vh, 600px) !important;\n  display: flex !important;\n  align-items: flex-end !important;\n  overflow: hidden !important;\n  margin-top: 0 !important;\n}\n\n.flx-hero__backdrop {\n  position: absolute !important;\n  inset: 0 !important;\n  background-size: cover !important;\n  background-position: center top !important;\n  filter: blur(0px) brightness(0.6) !important;\n  transform: scale(1.05) !important;\n}\n\n.flx-hero__gradient {\n  position: absolute !important;\n  inset: 0 !important;\n  background: linear-gradient(\n    to bottom,\n    transparent 0%,\n    transparent 40%,\n    rgba(10, 10, 10, 0.7) 70%,\n    var(--bg-primary) 100%\n  ) !important;\n}\n\n.flx-hero__gradient-left {\n  position: absolute !important;\n  inset: 0 !important;\n  background: linear-gradient(\n    to right,\n    rgba(10, 10, 10, 0.8) 0%,\n    rgba(10, 10, 10, 0.4) 40%,\n    transparent 70%\n  ) !important;\n}\n\n.flx-hero__content {\n  position: relative !important;\n  z-index: 1 !important;\n  padding: 0 var(--row-padding) 60px !important;\n  max-width: 640px !important;\n}\n\n.flx-hero__title {\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 52px !important;\n  font-weight: 700 !important;\n  line-height: 1.1 !important;\n  margin: 0 0 16px !important;\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8) !important;\n}\n\n.flx-hero__meta {\n  display: flex !important;\n  align-items: center !important;\n  flex-wrap: wrap !important;\n  gap: 8px !important;\n  margin: 0 0 14px !important;\n}\n\n.flx-hero__meta-chip {\n  display: inline-flex !important;\n  align-items: center !important;\n  padding: 6px 10px !important;\n  border-radius: 999px !important;\n  font-size: 12px !important;\n  line-height: 1 !important;\n  color: var(--text-secondary) !important;\n  background: rgba(20, 20, 20, 0.72) !important;\n  border: 1px solid rgba(255, 255, 255, 0.18) !important;\n}\n\n.flx-hero__meta-chip--rating {\n  color: #f6d87a !important;\n  border-color: rgba(246, 216, 122, 0.45) !important;\n}\n\n.flx-hero__synopsis {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  color: var(--text-secondary) !important;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 3 !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  margin: 0 0 24px !important;\n}\n\n.flx-hero__actions {\n  display: flex !important;\n  gap: 12px !important;\n  flex-wrap: wrap !important;\n}\n\n.flx-btn {\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n  padding: 12px 28px !important;\n  border-radius: 4px !important;\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  text-decoration: none !important;\n  border: none !important;\n  transition:\n    background 0.2s,\n    transform 0.15s !important;\n  white-space: nowrap !important;\n}\n\n.flx-btn--play {\n  background: var(--text-primary) !important;\n  color: #000 !important;\n}\n\n.flx-btn--play:hover,\n.flx-btn--play.flx-focused {\n  background: rgba(255, 255, 255, 0.85) !important;\n}\n\n.flx-btn--info {\n  background: rgba(109, 109, 110, 0.7) !important;\n  color: var(--text-primary) !important;\n}\n\n.flx-btn--info:hover,\n.flx-btn--info.flx-focused {\n  background: rgba(109, 109, 110, 0.5) !important;\n}\n\n/* ============================================================\n   ROWS (sections horizontales)\n   ============================================================ */\n\n.flx-rows {\n  padding-top: var(--header-height) !important;\n}\n\n.flx-row {\n  margin-bottom: 32px !important;\n  position: relative !important;\n}\n\n.flx-row--top10 .flx-row__title,\n.flx-row--trending .flx-row__title {\n  letter-spacing: 0.2px !important;\n}\n\n.flx-row__header {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: space-between !important;\n  padding: 0 var(--row-padding) !important;\n  margin-bottom: 12px !important;\n}\n\n.flx-row__title {\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 22px !important;\n  font-weight: 600 !important;\n  color: var(--text-primary) !important;\n  margin: 0 !important;\n  text-decoration: none !important;\n}\n\n.flx-row__see-all {\n  font-size: 14px !important;\n  color: var(--accent) !important;\n  text-decoration: none !important;\n  font-weight: 500 !important;\n  transition: color 0.2s !important;\n  white-space: nowrap !important;\n  margin-left: 16px !important;\n}\n\n.flx-row__see-all:hover,\n.flx-row__see-all.flx-focused {\n  color: var(--accent-hover) !important;\n}\n\n.flx-row__track {\n  display: flex !important;\n  gap: var(--card-gap) !important;\n  overflow-x: auto !important;\n  overflow-y: visible !important;\n  padding: 12px var(--row-padding) !important;\n  scroll-snap-type: x mandatory !important;\n  -webkit-overflow-scrolling: touch !important;\n  scrollbar-width: none !important;\n}\n\n.flx-row__track::-webkit-scrollbar {\n  display: none !important;\n}\n\n/* ============================================================\n   CARDS\n   ============================================================ */\n\n.flx-card {\n  flex-shrink: 0 !important;\n  width: var(--card-width) !important;\n  height: var(--card-height) !important;\n  border-radius: var(--border-radius) !important;\n  overflow: visible !important;\n  position: relative !important;\n  scroll-snap-align: start !important;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    z-index 0s 0.25s !important;\n  will-change: transform !important;\n  outline: none !important;\n}\n\n.block-main,\n.block-main::before,\n.block-main::after,\n.block-main .block-title,\n.block-main .block-inside,\n.block-main .mov {\n  border: none !important;\n  box-shadow: none !important;\n  background-image: none !important;\n}\n\n.flx-card--top10 {\n  width: 185px !important;\n  height: 275px !important;\n}\n\n.flx-card a {\n  display: block !important;\n  width: 100% !important;\n  height: 100% !important;\n  text-decoration: none !important;\n  color: inherit !important;\n}\n\n.flx-card__poster-wrap {\n  width: 100% !important;\n  height: 100% !important;\n  border-radius: var(--border-radius) !important;\n  overflow: hidden !important;\n  position: relative !important;\n}\n\n.flx-card__poster {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: cover !important;\n  display: block !important;\n  transition: transform 0.3s ease !important;\n}\n\n.flx-card__overlay {\n  position: absolute !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  right: 0 !important;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9)) !important;\n  padding: 24px 8px 8px !important;\n  opacity: 0 !important;\n  transition: opacity 0.25s ease !important;\n  border-radius: 0 0 var(--border-radius) var(--border-radius) !important;\n}\n\n.flx-card__rank {\n  position: absolute !important;\n  left: 6px !important;\n  bottom: 0 !important;\n  z-index: 2 !important;\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 118px !important;\n  font-weight: 800 !important;\n  line-height: 0.8 !important;\n  color: var(--top10-number) !important;\n  text-shadow:\n    -2px -2px 0 #111,\n    2px -2px 0 #111,\n    -2px 2px 0 #111,\n    2px 2px 0 #111,\n    0 0 18px rgba(0, 0, 0, 0.55) !important;\n  transform: translateX(-42%) !important;\n  pointer-events: none !important;\n}\n\n.flx-card--top10 .flx-card__poster-wrap {\n  overflow: visible !important;\n  padding-left: 26px !important;\n}\n\n.flx-card--top10 .flx-card__poster {\n  border-radius: var(--border-radius) !important;\n}\n\n.flx-card__title {\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 13px !important;\n  font-weight: 500 !important;\n  color: var(--text-primary) !important;\n  white-space: nowrap !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  display: block !important;\n  margin: 0 0 4px !important;\n  text-decoration: none !important;\n  z-index: 1000 !important;\n}\n\n.flx-card__badges {\n  display: flex !important;\n  gap: 4px !important;\n  flex-wrap: wrap !important;\n}\n\n.flx-badge {\n  display: inline-block !important;\n  padding: 2px 6px !important;\n  border-radius: 3px !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  font-family: \"Lexend\", sans-serif !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.5px !important;\n  line-height: 1.4 !important;\n}\n\n.flx-badge--vf {\n  background: var(--badge-vf) !important;\n  color: #000 !important;\n}\n\n.flx-badge--vostfr {\n  background: var(--badge-vostfr) !important;\n  color: #000 !important;\n}\n\n.flx-badge--tf {\n  background: #4a9eff !important;\n  color: #fff !important;\n}\n\n.flx-badge--hd {\n  background: rgba(255, 255, 255, 0.15) !important;\n  color: var(--text-secondary) !important;\n  border: 1px solid rgba(255, 255, 255, 0.2) !important;\n}\n\n.flx-badge--exclu {\n  background: var(--badge-exclu) !important;\n  color: #fff !important;\n}\n\n.flx-badge--ep {\n  background: rgba(0, 0, 0, 0.7) !important;\n  color: var(--text-primary) !important;\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n}\n\n/* ============================================================\n   PAGE DETAIL HERO\n   ============================================================ */\n\n.flx-detail {\n  padding-top: var(--header-height) !important;\n}\n\n.flx-detail-hero {\n  position: relative !important;\n  min-height: min(50vh, 500px) !important;\n  display: flex !important;\n  align-items: flex-end !important;\n  overflow: hidden !important;\n}\n\n.flx-detail-hero__backdrop {\n  position: absolute !important;\n  inset: 0 !important;\n  background-size: cover !important;\n  background-position: center 20% !important;\n  filter: blur(20px) brightness(0.4) !important;\n  transform: scale(1.1) !important;\n}\n\n.flx-detail-hero__gradient {\n  position: absolute !important;\n  inset: 0 !important;\n  background: linear-gradient(\n    transparent 0%,\n    var(--bg-primary) 100%\n  ) !important;\n}\n\n.flx-detail-hero__content {\n  position: relative !important;\n  z-index: 1 !important;\n  display: flex !important;\n  gap: 32px !important;\n  padding: 40px var(--row-padding) 48px !important;\n  width: 100% !important;\n  align-items: flex-end !important;\n}\n\n.flx-detail-hero__poster {\n  flex-shrink: 0 !important;\n  width: 160px !important;\n  border-radius: 8px !important;\n  overflow: hidden !important;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6) !important;\n}\n\n.flx-detail-hero__poster img {\n  width: 100% !important;\n  height: auto !important;\n  display: block !important;\n}\n\n.flx-detail-hero__info {\n  flex: 1 !important;\n  min-width: 0 !important;\n}\n\n.flx-detail-hero__title {\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 36px !important;\n  font-weight: 700 !important;\n  margin: 0 0 12px !important;\n  line-height: 1.2 !important;\n}\n\n.flx-detail-hero__meta {\n  display: flex !important;\n  gap: 12px !important;\n  flex-wrap: wrap !important;\n  margin-bottom: 16px !important;\n  font-size: 14px !important;\n  color: var(--text-secondary) !important;\n  align-items: center !important;\n}\n\n.flx-detail-hero__meta-item {\n  display: flex !important;\n  align-items: center !important;\n  gap: 4px !important;\n}\n\n.flx-detail-hero__synopsis {\n  font-size: 14px !important;\n  line-height: 1.6 !important;\n  color: var(--text-secondary) !important;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 4 !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  margin: 0 0 20px !important;\n  max-width: 600px !important;\n}\n\n.flx-detail-hero__actions {\n  display: flex !important;\n  gap: 12px !important;\n}\n\n/* ============================================================\n   PLAYER SECTION\n   ============================================================ */\n\n.flx-player-section {\n  padding: 0 var(--row-padding) !important;\n  margin-bottom: 32px !important;\n}\n\n.flx-tabs {\n  display: flex !important;\n  gap: 4px !important;\n  margin-bottom: 16px !important;\n  border-bottom: 2px solid var(--bg-tertiary) !important;\n  padding-bottom: 0 !important;\n}\n\n.flx-tab {\n  padding: 10px 24px !important;\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  color: var(--text-muted) !important;\n  background: none !important;\n  border: none !important;\n  border-bottom: 3px solid transparent !important;\n  margin-bottom: -2px !important;\n  transition:\n    color 0.2s,\n    border-color 0.2s !important;\n  outline: none !important;\n}\n\n.flx-tab.flx-tab--active,\n.flx-tab.flx-focused {\n  color: var(--text-primary) !important;\n  border-bottom-color: var(--accent) !important;\n}\n\n.flx-episodes {\n  display: flex !important;\n  gap: 8px !important;\n  overflow-x: auto !important;\n  padding: 8px 0 16px !important;\n  scroll-snap-type: x mandatory !important;\n  scrollbar-width: none !important;\n  margin-bottom: 16px !important;\n}\n\n.flx-episodes::-webkit-scrollbar {\n  display: none !important;\n}\n\n.flx-episode {\n  flex-shrink: 0 !important;\n  padding: 8px 16px !important;\n  border-radius: 4px !important;\n  background: var(--bg-tertiary) !important;\n  color: var(--text-secondary) !important;\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  border: 2px solid transparent !important;\n\n  transition: all 0.2s ease !important;\n  outline: none !important;\n  scroll-snap-align: start !important;\n  white-space: nowrap !important;\n}\n\n.flx-episode.flx-episode--active {\n  background: var(--accent) !important;\n  color: var(--text-primary) !important;\n  border-color: var(--accent) !important;\n}\n\n.flx-servers {\n  display: flex !important;\n  gap: 8px !important;\n  flex-wrap: wrap !important;\n  margin-bottom: 16px !important;\n}\n\n.flx-server {\n  padding: 8px 20px !important;\n  border-radius: 4px !important;\n  background: var(--bg-tertiary) !important;\n  color: var(--text-secondary) !important;\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  border: 2px solid var(--bg-tertiary) !important;\n\n  transition: all 0.2s ease !important;\n  outline: none !important;\n}\n\n.flx-server.flx-server--active {\n  border-color: var(--focus-ring) !important;\n  color: var(--text-primary) !important;\n}\n\n.flx-player-wrap {\n  position: relative !important;\n  width: 100% !important;\n  padding-bottom: 56.25% !important;\n  background: #000 !important;\n  border-radius: var(--border-radius) !important;\n  overflow: hidden !important;\n}\n\n.flx-player-wrap iframe {\n  position: absolute !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  border: none !important;\n}\n\n.flx-player-skeleton {\n  position: absolute !important;\n  inset: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  background: var(--bg-secondary) !important;\n  z-index: 1 !important;\n  border-radius: var(--border-radius) !important;\n}\n\n.flx-player-skeleton.flx-hidden {\n  display: none !important;\n}\n\n.flx-player-skeleton__icon {\n  font-size: 48px !important;\n  opacity: 0.3 !important;\n}\n\n/* ============================================================\n   PAGE TRANSITION OVERLAY\n   ============================================================ */\n\n.flx-page-transition {\n  position: fixed !important;\n  inset: 0 !important;\n  background: #000 !important;\n  z-index: 9999 !important;\n  opacity: 0 !important;\n  pointer-events: none !important;\n  transition: opacity 0.3s ease !important;\n}\n\n.flx-page-transition.flx-active {\n  opacity: 1 !important;\n  pointer-events: all !important;\n}\n\n/* ============================================================\n   TOAST NOTIFICATIONS\n   ============================================================ */\n\n.flx-toast-container {\n  position: fixed !important;\n  bottom: 40px !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n  z-index: 9000 !important;\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 8px !important;\n  pointer-events: none !important;\n}\n\n.flx-toast {\n  background: rgba(30, 30, 30, 0.95) !important;\n  color: var(--text-primary) !important;\n  padding: 12px 24px !important;\n  border-radius: 4px !important;\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 14px !important;\n  border-left: 3px solid var(--accent) !important;\n  opacity: 0 !important;\n  transform: translateY(10px) !important;\n  transition:\n    opacity 0.3s ease,\n    transform 0.3s ease !important;\n  white-space: nowrap !important;\n}\n\n.flx-toast.flx-toast--visible {\n  opacity: 1 !important;\n  transform: translateY(0) !important;\n}\n\n/* ============================================================\n   FOOTER\n   ============================================================ */\n\n.flx-footer {\n  background: var(--bg-primary) !important;\n  padding: 32px var(--row-padding) !important;\n  text-align: center !important;\n  color: var(--text-muted) !important;\n  font-size: 12px !important;\n  font-family: \"Lexend\", sans-serif !important;\n  border-top: 1px solid var(--bg-tertiary) !important;\n  margin-top: 48px !important;\n}\n\n.flx-footer a {\n  color: var(--text-muted) !important;\n  text-decoration: none !important;\n  margin: 0 8px !important;\n}\n\n/* ============================================================\n   DESKTOP POINTER (orb + trainee)\n   ============================================================ */\n\n.flx-desktop-pointer.flx-input-mouse body {\n  cursor: none !important;\n}\n\n.flx-desktop-pointer.flx-input-mouse a,\n.flx-desktop-pointer.flx-input-mouse button,\n.flx-desktop-pointer.flx-input-mouse input,\n.flx-desktop-pointer.flx-input-mouse [role=\"button\"],\n.flx-desktop-pointer.flx-input-mouse [data-flx-focusable] {\n  cursor: none !important;\n}\n\n.flx-cursor-orb,\n.flx-cursor-trail {\n  position: fixed !important;\n  left: 0;\n  top: 0;\n  transform: translate(-50%, -50%) !important;\n  pointer-events: none !important;\n  z-index: 999999 !important;\n  border-radius: 999px !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  transition:\n    opacity 0.18s ease,\n    visibility 0.18s ease !important;\n}\n\n.flx-cursor-orb {\n  width: 18px !important;\n  height: 18px !important;\n  background: rgba(229, 9, 20, 0.92) !important;\n  box-shadow:\n    0 0 0 2px rgba(255, 255, 255, 0.24),\n    0 0 36px rgba(229, 9, 20, 0.62) !important;\n}\n\n.flx-cursor-trail {\n  width: 12px !important;\n  height: 12px !important;\n  background: rgba(255, 255, 255, 0.5) !important;\n  filter: blur(0.4px) !important;\n}\n\n.flx-desktop-pointer.flx-input-mouse .flx-cursor-orb,\n.flx-desktop-pointer.flx-input-mouse .flx-cursor-trail {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n/* ============================================================\n   VIRTUAL SEARCH KEYBOARD\n   ============================================================ */\n\n.flx-vk {\n  position: fixed !important;\n  inset: 0 !important;\n  z-index: 12000 !important;\n  background: rgba(0, 0, 0, 0.74) !important;\n  display: none !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 24px !important;\n}\n\n.flx-vk.flx-vk--open {\n  display: flex !important;\n}\n\n.flx-vk__panel {\n  width: min(1120px, 96vw) !important;\n  max-height: 90vh !important;\n  overflow: auto !important;\n  background: #111 !important;\n  border: 1px solid rgba(255, 255, 255, 0.14) !important;\n  border-radius: 12px !important;\n  padding: 18px !important;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6) !important;\n}\n\n.flx-vk__title {\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 24px !important;\n  font-weight: 700 !important;\n  margin-bottom: 12px !important;\n}\n\n.flx-vk__preview {\n  width: 100% !important;\n  min-height: 48px !important;\n  border-radius: 8px !important;\n  padding: 10px 12px !important;\n  border: 1px solid rgba(255, 255, 255, 0.24) !important;\n  background: rgba(255, 255, 255, 0.06) !important;\n  color: #fff !important;\n  font-size: 18px !important;\n  font-family: \"Lexend\", sans-serif !important;\n  margin-bottom: 14px !important;\n  white-space: pre-wrap !important;\n  word-break: break-word !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 2px !important;\n}\n\n.flx-vk__preview-text {\n  display: inline-block !important;\n}\n\n.flx-vk__caret {\n  display: inline-block !important;\n  color: rgba(255, 255, 255, 0.95) !important;\n  animation: flx-caret-blink 1s steps(1) infinite !important;\n}\n\n@keyframes flx-caret-blink {\n  0%,\n  49% {\n    opacity: 1;\n  }\n  50%,\n  100% {\n    opacity: 0;\n  }\n}\n\n.flx-vk__grid {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 8px !important;\n}\n\n.flx-vk__row {\n  display: grid !important;\n  grid-template-columns: repeat(10, minmax(0, 1fr)) !important;\n  gap: 8px !important;\n}\n\n.flx-vk-key {\n  height: 48px !important;\n  border: 1px solid rgba(255, 255, 255, 0.22) !important;\n  border-radius: 8px !important;\n  background: rgba(255, 255, 255, 0.08) !important;\n  color: #fff !important;\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  outline: none !important;\n  transition:\n    transform 0.14s ease,\n    background 0.14s ease !important;\n}\n\n.flx-vk-key--cta {\n  background: rgba(229, 9, 20, 0.18) !important;\n  border-color: rgba(229, 9, 20, 0.65) !important;\n}\n\n.flx-vk-key--mode {\n  background: rgba(80, 80, 80, 0.3) !important;\n}\n\n.flx-vk-key.flx-focused {\n  transform: scale(1.04) !important;\n  background: rgba(255, 255, 255, 0.2) !important;\n  box-shadow:\n    0 0 0 2px rgba(255, 255, 255, 0.4),\n    0 0 18px rgba(255, 255, 255, 0.24) !important;\n}\n\n/* ============================================================\n   SEARCH PAGE UI\n   ============================================================ */\n\n.flx-search-page .search-page {\n  padding: 18px var(--row-padding) 8px !important;\n}\n\n.flx-search-page .searchtable {\n  background: rgba(18, 18, 18, 0.88) !important;\n  border: 1px solid rgba(255, 255, 255, 0.14) !important;\n  border-radius: 12px !important;\n  padding: 14px !important;\n  margin-bottom: 16px !important;\n}\n\n.flx-search-page .searchtable table,\n.flx-search-page .searchtable tbody,\n.flx-search-page .searchtable tr,\n.flx-search-page .searchtable td {\n  display: block !important;\n  width: 100% !important;\n}\n\n.flx-search-page .searchtable td.search {\n  display: flex !important;\n  flex-wrap: wrap !important;\n  gap: 10px !important;\n  align-items: center !important;\n}\n\n.flx-search-page .searchtable input[type=\"text\"] {\n  width: min(560px, 96vw) !important;\n  height: 46px !important;\n  border-radius: 999px !important;\n  border: 1px solid rgba(255, 255, 255, 0.25) !important;\n  background: rgba(0, 0, 0, 0.45) !important;\n  color: #fff !important;\n  padding: 0 14px !important;\n  font-size: 16px !important;\n}\n\n.flx-search-page .searchtable input[type=\"button\"],\n.flx-search-page .searchtable input[type=\"submit\"],\n.flx-search-page .searchtable button {\n  height: 42px !important;\n  border-radius: 999px !important;\n  padding: 0 16px !important;\n  border: 1px solid rgba(255, 255, 255, 0.2) !important;\n  background: rgba(255, 255, 255, 0.09) !important;\n  color: #fff !important;\n  font-family: \"Lexend\", sans-serif !important;\n  font-size: 14px !important;\n}\n\n.flx-search-page .searchtable input[type=\"button\"]:focus,\n.flx-search-page .searchtable input[type=\"submit\"]:focus,\n.flx-search-page .searchtable button:focus,\n.flx-search-page .searchtable input[type=\"text\"]:focus {\n  box-shadow:\n    0 0 0 2px rgba(229, 9, 20, 0.45),\n    0 0 18px rgba(229, 9, 20, 0.28) !important;\n  border-color: rgba(229, 9, 20, 0.72) !important;\n  outline: none !important;\n}\n\n.flx-search-page .flx-search-info,\n.flx-search-page .berrors {\n  color: rgba(255, 255, 255, 0.86) !important;\n  margin: 0 0 12px !important;\n}\n\n/* ============================================================\n   SECTION TITRE (detail page)\n   ============================================================ */\n\n.flx-section-title {\n  font-family: \"Montserrat\", sans-serif !important;\n  font-size: 22px !important;\n  font-weight: 600 !important;\n  padding: 0 var(--row-padding) !important;\n  margin: 32px 0 12px !important;\n  color: var(--text-primary) !important;\n}\n";

  var animationsCSS = "/* ============================================================\n   ANIMATIONS - FlemmixTV\n   ============================================================ */\n\n/* ---- Hero fade-in ---- */\n@keyframes flx-fadeIn {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n@keyframes flx-slideUp {\n  from { opacity: 0; transform: translateY(30px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes flx-slideLeft {\n  from { opacity: 0; transform: translateX(-20px); }\n  to   { opacity: 1; transform: translateX(0); }\n}\n\n/* ---- Skeleton shimmer ---- */\n@keyframes flx-shimmer {\n  0%   { background-position: -200% 0; }\n  100% { background-position:  200% 0; }\n}\n\n/* ---- Pulse (loading indicator) ---- */\n@keyframes flx-pulse {\n  0%, 100% { opacity: 1; }\n  50%       { opacity: 0.5; }\n}\n\n/* ---- Spin ---- */\n@keyframes flx-spin {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n/* ---- Scale in ---- */\n@keyframes flx-scaleIn {\n  from { transform: scale(0.9); opacity: 0; }\n  to   { transform: scale(1);   opacity: 1; }\n}\n\n/* =============================================================\n   HERO ANIMATIONS\n   ============================================================= */\n\n.flx-hero {\n  animation: flx-fadeIn 0.8s ease-out both !important;\n}\n\n.flx-hero__content {\n  animation: flx-slideUp 0.6s ease-out 0.2s both !important;\n}\n\n.flx-hero__title {\n  animation: flx-slideUp 0.6s ease-out 0.1s both !important;\n}\n\n.flx-hero__synopsis {\n  animation: flx-fadeIn 0.5s ease-out 0.35s both !important;\n}\n\n.flx-hero__actions {\n  animation: flx-slideUp 0.5s ease-out 0.4s both !important;\n}\n\n/* =============================================================\n   ROW ANIMATIONS\n   ============================================================= */\n\n.flx-row {\n  animation: flx-fadeIn 0.5s ease-out both !important;\n}\n\n.flx-row:nth-child(1) { animation-delay: 0.1s !important; }\n.flx-row:nth-child(2) { animation-delay: 0.15s !important; }\n.flx-row:nth-child(3) { animation-delay: 0.2s !important; }\n.flx-row:nth-child(4) { animation-delay: 0.25s !important; }\n.flx-row:nth-child(5) { animation-delay: 0.3s !important; }\n.flx-row:nth-child(n+6) { animation-delay: 0.35s !important; }\n\n/* =============================================================\n   CARD ANIMATIONS\n   ============================================================= */\n\n.flx-card {\n  animation: flx-scaleIn 0.3s ease-out both !important;\n}\n\n/* Reveal de l'overlay au focus */\n.flx-card.flx-focused .flx-card__overlay,\n.flx-card:focus .flx-card__overlay {\n  opacity: 1 !important;\n  transition-delay: 0.1s !important;\n}\n\n/* =============================================================\n   SKELETON LOADING\n   ============================================================= */\n\n.flx-skeleton {\n  background: linear-gradient(\n    90deg,\n    var(--skeleton-base) 25%,\n    var(--skeleton-shine) 50%,\n    var(--skeleton-base) 75%\n  ) !important;\n  background-size: 200% 100% !important;\n  animation: flx-shimmer 1.5s infinite !important;\n  border-radius: var(--border-radius) !important;\n}\n\n.flx-skeleton-card {\n  flex-shrink: 0 !important;\n  width: var(--card-width) !important;\n  height: var(--card-height) !important;\n}\n\n/* =============================================================\n   PAGE TRANSITION\n   ============================================================= */\n\n.flx-page-enter {\n  animation: flx-fadeIn 0.4s ease-out both !important;\n}\n\n/* =============================================================\n   DETAIL HERO ANIMATIONS\n   ============================================================= */\n\n.flx-detail-hero__poster {\n  animation: flx-slideLeft 0.5s ease-out 0.1s both !important;\n}\n\n.flx-detail-hero__info {\n  animation: flx-slideUp 0.5s ease-out 0.2s both !important;\n}\n\n/* =============================================================\n   TAB TRANSITIONS\n   ============================================================= */\n\n.flx-tab {\n  position: relative !important;\n}\n\n.flx-tab::after {\n  content: '' !important;\n  position: absolute !important;\n  bottom: -2px !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 3px !important;\n  background: var(--accent) !important;\n  transform: scaleX(0) !important;\n  transition: transform 0.3s ease !important;\n}\n\n.flx-tab.flx-tab--active::after,\n.flx-tab.flx-focused::after {\n  transform: scaleX(1) !important;\n}\n\n/* =============================================================\n   EPISODE BUTTON TRANSITIONS\n   ============================================================= */\n\n.flx-episode {\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    transform 0.15s ease,\n    border-color 0.2s ease !important;\n}\n\n.flx-episode.flx-episode--active,\n.flx-episode.flx-focused {\n  transform: scale(1.05) !important;\n}\n\n/* =============================================================\n   PLAYER LOADING SPINNER\n   ============================================================= */\n\n.flx-player-loading {\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: center !important;\n  gap: 16px !important;\n}\n\n.flx-player-loading__spinner {\n  width: 48px !important;\n  height: 48px !important;\n  border: 3px solid var(--bg-tertiary) !important;\n  border-top-color: var(--accent) !important;\n  border-radius: 50% !important;\n  animation: flx-spin 0.8s linear infinite !important;\n}\n\n.flx-player-loading__text {\n  color: var(--text-muted) !important;\n  font-size: 14px !important;\n  font-family: 'Lexend', sans-serif !important;\n}\n";

  var tvFocusCSS = "/* ============================================================\n   TV FOCUS STYLES - Navigation telecommande\n   ============================================================ */\n\n/* Pas de focus outline natif du navigateur */\n*:focus {\n  outline: none !important;\n}\n\n/* ============================================================\n   CARDS\n   ============================================================ */\n\n.flx-card:focus,\n.flx-input-mouse .flx-card:hover,\n.flx-card.flx-focused {\n  transform: scale(1.08) !important;\n  z-index: 10 !important;\n  transition-delay: 0s !important;\n  outline: none !important;\n}\n\n.flx-card:focus .flx-card__poster-wrap,\n.flx-input-mouse .flx-card:hover .flx-card__poster-wrap,\n.flx-card.flx-focused .flx-card__poster-wrap {\n  box-shadow:\n    0 0 18px rgba(229, 9, 20, 0.45),\n    0 0 34px rgba(229, 9, 20, 0.25),\n    0 12px 28px rgba(0, 0, 0, 0.55) !important;\n}\n\n.flx-card--top10:focus .flx-card__poster-wrap,\n.flx-input-mouse .flx-card--top10:hover .flx-card__poster-wrap,\n.flx-card--top10.flx-focused .flx-card__poster-wrap {\n  box-shadow: none !important;\n}\n\n.flx-card--top10:focus .flx-card__poster,\n.flx-input-mouse .flx-card--top10:hover .flx-card__poster,\n.flx-card--top10.flx-focused .flx-card__poster {\n  box-shadow:\n    0 0 18px rgba(229, 9, 20, 0.45),\n    0 0 34px rgba(229, 9, 20, 0.25),\n    0 12px 28px rgba(0, 0, 0, 0.55) !important;\n}\n\n.flx-card:focus .flx-card__overlay,\n.flx-input-mouse .flx-card:hover .flx-card__overlay,\n.flx-card.flx-focused .flx-card__overlay {\n  opacity: 1 !important;\n}\n\n/* ============================================================\n   BOUTONS\n   ============================================================ */\n\n.flx-btn:focus,\n.flx-input-mouse .flx-btn:hover,\n.flx-btn.flx-focused {\n  outline: 3px solid var(--focus-ring) !important;\n  outline-offset: 3px !important;\n  box-shadow: 0 0 20px var(--focus-glow) !important;\n  transform: scale(1.04) !important;\n}\n\n.flx-btn--play:focus,\n.flx-input-mouse .flx-btn--play:hover,\n.flx-btn--play.flx-focused {\n  background: var(--text-primary) !important;\n}\n\n/* ============================================================\n   TABS LANGUE\n   ============================================================ */\n\n.flx-tab:focus,\n.flx-input-mouse .flx-tab:hover,\n.flx-tab.flx-focused {\n  color: var(--text-primary) !important;\n  border-bottom-color: var(--accent) !important;\n  outline: none !important;\n}\n\n/* ============================================================\n   EPISODES\n   ============================================================ */\n\n.flx-episode:focus,\n.flx-input-mouse .flx-episode:hover,\n.flx-episode.flx-focused {\n  background: var(--accent) !important;\n  color: var(--text-primary) !important;\n  border-color: var(--accent) !important;\n  transform: scale(1.05) !important;\n  outline: none !important;\n}\n\n/* ============================================================\n   SERVEURS / LECTEURS\n   ============================================================ */\n\n.flx-server:focus,\n.flx-input-mouse .flx-server:hover,\n.flx-server.flx-focused {\n  border-color: var(--focus-ring) !important;\n  background: rgba(255, 255, 255, 0.1) !important;\n  color: var(--text-primary) !important;\n  box-shadow: 0 0 12px var(--focus-glow) !important;\n  outline: none !important;\n}\n\n/* ============================================================\n   LIENS GENERIQUES\n   ============================================================ */\n\n.flx-focusable:focus,\n.flx-input-mouse .flx-focusable:hover,\n.flx-focusable.flx-focused {\n  outline: 2px solid var(--focus-ring) !important;\n  outline-offset: 2px !important;\n  border-radius: 3px !important;\n}\n\n/* ============================================================\n   HEADER ELEMENTS\n   ============================================================ */\n\n.flx-logo:focus,\n.flx-input-mouse .flx-logo:hover,\n.flx-logo.flx-focused {\n  outline: 2px solid var(--focus-ring) !important;\n  outline-offset: 4px !important;\n  border-radius: 2px !important;\n}\n\n.flx-profile:focus,\n.flx-input-mouse .flx-profile:hover,\n.flx-profile.flx-focused {\n  outline: 2px solid var(--focus-ring) !important;\n  outline-offset: 4px !important;\n  border-radius: 2px !important;\n}\n\n.flx-search input:focus {\n  outline: none !important;\n  box-shadow: 0 0 0 2px var(--focus-ring) !important;\n  background: rgba(255, 255, 255, 0.2) !important;\n}\n\n/* ============================================================\n   SEE ALL LINKS\n   ============================================================ */\n\n.flx-row__see-all:focus,\n.flx-input-mouse .flx-row__see-all:hover,\n.flx-row__see-all.flx-focused {\n  outline: 2px solid var(--accent) !important;\n  outline-offset: 3px !important;\n  border-radius: 2px !important;\n  color: var(--accent-hover) !important;\n}\n\n/* ============================================================\n   ZONE FOCUS INDICATOR (debug, masque en prod)\n   ============================================================ */\n\n.flx-zone-indicator {\n  display: none;\n}\n";

  /**
   * utils.js - Utilitaires FlemmixTV
   */

  /** Detecte le type de page courant */
  function detectPageType() {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    // Page recherche
    if (document.querySelector('.search-page') || searchParams.get('do') === 'search' || document.querySelector('#fullsearch')) {
      return 'search';
    }
    if (path === '/' || path === '' || path === '/index.php') return 'home';

    // Page detail serie : contient .epblocks OU .blocvostfr
    if (document.querySelector('.epblocks') || document.querySelector('.blocvostfr')) {
      return 'serie';
    }

    // Page detail film : contient .filmlinks OU .linkstab
    if (document.querySelector('.tabsbox.filmlinks') || document.querySelector('.tabs-sel.linkstab')) {
      return 'film';
    }

    // Page categorie : liste de .mov sans article.full
    if (document.querySelector('.mov') && !document.querySelector('article.full')) {
      return 'category';
    }

    // Paths de categories
    if (path.includes('/film-en-streaming') || path.includes('/serie-en-streaming') || path.includes('/film-ancien') || path.includes('/category') || path.includes('/xfsearch')) {
      return 'category';
    }
    return 'other';
  }

  /** Cree un element DOM avec attributs et classes */
  function createElement(tag, classes = [], attrs = {}) {
    const el = document.createElement(tag);
    if (classes.length) el.className = classes.join(' ');
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  }

  /** Injecte du CSS dans le document */
  function injectCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  /** Ajoute une classe a un element existant */
  function addClass(el, ...classes) {
    if (el) el.classList.add(...classes);
  }

  /** Supprime un element du DOM */
  function removeEl(selector) {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  /** Extraire l'URL d'un loadVideo() ou d'un href */
  function extractVideoUrl(el) {
    if (!el) return null;
    const onclick = el.getAttribute('onclick') || '';
    const match = onclick.match(/loadVideo\(['"]([^'"]+)['"]\)/);
    if (match) return match[1];
    const href = el.getAttribute('href');
    if (href && href !== '#' && href !== 'javascript:void(0)') return href;
    return null;
  }

  /** Extrait le texte propre d'un element */
  function getText(el) {
    if (!el) return '';
    return (el.textContent || '').trim();
  }

  /** Extrait une donnee d'un ul.mov-list par label */
  function getMovListValue(container, labelText) {
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
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /** Affiche un toast en bas de l'ecran */
  function showToast(message, duration = 4000) {
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
  function scrollIntoFocus(el) {
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    });
  }

  /** Determine le label lisible d'un lecteur depuis son URL */
  function getServerLabel(url) {
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
    } catch (_unused) {
      return 'Lecteur';
    }
  }

  /** Parse le badge langue d'un texte */
  function parseLangBadge(text) {
    const t = (text || '').toLowerCase();
    if (t.includes('truefrench')) return {
      type: 'tf',
      label: 'TrueFR'
    };
    if (t.includes('french') || t.includes('vf')) return {
      type: 'vf',
      label: 'VF'
    };
    if (t.includes('vostfr')) return {
      type: 'vostfr',
      label: 'VOSTFR'
    };
    if (t.includes('vost')) return {
      type: 'vostfr',
      label: 'VOST'
    };
    return null;
  }

  /** Parse le badge qualite */
  function parseQualityBadge(text) {
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
  function createBadge(type, label) {
    const badge = createElement('span', ['flx-badge', `flx-badge--${type}`]);
    badge.textContent = label;
    return badge;
  }

  /**
   * common.js - Elements communs a toutes les pages (header, footer)
   */


  /** Transforme le header original en header Netflix fixe */
  function transformHeader() {
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
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    // Appel initial
    onScroll();
  }

  /** Transforme le footer */
  function transformFooter() {
    const footer = document.querySelector("footer.footer");
    if (!footer) return;
    addClass(footer, "flx-footer");
    // Suppression du texte marketing en bas
    footer.innerHTML = "";
    footer.style.display = "none";
  }

  /** Masque les elements non voulus sur toutes les pages */
  function hideUnwantedElements() {
    const selectors = ["div.marquee", ".adsb", ".fav-info", ".newmenu", "aside.sidebar", ".login-box"];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.display = "none";
      });
    });
  }

  /** Ajoute la classe .flx-app sur .wrap */
  function initAppWrapper() {
    const wrap = document.querySelector(".wrap") || document.querySelector(".main.center") || document.body;
    addClass(wrap, "flx-app");
  }

  /** Cree et insere le toast container */
  function initToastContainer() {
    if (!document.querySelector(".flx-toast-container")) {
      const container = createElement("div", ["flx-toast-container"]);
      document.body.appendChild(container);
    }
  }

  /** Ajoute l'overlay de transition de page */
  function initPageTransition() {
    if (!document.querySelector(".flx-page-transition")) {
      const overlay = createElement("div", ["flx-page-transition"]);
      document.body.appendChild(overlay);
    }
  }

  /** Navigue vers une URL avec transition fondu */
  function navigateWithTransition(url) {
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

  /**
   * home.js - Transformation DOM page d'accueil
   */


  /** Point d'entree: transforme la page d'accueil */
  function transformHome() {
    document.body.classList.add('flx-home');
    hideHomeUnwanted();
    buildHeroBanner();
    transformBlocksToRows();
    transformLastAdded();
    fixLayout();
  }

  /** Masque les elements specifiques a l'accueil */
  function hideHomeUnwanted() {
    ['.blocklastadded', 'div.marquee', '.adsb', 'aside.sidebar', '.fav-info', '.main-title'].forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
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
      navigateWithTransition(data.href);
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
      navigateWithTransition(data.href);
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
      navigateWithTransition(data.href);
    });
    return card;
  }

  /** Extrait les donnees d'un element .mov */
  function extractCardData(mov) {
    if (!mov) return null;

    // Href
    const linkEl = mov.querySelector('a.mov-t') || mov.querySelector('a[href]') || mov.querySelector('.mov-mask.ps-link');
    const href = linkEl ? linkEl.getAttribute('href') || linkEl.getAttribute('data-link') || '' : '';

    // Titre
    const titleEl = mov.querySelector('a.mov-t');
    const title = titleEl ? getText(titleEl) : '';

    // Poster
    const imgEl = mov.querySelector('.mov-i img') || mov.querySelector('img');
    const poster = imgEl ? imgEl.getAttribute('src') || imgEl.getAttribute('data-src') || '' : '';

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
    const synopsisEl = mov.querySelector('.movie-text .movie-synopsis') || mov.querySelector('.movie-text ul.movie-lines li:last-child');
    const synopsis = synopsisEl ? getText(synopsisEl) : '';
    return {
      href,
      title,
      poster,
      episode,
      exclu,
      lang,
      quality,
      synopsis
    };
  }
  function extractHeroMeta(mov) {
    const textFromLines = labelNeedle => {
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
    const ratingRaw = getText(mov.querySelector('.imdb')) || getText(mov.querySelector('.rating')) || getText(mov.querySelector('.rate_like-dislike'));
    const rating = (ratingRaw.match(/\b\d(?:[.,]\d)?\b/) || [])[0] || '';
    const lang = cleanTextToken(getText(mov.querySelector('.nbloc1')) || '');
    const quality = cleanTextToken(getText(mov.querySelector('.nbloc2')) || '');
    return {
      year,
      genre: genre && !genre.includes('[xfvalue') ? genre : '',
      rating,
      lang: [lang, quality].filter(Boolean).join(' • ')
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
    } catch (_unused) {
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
      const lang = langEl ? langEl.className.includes('vf') ? 'VF' : 'VOSTFR' : '';
      items.push({
        href,
        title,
        lang,
        type: 'serie',
        poster: posterByHref.get(normalizeUrlKey(href)) || ''
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
        poster: posterByHref.get(normalizeUrlKey(href)) || ''
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
      inner.style.cssText = hasPoster ? 'display:block;width:100%;height:100%;text-decoration:none;color:inherit;' : 'display:flex;align-items:center;gap:8px;width:100%;text-decoration:none;color:inherit;';
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
        navigateWithTransition(item.href);
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

  /**
   * related.js - Section "A voir egalement" (recommandations)
   */


  /** Transforme la section .related .relatedcarrou en row Netflix */
  function buildRelatedRow() {
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
      const poster = img ? img.getAttribute('src') || img.getAttribute('data-src') || '' : '';
      const title1 = item.querySelector('.title1') || item.querySelector('.mov-t');
      const title = title1 ? getText(title1) : img ? img.getAttribute('alt') || '' : '';
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

  /**
   * detail-serie.js - Transformation DOM page detail serie
   */


  /** Point d'entree */
  function transformSerie() {
    hideSerieUnwanted();
    buildDetailHero$1();
    buildPlayerSection$1();
    buildRelatedRow();
  }
  function hideSerieUnwanted() {
    ['aside.sidebar', '.adsb', '.full-taglist', '.full-soc', '.std-block-title2', '.sadst', '.full-comms', '.fav-info'].forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
    });
  }

  /** Construit le hero de detail */
  function buildDetailHero$1() {
    const article = document.querySelector('article.full');
    if (!article) return;

    // Extraire les donnees
    const titleEl = article.querySelector('h1[itemprop="name"]') || article.querySelector('header.full-title h1');
    const title = titleEl ? getText(titleEl) : document.title;
    const posterImg = article.querySelector('#posterimg') || article.querySelector('.mov-img img');
    const posterSrc = posterImg ? posterImg.getAttribute('src') || '' : '';
    const movList = article.querySelector('ul.mov-list');
    const synopsis = getMovListValue(movList, 'synopsis') || getMovListValue(movList, 'description');
    const annee = getMovListValue(movList, 'date') || getMovListValue(movList, 'ann');
    const duree = getMovListValue(movList, 'dur') || getMovListValue(movList, 'episode');
    const version = getMovListValue(movList, 'version');
    const genres = getMovListValue(movList, 'genre');
    const hero = createElement('div', ['flx-detail-hero']);

    // Backdrop (poster flou)
    const backdrop = createElement('div', ['flx-detail-hero__backdrop']);
    if (posterSrc) backdrop.style.backgroundImage = `url("${posterSrc}")`;
    hero.appendChild(backdrop);
    hero.appendChild(createElement('div', ['flx-detail-hero__gradient']));

    // Contenu
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

    // Prepend a l'article ou au contenu
    const detail = createElement('div', ['flx-detail']);
    detail.appendChild(hero);
    const colsMovRight = article.querySelector('.cols-mov');
    if (colsMovRight) colsMovRight.style.display = 'none';
    const fullTitle = article.querySelector('header.full-title');
    if (fullTitle) fullTitle.style.display = 'none';
    article.insertBefore(detail, article.firstChild);
  }

  /** Construit la section player (tabs langue + episodes + lecteurs + iframe) */
  function buildPlayerSection$1() {
    const article = document.querySelector('article.full');
    if (!article) return;
    const tabsbox = article.querySelector('.tabsbox');
    if (!tabsbox) return;

    // Parser les episodes
    const episodeData = parseEpisodes(article);
    if (episodeData.vostfr.length === 0 && episodeData.vf.length === 0) return;
    const section = createElement('div', ['flx-player-section']);
    section.setAttribute('data-flx-zone', 'player-section');
    const langs = [];
    if (episodeData.vostfr.length) langs.push({
      key: 'vostfr',
      label: 'VOSTFR',
      eps: episodeData.vostfr
    });
    if (episodeData.vf.length) langs.push({
      key: 'vf',
      label: 'VF',
      eps: episodeData.vf
    });

    // Etat courant
    let activeLang = langs[0].key;
    let activeEp = 0;
    let activeServer = 0;

    // --- TABS LANGUE ---
    const tabsEl = createElement('div', ['flx-tabs']);
    tabsEl.setAttribute('role', 'tablist');
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
      tab.addEventListener('click', () => selectLang(l.key));
      tabsEl.appendChild(tab);
      tabEls[l.key] = tab;
    });
    section.appendChild(tabsEl);

    // --- EPISODES ---
    const episodesEl = createElement('div', ['flx-episodes']);
    episodesEl.setAttribute('data-flx-zone', 'episodes');
    section.appendChild(episodesEl);

    // --- LECTEURS ---
    const serversEl = createElement('div', ['flx-servers']);
    serversEl.setAttribute('data-flx-zone', 'servers');
    section.appendChild(serversEl);

    // --- PLAYER ---
    const playerWrap = createElement('div', ['flx-player-wrap']);
    const skeleton = createElement('div', ['flx-player-skeleton']);
    skeleton.innerHTML = '<div class="flx-player-loading"><div class="flx-player-loading__spinner"></div><p class="flx-player-loading__text">Chargement...</p></div>';
    playerWrap.appendChild(skeleton);

    // Deplacer l'iframe existante
    const existingIframe = tabsbox.querySelector('iframe#x_player') || tabsbox.querySelector('iframe');
    if (existingIframe) {
      existingIframe.setAttribute('allowfullscreen', '');
      existingIframe.setAttribute('allow', 'autoplay; fullscreen');
      playerWrap.appendChild(existingIframe);
      existingIframe.addEventListener('load', () => {
        skeleton.classList.add('flx-hidden');
      });
    }
    section.appendChild(playerWrap);

    // Inserer apres le hero, avant les recommandations
    const relatedEl = article.querySelector('.related');
    if (relatedEl) {
      article.insertBefore(section, relatedEl);
    } else {
      article.appendChild(section);
    }

    // Masquer le .tabsbox original
    tabsbox.style.display = 'none';

    // --- LOGIQUE ---
    function selectLang(langKey) {
      activeLang = langKey;
      activeEp = 0;
      activeServer = 0;

      // Update tab UI
      Object.values(tabEls).forEach(t => t.classList.remove('flx-tab--active'));
      if (tabEls[langKey]) tabEls[langKey].classList.add('flx-tab--active');
      renderEpisodes();
    }
    function renderEpisodes() {
      episodesEl.innerHTML = '';
      const lang = langs.find(l => l.key === activeLang);
      if (!lang || !lang.eps.length) return;
      lang.eps.forEach((ep, i) => {
        const btn = createElement('button', ['flx-episode']);
        btn.textContent = ep.label;
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('data-flx-zone', 'episodes');
        btn.setAttribute('data-flx-focusable', '');
        btn.setAttribute('data-ep', String(i));
        if (i === activeEp) btn.classList.add('flx-episode--active');
        btn.addEventListener('click', () => selectEpisode(i));
        episodesEl.appendChild(btn);
      });
      renderServers();
    }
    function selectEpisode(idx) {
      activeEp = idx;
      activeServer = 0;
      episodesEl.querySelectorAll('.flx-episode').forEach((btn, i) => {
        btn.classList.toggle('flx-episode--active', i === idx);
      });
      renderServers();
    }
    function renderServers() {
      serversEl.innerHTML = '';
      const lang = langs.find(l => l.key === activeLang);
      if (!lang) return;
      const ep = lang.eps[activeEp];
      if (!ep || !ep.servers.length) return;
      ep.servers.forEach((srv, i) => {
        const btn = createElement('button', ['flx-server']);
        btn.textContent = srv.label;
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('data-flx-zone', 'servers');
        btn.setAttribute('data-flx-focusable', '');
        if (i === activeServer) btn.classList.add('flx-server--active');
        btn.addEventListener('click', () => selectServer(i, srv.url));
        serversEl.appendChild(btn);
      });

      // Auto-charger le premier serveur
      if (ep.servers[0]) loadVideo(ep.servers[0].url);
    }
    function selectServer(idx, url) {
      activeServer = idx;
      serversEl.querySelectorAll('.flx-server').forEach((btn, i) => {
        btn.classList.toggle('flx-server--active', i === idx);
      });
      loadVideo(url);
    }
    function loadVideo(url) {
      const iframe = playerWrap.querySelector('iframe');
      if (!iframe) return;
      skeleton.classList.remove('flx-hidden');
      iframe.src = url;

      // Timeout fallback
      const timer = setTimeout(() => {
        skeleton.classList.add('flx-hidden');
        showToast('Chargement lent. Essayez un autre lecteur.');
      }, 15000);
      iframe.onload = () => {
        clearTimeout(timer);
        skeleton.classList.add('flx-hidden');
      };
    }

    // Rendu initial
    renderEpisodes();
  }

  /** Parse tous les episodes du .tabsbox */
  function parseEpisodes(article) {
    const result = {
      vostfr: [],
      vf: []
    };

    // VOSTFR
    const vostfrBlock = article.querySelector('.blocvostfr');
    if (vostfrBlock) {
      result.vostfr = parseEpList(vostfrBlock, 'vs', article);
    }

    // VF
    const vfBlock = article.querySelector('.blocfr');
    if (vfBlock) {
      result.vf = parseEpList(vfBlock, 'vf', article);
    }
    return result;
  }
  function parseEpList(block, suffix, article) {
    const eps = [];
    const items = block.querySelectorAll('li.clicbtn');
    items.forEach(item => {
      const rel = item.getAttribute('rel'); // ex: "ep3vs"
      if (!rel) return;
      const epNum = rel.replace(/^ep/, '').replace(suffix, '');
      const label = `Ep ${epNum}`;

      // Trouver le conteneur de lecteurs correspondant
      const container = article.querySelector(`.${rel}`) || article.querySelector(`[class*="${rel}"]`);
      if (!container) return;

      // Extraire les URLs de lecteurs
      const servers = [];
      container.querySelectorAll('a[onclick]').forEach((a, i) => {
        const url = extractVideoUrl(a);
        if (!url) return;
        const lbl = getServerLabel(url) || `Lecteur ${i + 1}`;
        servers.push({
          label: lbl,
          url
        });
      });
      if (servers.length === 0) return;
      eps.push({
        label,
        epNum: parseInt(epNum, 10) || 0,
        servers
      });
    });

    // Trier par numero d'episode
    eps.sort((a, b) => a.epNum - b.epNum);
    return eps;
  }

  /**
   * detail-film.js - Transformation DOM page detail film
   */


  /** Point d'entree */
  function transformFilm() {
    hideFilmUnwanted();
    buildDetailHero();
    buildPlayerSection();
    buildRelatedRow();
  }
  function hideFilmUnwanted() {
    ['aside.sidebar', '.adsb', '.full-taglist', '.full-soc', '.std-block-title2', '.sadst', '.full-comms', '.fav-info', '.screenshots-full' // Masque la section screenshots/synopsis SEO
    ].forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
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
    const posterSrc = posterImg ? posterImg.getAttribute('src') || '' : '';

    // Metadonnees
    const movList = article.querySelector('ul.mov-list');
    const synopsis = getMovListValue(movList, 'synopsis') || getMovListValue(movList, 'description') || (() => {
      const p = article.querySelector('.screenshots-full p[itemprop="description"]');
      return p ? getText(p) : '';
    })();
    const annee = getMovListValue(movList, 'date') || getMovListValue(movList, 'ann');
    const duree = getMovListValue(movList, 'dur');
    const version = getMovListValue(movList, 'version');
    const genres = getMovListValue(movList, 'genre');
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
    if (serverData.vf.length) langs.push({
      key: 'vf',
      label: 'VF',
      servers: serverData.vf
    });
    if (serverData.vostfr.length) langs.push({
      key: 'vostfr',
      label: 'VOSTFR',
      servers: serverData.vostfr
    });
    let activeLang = langs[0].key;
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
    const existingIframe = tabsbox.querySelector('iframe#x_player_wfx') || tabsbox.querySelector('iframe#x_player') || tabsbox.querySelector('iframe');
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
    const result = {
      vf: [],
      vostfr: []
    };
    const linkstab = article.querySelector('.tabs-sel.linkstab');
    if (!linkstab) return result;

    // Liens principaux (VF) et sous-groupe VOSTFR
    // Structure : a[onclick] (VF) et div > a[onclick] (VOSTFR)
    linkstab.querySelectorAll(':scope > a[onclick]').forEach((a, i) => {
      const url = extractVideoUrl(a);
      if (!url) return;
      const label = getText(a.querySelector('span.clichost') || a) || getServerLabel(url);
      result.vf.push({
        label,
        url
      });
    });

    // Sous-groupe VOSTFR (les div qui contiennent des a avec "vostfr" / "vost")
    linkstab.querySelectorAll(':scope > div').forEach(div => {
      div.querySelectorAll('a[onclick]').forEach(a => {
        const url = extractVideoUrl(a);
        if (!url) return;
        const label = getText(a.querySelector('span.clichost') || a) || getServerLabel(url);
        result.vostfr.push({
          label,
          url
        });
      });
    });

    // Si on n'a pas detecte de separation, tout est en VF par defaut
    if (result.vf.length === 0 && result.vostfr.length === 0) {
      linkstab.querySelectorAll('a[onclick]').forEach((a, i) => {
        const url = extractVideoUrl(a);
        if (!url) return;
        const label = getServerLabel(url) || `Lecteur ${i + 1}`;
        result.vf.push({
          label,
          url
        });
      });
    }
    return result;
  }

  /**
   * pointer.js - Curseur desktop custom (orb + trainee)
   */

  function initDesktopPointer() {
    if (document.querySelector(".flx-cursor-orb")) return;
    document.documentElement.classList.add("flx-desktop-pointer");
    const root = document.documentElement;
    const supportsPointerEvents = "onpointermove" in window;
    const canHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;
    const finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    const log = (...args) => {
      // eslint-disable-next-line no-console
      console.log("[FlxPointer]", ...args);
    };
    log("initDesktopPointer()", {
      supportsPointerEvents,
      canHover,
      finePointer,
      ua: navigator.userAgent
    });
    const orb = document.createElement("div");
    orb.className = "flx-cursor-orb";
    document.body.appendChild(orb);
    const trailCount = 10;
    const trails = [];
    for (let i = 0; i < trailCount; i += 1) {
      const dot = document.createElement("div");
      dot.className = "flx-cursor-trail";
      dot.style.opacity = String(Math.max(0.1, 0.42 - i * 0.035));
      dot.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.06})`;
      document.body.appendChild(dot);
      trails.push({
        el: dot,
        x: 0,
        y: 0
      });
    }
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.5;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = 0;
    let mouseMode = false;
    let lastMouseMoveAt = 0;
    let inactivityTimer = 0;
    let lastMoveLogAt = 0;
    let moveEventsCount = 0;
    const setMouseMode = enabled => {
      if (mouseMode === enabled) return;
      mouseMode = enabled;
      root.classList.toggle("flx-input-mouse", enabled);
      root.classList.toggle("flx-input-keyboard", !enabled);
      log("mode", enabled ? "mouse" : "keyboard");
    };
    const resetInactivityTimer = () => {
      if (inactivityTimer) {
        window.clearTimeout(inactivityTimer);
      }
      inactivityTimer = window.setTimeout(() => {
        const staleFor = Date.now() - lastMouseMoveAt;
        if (staleFor >= 5000) {
          log("inactivity timeout -> keyboard mode", {
            staleFor
          });
          setMouseMode(false);
        }
      }, 5200);
    };
    const onMove = e => {
      if (e && "pointerType" in e && e.pointerType && e.pointerType !== "mouse") {
        if (e.pointerType === "touch") {
          setMouseMode(false);
        }
        return;
      }
      targetX = e.clientX;
      targetY = e.clientY;
      lastMouseMoveAt = Date.now();
      moveEventsCount += 1;
      if (!mouseMode) setMouseMode(true);
      resetInactivityTimer();
      {
        const now = Date.now();
        if (moveEventsCount <= 6 || now - lastMoveLogAt > 1200) {
          lastMoveLogAt = now;
          log("move", {
            x: Math.round(targetX),
            y: Math.round(targetY),
            type: e.type,
            pointerType: e.pointerType || "mouse",
            count: moveEventsCount
          });
        }
      }
    };
    const onKeyDown = e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      log("keydown -> keyboard mode", {
        key: e.key
      });
      setMouseMode(false);
    };
    const onPointerDown = e => {
      if (e.pointerType && e.pointerType !== "mouse") {
        log("pointerdown non-mouse", {
          pointerType: e.pointerType
        });
        setMouseMode(false);
        return;
      }
      log("pointerdown mouse", {
        x: Math.round(e.clientX),
        y: Math.round(e.clientY)
      });
      onMove(e);
    };
    const onMouseEnter = e => {
      log("mouseenter", {
        x: Math.round(e.clientX),
        y: Math.round(e.clientY)
      });
      onMove(e);
    };
    const tick = () => {
      // Lerp principal
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      orb.style.left = `${currentX}px`;
      orb.style.top = `${currentY}px`;
      let prevX = currentX;
      let prevY = currentY;
      trails.forEach(trail => {
        trail.x += (prevX - trail.x) * 0.35;
        trail.y += (prevY - trail.y) * 0.35;
        trail.el.style.left = `${trail.x}px`;
        trail.el.style.top = `${trail.y}px`;
        prevX = trail.x;
        prevY = trail.y;
      });
      rafId = window.requestAnimationFrame(tick);
    };
    if (supportsPointerEvents) {
      document.addEventListener("pointermove", onMove, {
        passive: true
      });
      document.addEventListener("pointerdown", onPointerDown, {
        passive: true
      });
    } else {
      document.addEventListener("mousemove", onMove, {
        passive: true
      });
      document.addEventListener("mouseenter", onMouseEnter, {
        passive: true
      });
    }
    document.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("blur", () => {
      log("window blur -> keyboard mode");
      setMouseMode(false);
    }, {
      passive: true
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        log("document hidden -> keyboard mode");
        setMouseMode(false);
      }
    }, {
      passive: true
    });
    setMouseMode(false);
    rafId = window.requestAnimationFrame(tick);
    log("listeners attached");
    window.addEventListener("beforeunload", () => {
      if (supportsPointerEvents) {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerdown", onPointerDown);
      }
      if (!supportsPointerEvents) {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseenter", onMouseEnter);
      }
      document.removeEventListener("keydown", onKeyDown, true);
      if (inactivityTimer) window.clearTimeout(inactivityTimer);
      if (rafId) window.cancelAnimationFrame(rafId);
      log("cleanup done");
    });
  }

  /**
   * remote-keys.js - Mapping des touches de telecommande Samsung
   */

  const Keys = {
    // D-pad
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    ENTER: 'Enter',
    // Back / Return
    BACK: 'XF86Back',
    BACK2: 'Backspace'};

  /** Set de toutes les touches de navigation (pour preventDefault) */
  const NAV_KEYS = new Set([Keys.UP, Keys.DOWN, Keys.LEFT, Keys.RIGHT, Keys.ENTER, Keys.BACK, Keys.BACK2]);

  /**
   * focus-manager.js - Gestion du focus et des zones de navigation
   */


  /**
   * Gestionnaire central du focus.
   * Maintient une liste de zones ordonnees et la position du focus dans chaque zone.
   */
  class FocusManager {
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
      const zoneSelectors = [{
        id: 'header',
        selector: '[data-flx-zone="header"]'
      }, {
        id: 'hero',
        selector: '[data-flx-zone="hero"]'
      }, {
        id: 'lang-tabs',
        selector: '[data-flx-zone="lang-tabs"]'
      }, {
        id: 'episodes',
        selector: '[data-flx-zone="episodes"]'
      }, {
        id: 'servers',
        selector: '[data-flx-zone="servers"]'
      }, {
        id: 'player-section',
        selector: '.flx-player-wrap'
      }];

      // Rows dynamiques
      document.querySelectorAll('[data-flx-zone^="row-"]').forEach(el => {
        const zone = el.getAttribute('data-flx-zone');
        if (!zoneSelectors.find(z => z.id === zone)) {
          zoneSelectors.push({
            id: zone,
            selector: `[data-flx-zone="${zone}"]`
          });
        }
      });
      zoneSelectors.forEach(({
        id,
        selector
      }) => {
        const elements = Array.from(document.querySelectorAll(`${selector} [data-flx-focusable]`));
        if (elements.length === 0) {
          // La zone elle-meme est peut-etre focusable
          const zoneEl = document.querySelector(selector);
          if (zoneEl && zoneEl.hasAttribute('data-flx-focusable')) {
            this.zones.push({
              id,
              elements: [zoneEl]
            });
          }
          return;
        }
        this.zones.push({
          id,
          elements
        });
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
        el.focus({
          preventScroll: true
        });
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
      const target = remembered && nextZone.elements.includes(remembered) ? remembered : nextZone.elements[0];
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
  const focusManager = new FocusManager();

  /**
   * search-keyboard.js - Clavier virtuel pour la recherche
   */

  const MODE_ALPHA = "alpha";
  const MODE_ACCENT = "accent";
  const MODE_NUM = "num";
  const KEY_LAYOUTS = {
    [MODE_ALPHA]: [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"], ["U", "V", "W", "X", "Y", "Z"], ["MODE_ACCENT", "MODE_NUM", "SPACE", "BACKSPACE", "CLEAR", "SEARCH", "CLOSE"]],
    [MODE_ACCENT]: [["À", "Â", "Ä", "Æ", "Ç", "É", "È", "Ê", "Ë", "Î"], ["Ï", "Ô", "Ö", "Œ", "Ù", "Û", "Ü", "Ÿ", "Á", "Í"], ["Ó", "Ú", "Ñ"], ["MODE_ALPHA", "MODE_NUM", "SPACE", "BACKSPACE", "CLEAR", "SEARCH", "CLOSE"]],
    [MODE_NUM]: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], ["-", "_", ".", ",", ":", ";", "'", '"', "@", "/"], ["?", "!", "#", "$", "%", "&", "(", ")", "[", "]"], ["MODE_ALPHA", "MODE_ACCENT", "SPACE", "BACKSPACE", "CLEAR", "SEARCH", "CLOSE"]]
  };
  let root = null;
  let preview = null;
  let grid = null;
  let keyEls = [];
  let isOpen = false;
  let activeInput = null;
  let selectedRow = 0;
  let selectedCol = 0;
  let keyboardMode = MODE_ALPHA;
  function ensureUI() {
    if (root) return;
    root = document.createElement("div");
    root.className = "flx-vk";
    root.setAttribute("aria-hidden", "true");
    const panel = document.createElement("div");
    panel.className = "flx-vk__panel";
    const title = document.createElement("div");
    title.className = "flx-vk__title";
    title.textContent = "Clavier recherche";
    panel.appendChild(title);
    preview = document.createElement("div");
    preview.className = "flx-vk__preview";
    panel.appendChild(preview);
    grid = document.createElement("div");
    grid.className = "flx-vk__grid";
    panel.appendChild(grid);
    root.appendChild(panel);
    document.body.appendChild(root);
    buildKeys();
  }
  function buildKeys() {
    if (!grid) return;
    grid.innerHTML = "";
    keyEls = [];
    const layout = KEY_LAYOUTS[keyboardMode];
    layout.forEach((row, rowIdx) => {
      const rowEl = document.createElement("div");
      rowEl.className = "flx-vk__row";
      const rowKeyEls = [];
      row.forEach((keyValue, colIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "flx-vk-key";
        btn.setAttribute("data-row", String(rowIdx));
        btn.setAttribute("data-col", String(colIdx));
        btn.setAttribute("data-key", keyValue);
        btn.textContent = getLabel(keyValue);
        btn.addEventListener("click", () => {
          selectedRow = rowIdx;
          selectedCol = colIdx;
          updateSelection();
          activateKey(keyValue);
        });
        if (keyValue === "SPACE") btn.classList.add("flx-vk-key--wide");
        if (keyValue === "SEARCH") btn.classList.add("flx-vk-key--cta");
        if (keyValue.startsWith("MODE_")) btn.classList.add("flx-vk-key--mode");
        rowEl.appendChild(btn);
        rowKeyEls.push(btn);
      });
      grid.appendChild(rowEl);
      keyEls.push(rowKeyEls);
    });
  }
  function getLabel(value) {
    switch (value) {
      case "MODE_ALPHA":
        return "ABC";
      case "MODE_ACCENT":
        return "é";
      case "MODE_NUM":
        return "1";
      case "SPACE":
        return "Espace";
      case "BACKSPACE":
        return "<-";
      case "CLEAR":
        return "Effacer";
      case "SEARCH":
        return "Rechercher";
      case "CLOSE":
        return "Fermer";
      default:
        return value;
    }
  }
  function setInputValue(next) {
    if (!activeInput) return;
    activeInput.value = applySentenceCase(next);
    activeInput.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    activeInput.dispatchEvent(new Event("change", {
      bubbles: true
    }));
    updatePreview();
  }
  function applySentenceCase(value) {
    const lower = String(value || "").toLocaleLowerCase("fr-FR");
    const idx = lower.search(/[a-zà-öø-ÿ]/i);
    if (idx < 0) return lower;
    const first = lower.charAt(idx).toLocaleUpperCase("fr-FR");
    return `${lower.slice(0, idx)}${first}${lower.slice(idx + 1)}`;
  }
  function activateKey(keyValue) {
    if (!activeInput) return;
    const curr = activeInput.value || "";
    switch (keyValue) {
      case "MODE_ALPHA":
        switchMode(MODE_ALPHA);
        break;
      case "MODE_ACCENT":
        switchMode(MODE_ACCENT);
        break;
      case "MODE_NUM":
        switchMode(MODE_NUM);
        break;
      case "SPACE":
        setInputValue(`${curr} `);
        break;
      case "BACKSPACE":
        setInputValue(curr.slice(0, -1));
        break;
      case "CLEAR":
        setInputValue("");
        break;
      case "SEARCH":
        submitSearch();
        break;
      case "CLOSE":
        closeVirtualSearchKeyboard();
        break;
      default:
        setInputValue(`${curr}${keyValue}`);
        break;
    }
  }
  function submitSearch() {
    if (!activeInput) return;
    const form = activeInput.form || activeInput.closest("form");
    const doSearchBtn = document.getElementById("dosearch");
    if (typeof window.list_submit === "function") {
      window.list_submit(-1);
      closeVirtualSearchKeyboard();
      return;
    }
    if (doSearchBtn && typeof doSearchBtn.click === "function") {
      doSearchBtn.click();
      closeVirtualSearchKeyboard();
      return;
    }
    if (form) {
      form.dispatchEvent(new Event("submit", {
        bubbles: true,
        cancelable: true
      }));
      if (typeof form.submit === "function") form.submit();
    } else {
      activeInput.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true
      }));
    }
    closeVirtualSearchKeyboard();
  }
  function updatePreview() {
    if (!preview) return;
    const val = activeInput ? activeInput.value || "" : "";
    preview.innerHTML = "";
    const text = document.createElement("span");
    text.className = "flx-vk__preview-text";
    text.textContent = val || " ";
    const caret = document.createElement("span");
    caret.className = "flx-vk__caret";
    caret.textContent = "|";
    preview.appendChild(text);
    preview.appendChild(caret);
  }
  function updateSelection() {
    keyEls.forEach(row => row.forEach(el => el.classList.remove("flx-focused")));
    const selected = keyEls[selectedRow] && keyEls[selectedRow][selectedCol];
    if (!selected) return;
    selected.classList.add("flx-focused");
    selected.scrollIntoView({
      block: "nearest",
      inline: "nearest"
    });
  }
  function switchMode(nextMode) {
    if (!KEY_LAYOUTS[nextMode]) return;
    keyboardMode = nextMode;
    selectedRow = 0;
    selectedCol = 0;
    buildKeys();
    updateSelection();
  }
  function moveSelection(dr, dc) {
    if (!keyEls.length) return;
    const nextRow = Math.max(0, Math.min(keyEls.length - 1, selectedRow + dr));
    const rowLen = keyEls[nextRow] ? keyEls[nextRow].length : 0;
    const nextCol = Math.max(0, Math.min(Math.max(0, rowLen - 1), selectedCol + dc));
    selectedRow = nextRow;
    selectedCol = nextCol;
    updateSelection();
  }
  function openVirtualSearchKeyboard(inputEl) {
    if (!inputEl) return;
    ensureUI();
    activeInput = inputEl;
    isOpen = true;
    root.classList.add("flx-vk--open");
    root.setAttribute("aria-hidden", "false");
    keyboardMode = MODE_ALPHA;
    selectedRow = 0;
    selectedCol = 0;
    buildKeys();
    updatePreview();
    updateSelection();
  }
  function closeVirtualSearchKeyboard() {
    if (!root) return;
    isOpen = false;
    root.classList.remove("flx-vk--open");
    root.setAttribute("aria-hidden", "true");
    if (activeInput) activeInput.focus({
      preventScroll: true
    });
  }
  function isVirtualSearchKeyboardOpen() {
    return isOpen;
  }
  function handleVirtualSearchKeyboardNavKey(key) {
    if (!isOpen) return false;
    switch (key) {
      case "ArrowLeft":
        moveSelection(0, -1);
        return true;
      case "ArrowRight":
        moveSelection(0, 1);
        return true;
      case "ArrowUp":
        moveSelection(-1, 0);
        return true;
      case "ArrowDown":
        moveSelection(1, 0);
        return true;
      case "Enter":
        {
          const layout = KEY_LAYOUTS[keyboardMode];
          const keyValue = layout[selectedRow] && layout[selectedRow][selectedCol];
          if (keyValue) activateKey(keyValue);
          return true;
        }
      case "XF86Back":
        closeVirtualSearchKeyboard();
        return true;
      case "Backspace":
        // Sur PC: supprime un caractere rapidement
        activateKey("BACKSPACE");
        return true;
      default:
        return false;
    }
  }

  /**
   * spatial-nav.js - Navigation spatiale par D-pad
   */

  let initialized = false;

  /** Initialise la navigation spatiale */
  function initSpatialNav() {
    if (initialized) return;
    initialized = true;

    // Debounce pour eviter le spam du D-pad
    const handleKeyDown = debounce(_handleKeyDown, 80);
    document.addEventListener("keydown", e => {
      if (NAV_KEYS.has(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
      handleKeyDown(e);
    }, true);

    // Focus initial apres que le DOM soit pret
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        focusManager.focusFirst();
      });
    });
  }
  function _handleKeyDown(e) {
    const {
      key
    } = e;
    if (isVirtualSearchKeyboardOpen() && handleVirtualSearchKeyboardNavKey(key)) {
      return;
    }

    // Ignorer si on est dans un input
    if (e.target && e.target.tagName === "INPUT") {
      if (key === Keys.ENTER) {
        openVirtualSearchKeyboard(e.target);
      }
      return;
    }
    switch (key) {
      case Keys.LEFT:
        if (!focusManager.moveHorizontal(-1)) ;
        break;
      case Keys.RIGHT:
        if (!focusManager.moveHorizontal(1)) ;
        break;
      case Keys.UP:
        focusManager.moveVertical(-1);
        break;
      case Keys.DOWN:
        focusManager.moveVertical(1);
        break;
      case Keys.ENTER:
        {
          const focused = focusManager.getFocused();
          if (focused) {
            if (focused.tagName === "INPUT") {
              openVirtualSearchKeyboard(focused);
              return;
            }
            focused.click();
          }
          break;
        }
      case Keys.BACK:
      case Keys.BACK2:
        handleBack();
        break;
    }
  }

  /** Gestion de la touche Back */
  function handleBack() {
    const zone = focusManager.activeZone;

    // Si on est dans le player, revenir a la liste des lecteurs
    if (zone === "player-section") {
      focusManager.moveVertical(-1);
      return;
    }

    // Sinon, naviguer dans l'historique
    if (window.history.length > 1) {
      const overlay = document.querySelector(".flx-page-transition");
      if (overlay) {
        overlay.classList.add("flx-active");
        setTimeout(() => window.history.back(), 250);
      } else {
        window.history.back();
      }
    }
  }

  /**
   * player-enhance.js - Enhancement du player iframe
   */


  /** Detecte l'ID de l'iframe player selon le type de page */
  function getPlayerIframeId() {
    if (document.getElementById('x_player_wfx')) return 'x_player_wfx';
    if (document.getElementById('x_player')) return 'x_player';
    return null;
  }

  /** Intercepte window.loadVideo pour integrer le skeleton et les erreurs */
  function patchLoadVideo() {
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
  function makePlayerResponsive() {
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

  /**
   * controls.js - Gestion des touches media pour le player
   * Note: Les iframes cross-origin ne permettent pas d'envoyer des evenements
   * directement a la video interne. On gere ici le comportement au niveau page.
   */


  /**
   * Initialise les controles TV.
   * Quand le player est actif et qu'on appuie sur une touche media,
   * on essaie de relayer l'evenement a l'iframe via postMessage.
   */
  function initPlayerControls() {
    document.addEventListener('keydown', e => {
      return;
    }, {
      capture: true
    });
  }

  /**
   * performance.js - Optimisations performance pour Samsung TV
   */

  /** Desactive les animations CSS du site original */
  function disableOriginalAnimations() {
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
  function destroyOwlCarousels() {
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
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      });
      // Timeout de securite
      setTimeout(() => observer.disconnect(), 10000);
    }
  }

  /** Active l'acceleration hardware sur les conteneurs scrollables */
  function enableHardwareAcceleration() {
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
  function removeAdScripts() {
    const adKeywords = ['scandiakenyan', 'wapperrattage', 'mopusescrusca', 'doubleclick', 'googlesyndication', 'adnxs', 'popads', 'popcash', 'juicyads', 'exosrv', 'adsterra', 'propellerads'];

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
              try {
                node.parentNode.removeChild(node);
              } catch (_) {}
            }
          }
        });
      });
    });
    scriptObserver.observe(document.head || document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  /** Optimisations globales de scroll */
  function optimizeScrollPerformance() {
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

  /**
   * lazy-load.js - Lazy loading des images hors viewport
   */

  /** Active le lazy loading natif sur toutes les images */
  function enableNativeLazyLoad() {
    document.querySelectorAll('img:not([loading])').forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  }

  /** Intersection Observer pour les images data-src (lazy custom) */
  function initLazyObserver() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: charger toutes les images immediatement
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
      });
      return;
    }
    const observer = new IntersectionObserver(entries => {
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
    }, {
      rootMargin: '200px 0px',
      threshold: 0
    });
    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
    return observer;
  }

  /** Observe les nouvelles rows ajoutees dynamiquement */
  function watchNewRows(observer) {
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
    mutationObs.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * userScript.js - Entry point FlemmixTV TizenBrew Module
   *
   * Injecte le theme Netflix-like sur flemmix.golf pour Samsung TV.
   */


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
      content.style.cssText = "float:none!important;width:100%!important;margin:0!important;padding:0!important;";
    }

    // Transformer chaque .block-main
    document.querySelectorAll(".block-main").forEach((block, idx) => {
      transformBlockForCategory(block, idx);
    });

    // Transformer les .mov orphelins (hors .block-main)
    const orphanMovs = document.querySelectorAll(".content.insideblock > .mov, .content.insideblock > .clearfix > .mov");
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
      content.style.cssText = "float:none!important;width:100%!important;margin:0!important;padding:0!important;";
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
        fullsearch.querySelectorAll("input[type='button'], input[type='submit'], button").forEach(btn => {
          btn.setAttribute("tabindex", "0");
          btn.setAttribute("data-flx-focusable", "");
        });
      }
      innerPage.querySelectorAll(".berrors, .sub-title").forEach(el => {
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
        document.querySelectorAll(".search-page .mov").forEach(mov => {
          mov.style.display = "";
        });
        applySearchUi();
      });
      observer.observe(host, {
        childList: true,
        subtree: true
      });
      window.__flxSearchObserver = observer;
    }
  }
  function wrapSearchResults(movs) {
    if (!movs || movs.length === 0) return;
    const first = movs[0];
    const container = first.closest(".search-page") || first.parentNode;
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
      titleText = leftMa ? (leftMa.textContent || "").trim() : (blockTitle.textContent || "").trim();
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
    const poster = imgEl ? imgEl.getAttribute("src") || imgEl.getAttribute("data-src") || "" : "";
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
    card.addEventListener("click", e => {
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

})();
//# sourceMappingURL=userScript.js.map

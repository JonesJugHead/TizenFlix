/**
 * search-keyboard.js - Clavier virtuel pour la recherche
 */

const MODE_ALPHA = "alpha";
const MODE_ACCENT = "accent";
const MODE_NUM = "num";

const KEY_LAYOUTS = {
  [MODE_ALPHA]: [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    ["U", "V", "W", "X", "Y", "Z"],
    [
      "MODE_ACCENT",
      "MODE_NUM",
      "SPACE",
      "BACKSPACE",
      "CLEAR",
      "SEARCH",
      "CLOSE",
    ],
  ],
  [MODE_ACCENT]: [
    ["À", "Â", "Ä", "Æ", "Ç", "É", "È", "Ê", "Ë", "Î"],
    ["Ï", "Ô", "Ö", "Œ", "Ù", "Û", "Ü", "Ÿ", "Á", "Í"],
    ["Ó", "Ú", "Ñ"],
    [
      "MODE_ALPHA",
      "MODE_NUM",
      "SPACE",
      "BACKSPACE",
      "CLEAR",
      "SEARCH",
      "CLOSE",
    ],
  ],
  [MODE_NUM]: [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["-", "_", ".", ",", ":", ";", "'", '"', "@", "/"],
    ["?", "!", "#", "$", "%", "&", "(", ")", "[", "]"],
    [
      "MODE_ALPHA",
      "MODE_ACCENT",
      "SPACE",
      "BACKSPACE",
      "CLEAR",
      "SEARCH",
      "CLOSE",
    ],
  ],
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
  activeInput.dispatchEvent(new Event("input", { bubbles: true }));
  activeInput.dispatchEvent(new Event("change", { bubbles: true }));
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
    form.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true }),
    );
    if (typeof form.submit === "function") form.submit();
  } else {
    activeInput.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
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
  keyEls.forEach((row) =>
    row.forEach((el) => el.classList.remove("flx-focused")),
  );
  const selected = keyEls[selectedRow] && keyEls[selectedRow][selectedCol];
  if (!selected) return;
  selected.classList.add("flx-focused");
  selected.scrollIntoView({ block: "nearest", inline: "nearest" });
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
  const nextCol = Math.max(
    0,
    Math.min(Math.max(0, rowLen - 1), selectedCol + dc),
  );
  selectedRow = nextRow;
  selectedCol = nextCol;
  updateSelection();
}

export function openVirtualSearchKeyboard(inputEl) {
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

export function closeVirtualSearchKeyboard() {
  if (!root) return;
  isOpen = false;
  root.classList.remove("flx-vk--open");
  root.setAttribute("aria-hidden", "true");
  if (activeInput) activeInput.focus({ preventScroll: true });
}

export function isVirtualSearchKeyboardOpen() {
  return isOpen;
}

export function handleVirtualSearchKeyboardNavKey(key) {
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
    case "Enter": {
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

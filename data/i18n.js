// Lightweight language switch for the v0.5 static pages.
// Defaults to Chinese and persists the user's choice in localStorage.

(function () {
  const STORAGE_KEY = "livingCraftLang";

  function normalize(value) {
    return value === "en" ? "en" : "zh";
  }

  function getLang() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    if (requested === "en" || requested === "zh") return requested;
    try {
      return normalize(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return "zh";
    }
  }

  function textFor(el, lang) {
    return lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-zh");
  }

  function htmlFor(el, lang) {
    return lang === "en" ? el.getAttribute("data-en-html") : el.getAttribute("data-zh-html");
  }

  function ensureStyle() {
    if (document.getElementById("living-i18n-style")) return;
    const style = document.createElement("style");
    style.id = "living-i18n-style";
    style.textContent = `
      .i18n-sub {
        display: block;
        margin-top: 0.28em;
        color: var(--ink-light, #8A8078);
        font-family: "Cormorant Garamond", "Noto Serif SC", serif;
        font-size: 0.56em;
        font-style: italic;
        font-weight: 300;
        letter-spacing: 0.02em;
        line-height: 1.25;
        text-transform: none;
      }
      .nav-link .i18n-sub,
      .nav-actions a .i18n-sub,
      .links a .i18n-sub,
      .btn .i18n-sub,
      .nav-cta .i18n-sub,
      .filter-btn .i18n-sub,
      .view-btn .i18n-sub,
      .card-inquire .i18n-sub,
      .solid-btn .i18n-sub,
      .icon-btn .i18n-sub {
        margin-top: 0.12em;
        font-size: 0.72em;
        letter-spacing: 0.06em;
      }
      .hero-copy .i18n-sub,
      .section-desc .i18n-sub,
      .header p .i18n-sub,
      .intro .i18n-sub {
        font-size: 0.82em;
        line-height: 1.45;
      }
    `;
    document.head.appendChild(style);
  }

  function applyTranslations(root) {
    const scope = root || document;
    const lang = getLang();
    ensureStyle();
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.documentElement.setAttribute("data-lang", lang);

    scope.querySelectorAll("[data-zh], [data-en]").forEach(el => {
      const value = textFor(el, lang);
      if (value === null) return;
      if (el.hasAttribute("data-i18n-sub")) {
        const secondary = lang === "en" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
        el.replaceChildren(document.createTextNode(value));
        if (secondary) {
          const sub = document.createElement("span");
          sub.className = "i18n-sub";
          sub.textContent = secondary;
          el.appendChild(sub);
        }
      } else {
        el.textContent = value;
      }
    });

    scope.querySelectorAll("[data-zh-html], [data-en-html]").forEach(el => {
      const value = htmlFor(el, lang);
      if (value !== null) el.innerHTML = value;
    });

    scope.querySelectorAll("[data-zh-aria], [data-en-aria]").forEach(el => {
      const value = lang === "en" ? el.getAttribute("data-en-aria") : el.getAttribute("data-zh-aria");
      if (value !== null) el.setAttribute("aria-label", value);
    });

    scope.querySelectorAll("[data-lang-set]").forEach(btn => {
      const active = btn.getAttribute("data-lang-set") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setLang(lang) {
    const next = normalize(lang);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      // Ignore private-mode storage failures; the current page still updates.
    }
    applyTranslations(document);
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: next } }));
  }

  function pick(zh, en) {
    return getLang() === "en" ? en : zh;
  }

  document.addEventListener("click", event => {
    const btn = event.target.closest("[data-lang-set]");
    if (!btn) return;
    event.preventDefault();
    setLang(btn.getAttribute("data-lang-set"));
  });

  document.addEventListener("DOMContentLoaded", () => {
    setLang(getLang());
  });

  window.LIVING_I18N = {
    getLang,
    setLang,
    applyTranslations,
    pick
  };
})();

(function () {
  const THEME_KEY = "living-craft-theme";
  const THEME_CLASSES = ["theme-ochre", "theme-celadon"];
  const ORDER = ["ochre", "celadon", "original"];
  const THEMES = {
    ochre: {
      className: "theme-ochre",
      label: "暖 · 赭石",
      panelTitle: "赭石",
      panelCopy: "取自唐宋壁画矿物色，象征大地与岁月。"
    },
    celadon: {
      className: "theme-celadon",
      label: "翠 · 秘色",
      panelTitle: "秘色",
      panelCopy: "以青瓷釉色作冷调点睛，适合展览与沉浸式场景。"
    },
    original: {
      className: "",
      label: "墨 · 原色",
      panelTitle: "原色",
      panelCopy: "保留 heritage 纸墨骨架，以克制金色作为少量强调。"
    }
  };

  const root = document.documentElement;

  function validTheme(theme) {
    return Object.prototype.hasOwnProperty.call(THEMES, theme);
  }

  function themeFromRoot() {
    if (root.classList.contains("theme-celadon")) return "celadon";
    if (root.classList.contains("theme-ochre")) return "ochre";
    return "original";
  }

  function getInitialTheme() {
    try {
      const stored = window.localStorage.getItem(THEME_KEY);
      if (validTheme(stored)) return stored;
    } catch (_) {
      // Theme still works for the current page when storage is unavailable.
    }
    const markupTheme = themeFromRoot();
    return markupTheme === "original" ? "ochre" : markupTheme;
  }

  function nextTheme(theme) {
    const index = ORDER.indexOf(theme);
    return ORDER[(index + 1) % ORDER.length] || "ochre";
  }

  function setThemeClass(theme) {
    THEME_CLASSES.forEach((className) => root.classList.remove(className));
    const className = THEMES[theme].className;
    if (className) root.classList.add(className);
    root.dataset.theme = theme;
  }

  function ensureButtonMarkup(button) {
    if (!button.querySelector(".theme-toggle__dot")) {
      button.insertAdjacentHTML("afterbegin", '<span class="theme-toggle__dot" aria-hidden="true"></span>');
    }
    if (!button.querySelector(".theme-toggle__label")) {
      button.insertAdjacentHTML("beforeend", '<span class="theme-toggle__label"></span>');
    }
    if (!button.querySelector(".theme-toggle__panel")) {
      button.insertAdjacentHTML(
        "beforeend",
        '<span class="theme-toggle__panel" aria-hidden="true"><span class="theme-toggle__panel-title"></span><span class="theme-toggle__panel-copy"></span></span>'
      );
    }
  }

  function syncButtons(theme) {
    const next = nextTheme(theme);
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      ensureButtonMarkup(button);
      const label = button.querySelector(".theme-toggle__label");
      const panelTitle = button.querySelector(".theme-toggle__panel-title");
      const panelCopy = button.querySelector(".theme-toggle__panel-copy");
      if (label) label.textContent = THEMES[theme].label;
      if (panelTitle) panelTitle.textContent = THEMES[theme].panelTitle;
      if (panelCopy) panelCopy.textContent = THEMES[theme].panelCopy;
      button.setAttribute("aria-label", `${THEMES[theme].label}，点击切换至 ${THEMES[next].label}`);
      button.setAttribute("title", `${THEMES[theme].label}，点击切换至 ${THEMES[next].label}`);
      button.setAttribute("aria-pressed", theme !== "original" ? "true" : "false");
    });
  }

  function applyTheme(theme) {
    const next = validTheme(theme) ? theme : "ochre";
    setThemeClass(next);
    syncButtons(next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch (_) {
      // Ignore storage failures in restricted browsing contexts.
    }
  }

  function bindButton(button) {
    if (button.dataset.themeToggleBound === "true") return;
    button.dataset.themeToggleBound = "true";
    button.addEventListener("click", () => {
      applyTheme(nextTheme(root.dataset.theme || themeFromRoot()));
    });
  }

  function buildButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.dataset.themeToggle = "true";
    ensureButtonMarkup(button);
    bindButton(button);
    return button;
  }

  const NAV_ITEMS = [
    { id: "home", href: "/livingcraft-demo/", zh: "首页", en: "Home" },
    { id: "explore", href: "/livingcraft-demo/explore.html", zh: "VR 展厅", en: "VR Gallery" },
    { id: "collections", href: "/livingcraft-demo/collections.html", zh: "艺术品", en: "Works" },
    { id: "exhibitions", href: "/livingcraft-demo/exhibitions.html", zh: "展览", en: "Exhibitions" },
    { id: "artisans", href: "/livingcraft-demo/artisans.html", zh: "艺术家", en: "Artists" },
    { id: "about", href: "/livingcraft-demo/about.html", zh: "关于", en: "About" },
    { id: "help", href: "mailto:hello@xmeta.art", zh: "帮助", en: "Help" }
  ];

  function currentDepth() {
    const path = window.location.pathname.replace(/\/+$/, "");
    const parts = path.split("/").filter(Boolean);
    const projectIndex = parts.lastIndexOf("xemta-cultural");
    let afterProject = projectIndex >= 0 ? parts.slice(projectIndex + 1) : parts;
    if (projectIndex < 0 && window.location.hostname.endsWith("github.io")) {
      afterProject = parts.slice(1);
    }
    if (!afterProject.length) return 0;
    const last = afterProject[afterProject.length - 1] || "";
    const hasFile = /\.[a-z0-9]+$/i.test(last);
    return hasFile ? Math.max(afterProject.length - 1, 0) : afterProject.length;
  }

  function pathTo(href) {
    if (/^(mailto:|https?:|#|\/)/i.test(href)) return href;
    return "../".repeat(currentDepth()) + href;
  }

  function currentSection() {
    const path = decodeURIComponent(window.location.pathname).toLowerCase();
    if (path.includes("/vr-preview") || path.endsWith("explore.html")) return "explore";
    if (
      path.endsWith("collections.html") ||
      path.includes("artifact-detail") ||
      path.includes("/auction-preview") ||
      path.includes("/auction-room")
    ) {
      return "collections";
    }
    if (path.includes("/exhibitions/") || path.includes("exhibition") || path.endsWith("exhibitions.html")) {
      return "exhibitions";
    }
    if (path.endsWith("artisans.html")) return "artisans";
    if (path.endsWith("about.html")) return "about";
    if (path.endsWith("index-v2.html") || /\/(?:xemta-cultural|livingcraft-demo)\/?$/.test(path)) return "home";
    return "";
  }

  function navLink(item, activeSection) {
    const active = item.id === activeSection;
    const href = pathTo(item.href);
    const ariaCurrent = active ? ' aria-current="page"' : "";
    return `<a class="nav-link${active ? " active" : ""}" href="${href}" data-zh="${item.zh}" data-en="${item.en}"${ariaCurrent}>${item.zh}</a>`;
  }

  function buildUnifiedNav() {
    const nav = document.createElement("nav");
    nav.className = "nav site-unified-nav";
    nav.setAttribute("aria-label", "主导航 Main navigation");
    const activeSection = currentSection();
    nav.innerHTML = `
      <div class="brand-row">
        <a class="brand brand-centered" href="${pathTo("/livingcraft-demo/")}" aria-label="新生万物首页 Living Craft home">
          <span class="brand-text">
            <span class="brand-cn display-cn">新生万物</span>
            <span class="brand-en">Living Craft · MADverse</span>
          </span>
        </a>
        <div class="nav-right">
          <button class="theme-toggle" type="button" data-theme-toggle="true" aria-label="切换配色"></button>
          <span class="lang-switch" aria-label="Language">
            <button type="button" class="active" data-lang-set="zh">中</button>
            <span>·</span>
            <button type="button" data-lang-set="en">EN</button>
          </span>
          <a class="nav-login" href="#" data-zh="登录" data-en="Sign In">登录</a>
          <a class="nav-cta" href="${pathTo("/livingcraft-demo/vr-preview/")}" data-zh="进入展览" data-en="Enter Exhibition">进入展览</a>
        </div>
      </div>
      <div class="nav-row">
        <div class="nav-links">
          ${NAV_ITEMS.map((item) => navLink(item, activeSection)).join("")}
        </div>
      </div>
    `;
    return nav;
  }

  function mountUnifiedNav() {
    const existing = document.querySelector("body > nav.nav, body > header.site-header, body > nav.topbar");
    if (!existing) return false;
    if (existing.classList.contains("site-unified-nav")) return true;
    const shouldRemoveFloatingVrActions = existing.matches("nav.topbar");
    const nav = buildUnifiedNav();
    existing.replaceWith(nav);
    if (shouldRemoveFloatingVrActions) {
      const floatingActions = document.querySelector("body > .nav-actions");
      if (floatingActions) floatingActions.remove();
    }
    if (window.LIVING_I18N && typeof window.LIVING_I18N.applyTranslations === "function") {
      window.LIVING_I18N.applyTranslations(nav);
    }
    return true;
  }

  function mountToggle() {
    mountUnifiedNav();
    const existing = document.querySelector("[data-theme-toggle]");
    if (existing) {
      bindButton(existing);
      applyTheme(getInitialTheme());
      return true;
    }

    const host = document.querySelector(".nav-side, .nav-actions");
    if (!host) return false;

    const button = buildButton();
    const langSwitch = host.querySelector(".lang-switch");
    if (langSwitch) {
      host.insertBefore(button, langSwitch);
    } else {
      host.insertBefore(button, host.firstChild);
    }
    applyTheme(getInitialTheme());
    return true;
  }

  function waitForNav() {
    if (mountToggle()) return;
    if (!document.body || !("MutationObserver" in window)) return;
    const observer = new MutationObserver(() => {
      if (mountToggle()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 6000);
  }

  window.LIVING_THEME = { applyTheme };
  applyTheme(getInitialTheme());
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForNav);
  } else {
    waitForNav();
  }
})();

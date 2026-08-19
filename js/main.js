import { mountHeroVisual } from "./hero-visuals.js";
import { setupI18n, t } from "./i18n.js";
import { closeAccessibilitySettings, setupAccessibilitySettings } from "./settings.js";
import { setupSplashScreen } from "./splash.js?v=6";

function setupSmoothScrolling() {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const coarsePointer = matchMedia("(pointer: coarse)");

  const stop = () => {
    window.siteLenis?.destroy();
    delete window.siteLenis;
  };

  const start = () => {
    stop();
    const enabled = document.documentElement.dataset.smoothScroll !== "false";
    if (!enabled || reducedMotion.matches || coarsePointer.matches || typeof window.Lenis !== "function") return;
    window.siteLenis = new window.Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.09,
      wheelMultiplier: 0.85,
      syncTouch: false,
      anchors: false,
    });
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !window.siteLenis || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute("href");
    const target = hash === "#topo" ? document.documentElement : document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    const headerOffset = document.querySelector(".site-header")?.offsetHeight ?? 0;
    window.siteLenis.scrollTo(target, {
      offset: target === document.documentElement ? 0 : -(headerOffset + 12),
      onComplete: () => {
        if (link.classList.contains("pular-conteudo")) target.focus({ preventScroll: true });
      },
    });
    history.pushState(null, "", hash);
  });

  reducedMotion.addEventListener("change", start);
  coarsePointer.addEventListener("change", start);
  window.addEventListener("farol:smooth-scroll-change", start);
  start();
}

function setupNavigation() {
  const button = document.querySelector(".botao-menu");
  const navigation = document.querySelector(".site-nav");
  const mobileViewport = matchMedia("(max-width: 860px)");
  const close = () => {
    button.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
    document.body.classList.remove("menu-open");
  };

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    if (!open && mobileViewport.matches) {
      closeAccessibilitySettings({ restoreFocus: false, immediate: true });
    }
    button.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("open", !open);
    document.body.classList.toggle("menu-open", !open);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      close();
      button.focus();
    }
  });
}

function setupScrollEffects() {
  const backToTop = document.querySelector("[data-back-to-top]");
  backToTop.addEventListener("click", () => {
    if (window.siteLenis) window.siteLenis.scrollTo(0);
    else document.querySelector("#topo").scrollIntoView();
  });
  const updateButton = () => backToTop.classList.toggle("visible", window.scrollY > 700);
  window.addEventListener("scroll", updateButton, { passive: true });
  updateButton();

  const items = document.querySelectorAll(".reveal");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  items.forEach((item) => observer.observe(item));
}

function setupScreenPreview() {
  const dialog = document.querySelector("#screen-preview-dialog");
  const image = document.querySelector("#screen-preview-image");
  const title = document.querySelector("#screen-preview-title");
  const closeButton = document.querySelector("[data-preview-close]");
  if (!dialog || !image || !title || !closeButton) return;

  document.querySelectorAll("[data-preview-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const figure = button.closest("figure");
      const sourceImage = figure?.querySelector("img");
      const siteName = figure?.querySelector("figcaption > span")?.textContent?.trim() || "";
      image.src = button.dataset.previewSrc;
      image.alt = sourceImage?.alt || "";
      title.textContent = siteName ? `${t("Visualização em tela cheia")}: ${siteName}` : t("Visualização em tela cheia");
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

async function initialize() {
  setupSplashScreen();
  mountHeroVisual();
  setupI18n();
  setupAccessibilitySettings();
  setupNavigation();
  setupSmoothScrolling();
  setupScrollEffects();
  setupScreenPreview();
}

initialize().catch((error) => console.error(t("Falha ao iniciar a página:"), error));

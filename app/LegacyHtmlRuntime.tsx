"use client";

import { useEffect } from "react";

type RuntimeKind =
  | "limited-drop"
  | "mo-gear"
  | "record-detail"
  | "request-a-blade"
  | "request-entry"
  | "vanguard-request";

type LegacyHtmlRuntimeProps = {
  route: string;
  kind: RuntimeKind;
  successMessage?: string;
};

declare global {
  interface Window {
    lucide?: { createIcons?: () => void };
    MOK_RECORDS?: Record<string, {
      hero?: string;
      gallery?: string[];
      requestHref?: string;
    }>;
    selectPath?: (n: number) => void;
    submitSuccess?: (event?: Event) => void;
  }
}

const htmlRoutes: Record<string, string> = {
  "index.html": "/",
  "contact.html": "/contact",
  "culinary.html": "/culinary",
  "edge-academy.html": "/edge-academy",
  "expedition.html": "/expedition",
  "limited-drop.html": "/limited-drop",
  "mo-gear.html": "/mo-gear",
  "record-detail.html": "/record-detail",
  "request-a-blade.html": "/request-a-blade",
  "request-entry.html": "/request-entry",
  "singularis.html": "/singularis",
  "the-vault.html": "/the-vault",
  "vanguard.html": "/vanguard",
  "vanguard-request.html": "/vanguard-request",
  "why-mo.html": "/why-mo",
};

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function loadScriptOnce(src: string, id: string) {
  if (document.getElementById(id)) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function normalizePath(value: string | null) {
  if (!value) return value;
  if (/^(https?:|mailto:|tel:|#|data:|blob:|\/)/i.test(value)) return value;
  if (value.startsWith("assets/")) return `/${value}`;
  if (value.startsWith("images/")) return `/legacy/${value}`;
  return htmlRoutes[value] ?? value;
}

function normalizeLegacyDom(root: Element | Document = document) {
  root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
    const href = normalizePath(link.getAttribute("href"));
    if (href) link.setAttribute("href", href);
  });

  root.querySelectorAll<HTMLImageElement | HTMLSourceElement | HTMLVideoElement>("[src]").forEach((node) => {
    const src = normalizePath(node.getAttribute("src"));
    if (src) node.setAttribute("src", src);
  });

  root.querySelectorAll<HTMLVideoElement>("[poster]").forEach((node) => {
    const poster = normalizePath(node.getAttribute("poster"));
    if (poster) node.setAttribute("poster", poster);
  });
}

function setupFadeUp(root: Element) {
  if (!("IntersectionObserver" in window)) {
    root.querySelectorAll(".fade-up").forEach((el) => el.classList.add("is-visible"));
    return undefined;
  }

  const observer = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      window.setTimeout(() => entry.target.classList.add("is-visible"), delay);
      delay += 100;
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  root.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

function setupLimitedDrop(root: Element) {
  const intentSelect = root.querySelector<HTMLSelectElement>("#intent-select");
  const pieceInterestInput = root.querySelector<HTMLInputElement>("#piece-interest");

  root.querySelectorAll<HTMLElement>("[data-intent-target]").forEach((card) => {
    card.addEventListener("click", () => {
      const targetId = card.getAttribute("data-scroll-target");
      const nextIntent = card.getAttribute("data-intent-target");
      if (intentSelect && nextIntent) intentSelect.value = nextIntent;
      if (pieceInterestInput && !pieceInterestInput.value.trim()) {
        pieceInterestInput.value = "Next Limited Drop";
      }
      if (targetId) {
        root.querySelector<HTMLElement>(`#${targetId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function setupRequestBlade() {
  window.selectPath = (n: number) => {
    document.getElementById("commission-form")?.classList.add("hidden");
    document.getElementById("limited-form")?.classList.add("hidden");
    document.getElementById("inquiry-form")?.classList.add("hidden");

    if (n === 1) document.getElementById("commission-form")?.classList.remove("hidden");
    if (n === 2) document.getElementById("limited-form")?.classList.remove("hidden");
    if (n === 3) document.getElementById("inquiry-form")?.classList.remove("hidden");
  };
}

function setupSubmitSuccess(message: string, resetForms: boolean) {
  window.submitSuccess = (event?: Event) => {
    if (event) event.preventDefault();
    const msg = document.createElement("div");
    msg.style.cssText =
      "position:fixed;bottom:16px;right:16px;width:min(420px, calc(100vw - 32px));background:#d97706;color:#111;padding:18px 20px;border-radius:4px;font-size:13px;letter-spacing:0.5px;box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.3);z-index:9999;line-height:1.6;";
    msg.textContent = message;
    document.body.appendChild(msg);
    window.setTimeout(() => msg.remove(), 4800);

    if (!resetForms) return;
    document.querySelectorAll("form").forEach((form) => form.reset());
    document.getElementById("commission-form")?.classList.add("hidden");
    document.getElementById("limited-form")?.classList.add("hidden");
    document.getElementById("inquiry-form")?.classList.add("hidden");
  };
}

function normalizeRecords() {
  Object.values(window.MOK_RECORDS ?? {}).forEach((record) => {
    if (record.hero) record.hero = normalizePath(record.hero) ?? record.hero;
    if (record.gallery) record.gallery = record.gallery.map((src) => normalizePath(src) ?? src);
    if (record.requestHref) record.requestHref = normalizePath(record.requestHref) ?? record.requestHref;
  });
}

export function LegacyHtmlRuntime({ route, kind, successMessage }: LegacyHtmlRuntimeProps) {
  useEffect(() => {
    const root = document.querySelector(`[data-legacy-route="${route}"]`);
    if (!root) return undefined;

    normalizeLegacyDom(root);
    const cleanupFade = setupFadeUp(root);

    if (kind === "limited-drop") setupLimitedDrop(root);
    if (kind === "request-a-blade") setupRequestBlade();

    if (successMessage) {
      setupSubmitSuccess(successMessage, kind !== "vanguard-request");
    }

    const run = async () => {
      (window as Window & { tailwind?: unknown }).tailwind = (window as Window & { tailwind?: unknown }).tailwind || {};
      await loadScriptOnce("/assets/js/tailwind-config.js", "legacy-tailwind-config");
      await loadScriptOnce("https://cdn.tailwindcss.com", "legacy-tailwind-cdn");
      await loadScriptOnce("https://unpkg.com/lucide@latest", "legacy-lucide");
      window.lucide?.createIcons?.();

      await loadScript("/assets/js/media-resolver.js");

      if (kind === "record-detail") {
        await loadScript("/assets/js/record-gallery-data.js");
        normalizeRecords();
        await loadScript("/assets/js/record-detail.js");
      }

      await loadScript("/assets/js/photo-card-metadata.js");
      normalizeLegacyDom(root);
    };

    run().catch(() => {});

    return () => {
      cleanupFade?.();
      if (kind === "request-a-blade") delete window.selectPath;
      if (successMessage) delete window.submitSuccess;
    };
  }, [kind, route, successMessage]);

  return null;
}

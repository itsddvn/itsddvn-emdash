const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const disclosure = document.querySelector(".nav-disclosure");
const submenu = document.querySelector(".submenu");
const navGroup = document.querySelector(".nav-group");

function setSubmenu(open, restoreFocus = false) {
  if (!disclosure || !submenu) return;
  if (restoreFocus) disclosure.focus();
  disclosure.setAttribute("aria-expanded", String(open));
  submenu.hidden = !open;
}

menuToggle?.addEventListener("click", () => {
  const open = primaryNav?.classList.toggle("is-open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(open));
});

disclosure?.addEventListener("click", () => {
  setSubmenu(disclosure.getAttribute("aria-expanded") !== "true");
});
navGroup?.addEventListener("mouseenter", () => {
  if (matchMedia("(hover: hover) and (min-width: 861px)").matches) setSubmenu(true);
});

navGroup?.addEventListener("mouseleave", () => {
  if (!navGroup.contains(document.activeElement)) setSubmenu(false);
});

navGroup?.addEventListener("focusin", (event) => {
  if (event.target !== disclosure) setSubmenu(true);
});
navGroup?.addEventListener("focusout", () => {
  queueMicrotask(() => {
    if (!navGroup.contains(document.activeElement)) setSubmenu(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && disclosure?.getAttribute("aria-expanded") === "true") {
    setSubmenu(false, true);
  }
});

document.addEventListener("click", (event) => {
  if (navGroup && !navGroup.contains(event.target) && disclosure?.getAttribute("aria-expanded") === "true") {
    setSubmenu(false);
  }
});

submenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setSubmenu(false);
    primaryNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const founderPanels = document.querySelectorAll(".founder-panel");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

if (founderPanels.length > 0) {
  founderPanels.forEach((panel) => panel.classList.add("reveal-ready"));

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    founderPanels.forEach((panel) => panel.classList.add("is-visible"));
  } else {
    const panelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "-8% 0px -12%", threshold: 0.12 },
    );

    founderPanels.forEach((panel) => panelObserver.observe(panel));
  }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });
  });
});

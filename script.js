const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const nextMeetup = document.querySelector("[data-next-meetup]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (nextMeetup) {
  const now = new Date();
  const TUESDAY = 2;
  const SESSION_END_HOUR = 23;
  let daysAhead = (TUESDAY - now.getDay() + 7) % 7;
  if (daysAhead === 0 && now.getHours() >= SESSION_END_HOUR) {
    daysAhead = 7;
  }

  if (daysAhead === 0) {
    nextMeetup.textContent = "Next meetup: tonight!";
  } else if (daysAhead === 1) {
    nextMeetup.textContent = "Next meetup: tomorrow!";
  } else {
    const next = new Date(now);
    next.setDate(now.getDate() + daysAhead);
    const formatted = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(next);
    nextMeetup.textContent = `Next meetup: ${formatted}`;
  }
  nextMeetup.hidden = false;
}

if (navToggle && nav) {
  const closeNav = () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      nav.classList.contains("is-open") &&
      event.target instanceof Node &&
      !nav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      closeNav();
    }
  });
}

const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const navSections = navLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

if (navSections.length > 0) {
  const updateActiveNav = () => {
    const line = window.innerHeight * 0.35;
    let currentId = "";
    for (const section of navSections) {
      if (section.getBoundingClientRect().top <= line) {
        currentId = section.id;
      }
    }
    navLinks.forEach((link) => {
      if (currentId && link.hash === `#${currentId}`) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  document.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", updateActiveNav, { passive: true });
  updateActiveNav();
}
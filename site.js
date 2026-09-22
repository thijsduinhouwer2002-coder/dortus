/* Dortus site. CSS does the animating, JS only flips state. */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header picks up a hairline border once you leave the top of the page. */
  var header = document.querySelector(".site-header");
  if (header) {
    var syncHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  /* Scroll reveal. Content stays visible if the observer is unavailable. */
  var revealables = document.querySelectorAll(".reveal");
  if (!revealables.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    for (var i = 0; i < revealables.length; i++) {
      revealables[i].classList.add("is-in");
    }
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealables.forEach(function (el) {
    observer.observe(el);
  });
})();

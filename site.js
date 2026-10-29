/* Dortus site. CSS does the animating, JS only flips state. */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* Header picks up a hairline border once you leave the top of the page. */
  var header = document.querySelector(".site-header");
  if (header) {
    var syncHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  /* No scroll reveal: content is visible as soon as the page loads, with or
     without JavaScript (29 October 2026). */
})();

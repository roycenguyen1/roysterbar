// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 2000,
  distance: "25rem",
  delay: 300,
  // mobile: false,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 2000,
  distance: "60rem",
  delay: 300,
  // mobile: false,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1500,
  distance: "60rem",
  delay: 10,
  // mobile: false,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1500,
  distance: "60rem",
  delay: 10,
  // mobile: false,
});

sr.reveal(".opacity", {
  opacity: 0,
  duration: 4500,
  distance: "0rem",
  delay: 10,
  // mobile: false,
});

// Smooth scroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

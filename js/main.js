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

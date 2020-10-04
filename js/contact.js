// Jquery for hamburger menu

$(document).ready(function () {
  $(".hamburger-btn").click(function () {
    $(".btn").toggleClass("show");
    $("ul li").toggleClass("hide");
  });
});
// End  Hamburger

// Scroll to top button
var mybtn = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.style.display = "block";
  } else {
    mybtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End button

// Smooth scrolling
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        "linear",
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

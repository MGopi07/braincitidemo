let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-100px"; // Hide
  } else {
    // Scrolling up
    navbar.style.top = "0"; // Show
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
});

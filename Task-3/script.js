window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.style.background = window.scrollY > 50 ? "black" : "transparent";
});

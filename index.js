window.addEventListener("scroll", () => {
if (window.scrollY > 800)
  document.getElementById("navigation").style.display = "block";
if (window.scrollY < 800)
  document.getElementById("navigation").style.display = "none";
})

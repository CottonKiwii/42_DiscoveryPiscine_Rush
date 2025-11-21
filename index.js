window.addEventListener("scroll", () => {
if (window.scrollY > 1000)
  document.getElementById("navigation").style.display = "block";
if (window.scrollY < 1000)
  document.getElementById("navigation").style.display = "none";
})

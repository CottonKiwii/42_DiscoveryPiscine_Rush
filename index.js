const nav = document.getElementById("navigation");
const mickey = document.getElementById("Mickey");
const lilly = document.getElementById("Lilly");

function isInSection(section) {
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

window.addEventListener("scroll", () => {
    if (isInSection(mickey) || isInSection(lilly)) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});

function updateNav() {
    if (isVisible(mickey) || iisVisible(lilly)) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

window.addEventListener("scroll", updateNav);
window.addEventListener("hashchange", updateNav);
window.addEventListener("load", updateNav);


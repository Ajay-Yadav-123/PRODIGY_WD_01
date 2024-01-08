
var navBar = document.querySelector("nav");
window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) {
        navBar.style.backgroundColor = "#2b2b2b";
        navBar.style.transition = "0.3s ease"
    }
    else {
        navBar.style.backgroundColor = "#000000";
    }
});

var list = document.querySelectorAll("li");

list.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        item.style.color = "#AA336A";
        item.style.transition = "0.3s ease";

    });

    item.addEventListener("mouseleave", function () {
        item.style.color = "";
    });
});




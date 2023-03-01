function menuActive (x) {
    x.classList.toggle("active");
}

var x = document.getElementById("myTopnav");
if (x.className === "nav") {
    x.className += " responsive";
} else {
    x.className = "nav";
}
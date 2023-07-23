document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const nav = document.querySelector("nav");

    navToggle.addEventListener("click", (event) => {

        if (event) {
            navToggle.classList.toggle("active");
            nav.classList.toggle("open");
        }
    })

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            
            if (event) {
                const blockID = anchor.getAttribute('href'); 
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    }
})
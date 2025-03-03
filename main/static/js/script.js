document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const sections = document.querySelectorAll("section");
    const buttons = document.querySelectorAll("button");
    const links = document.querySelectorAll("a");
    const nav = document.querySelector("nav");

    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        nav.classList.add("dark-mode");
        sections.forEach(section => section.classList.add("dark-mode"));
        buttons.forEach(button => button.classList.add("dark-mode"));
        links.forEach(link => link.classList.add("dark-mode"));

        localStorage.setItem("dark-mode", "enabled"); 
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        nav.classList.remove("dark-mode");
        sections.forEach(section => section.classList.remove("dark-mode"));
        buttons.forEach(button => button.classList.remove("dark-mode"));
        links.forEach(link => link.classList.remove("dark-mode"));

        localStorage.setItem("dark-mode", "disabled"); 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// canvas.addEventListener("mousemove", function (event) {
//     let mouseX = event.clientX;
//     let mouseY = event.clientY;

//     snowflakes.forEach((flake) => {
//         let dx = flake.x - mouseX;
//         let dy = flake.y - mouseY;
//         let distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 50) {
//             flake.x += dx * 0.1; 
//             flake.y += dy * 0.1;
//         }
//     });
// });

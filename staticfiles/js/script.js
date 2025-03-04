// document.addEventListener("DOMContentLoaded", function () {
//     const fadeElements = document.querySelectorAll(".fade-in");

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.2 });

//     fadeElements.forEach(element => {
//         observer.observe(element);
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.getElementById("dark-mode-toggle");
//     const body = document.body;
//     const sections = document.querySelectorAll("section");
//     const buttons = document.querySelectorAll("button");
//     const links = document.querySelectorAll("a");
//     const nav = document.querySelector("nav");

//     if (localStorage.getItem("dark-mode") === "enabled") {
//         enableDarkMode();
//     }

//     toggleButton.addEventListener("click", function () {
//         if (body.classList.contains("dark-mode")) {
//             disableDarkMode();
//         } else {
//             enableDarkMode();
//         }
//     });

//     function enableDarkMode() {
//         body.classList.add("dark-mode");
//         nav.classList.add("dark-mode");
//         sections.forEach(section => section.classList.add("dark-mode"));
//         buttons.forEach(button => button.classList.add("dark-mode"));
//         links.forEach(link => link.classList.add("dark-mode"));

//         localStorage.setItem("dark-mode", "enabled"); 
//     }

//     function disableDarkMode() {
//         body.classList.remove("dark-mode");
//         nav.classList.remove("dark-mode");
//         sections.forEach(section => section.classList.remove("dark-mode"));
//         buttons.forEach(button => button.classList.remove("dark-mode"));
//         links.forEach(link => link.classList.remove("dark-mode"));

//         localStorage.setItem("dark-mode", "disabled"); 
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const navToggle = document.querySelector(".nav-toggle");
//     const navLinks = document.querySelector(".nav-links");

//     navToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.getElementById("dark-mode-toggle");
//     const body = document.body;
//     const particlesContainer = document.getElementById("particles-js");

//     function setParticles(darkMode) {
//         particlesContainer.style.backgroundColor = darkMode ? "#1a1a1a" : "#ffffff"; 
//         loadParticles(darkMode);
//     }

//     function enableDarkMode() {
//         body.classList.add("dark-mode");
//         localStorage.setItem("dark-mode", "enabled");
//         setParticles(true);
//     }

//     function disableDarkMode() {
//         body.classList.remove("dark-mode");
//         localStorage.setItem("dark-mode", "disabled");
//         setParticles(false);
//     }

//     toggleButton.addEventListener("click", function () {
//         if (body.classList.contains("dark-mode")) {
//             disableDarkMode();
//         } else {
//             enableDarkMode();
//         }
//     });

//     // Initialize particles with correct mode
//     const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
//     setParticles(isDarkMode);
// });



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
        setParticles(true);
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        nav.classList.remove("dark-mode");
        sections.forEach(section => section.classList.remove("dark-mode"));
        buttons.forEach(button => button.classList.remove("dark-mode"));
        links.forEach(link => link.classList.remove("dark-mode"));

        localStorage.setItem("dark-mode", "disabled"); 
        setParticles(false);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const particlesContainer = document.getElementById("particles-js");

    function setParticles(darkMode) {
        particlesContainer.style.backgroundColor = darkMode ? "#1a1a1a" : "#ffffff"; 
        window.loadParticles(darkMode); // Ensure it calls the global function
    }

    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        setParticles(true);
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        setParticles(false);
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Initialize particles with correct mode
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
    setParticles(isDarkMode);
});

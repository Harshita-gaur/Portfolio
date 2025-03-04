document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const nav = document.querySelector("nav");
    const elementsToToggle = document.querySelectorAll("section, button, a");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const particlesContainer = document.getElementById("particles-js");
    const projectCards = document.querySelectorAll('.project-card');

    // Function to enable/disable dark mode
    function setDarkMode(enabled) {
        body.classList.toggle("dark-mode", enabled);
        nav.classList.toggle("dark-mode", enabled);
        elementsToToggle.forEach(el => el.classList.toggle("dark-mode", enabled));
        projectCards.forEach(card => card.classList.toggle("dark-mode", enabled));


        // Set background color for particles
        particlesContainer.style.backgroundColor = enabled ? "#1a1a1a" : "#ffffff";

        // Save dark mode preference
        localStorage.setItem("dark-mode", enabled ? "enabled" : "disabled");

        // Reload particles with correct colors
        reloadParticles(enabled);
    }

    // Function to reload particles when switching modes
    function reloadParticles(isDarkMode) {
        // Remove the existing particles container content
        particlesContainer.innerHTML = "";

        // Reinitialize particles.js with new colors
        particlesJS("particles-js", {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: isDarkMode ? "#ffffff" : "#000000" }, // White in dark mode, black in light mode
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                move: { speed: 2, direction: "none", out_mode: "out" },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: isDarkMode ? "#ffffff" : "#000000", // Change line color based on mode
                    opacity: 0.4,
                    width: 1
                }
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            }
        });
    }

    // Initialize Dark Mode based on localStorage
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
    setDarkMode(isDarkMode);

    // Toggle Dark Mode on button click
    toggleButton.addEventListener("click", function () {
        setDarkMode(!body.classList.contains("dark-mode"));
    });

    // Mobile Navigation Toggle
    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Intersection Observer for Fade-in Animations
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(element => observer.observe(element));
});


let currentIndex = 0;

// const projectCards = document.querySelectorAll('.project-card');
const totalProjects = projectCards.length;
const projectCardsContainer = document.querySelector('.project-cards');

function slideLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
}

function slideRight() {
    if (currentIndex < totalProjects - 3) { 
        currentIndex++;
        updateSlidePosition();
    }
}

function updateSlidePosition() {
    const offset = -currentIndex * 270; 
    projectCardsContainer.style.transform = `translateX(${offset}px)`;
}

// Add event listeners for sliding
document.querySelector('#slide-left').addEventListener('click', slideLeft);
document.querySelector('#slide-right').addEventListener('click', slideRight);

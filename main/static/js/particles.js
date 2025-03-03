document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" }, // White particles
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { speed: 2, direction: "none", out_mode: "out" }
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
});

// document.addEventListener("DOMContentLoaded", function () {
//     const canvas = document.getElementById("snowfall");
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let snowflakes = [];

//     function createSnowflakes(count) {
//         for (let i = 0; i < count; i++) {
//             snowflakes.push({
//                 x: Math.random() * canvas.width,
//                 y: Math.random() * canvas.height,
//                 radius: Math.random() * 4 + 1,
//                 speed: Math.random() * 0.5 + 0.2,
//                 opacity: Math.random()
//             });
//         }
//     }
    
    
//     function drawSnowflakes() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         // ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
//         // ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
//         snowflakes.forEach((flake) => {
//             ctx.save();
//             ctx.translate(flake.x, flake.y);
//             ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 80%)`; 
//             ctx.lineWidth = 2;
//             drawSnowflake(ctx, flake.radius);
//             ctx.restore();
//         });

//         moveSnowflakes();
//     }
//     function drawSnowflake(ctx, size) {
//         ctx.beginPath();
//         for (let i = 0; i < 6; i++) { 
//             ctx.moveTo(0, 0);
//             let angle = (Math.PI / 3) * i;
//             ctx.lineTo(size * Math.cos(angle), size * Math.sin(angle));
//         }
//         ctx.closePath();
//         ctx.stroke();
//     }
    

//     function moveSnowflakes() {
//         snowflakes.forEach((flake) => {
//             flake.y += flake.speed;
//             flake.x += Math.sin(flake.y * 0.02) * 0.5; 
            
//             if (flake.y > canvas.height) {
//                 flake.y = -flake.radius;
//                 flake.x = Math.random() * canvas.width;
//             }
//         });
//     }
    

//     function updateSnowfall() {
//         drawSnowflakes();
//         requestAnimationFrame(updateSnowfall);
//     }

//     createSnowflakes(100); 
//     updateSnowfall();

//     window.addEventListener("resize", function () {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         snowflakes = [];
//         createSnowflakes(1000);
//     });
// });

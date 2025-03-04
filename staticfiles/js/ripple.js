// document.addEventListener("mousemove", function (e) {
//     console.log("Mouse moved:", e.clientX, e.clientY);  // Debug log

//     const rippleContainer = document.getElementById("ripple-container");
//     if (!rippleContainer) {
//         console.log("Ripple container not found!");
//         return;
//     }

//     const ripple = document.createElement("div");
//     ripple.classList.add("ripple");

//     // Set size and position
//     const size = 50;
//     ripple.style.width = `${size}px`;
//     ripple.style.height = `${size}px`;
//     ripple.style.left = `${e.clientX - size / 2}px`;
//     ripple.style.top = `${e.clientY - size / 2}px`;

//     console.log("Ripple added at:", ripple.style.left, ripple.style.top);

//     rippleContainer.appendChild(ripple);

//     setTimeout(() => {
//         ripple.remove();
//     }, 1500);
// });

$(document).ready(function () {
    if ($.fn.ripples) {
        console.log("Ripples plugin loaded successfully!");
        $("body").ripples({
            resolution: 512,
            dropRadius: 20, 
            perturbance: 0.04,
        });
    } else {
        console.log("Ripples plugin not loaded!");
    }
});


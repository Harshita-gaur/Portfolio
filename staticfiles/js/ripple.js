/* 

body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: black;
    overflow: hidden;
    position: relative;

    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    text-align: center;
    color: #333;
    transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
} */

/* #ripple-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background-color:rgba(255, 255, 255, 0.2);
    opacity: 1;
    /* pointer-events: none; */
    /* transform: scale(0);
    animation: ripple-animation 1.5s ease-out forwards;
}

@keyframes ripple-animation {
    0% {
        transform: scale(0);
        opacity: 0.8;
    }
    100% {
        transform: scale(5);
        opacity: 0;
    }
} */ 






/* #ripple-background{
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; 
    background-color: black; 
} */


// <!-- jQuery (Required for the plugin) -->
        
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// <!-- Ripple Plugin -->

// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"></script>



// <script src="{% static 'js/ripple.js' %}"></script>


<div id="ripple-background"></div>


$(document).ready(function () {
    $('body').ripples({
        resolution: 512,   
        dropRadius: 25,   
        perturbance: 0.1,  
        interactive: true  
    });

    // Ripple effect on mouse click
    $(document).on('click', function (e) {
        let x = e.pageX;
        let y = e.pageY;
        let dropRadius = 30;  
        let strength = 0.2;   

        $('body').ripples('drop', x, y, dropRadius, strength);
    });
});


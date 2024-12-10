window.onload = function () {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const introContainer = document.getElementById('intro-container');
    const poemContainer = document.getElementById('poem-container');
    const slideshowContainer = document.getElementById('slideshow-container');
    const music = document.getElementById('background-music');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = 'flex';
        let opacity = 0;
        const interval = setInterval(() => {
            opacity += 0.1;
            element.style.opacity = opacity;
            if (opacity >= 1) clearInterval(interval);
        }, 50);
    }

    function fadeOut(element) {
        let opacity = 1;
        const interval = setInterval(() => {
            opacity -= 0.1;
            element.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(interval);
                element.style.display = 'none';
            }
        }, 50);
    }

    function showNextSlide() {
        fadeOut(slides[currentSlide]);
        currentSlide = (currentSlide + 1) % slides.length;
        fadeIn(slides[currentSlide]);
    }

    startButton.onclick = function () {
        fadeOut(startScreen);
        music.play();

        setTimeout(() => fadeIn(introContainer), 500);
        setTimeout(() => {
            fadeOut(introContainer);
            fadeIn(poemContainer);
        }, 8500);
        setTimeout(() => {
            fadeOut(poemContainer);
            fadeIn(slideshowContainer);
            fadeIn(slides[currentSlide]);
            setInterval(showNextSlide, 12000);
        }, 18500);
    };
};

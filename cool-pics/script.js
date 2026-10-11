let dialog = document.querySelector('dialog');
let images = document.querySelector('#images');
let dialogImage = dialog.querySelector('img');
let menu = document.querySelector("#menu");
let navigation = document.querySelector("nav");
let menuToggled = false;
const closeButton = dialog.querySelector('#close-viewer');
const mediaQuery = window.matchMedia('(min-width: 1024px)');

// IMAGE VIEWER

images.addEventListener("click", function(event) {
    if (event.target.src != undefined) {
        dialogImage.src = event.target.src.replace("-sm", "-full");
        dialog.showModal();
    }
});

closeButton.addEventListener('click', function() {
    dialog.close();
});

dialog.addEventListener('click', function(event) {
    if (event.target === dialog) {
        dialog.close();
    }
});

// MENU

menu.addEventListener('click', function() {
    if (!menuToggled) {
        navigation.style.display = "flex";
    } 
    else if (menuToggled) {
        navigation.style.display = "none";
    }
    menuToggled = !menuToggled;
});

// THE THING I ALMOST MISSED

mediaQuery.addEventListener('change', function(event) {
    if (event.matches) {
        navigation.style.display = "flex";
    } 
    else {
        navigation.style.display = "none";
    }
    menuToggled = false;
});

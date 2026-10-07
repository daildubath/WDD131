let menu = document.querySelector(".menu-btn");
let navigation = document.querySelector("nav");
let menuToggled = false;
menu.addEventListener('click', openMenu);

function openMenu() {
    if (!menuToggled) {
        navigation.style.display = "flex";
    }
    else if (menuToggled) {
        navigation.style.display = "none";
    }
    menu.classList.toggle("change");
    menuToggled = !menuToggled;
}
let selectElem = document.querySelector('#mode-select');
let pageBody = document.querySelector('body');
let image = document.querySelector("#logo img")

selectElem.addEventListener('change', changeMode);

function changeMode() {
    let current = selectElem.value;
    if (current === 'light-mode') {
        pageBody.style.color = "black";
        pageBody.style.backgroundColor = "white";
        image.src = "byui-logo-blue.webp";
    } else if (current === 'dark-mode') {
        pageBody.style.color = "white";
        pageBody.style.backgroundColor = "black";
        image.src = "byui-logo-white.png";
    }
}
// 1. Functions
myFunctionName("Gui");

function myFunctionName(name) {
    console.log("Your name is: " + name);
    let lastName = "Benge";
}

// this will break
// console.log(lastName);

// Call "invoke" the Function
myFunctionName("Benge");
myFunctionName("Andy");

// 2. Event Listeners

    //retrieve something from the DOM
    let select = document.querySelector("#theme-select");
    //register an event listener
    // 1 Event to listen for, 2 What to call after event
    select.addEventListener("change", handleEvent);

    function handleEvent(event) {
        console.log(event);
        console.log(event.target.value);
    }
// 3. If statements



let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          
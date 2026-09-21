// how to manipulate the DOM with JavaScript

// Grab our h1 from the page
let heading = document.querySelector("h1");

console.log(heading);

// change the text of the element
heading.textContent = "Changed the heading to something else!";

// change text  color
heading.style.color = "#0000FF";

// pick your own style and change it

heading.style.fontWeight = "lighter";


// retrieve an ID element from the page
document.getElementById("topics").style.color = "red";

// select the image
let image = document.querySelector("img");

console.log(image.getAttribute("src"));
image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV2QYBZL_ORkDCGSx1A0T0k6d2mQBH62FP_ABVXfwuA&s=10");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                
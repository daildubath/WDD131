// Add event listeners to the button
document.querySelector("#rollButton").addEventListener("click", event => {
    // animate the dice
        // switch source to die rolling gif animation
    const images =document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });
    setTimeout(() => {
        // change the value of each value the die lands on randomly, which includes source images
            images.forEach(image => {
                if(isDieUnlocked(image)) {
                    image.src = `assets/white_dice_${Math.floor(Math.random() * 6) + 1}.gif`;
                }
            });
    }, 750);
});

function isDieUnlocked(dieImage) {
    // is the checkbox checked for this die? return false
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className)
}
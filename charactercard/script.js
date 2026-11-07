const characters = [
    {
        
        name: "Snortleblat",
        class: "Swamp Beast Diplomat",
        level: 1,
        health: 100,
        image: "snortleblat.webp",
        alt: "Gross aligator thing with clothes standing in a swamp. It smiles like a friendly chump. Under closer inspection it appears to be AI generated.",

        attacked() {
            if (this.health >= 20) {
                this.health -= 20;
            }
            else if (this.health > 0 && this.health < 20) {
                this.health = 0;
            }
            else {
                this.health = 0;
                alert("The character is dead.");
                return;
            }

            if (this.health == 0) {
                alert("Character died.");
            }
        },

        levelUp() {
            this.level++;
        }
    }

];

function createTemplate(character, characterIndex) {

    return `
        <div class="card" id="card${characterIndex}">
            <img src="${character.image}" alt="${character.alt}">
            <h2 aria-label="Character Name">${character.name}</h2>
            <div class="stats" aria-label="Character Stats">
                <p><strong>Class: </strong>${character.class}</p>
                <p><strong>Level: </strong>${character.level}</p>
                <p><strong>Health: </strong>${character.health}</p>
            </div>
            <div class="cardButtons">
                <button type="button" class="attackedButton">Attacked</button>
                <button type="button" class="levelUpButton">Level Up</button>
            </div>
        </div>
    `;

}

const content = document.querySelector("#content");


function renderCharacters() {
    content.innerHTML = buildCharacterCards();


    function buildCharacterCards() {
        let innerHtml = "";
        characters.forEach((character, characterIndex) => {
            innerHtml += createTemplate(character, characterIndex);
        });
        return innerHtml;
    }

    characters.forEach((character, characterIndex) => {
        document.querySelector(`#card${characterIndex} .attackedButton`).addEventListener("click", event => {
            character.attacked();
            reloadCharacter(characterIndex);
        });

        document.querySelector(`#card${characterIndex} .levelUpButton`).addEventListener("click", event => {
            character.levelUp();
            reloadCharacter(characterIndex);
        });
    });
}

function reloadCharacter(characterIndex) {

    document.querySelector(`#card${characterIndex} .stats`).innerHTML = `
        <p><strong>Class: </strong>${characters[characterIndex].class}</p>
        <p><strong>Level: </strong>${characters[characterIndex].level}</p>
        <p><strong>Health: </strong>${characters[characterIndex].health}</p>
    `;

}


renderCharacters();

const givenWords = ['APPLE', 'BRICK' ,'CHOCO'];
let givenWord;
const nMoves = 6;
//elements
const inputElement = document.getElementById('input-id');
const goButtonElement = document.getElementById("go-id");
const array = [document.getElementById("square-id1"),
               document.getElementById("square-id2"),
               document.getElementById("square-id3"),
               document.getElementById("square-id4"),
               document.getElementById("square-id5")];
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");
//global variables
let count = 0;
let wordCount = 0;
//functions
function game() {
    const word = inputElement.value;
    if (word.length != 5) {
        alert('change word');
    } else {
    array.forEach(element => element.style.backgroundColor = 'white');
    array.forEach(element => element.innerHTML = '');
    fillSquares(word);
    count++;
    if (count == nMoves || word == givenWord) {
        finishGame();
    }
    }
    inputElement.value = '';
}
function fillSquares (word) {
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {
    array[i].innerHTML = word[i];
    if (givenWord.includes(word[i])) {
        array[i].style.backgroundColor = 'yellow';
        if (word[i] == givenWord[i]) {
            array[i].style.backgroundColor = 'green';
        }
    }
        
    }
}
function startGame() {
    count = 0;
    wordCount = wordCount < givenWords.length ? wordCount : 0;
    givenWord = givenWords[wordCount];
    wordCount++;
    goButtonElement.disabled = false;
    inputElement.readOnly = false;
    array.forEach(element => element.style.backgroundColor = 'white');
    array.forEach(element => element.innerHTML = '');
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
}
function finishGame() {
    goButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
    resultMessageElement.innerHTML = "Congratulation, fgame is over"
}
//Actions
goButtonElement.addEventListener("click", game );
playAgainButtonElement.addEventListener("click", startGame )
startGame();
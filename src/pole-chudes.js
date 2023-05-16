const givenWords = ['Red & round?', 'Red & rectangular?', 'Brown & rectangular?']
                    ['APPLE', 'BRICK' ,'CHOCO'];
const nMoves = 3;
const questionAnswers = [['Red & round?','APPLE'],
                        ['Red & rectangular?', 'BRICK'],
                        ['Brown & rectangular?','CHOCO']];
//elements
const inputElement = document.getElementById('input-id');
const goButtonElement = document.getElementById("go-id");
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");
const wordSectionElement = document.getElementById("word-section");
//global variables
let givenWord;
let count = 0;
let wordCount = 0;
//functions
function game() {
    const word = inputElement.value;
    const maxCount = Math.floor(wordArray.length * 0,3);
    if (word.length != 1 && count < maxCount) {
        alert('insert one leter');
    } else {
    divArray.forEach(element => element.style.backgroundColor = 'black');
    divArray.forEach(element => element.innerHTML = '');
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
    divArray.forEach(element, index => element.innerHTML = wordArray[index]);

    // for (let i = 0; i < word.length; i++) {
    // array[i].innerHTML = word[i];
    // if (givenWord.includes(word[i])) {
    //     array[i].style.backgroundColor = 'yellow';
    //     if (word[i] == givenWord[i]) {
    //         array[i].style.backgroundColor = 'green';
    //     }
    // }
        
 }

function startGame() {
    count = 0;
    wordCount = wordCount < givenWords.length ? wordCount : 0;
    givenWord = givenWords[wordCount];
    wordCount++;
    goButtonElement.disabled = false;
    inputElement.readOnly = false;
    array.forEach(element => element.style.backgroundColor = 'black');
    array.forEach(element => element.innerHTML = '');
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
    const wordArray = /*questionAnswers[0][1].split('');*/ Array.from(questionAnswers[0][1]);
    const divsArray = wordArray.map(element => `<div class = "letter">${letter}</div>`);
    wordSectionElement.innerHTML = divsArray.join('');
    lettersElements = document.querySelectorAll(".letter");
}
function finishGame() {
    goButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
    resultMessageElement.innerHTML = "Congratulation, game is over"
}
//Actions
goButtonElement.addEventListener("click", game );
playAgainButtonElement.addEventListener("click", startGame )
startGame();
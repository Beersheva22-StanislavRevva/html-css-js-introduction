const givenWords = ['APPLE', 'BRICK' ,'CHOCO'];
let givenWord;
const nMoves = 6;
//elements
const inputElement = document.getElementById('input-id');
const goButtonElement = document.getElementById("go-id");
const responseField = document.getElementById("square-id1");
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");
const url = 'http://localhost:8080/college';
//global variables
let count = 0;
let wordCount = 0;
//functions
async function sendJpqlQuery() {
    const jpqlStr = inputElement.value;
    if (jpqlStr.length <= 5) {
        alert('incorrect query');
    } else {
        const jpqlDto = {
            query: jpqlStr,
            }
const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(jpqlDto),
  })
    const res = await response.json()
    await printResonse(res);
    inputElement.value = '';
    }
}
async function printResonse (response) {
    responseField.innerHTML = response;     
}
function startGame() {
    // count = 0;
    // wordCount = wordCount < givenWords.length ? wordCount : 0;
    // givenWord = givenWords[wordCount];
    // wordCount++;
    // goButtonElement.disabled = false;
    // inputElement.readOnly = false;
    // array.forEach(element => element.style.backgroundColor = 'white');
    // array.forEach(element => element.innerHTML = '');
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
goButtonElement.addEventListener("click", sendJpqlQuery );
playAgainButtonElement.addEventListener("click", startGame )
startGame();
const givenWords = ['APPLE', 'BRICK' ,'CHOCO'];
let givenWord;
const nMoves = 6;
//elements
const inputElement = document.getElementById('input-id');
const goButtonElement = document.getElementById("go-id");
const responseField = document.getElementById("response-field");
const url = 'http://localhost:8080/college';
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

//Actions
goButtonElement.addEventListener("click", sendJpqlQuery );
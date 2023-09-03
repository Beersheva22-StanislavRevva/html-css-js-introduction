const givenWords = ['APPLE', 'BRICK' ,'CHOCO'];
let givenWord;
const nMoves = 6;
//elements
const inputElementQueryStr = document.getElementById('input-id');
const inputElementLimit = document.getElementById('input-limit-id');
const goButtonElement = document.getElementById("go-id");
const responseField = document.getElementById("response-field");
const url = 'http://localhost:8080/college';
//functions
async function sendJpqlQuery() {
    const jpqlStr = inputElementQueryStr.value;
    const limit = inputElementLimit.value;
    if (jpqlStr.length <= 5 || parseInt(limit) <= 0) {
        alert('incorrect query');
    } else {
        const jpqlDto = {
            query: jpqlStr,
            limit: limit
            }
const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(jpqlDto),
  })
    let res = "incorrect request";
    if(response.ok){
        res = await response.json();
    }
    await printResonse(res);
    inputElementQueryStr.value = '';
    }
}
async function printResonse (response) {
    responseField.innerHTML = response;     
}

//Actions
goButtonElement.addEventListener("click", sendJpqlQuery );
const person = {name: 'Vasya', id: 123, birthYear: 1990,
address: {country: 'Israel', city: 'Rehovot'}};
function createPerson(id, name, birthYear, country, city) {
    return {id, name, birthYear, adress: {country, city}}
}
const person1 = createPerson(123, 'Vasya', 1990, 'Israel', 'Rehovot');
const person2 = createPerson(123, 'Vasya', 1990, 'Israel', 'Rehovot');
//console.log(`person1 == person2 is ${person1 == person2}`);
//console.log(person1.name);
//console.log(person1['id']);
function displayKeyValue(person, key1, key2) {
if (key2) {
    
   //console.log(`key1 ${key1}, key2 ${key2} value is ${person[key1][key2]}`); 
} else {
   // console.log(`key1 ${key1} value is ${person[key1]}`); 
} ;
}
//displayKeyValue(person1, 'address','country');
//Method keys of Object returns array of key values
//console.log(Object.keys(person1));
//Method values of Object returns array of values
//console.log("values", Object.values(person1));
//Method 'entries' of Objec returns array of arrays with key as a first element and value is the second
//console.log("entries", Object.entries(person1));
// const x = {};
// x['ab'] = 10;
// x['ab']++; 
//console.log(x["ab"]);
// const array = ['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a','a','lmn'];
// displayOccurrences(array);
// function displayOccurrences(array) {
//     let obj = {};
//     array.forEach(element => { if (Object.keys(obj).includes(element)) {
//            obj[element]++;
//         } else {
//            obj[element] = 1;
//         }
//     });
//     printResult(obj);
//     //array of strings
//     //display strings with their occurency counts in thr descending order of the count
//     //if counts are equaled then accending string values order
// }
// function printResult (obj) {
// let res = Object.entries(obj);
// res.sort((a,b) => (b[1] - a[1] == 0 ? a[0].localeCompare(b[0]) : b[1] - a[1])).
// forEach(element => console.log(`${element[0]} -> ${element[1]}`));
// }
/* lmn -> 3
    a -> 2
    ab -> 2
    c -> 1
    d -> 1 */
function displayOccurrences(array) {
const occurrences = array.reduce((obj, s) => ({...obj, [s]: obj[s] ? obj[s] + 1 : 1}), {});
Object.entries(occurrences).sort((e1,e2) => e1[1] == e2[1]
?e1[0].localeCompare(e2[0]): e2[1] - e1[1])
.forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}
//displayOccurrences(['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a','a','lmn']);

const y = {x:0};
delete y.x;
//console.log(y.x);
function getOccurrences(array) {
    return array.reduce((obj, s) => ({...obj, [s]: obj[s] ? obj[s] + 1 : 1}), {});
}
function isAnagram(word, anagram) {
    let res = false;
    if (word.length == anagram.length) {
        word = word.toLowerCase();
        const occurrences = getOccurrences(Array.from(word));
        res = Array.from(anagram).every(s => occurrences[s]-- > 0);
        }
    return res;
};  
console.log(isAnagram('wwword','owwwrd'));
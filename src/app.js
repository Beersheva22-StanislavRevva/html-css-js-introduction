// const ar = [];
// ar[10] = 100;
// ar[0] = 'hello';
// ar[3] = [];
// ar.length = 0;
// ar[0] = 1;
// const ar2 = [[1,6], [2,0,0], [3, 1]];
//add at aray end
// ar[ar.length] = 10;
// let s = ar.push(...ar2);
// ar[10];
//method "map"
//console.log([1, 2, 3].map(n=> n ** 2));
function getRandomIntNumber(min, max, minclusive = true,  maxexclusive = false) {
    min = minclusive == false ? (min + 1) : min;
    max = maxexclusive == true ? (max + 1) : max;
    return min < max ? res = Math.floor(min + Math.random() * (max - min)) : undefined;
}
function getArrayRandomIntNumbers(nNumbers, min, max, minclusive = true,
     maxexclusive = false) {
    let res = [];
    res.length = nNumbers > 0 ? nNumbers : 0;
    return [...res].map(n => getRandomIntNumber(min, max, minclusive = true,
        maxexclusive = false));
}
//console.log(getRandomIntNumber(1, 10, true, true));
//console.log(getArrayRandomIntNumbers(5,1,10));
function getOrderedList(array) {
    // returns html string of element <ol> items
    // from a given array elements
    //example: input - [1, 2, 3]
    //output "<ol><li>1</li><li>2</li><li>3</li></ol>"
    return `<ol style="align-items:center; list-style:none">${getListItems(array)}</ol>`
}
function getListItems(array) {
    return array.map(v => `<li style="width:30px; height:30px; border: solid 1px gray;
    background-color : ${v? 'black':'white'}  "></li>`).join('');
}
function getSquares(array) {
   
}
nNumbers = 10;
min = 0;
max = 2;
array = getArrayRandomIntNumbers(nNumbers,min,max);
getOrderedList(array);
//bodyId.innerHTML = getOrderedList(array);
function getMatrixRandomIntNumbers(rows, columns, min, max){
    let res = [];
    res.length = rows;
    res = [...res];
    return res.map(n => getArrayRandomIntNumbers(columns, min, max));
}
console.log(getMatrixRandomIntNumbers(3,3,1,10));

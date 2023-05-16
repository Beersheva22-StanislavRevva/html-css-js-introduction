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

nNumbers = 10;
min = 0;
max = 2;
array = getArrayRandomIntNumbers(nNumbers,min,max);
//bodyId.innerHTML = getOrderedList(array);
function getMatrixRandomIntNumbers(rows, columns, min, max){
    let res = [];
    res.length = rows;
    res = [...res];
    return res.map(n => getArrayRandomIntNumbers(columns, min, max));
}
//splice method for updating array
let arS = [10, 20, -70, 100, 6, -10, 0];
const arI = [1, 2, 3];
let index = arS.indexOf(-70);
arS.splice(index + 1, 0 , ...arI);
//console.log(arS);
//console.log(arS.splice(index + 1, 3));
//console.log(arS.slice(index + 1, index + 4));
//console.log(arS);
let indexFirstNegative = arS.findIndex(v => v < 0);
//console.log(indexFirstNegative);
arS = arS.filter( v => v > 0 );
//console.log(arS);
// console.log(arS.every(v => v > 0));
// console.log(arS.some(v => v < 0));

let src = [10, 20, -70, 100, 6, -10, 0];
let dst = [1, 2, 3, 4, 5];
let posSrc = 2;
let length = 2;
let posDst = 5;
function arraycopy(src, posSrc, dst, length, posDst = 0) {
dst.splice(posDst, length, ...src.slice(posSrc, (posSrc + length))); 
}
// console.log(`*arraycopy* source array: ${src}, source pos.: ${posSrc}, target array: ${dst}, length: ${length},target pos: ${posDst}`);
arraycopy(src, posSrc, dst, length, posDst);
// console.log(`result: ${dst}`);

array = [10, 20, -70, 100, 6, -10, 0];
position = 2;
shift = 2;
function moveElement(array, position, shift) {
    //example: ar:[1, 2, 3, 4, 5] ; moveElement(ar, 2, 1) => [1,2,4,3,5]
    let newPosition = (position + shift) < 0 ? 0 : (position + shift);
    array.splice(newPosition, 0 , array.splice(position, 1)[0]);
}
// console.log(`*moveElement* array: ${array}, position: ${position}, shift: ${shift}`);
moveElement(array, position, shift);
// console.log(`result: ${array}`);

//reduce
//console.log([1,2,3].reduce((res, cur) => res + cur, 10));
//find minimal element
// console.log([1,2,3].reduce((res, cur) => {
//     if (cur < res) {
//         return cur;
//     } else {
//         return res;
//     };    
// }));
// console.log([1,2,3].reduce((res, cur) => cur < res ? cur : res));
//array - first min, second max
// ar = [7,7,7,7,9];
// accum = [ar[0]];
// console.log(ar.reduce((res, cur) => {
//     if (cur < accum[0]) {
//        accum[0] = cur;
//     } else {
//         accum[1] = cur;
//     }
//         return accum;
//     ;  
// }, [ar[0], ar[0]]));
// const ar10 = [2, 3, 123, 200, 99, -5];
// console.log(ar10.sort((a, b) => a - b));
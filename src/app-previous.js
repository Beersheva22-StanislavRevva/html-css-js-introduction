// console.log("Helllo World!");
// //
// //let a = 5;
// // a = "hello";
// // a = false;
// let a = 5 + "5";
// console.log(a, typeof a);
// a = a - 5;
// console.log(a, typeof a);
// a = "abc";
// a /= 2;
// console.log(a, typeof a);
// a = "123";
// // a -= 0;
// a = +a;
// console.log(a, typeof a);
// if (a = 1) {
//     console.log("a is true");
// }
// console.log(a);
// let a = 1;
// let b = 3;
// let c = "2";
// if (a < b < c) {
//     console.log("a < b < c is true");
// }
// if (2 < "abc") {
//     console.log('"2" < "abc" is true');
// }
// if (2 > "abc") {
//     console.log('2 > "abc" is true');
// }
// if (2 == "abc") {
//     console.log('2 == "abc" is true');
// }
// let a = "abc";
// a = !!a;
// console.log(a, typeof a);
//console.log(2 + 10 * true / false);
// console.log(3 - (4 + "1"));
//let a = new Number(3);
//console.log(a = a + 5, typeof a);00
// let a = 0.3456789;
// console.log(a, typeof a);
// a = a.toFixed(2);
// console.log(a + 5, typeof a);
// a = +a;
// console.log(a + 5, typeof a);
// a = !!new Number(0);
// console.log(a, typeof a);
// a = !!0;
// console.log(a, typeof a);
//Math.trunc, Math.round, Math.ceil
//let a = "256 * 320";
// console.log(+a);
// console.log(parseInt(a));
//a = "257.4a";
//console.log(+a, parseInt(a), parseFloat(a));
//console.log(String.fromCharCode(65, 66, 67), String.fromCharCode(65, 66, 67).length);
// console.log("abc".charCodeAt(0));
// console.log(String.fromCodePoint(65,66,6));
//console.log((255).toString(16));
//console.log(("A" + (+"A") + "A" + "S").toLowerCase());

// function myToStringInteger(number, radix) {
//     //TODO: number - any number
//     //radix - computation base, if radix < 2 || radix > 36 then radix = 10
//     //removes fraction part 5/4, ex - 34.25 = 34; 34.75 = 35;
//     //toString method is diallowed
//     //returns string as a view presentation of the integer part of a given number in accordance
//     const sign = number < 0 ? '-' : '';
//     number = Math.abs(number);
//     number = Math.round(number);
//     if (radix < 2 || radix > 36 ) {
//         radix = 10;
//     }
//     let res = '';
//     do {
//         res = getSymbol(number, radix) + res;
//         number = Math.trunc(number / radix);
//     } while (number != 0);
//     return sign + res;
// }
// function getSymbol(number, radix) {
//     const aCode = 'a'.charCodeAt(0);
//     const delta = aCode - 10;
//     const remainder = number % radix;
//     return remainder < 10 ? remainder + '' : String.fromCharCode(remainder + delta);
// }
// console.log((123456789).toString(36));
// console.log(myToStringInteger(123456789, 36));
// console.log(myToStringInteger(-123456789.1234, 36));
// console.log(myToStringInteger(0, 36));
// "string" or 'string' with no string interpolation 'a' - string
// `...${<expression>}...`
const strNum = '-0xff';
let radix;
//console.log(`string with number ${strNum} with radix ${radix} is ${parseInt(strNum, radix)}`);
function myParseInt(strNum, radix) {
    // the same behavior as standard parseInt;
    strNum = strNum.trim();
    let index = strNum.charAt(0) == '-' || strNum.charAt(0) == '+' ? 1 : 0;
    if ((!radix || radix == 16) & getHexdecimalIndex(strNum.substring(index)) > 0) {
        index += 2;
        radix = 16;
    }
    if (!radix) {
        radix = 10;
    }
    // if (typeof(radix) === 'undefined') {
    //     radix = 10;
    //     if (strNum.charAt(index) == '0' && strNum.charAt(index + 1) == 'x') {
    //         index += 2;
    //         radix = 16;
    //     }
    // }
    radix = typeof(radix) === 'undefined'? 10 : radix;
    let res = radix > 1 && radix < 37 ? getDigitCode(strNum, index, radix) : NaN;
    if(!isNaN(res)) {
        let digit;
        index++;
        while (index < strNum.length && !isNaN(digit = getDigitCode(strNum, index, radix))){
            res = res * radix + digit;
            index++;
        }
        if(strNum[0] == '-') {
            res = -res;
        }
    }
    return res;
}
function getHexdecimalIndex(str) {    
    return str.toLowerCase().startsWith('0x') ? 2 : 0;
}
function getDigitCode(strNum, index, radix) {
    const delta = 'a'.charCodeAt(0) - 10;
    const symbol = strNum.charAt(index).toLowerCase();
    const code = symbol >= '0' && symbol <= '9' ? +symbol : symbol.charCodeAt(0) - delta;
    return code >= 0 && code < radix ? code : NaN;

}
//console.log(`string with number ${strNum} with radix ${radix} is ${myParseInt(strNum)}`);

// console.log(eval("let d = function() {return funcion () {return 10}}; Math.sqrt(4) * (100 - d()())"));
// console.log(` 3 == '3' is ${3 == "3"}`);
// console.log(` 3 == '3' is ${3 === "3"}`);
// let n = undefined;
// console.log(`${(null < '1')} has type ${typeof (n + 2)}`);

function sum (op1 = 10, op2 =20) {
    return op1 + op2;
}
let a1;
let a2 = 100;
console.log(`a1 = ${a1}, a2 = ${a2} sum(a1, a2) is ${sum(a1,a2)} `);
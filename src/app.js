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

console.log(a = (456789).toString(16));
function myToStringInteger(number, radix) {
    //TODO: number - any number
    //radix - computation base, if radix < 2 || radix > 36 then radix = 10
    //removes fraction part 5/4, ex - 34.25 = 34; 34.75 = 35;
    //toString method is diallowed
    //returns string as a view presentation of the integer part of a given number in accordance
    finalString = "";
    let flag = 0;
    if (number < 0) {
        number = Math.abs(number);
        flag = 1;
    }

    if (radix < 2 || radix > 36) {
        radix = 10;
    }
    while (Math.round(number) > radix) {
        remainder = Math.floor(number % radix);
        if (remainder > 9) { 
            remainder = String.fromCharCode(remainder + 87);
        }
        finalString = remainder + finalString;
        number = Math.floor(number / radix);
    }
    if (flag == 0){ 
    return (number + finalString);
    } else {
        return ("-" + number + finalString);
    }
}
console.log(myToStringInteger(0, 16));
class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }
        /*this.square = function () {
            return this.width * this.heigt;
        }
        this.perimeter = function() {
            return 2 * (this.width + this.heigt);
        }*/
    
    square() {
        return this.#width * this.#height;
    }
    perimeter() {
        return 2 * (this.#width + this.#height);
    }
}
const rectangle = new Rectangle(3, 4);
//console.log(rectangle.square(), rectangle.perimeter());
let c;
//console.log(rectangle.width, rectangle.height);

class Square extends Rectangle {
    constructor(width) {
        super (width, width);
    }
}
const square = new Square(10);
//console.log(square.perimeter());
// Array.prototype.map = function() {
//     console.log(this);
//     let ar = [];
//     for(let i = 0; i < this.length; i++) {
//        ar[i] = this[i]*10;
// }
//  return ar;
// };
// const ar = [1, 2, 3];
// console.log(ar.map());

// Array.prototype.myForEach = function (func) {
//      for(let i = 0; i < this.length; i++) {
//        func(this[i], i, this);
//     }
// }
// let ar = [1, 2, 3];
// //ar.myForEach((x, index) => console.log(x + 3));
// //console.log(ar);

// Array.prototype.myMap = function (func) {
//     let arrayCopy = [];
//     for(let i = 0; i < this.length; i++) {
//        arrayCopy.push(func(this[i], i, this));
//     }
//     return arrayCopy;
// }
// ar = [1, 2, 3];
// //console.log(ar.myMap((x, index) => (x * 3) + index));

// Array.prototype.myFilter = function (func) {
//     let arrayCopy = [];
//     for(let i = 0; i < this.length; i++) {
//         if (func(this[i], i)) {
//             arrayCopy.push(this[i]);
//         }
//      }
//      return arrayCopy;
// }
// ar = [1, 2, 3];
// //console.log(ar.myFilter(x => x > 1));

// Array.prototype.myReduce = function (func, val) { 
//     let res = val;
//     let i = 0;
//     if (val == undefined) {
//         res = this[0];
//         i = 1;
//     }
//     if (res != undefined) {
//         for(i; i < this.length; i++) {
//             res = func(res, this[i], i , this);
//         }
//     }
//     return res;
// }
// ar = [1, 2, 3];
// //console.log(ar.myReduce((a, e) => a - e));

// class Deferred {
    
//     then(charIndex) {
//         return String.fromCharCode(parseInt(charIndex) + 96);
//     }
//     resolve(string) {
//         return string;
//     }
// }
// let d = new Deferred();
// console.log(d.then('1'), d.then('2'), d.then('3'));
// console.log(d.resolve('hallo'));

function fun(... params) {
    console.log(this);
    params.forEach(p => console.log(p))
}
const obj = {f : function(...params){console.log(this)}};
fun(1, 2);
//console.log(obj.fun(1, 2));

Function.prototype.MyBind = function (context,...bidedArgs){
    return (...args) => {
        context.bindedFunc = this;
        const res = context.bindedFunc(...bidedArgs,...args);
        delete context.bindedFunc;
        return res;
    }
}
function getPoint(x, y) {
    return {x , y};
}
function displayPoint(z, t,) {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${this.z}, t = ${this.t} `)
}
 const displayPointBind = displayPoint().MyBind(getPoint(1,2));
 displayPointBind();
 
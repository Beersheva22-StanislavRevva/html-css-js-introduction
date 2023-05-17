this.x = 100;
//console.log(this);
function f1() {
    return this;
}
const f2 = () => {
    return this;
}
//console.log('f1 call result', f1());
//console.log('f2 call result', f2());
//console.log((() => {console.log(this)})());
const x = {f1 : function() {
    return this;
}, f2: () => {return this}}
//console.log('x.f1 call result',x.f1());
//console.log('x.f2 call ',x.f2());
// this.width = 20;
// this.heigt = 20;
const rectangle1 = {width: 20, heigt: 20, square: function() {
    return this.width * this.heigt;
}, perimeter: () => (this.width + this.heigt)};
const rectangle2 = {width: 20, heigt: 20, square: function() {
    return this.width * this.heigt;
}, perimeter: () => (this.width + this.heigt)};
// console.log("square = " + rectangle.square());
// console.log("perimeter = " + rectangle.perimeter());
const point = {x:3, y:4};
function displayPoint(z, t) {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${z}, t = ${t}`);
}
const displayPoint1 = displayPoint.bind(point, 100, 200);
// displayPoint.call(point, 200, 300);
// displayPoint.apply(point, [300, 400] );
//console.log(rectangle[0]);
console.log(`rectangle1 == rectangle2 is ${rectangle1 == rectangle2}`) ;
console.log(`JSON.stringify(rectangle1) == JSON.stringify(rectangle2) is ${JSON.stringify(rectangle1) == JSON.stringify(rectangle2)}`);
//const rectangleCopy = JSON.parse(JSON.stringify(rectangle1));
const rectangleCopy = {... rectangle1};
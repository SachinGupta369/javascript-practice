const score = 100

let number = new Number(100)
//console.log(number);
//console.log(typeof number);

//console.log(number.toString().length);

//console.log(number.toFixed(19));

const numberss = 123.56
//console.log(numberss.toPrecision(7));

const digits = 100000000
//console.log(digits.toLocaleString('en-in'));

//++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.round(39.9));
// console.log(Math.abs(-9));
// console.log(Math.ceil(6.2));
// console.log(Math.floor(6.9));
// console.log(Math.min(1,23,4,5,6));
// console.log(Math.max(1,23,4,5,6));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log((Math.floor(Math.random()*10)+1))

const min =10
const max =20

console.log(Math.floor(Math.random()*(min-max+1))+min);
// array
const hores = ["shaktiman","naagraj"]

const newarr = new Array(1,2,3,4)
//console.log(newarr[0]);

//Array Methods
const myarr = [0,1,2,3,4,5]
// myarr.push(6)
// myarr.pop()
// console.log('a',myarr);

//slice and splice

const spilce = myarr.splice(1,3)
console.log('b',spilce); 
console.log(myarr);
// splice remove the mention index and make it different array
/*
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.
*/

// const slicee = myarr.slice(1,3) 
// console.log('c',slicee);
 /*
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
*/

// myarr.shift(0)
// myarr.unshift(9)
// console.log(myarr);

//console.log(myarr.includes(9) );
// const arre = myarr.join() //join() also makes arrays in string
// console.log(arre);
// console.log(typeof arre);
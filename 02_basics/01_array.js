// array
const hores = ["shaktiman","naagraj"]

const newarr = new Array(1,2,3,4)
//console.log(newarr[0]);

//Array Methods
const myarr = [-1,1,2,3,4,5]
// myarr.push(6)
// myarr.pop()
// console.log('a',myarr);

//slice and splice

//const spilce = myarr.splice(1,3)
// console.log('b',spilce); 
// console.log(myarr);
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

//console.log(myarr);
 //myarr.shift(0)
//myarr.unshift(9)
 //console.log(myarr);

//console.log(myarr.includes(9) );
// const arre = myarr.join() //join() also makes arrays in string
// console.log(arre);
// console.log(typeof arre);


//Splice => In Splice the array start from 1 not from Zero 

let arr = [1,2,3,4,5,6]

// add Element 
//arrs.splice(2,0,369)
//arr.splice(1,0,99,108)

// the last 3 number removed the 3 element after 2 index
//arr.splice(2,3)

// Remove and Replace the value
//arr.splice(1,4,99,'Om Namah Shivaya')

//splice(4) this will delete the element after 4 and return only on calling
// arr.splice(4)
// console.log(arr);

//Practice Question by Shraddha Khapra

let companies = ["Bloomberg","Microsoft","Uber","Google", "IBM", "NETFLIX"]

companies.shift(0)
console.log(companies);

companies.splice(1,1,"Ola")//starting Parameter idx 1, middle Parameter idx 1 is for Remove, Add element Last Parameter 
console.log(companies);

companies.unshift("NewsBerg") // add element at 0 idx
companies.push("Amazon") //add element the Last of the Array
console.log(companies);

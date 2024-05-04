//Function with Parameter
function sum(a, b) {
  console.log(a + b);
}
//sum(2,2)

//Function with parameter and Return word

function minus(a, b) {
  r = a - b;
  return r;
}
let ret = minus(4, 2);
//console.log(ret);

// Practiceset by Arrow Functions

let multii = (c, b) => {
  s = c * b;
  return s;
};

let ansmulti = multii(5, 4);
//console.log(ansmulti);

//Create a function using "Function" keyword that takes String as a argument & returns number of Vowels in a string

function numberOfVowels(str) {
  let count = 0;
  for (let vow of str) {
    if (
      vow === "a" ||
      vow === "e" ||
      vow === "i" ||
      vow === "o" ||
      vow === "u"
    ) {
      count++;
    }
  }
  return count;
}
// console.log(numberOfVowels("Sachin"));
// console.log(numberOfVowels("Mohit"));
// console.log(numberOfVowels("Farzeen"));
// console.log(numberOfVowels("Baljindra aeious"));

// Arrow functions code

let arrow = (ss) => {
  let count = 0;
  for (let arr of ss) {
    if (
      arr === "a" ||
      arr === "e" ||
      arr === "i" ||
      arr === "o" ||
      arr === "u"
    ) {
      count++;
    }
  }
  return count;
};

// console.log(arrow("aeiou"));
// console.log(arrow("Priti Pandalkar on Date with Sachin"));
// console.log(arrow("Baljinder Kaur and Sachin"));

// Foreach Method in Functions
let aa = ["Farzeen", "Priti", "Baljinder"];
// aa.forEach(function loveWith(se) {
//   console.log(se.toUpperCase().concat(" weds with Sachin"));
// });

// with arrow function 
// aa.forEach((val)=>{
//  console.log(val.concat(" Loves to Sachin"));
// })


/*
ForEach            //what is Higher Order Functions?
*/
let arr = ['sandesh', 'mohit', 'ram', 'narayan']

arr.forEach((num)=>{
  //console.log(num.toUpperCase().charAt(1));
})

/*
For the given array of the numbers, print the square of each value using the forEach loop
*/

// let loop = [1,2,3,4,5]
// loop.forEach(s=>{
//   console.log(ssl)
// })
 // o/p: undefined

/*
Use of Map on array  it creates new array instead of using original one
*/

let num = [2,3,4,5]

let nums = num.map((s)=>{
  return s*s
})

//console.log(nums);

/*
Filter 
*/

let nummy =[2, 3, 4, 5,6,34,54,31,32,99]

let evenArr = nummy.filter((val)=>{
  return val%2===0;
})

//console.log(evenArr);

/*
Reduce in Array method
*/

let reduceArr = [2,3,6,45,4,4,0]

let reduceMet = reduceArr.reduce((pre,curr)=>{
  //return pre+curr
  //return pre > curr ? curr : pre; // 0
  return pre > curr ? pre : curr; // 45
})

//console.log(reduceMet);

/*
  we are given array of marks of the student, filter out the student who has score more than 90+ 
*/

let marksOfStudent = [34,54,65,97,99,84,90,89.99,92]

let resultOfStudent = marksOfStudent.filter((result)=>{
  return result > 90
})

//console.log(resultOfStudent);

/*
    Take a number n as a input from user. Create a array from 1 to n. use of reduce method to calculate sum of all
    numbers in the array. use of reduce method to calculate product of all numbers in the array
*/

let n = prompt("Enter a Number: ")

let arrays = []

for(let i=1;i<=n;i++){
  arrays[i-1]=i;
}

console.log(arrays);

let sums = arrays.reduce((pre,curr)=>{
  return pre*curr
})

console.log(sums);
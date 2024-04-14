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
aa.forEach((val)=>{
 console.log(val.concat(" Loves to Sachin"));
})

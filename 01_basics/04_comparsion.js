// console.log(1==2);
// console.log(1>2);
// console.log(1<2);
// console.log(1>=2);
// console.log(1!=2);
// console.log("1"==1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null >= 1);

// console.log(undefined > 0); // 1
// console.log(undefined < 0);  //2
// console.log( undefined == 0); //3

/*
    The reason is that an equality check == and comparsions > < >= <= work differently.
    Comparsions convert null to a number, treating it as 0.
    That`s why (3) null >= 0 is true and null > 0 false.
*/

// === vs == 

console.log("2" == 2);
console.log("2" === 2);

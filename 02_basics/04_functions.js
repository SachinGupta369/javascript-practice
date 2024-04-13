//Function with Parameter
function sum(a,b){
    console.log(a+b);
}
//sum(2,2)

//Function with parameter and Return word

function minus(a,b){
    r=a-b;
    return r
}
let ret= minus(4,2)
//console.log(ret);

// Practiceset by Arrow Functions

let multii = (c,b) =>{
     s = c*b;
     return s;
}

let ansmulti= multii(5,4);
//console.log(ansmulti);

//Create a function using "Function" keyword that takes String as a argument & returns number of Vowels in a string

function numberOfVowels(str){
    for(let vow of str){
        console.log(vow);
    }
}
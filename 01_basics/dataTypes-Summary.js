//primitive

// 7 Types => String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scorelive=100.3

let islogged = true
let outSideTemp= null

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 3482085832749983n

//console.log(typeof bigNumber);

// Reference (Non-Primitive)

// Array, Objects, Functions

let heros = ['Shatkimaan, Nagraj, Doga, Krishna, Hanumen']

let Obj ={
    name:'Sahin',
    age:23,
    bloodGrp :'0-'
}

const myFunction = function(){
    console.log('Jai Shri Ram');
}

//********************************* Heap and Stack  ************************************** */

// Stack (Primative:- In stack a copy of reference is (values)update or Changes in made)


//Heap  (Non-Primative :- In Heap it change the value by using reference it can be multiple reference )

//Stack Example

let choiceOfWife = 'Only one Now'
let choiceWivies = choiceOfWife
choiceWivies = 'Having Multiple Wivies'

// console.log(choiceOfWife);
// console.log(choiceWivies);

let incomeSource = {
    Blog:'35 lac',
    Software : '99 crore',
    Billionare :true
}

// console.log(incomeSource);

let incomeIncrease = incomeSource
incomeIncrease.Blog='99 crore'
incomeIncrease.Software='9 Billion'

console.log(incomeSource.Blog);
console.log(incomeIncrease.Blog);
// functions

function addTwoNumber(num1,num2){
    results = num1+num2;
    // console.log(results);
    
}
addTwoNumber(3,4)

function addNumber(num1,num2){
    return num1+num2; 
}
// console.log(addNumber(44,6));

function loginUser(username){
    return `${username} is just loggedIn`
}

// console.log(loginUser('Jai Shri Ram'));

function spread (num1,num2,...args){
    return args

}
console.log(spread(200,300,400,500,600));

const user = {
    usname : "Sachin",
    age:"25",
    profession : "Software Developer"
}

function userValue(objects){
    console.log(`${objects.usname} is the world best ${objects.profession}, He started his career at ${objects.age}`);
}
userValue(user)

const newArre = [200,300,400,500,600]

function newArr(arryinput){
    return arryinput[2]
}

console.log(newArr);



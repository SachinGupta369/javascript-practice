const user ={
    username : 'Om Namah Shivaya',
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to the Js Mastery`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username ="har har mahadev"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     const username = 'Ram'
// console.log(this.username);
// }

// const chai = function() {
//     const usname = "Hare ram"
//     console.log(this.usname)
// }

// chai()

// const chai = () =>{
//     let user = "Hare Krishna"
//     console.log(this.user);
// }

// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

// const addTwo = (num1,num2) => ({name : "Rameshwar"} )

// console.log(addTwo(4,2))

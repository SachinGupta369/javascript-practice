// const user = {
//     username : "Sachin",
//     loggin : 8,
//     loggOut : 9,

//     getUserDetails : function(){
//         this.username = 'Mohit',
//         this.loggin = 45
//         console.log('Jai shri RAM');
//         console.log(`username ${this.username}`);
//     }
// }

// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());

function userss(name,age,hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

const userOne = new userss('sachin',25,'programmer')
const userTwo = new userss('mohit',23,'Gamer')

console.log(userOne);
console.log(userTwo);

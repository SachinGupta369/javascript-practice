const k = [1,2,3]

// const myTotal = k.reduce(function(acc,curVal){
//     console.log(`acc : ${acc} & curVal: ${curVal}`);
//     return acc+curVal
// },0)

// console.log(myTotal);

const myReduce = k.reduce((acc,curVal)=>{
    // console.log(`acc : ${acc} & curVal: ${curVal}`);
    return acc+curVal
},2)
// console.log(myReduce);

const cart = [
    {
        course : 'Py Course',
        price : 10999 
    },
    {
        course : 'Js Course',
        price : 3999 
    },
    {
        course : 'Mobile Dev Course',
        price : 16999 
    }
]

const value = cart.reduce((acc,curVal)=>{
    return acc+curVal.price
},0)

console.log(value);


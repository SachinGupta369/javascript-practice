const coding = ['js', 'ruby', 'java', 'python', 'cpp']

const extss = coding.forEach((val)=>{
    // console.log(val);
    return val  
})
// console.log(extss);

// forEach never returns the values

const num = [1,2,3,4,5,6,7,8,9,10]

const newNum = num.filter((nu)=> {
    return nu>5
})

// console.log(newNum);

const nayaNum = []

num.forEach((numberss)=>{
    if(numberss>7){
        nayaNum.push(numberss)
    }
})

// console.log(nayaNum);

const books = [
    {
        title:'Book One', genre:'Fiction', publish : '1981', edition:2004
    },
    {
        title:'Book Two', genre:'Non-Fiction', publish : '1992', edition:2008
    },
    {
        title:'Book Three', genre:'History', publish : '1999', edition:2007
    },
    {
        title:'Book Four', genre:'Non-Fiction', publish : '1989', edition:2010
    },
    {
        title:'Book Five', genre:'Science', publish : '2009', edition:2009
    },
    {
        title:'Book Six', genre:'Fiction', publish : '1987', edition:2010
    }
]

let List = books.filter((val)=>val.genre==='History')
// console.log(List);

List = books.filter((val)=> {
    return val.genre === 'History' && val.publish >= 1995 
} )

// console.log(List);

const no = [1,2,3,4,5,6,7,8,9,10]

const valueNo = no.map((noValue) => noValue*10)
                  .map((noValue)=> noValue+1.6)
                  .filter((noValue)=> noValue>30)

console.log(valueNo);
                  

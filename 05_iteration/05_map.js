// Map

const map = new Map();
map.set("IN",'India')
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);

for (key of map){
    // console.log(key);
}

for([key,value] of map){
    // console.log(key, `:- `, value);
}

const myObject = {
    'game1' : 'NFS',
     game2 : 'Spiderman'
}

// for(games of myObject){
//     // console.log(games);
// }

// for([key, values] of myObject){
//     // console.log( key, values);
// }

for(sachin of map){
    console.log(`Sachin ruled :- `,sachin);
    
}
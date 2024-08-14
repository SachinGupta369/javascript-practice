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
    console.log(key, `:- `, value);
    
}

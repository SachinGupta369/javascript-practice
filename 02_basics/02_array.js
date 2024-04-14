const marvel_hores = ["iron man","steve", "hulk", "Black Widow"]
const dc_hores = ["supermen", "wonderwomen", "flash",]

marvel_hores.push(dc_hores)
//  console.log(marvel_hores);
//  console.log(marvel_hores[4][1]);

const new_arry = marvel_hores.concat(dc_hores)
//console.log(new_arry)

const spread_array = [...dc_hores, ...marvel_hores]
//console.log(spread_array);

const multi_array = [1,2,3,[23,2.5], 65, 64,4,[454,45,[5,65],4,34,[23,2,23,43,43,2]],64]
//console.log(multi_array.flat(Infinity));

const real_multi_aray = multi_array.flat(1)
//console.log(real_multi_aray);

// recommendate to learn more on below topic

const name_array = Array.isArray("Sachin")
//console.log(name_array);

const from_array = Array.from("SAchin")
const fr = Array.from({Name:'SAchin', Age:25}) //Interesting question for Viva
//console.log(fr.from(Name,Age));
//console.log(from_array);

const array_of = Array.of("Sachin","Mahi",2,3,2,)
//console.log(array_of);

let score = 100
let score1 = 102
let score2 = 103

console.log(Array.of(score,score1,score2));

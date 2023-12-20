//  array basics
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //  spread operator will add all the arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat => will give pure array from array inside array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // output is false
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting // it will return empty array because we have to give the value like key or value to form an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // of => will include all the elements.
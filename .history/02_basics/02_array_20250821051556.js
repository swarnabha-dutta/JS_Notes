const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"];

// console.log(marvel_heros);
// console.log(dc_heros);


// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros);



// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);


const another_array = [1, 2, 3, 4, [5, 6], 6, 6, 7, 8, [9, 10, 11, [12, 13, 14]]];


const real_Another_Array = another_array.flat(Infinity);
// console.log(real_Another_Array);


console.log(Array.isArray("Swarnabha"));

// *

console.log(Array.from("Swarnabha"));


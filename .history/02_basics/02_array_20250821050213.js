const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"];

// console.log(marvel_heros);
// console.log(dc_heros);


// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros);



// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const allHeros = [...marvel_heros,...dc_heros]
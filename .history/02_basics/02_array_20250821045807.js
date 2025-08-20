const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"];



marvel_heros.push(dc_heros);
console.log("After:", marvel_heros);



const allHeros=marvel_heros.concat(dc_heros);
console.log("After Concat:", allHeros);
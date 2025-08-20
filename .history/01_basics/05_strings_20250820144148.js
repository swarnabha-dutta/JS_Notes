const gameName = new String('Swarnabha-Dutta');
// console.log(gameName[0]);
// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName.charAt(10));
// console.log(gameName.indexOf("u"));


const newString = gameName.slice(-8, 9);
// console.log(newString);


const url = "https://hitesh%20choudhary.com";

// console.log(url.replace("%20", " "));
// console.log(url);
// console.log(url.includes("hijah"))




const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");

// for (let index = 0; index < words.length; index++) {
//     console.log(`index at ${index}: ${words[index]}`);
// }
const chars = str.split("");
console.log(chars[8]);//output:k
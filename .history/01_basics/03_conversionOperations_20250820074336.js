const score = false;


// console.log(typeof score);
const valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// ******Notes*******//""

/*   
1. "33"(Number in String) - 33(Number)
2. "33abc"(Number + String)  - Number but return NaN
3. true(boolean) - 1(Number); false(boolean) - 0(Number)
4.null - > 0(Number)
5.undefined -> NaN
*/




let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
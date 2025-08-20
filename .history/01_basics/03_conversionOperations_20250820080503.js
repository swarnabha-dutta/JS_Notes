// *Boolean Conversion to Number***//


const score = false;


console.log(typeof score);
const valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// ******Notes*******//""

/*   
1. "33"(Number in String) - 33(Number)
2. "33abc"(Number + String)  - Number but return NaN
3. true(boolean) - 1(Number); false(boolean) - 0(Number)
4.null - > 0(Number)
5.undefined -> NaN
*/



// *****String to 
let isLoggedIn =" ";
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);



/*
*1. 1,any number (but not for 0) -> true
*2. 0 -> false
*3. ""->false
*4. "abc" or "anything" -> true
*5. null -> false
*6. undefined -> false
*7. NaN -> false
*8. [] -> true
*9. {} -> true
*/
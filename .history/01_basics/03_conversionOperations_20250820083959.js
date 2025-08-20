//***Boolean Conversion to Number***//


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



// *****String to Boolean**// 
let isLoggedIn =" ";
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


// ******Notes*******//""
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


// ******String to Number**// 
let someNumber = "false";
let number = Number(someNumber);
console.log(number);
console.log(typeof number);


// ******Notes*******//""

/*
*1. "33"(Number in String) - 33(Number)
*2. "33abc"(Number + String)  - Number but return NaN
*3. true(boolean) - 1(Number); false(boolean) - 0(Number)
*4.null - > 0(Number)
*5.undefined -> NaN
*/

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
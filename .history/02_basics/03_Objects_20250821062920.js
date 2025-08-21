// ****Notes*****

// Objects  lekhar 2 ways

// 1. Object Literal ete singleton use hoy na
// 2. Constructor Function ete singleton use hoy -> Objects.create


// Objects literals



const mySym = Symbol("key1")

const JsUser = {
    name: "Swarnabha",
    "full name": "Swarnabha Dutta",
    [mySym] :"key232",
    age: 23,
    Location: "Kolkata",
    email: "swarnabhadutta909@gmail.com",
    isLoggedIn : ["Monday", "Tuesday"],
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}


// console.log(typeof JsUser.name);
// console.log(JsUser["Location"]);
// console.log(JsUser["full name"]);

// console.log( JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"

// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "hitesh@chatgpt8788.com"
// console.log(JsUser);


/* ****Notes**
Object.
*/

JsUser.greeting = function () {
    console.log("Hello JS user");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
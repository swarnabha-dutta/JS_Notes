// ****Notes*****

// Objects  lekhar 2 ways

// 1. Object Literal ete singleton use hoy na
// 2. Constructor Function ete singleton use hoy -> Objects.create


// Objects literals



const mySym = Symbol("key1")

const JsUser = {
    name: "Swarnabha",
    "full name": "Swarnabha Dutta",
    mySym :"key232",
    age: 23,
    Location: "Kolkata",
    email: "swarnabhadutta909@gmail.com",
    isLoggedIn : ["Monday", "Tuesday"],
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}


console.log(JsUser.name);
console.log(JsUser["Location"]);
console.log(JsUser["full name"]);
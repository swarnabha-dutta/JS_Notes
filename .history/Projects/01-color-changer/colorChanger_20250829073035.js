const allBtns = document.querySelectorAll(".button");
// console.log(allBtns)

const bodySelect = document.querySelector("body");
// console.log(bodySelect)



// switch case + if else for only small cases like 2 to 3 to 10-15 boxes it ok but oif the boxes are let say 1 lacs then the logic code or js code using switch case /if else will be very messy 

allBtns.forEach(function (btn) {
    console.dir(btn);
    btn.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);

        const color = e.target.id;
        switch (color) {
            case "grey":
                bodySelect.style.backgroundColor = color;
                break;
            case "white":
                bodySelect.style.backgroundColor = color;
                break;
            case "yellow":
                bodySelect.style.backgroundColor = color;
                break;
            case "blue":
                bodySelect.style.backgroundColor = color;
                break;
        }
    })
});




// For That reason we use Objects 
const colorMap = {
    grey: "grey",
    white: "white",
    yellow: "yellow",
    blue: "blue",
    red: "red",
    //....
};


allBtns
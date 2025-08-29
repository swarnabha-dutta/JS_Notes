const allBtns = document.querySelectorAll(".button");
// console.log(allBtns)

const bodySelect = document.querySelector("body");
// console.log(bodySelect)
allBtns.forEach(function (btn)  {
    console.dir(btn);
    btn.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);

        const color = e.target.dispatchEvent;
        switch (color) {
            case "grey":
                bodySelect.style.backgroundColor = color;
                break;
            case "white":
                bodySelect.style.backgroundColor = color;
                break;
            case "yellow":
                break;
        }
    })
})
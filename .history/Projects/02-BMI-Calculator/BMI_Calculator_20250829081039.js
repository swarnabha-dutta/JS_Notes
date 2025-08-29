const formSelect = document.querySelector("form");
// console.log(formSelect);
const heightSelect = parseInt(document.querySelector("#height").value);
c
formSelect.addEventListener("submit", (e) => {
    e.preventDefault();
    // const heightSelect = parseInt(document.querySelector("#height").value);
    const weightSelect = parseInt(document.querySelector("#weight").value);
    console.log(weightSelect)
})
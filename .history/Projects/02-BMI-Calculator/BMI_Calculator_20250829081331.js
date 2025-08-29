const formSelect = document.querySelector("form");
// console.log(formSelect);
formSelect.addEventListener("submit", (e) => {
    e.preventDefault();
    const heightSelect = parseInt(document.querySelector("#height").value);
    // console.log(heightSelect)

    const weightSelect = parseInt(document.querySelector("#weight").value);
    // console.log(weightSelect)
    const resultsSelect = document.querySelector("#results");
})
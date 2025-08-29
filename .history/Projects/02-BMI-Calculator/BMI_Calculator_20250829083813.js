const formSelect = document.querySelector("form");
// console.log(formSelect);
formSelect.addEventListener("submit", (e) => {
    e.preventDefault();
    const heightSelect = parseInt(document.querySelector("#height").value);
    // console.log(heightSelect)

    const weightSelect = parseInt(document.querySelector("#weight").value);
    // console.log(weightSelect)
    const resultsSelect = document.querySelector("#results");
    // console.log(resultsSelect);

    if (heightSelect < 0 || heightSelect === "" || isNaN(heightSelect)) {
        resultsSelect.textContent = `Please enter a valid height ${heightSelect}`;
    } else if (weightSelect < 0 || weightSelect === "" || isNaN(weightSelect)) {
        resultsSelect.textContent = `Please enter a valid weight ${weightSelect}`;
    } else {
        // calculate BMI 
        const bmi = (weightSelect / ((heightSelect * heightSelect) / 10000)).toFixed(2);
        // console.log(bmi);
        resultsSelect.textContent = `Your BMI is ${bmi}`
    }

})
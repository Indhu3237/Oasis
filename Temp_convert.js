const degInput = document.getElementById("deg");
const typeSelect = document.getElementById("type");
const resInput = document.getElementById("res");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
    const deg = parseFloat(degInput.value);
    const type = typeSelect.value;
    let result;

    if (type === "Celsius") {
        result = (deg * 9/5) + 32;
    } else if (type === "Fahrenheit") {
        result = (deg - 32) * 5/9;
    } else if (type === "Kelvin") {
        result = deg - 273.15;
    }

    resInput.value = result;
});
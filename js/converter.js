// ==========================================
// ULTIMATE TOOLS - REUSABLE CONVERTER ENGINE
// ==========================================

function initializeConverter(config) {

    const input = document.getElementById("converterInput");
    const button = document.getElementById("convertButton");
    const result = document.getElementById("result");

    if (!input || !button || !result) {
        return;
    }


    function calculate() {

        const value = parseFloat(input.value);

        if (isNaN(value)) {
            result.textContent = "Enter a number";
            return;
        }

        const convertedValue = value * config.factor;

        result.textContent =
            formatNumber(convertedValue) + " " + config.to;
    }


    function formatNumber(number) {

        if (Number.isInteger(number)) {
            return number.toString();
        }

        return parseFloat(number.toFixed(10)).toString();
    }


    button.addEventListener("click", calculate);


    input.addEventListener("input", calculate);


    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            calculate();
        }

    });

}

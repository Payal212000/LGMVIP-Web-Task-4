let displayValue = "";

function appendToDisplay(val) {
    displayValue += val;
    document.getElementById("result").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("result").value = "";
}

function removeLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("result").value = displayValue;
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        document.getElementById("result").value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

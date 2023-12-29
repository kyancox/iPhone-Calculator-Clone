const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
operators = ['+', '-', '*', '/']

var num = "0";
var operation = "";


function addToDisplay(input) {

    // Ensure display does not surpass 9 digits 
    if (display.value.length >= 9) return;

    // Check for repeating decimal
    if (input == "." && display.value.includes(input)) return;

    // If input is an operator 
    if (operators.includes(input)) {
        num = display.value;
        operation = input;
        display.value = "";
        return;
    }

    // Setup if display is blank
    if (display.value == 0) {
        display.value = input;
        clearButton.textContent = "C";
        return; 
    }

    display.value += input;

}

function oppositeSign() {
    display.value *= -1;
}


function calculate() {
    try {
        display.value = eval(num + operation + display.value);
        var temp = display.value;
    } catch (error) {
        display.value = "Error";
    }

}

function percentage() {
    display.value = display.value / 100;
}

function clearDisplay() {
    resetVars();
    clearButton.textContent = "AC";
}

function resetVars() {
    display.value = 0;
    num = "0";
    operation = "";
}
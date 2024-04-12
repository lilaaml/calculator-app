const screen = document.getElementById("screen");

function appendToDisplay(input) {
    screen.value += input;
}

function clearScreen() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value).toFixed(2);
    } catch (error) {
        screen.value = "Error";
    }
}
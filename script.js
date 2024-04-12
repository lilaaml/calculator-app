const screen = document.getElementById("screen");

function appendToDisplay(input) {
    screen.value += input;
}

function clearScreen() {
    screen.value = "";
}

function deleteInput() {
    screen.value = (screen.value).toString().slice(0, -1);
}

function calculate() {
    try {
        if(eval(screen.value) % 1 != 0) {
            screen.value = (eval(screen.value)).toFixed(2);
        } else {
            screen.value = eval(screen.value);
        }
    } catch (error) {
        screen.value = "Error";
    }
}
const screen = document.getElementById("screen");
let dotCount = 0;
var dotBtn = document.getElementById("dot");

dotBtn.addEventListener("click", function() {
    dotCount++;
})

function appendToDisplay(input) {
    if (dotCount === 1) {
        document.getElementById("dot").disabled = true;
    } else {
        screen.value += input;
    }
}

function clearScreen() {
    screen.value = "";
}

function deleteInput() {
    screen.value = (screen.value).toString().slice(0, -1);
}

function calculate() {
    screen.value = eval((screen.value).replace("%", "/100"));
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
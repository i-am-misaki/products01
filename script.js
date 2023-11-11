let result = document.querySelector(".result");

function calculationNum(value) {
    result.value += value;
}

function clearinput() {
    result.value = "";
}

function calculationResult() {
    result.value = eval(result.value);
}
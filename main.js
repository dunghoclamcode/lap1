function isValidNumber(input) {
    return !isNaN(input) && input.trim() !== "";
}

function promptForNumbers() {
    let numberA = prompt("Enter number A:");
    if (!isValidNumber(numberA)) {
        alert("Number A is formatted incorrectly");
        return;
    }
    let numberB = prompt("Enter number B:");
    if (!isValidNumber(numberB)) {
        alert("Number B is formatted incorrectly");
        return;
    }
    let sum = parseFloat(numberA) + parseFloat(numberB);
    alert("Result:\n" + sum);
}


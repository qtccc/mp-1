console.log("Project page loaded successfully!");
// Function to add two numbers
function add() {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    const result = num1 + num2;
    displayResult(result);
}

// Function to subtract two numbers
function subtract() {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    const result = num1 - num2;
    displayResult(result);
}

// Function to multiply two numbers
function multiply() {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    const result = num1 * num2;
    displayResult(result);
}

// Function to divide two numbers
function divide() {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    if (num2 !== 0) {
        const result = num1 / num2;
        displayResult(result);
    } else {
        displayResult('Error: Division by zero');
    }
}

// Function to raise a number to the power of another number (using a loop)
function power() {
    const base = parseFloat(document.getElementById('first-number').value);
    const exponent = parseInt(document.getElementById('second-number').value);
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    displayResult(result);
}

// Function to clear the input fields and output
function clearFields() {
    document.getElementById('first-number').value = "";
    document.getElementById('second-number').value = "";
    document.getElementById('output').innerHTML = "";
}

// Function to display the result
function displayResult(result) {
    const output = document.getElementById('output');
    output.innerHTML = result;

    // Check if the result is negative and apply the red text class
    if (typeof result === 'number' && result < 0) {
        output.classList.add('negative');
    } else {
        output.classList.remove('negative');
    }
}


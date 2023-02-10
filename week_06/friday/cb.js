console.log("--- START OF SCRIPT ---");

// function to print output
function logger(value) {
    console.log("Values is " + value);
};

// function to make the calculations
function sumCalculator(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum);
};

// function to call the calculation
function timeoutCallback(params) {
    sumCalculator(5, 7, logger);
};

// library function calls timeoutCallback after set time
setTimeout(timeoutCallback, 2000);

console.log("--- END OF SCRIPT ---");
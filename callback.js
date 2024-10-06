// when function take argument to another function
function sum(a, b, fnToCall) {
    let result = a + b;
    fnToCall(result);          // fnToCall is an argument semilar to a, b that take as function as an argument
}

function displayResult(data) {
    console.log("Result of the sum is: ", data);
}

function displayResultPassive(data) {
    console.log("Sum result is: ", data);
}

const value = sum(1, 2, displayResult);
console.log(value);



function calArith(a, b, fnToCall) {
    console.log(sum);
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

calArith(1, 2, sum())
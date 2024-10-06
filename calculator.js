function performCalculation(m, n, char) {
    let Add = add(m, n, char);
    if (char == '+' || char == "add") {
        console.log(Add);
    }
    
    let Sub = sub(m, n, char);
    if (char == '-' || char == "sub") {
        console.log(Sub);
    }
    
    let Mul = multi(m, n, char);
    if (char == '*' || char == "sub") {
        console.log(Mul);
    }

    let Div = division(m, n, char);
    if (char == '/' || char == "div") {
        console.log(Div);
    }
    
    let Mod = modulo(m, n, char);
    if (char == '%' || char == 'mod') {
        console.log(Mod);
    }
}

function add(m, n, char) {
    if (char == '+' || char == "add") {
        console.log("Add: ", m + n);
    }
}

function sub(m, n, char) {
    if (char == '-' || char == "sub") {
        console.log("Sub: ", m - n);
    }
}

function multi(m, n, char) {
    if (char == '*' || char == "mul") {
        console.log("Multiple: ", m * n);
    }
}

function division(m, n, char) {
    if (char == '/' || char == "div") {
        console.log("Division: ", m / n);
    } 
}

function modulo(m, n, char) {
    if (char == '%' || char == "mod") {
        console.log("Modulo: ", m % n);
    } 
}

performCalculation(3, 2, '-');
function mathMethod(value) {
    console.log("Original value: ", value);

    let rounded = Math.round(value);
    console.log("After random: ", rounded);

    let ceiling = Math.ceil(value);
    console.log("After ceiling: ", ceiling);

    let flooring = Math.floor(value);
    console.log("After flooring: ", flooring);

    let randomValue = Math.random();
    console.log("After random: ", randomValue);

    let maxValue = Math.max(5, 10, 15);
    console.log("MaxValue: ", maxValue);

    let minValue = Math.min(5, 10, 15);
    console.log("MinValue: ", minValue);

    let powerOfTwo = Math.pow(value, 2);
    console.log("After power: ", powerOfTwo);

    let squareRoot = Math.sqrt(value);
    console.log("After sqrt: ", squareRoot);

}
mathMethod(20);
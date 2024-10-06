// ParseInt is a function that provide string as a input and 
// return Integer as a output
function explaninParseInt(value) {
    console.log("Original value: ", value);
    console.log("After parsseInt: ", parseInt(value));
}
explaninParseInt("42");
explaninParseInt("42px");
explaninParseInt("3.14");


// ParseFloat is a function that provide string as a input and 
// return Float as a output
function explaninParseFloat(value) {
    console.log("Original value: ", value);
    console.log("After parsseInt: ", parseFloat(value));
}
explaninParseFloat("42");
explaninParseFloat("42px");
explaninParseFloat("3.14");
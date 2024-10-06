// lenghtOfStr
function getLenght(str) {
    console.log("Original string: ", str);
    console.log("lenght of str: ", str.length);
}
getLenght("Hello, World");


// findIndexOfStr
function findIndexOf(str, target) {
    console.log("Original string: ", str);
    console.log("index of str: ", str.indexOf(target));
}
findIndexOf("Hello, World", "World");


// sliceOfStr
function getSlice(str, start, end) {
    console.log("Original str: ", str);
    console.log("After slice: ", str.slice(start, end));
}
getSlice("Helloo World", 0, 5);


// replaceStr
function replaceStr(str, target, replacement) {
    console.log("Original str: ", str);
    console.log("after replacement: ", str.replace(target, replacement));
}
replaceStr("Hello, world", "world", "javescript");


// splitStr
function splitStr(str, separator) {
    console.log("Original str: ", str);
    console.log("after split: ", str.split(separator));
}
splitStr("Hi my name is hello", " ")


// trimStr
function trimStr(str, trim) {
    console.log("Original str: ", str);
    console.log("after trim: ", str.trim(trim));
}
trimStr("hello world", " ");


// toUpperCase
function toUpper(str) {
    console.log("Original str: ", str);
    console.log("after uppercase: ", str.toUpperCase());
}
toUpper("Hello world");


// toLowerCase
function toLower(str) {
    console.log("Original str: ", str);
    console.log("after lowercase: ", str.toLowerCase());
}
toLower("HELLO, WORLD");
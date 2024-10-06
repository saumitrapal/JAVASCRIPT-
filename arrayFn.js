// push function push element in a array in last position
function pushElementInArray(arr, element) {
    console.log("Original array: ", arr);
    arr.push(element);
    console.log("After push: ", arr);
}
pushElementInArray([1, 2, 3, 4, 5], 6);


// push function  element in a array from last position
function popElementInArray(arr) {
    console.log("Original array: ", arr);
    arr.pop();
    console.log("After pop: ", arr);
}
popElementInArray([1, 2, 3, 4, 5]);


// shift function that delete element in a array front from position
function shiftElementInArray(arr) {
    console.log("Original array: ", arr);
    arr.shift();
    console.log("After shift: ", arr);
}
shiftElementInArray([1, 2, 3, 4, 5]);


// unshift function that add element in a array front position
function unshiftElementInArray(arr, element) {
    console.log("Original array: ", arr);
    arr.unshift(element);
    console.log("After shift: ", arr);
}
unshiftElementInArray([1, 2, 3, 4, 5], 0);


// concat is a function that add two array 
function concatArray(array1, array2) {
    console.log("Original array: ", array1, array2);
    console.log("After concatarray: ", array1.concat(array2));
}
concatArray([1, 2, 3], [4, 5, 6]);



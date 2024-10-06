// arrow function
// const sum = (a, b) => {
//     return a + b;
// }

// const S = sum(1, 2);
// console.log(S);



// const inputArr = [1, 2, 3, 4, 5];
// const newArr = [];

// for (let i = 0; i < inputArr.length; i++) {
//     newArr.push(inputArr[i] * 2)
// }
// console.log(newArr);


// map() fn take fn as a input 
// const inputArr = [1, 2, 3, 4, 5];

// function transform(a) {
//     return a * 2;
// }

// const ans = inputArr.map(transform);
// console.log(ans);


// const array = [1, 2, 3, 4, 5, 6];
// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         newArray.push(array[i]);
//     }
// }
// console.log(newArray);



// filter() fn that can take fn as a arugument
const arr = [1, 2, 3, 4, 5, 6];

function filterLogic(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const newArr = arr.filter(filterLogic);
console.log(newArr);



// filter fn another problem
const Name = ["spal", "pal", "sam"];

function logic(n) {
    if (n.startsWith('s')) {            // here startsWith() is a fn that can varify str starts with which char
        return true;
    } else {
        return false;
    }
}

const n = Name.filter(logic);
console.log(n)


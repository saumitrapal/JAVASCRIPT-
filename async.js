// function findsum(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// function findsumTill100() {
//      console.log(findsum(100));
// }

// setTimeout(findsumTill100, 1 * 1000);
// console.log("Hello, world");

const fs = require("fs");   // fs.readFile() is a async function that does read a file from our file system

fs.readFile("async.txt", "utf-8", function(err, data) {
    console.log(data);
})

console.log("Hello, world 2")


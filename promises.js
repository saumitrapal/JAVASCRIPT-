// Promise() is a class that is used to a cleaner way to write our own async function
// it take function as a argument  
// promise are three state 1.resolve, 2.reject, 3.pending
// promises .then and async await all two systext are same thing and same tasks


// promises .then syntext 
const fs = require("fs");

function readFile() {
    let p = new Promise(function(resolve) {
        fs.readFile("promises.txt", "utf-8", function(err, data) {
            resolve(data);
        })
    })
    return p;
}

function onDone(data) {
    console.log(data);
}

readFile().then(onDone);



// promises async await syntext
function readFile() {
    let p = new Promise(function(resolve) {
        fs.readFile("promises.txt", "utf-8", function(err, data) {
            resolve(data);
        })
    })
    return p;
}

async function onDone() {
    const value = await readFile();
    console.log(value);
}

onDone();
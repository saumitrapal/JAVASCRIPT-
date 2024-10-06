// setTimeout is a function that provide javascript
// that function take two argument : first argument is a another function 
// second argument is time in milisecond that time is spcify the first argument is call after that time
// setInterval is anothet function that provide javascript same as setTimeout but it repeat same tasks as certain interval

function greet() {
    console.log("Hello, world");
}

setTimeout(greet, 1 * 1000)
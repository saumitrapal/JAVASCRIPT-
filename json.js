// JSON.parse() is a fn that convert string to object
const users = '{"name": "hello", "age": "23", "gender": "male"}';

const user = JSON.parse(users);
console.log(user);


// JSON.stringify() is a fn that convert object to string
const useres = {
    name: "hello",
    age: 23,
    speck: "Eng"
}

const usersess = JSON.stringify(useres);
console.log(usersess);
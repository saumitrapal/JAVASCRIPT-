const sampleObject = {
    name: "hello",
    age: 24,
    spack: "eng"
}

function objectMethod(obj) {
    console.log("Original object: ", obj);

    let keys = Object.keys(obj);
    console.log("After Object.keys(): ", keys);

    let values = Object.values(obj);
    console.log("After Object.values(): ", values)

    let entries = Object.entries(obj);      // give entrie object and key value pair as a array format like:  [ [ 'name', 'hello' ], [ 'age', 24 ], [ 'spack', 'eng' ] ]
    console.log("After Object.entries(): ", entries);

    let hasProp = Object.hasOwnProperty("property");    // hasOwnProperty is give to output as a true or false 
    console.log("After hasOwnProperty(): ", hasProp);

    let newObj = Object.assign({}, obj, {newProperty: "newValue"});  // assign is to create a new properties on object like: { name: 'hello', age: 24, spack: 'eng', newProperty: 'newValue' }
    console.log("After Object.assign(): ", newObj);
}

objectMethod(sampleObject);
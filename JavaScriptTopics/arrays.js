// arrays can store more than one type of information
// they can have integers, strings, characters etc all stored in the same array. 
// for example

var Array = ["Mohammed", 20, "H"]
console.log(Array);

//arrays can store other arrays
// this is called a nested array

var ArrayNested = [["Mohammed", 20], "Hello World", 21];

//to find an item at a specific index in an array, we do the following, 

console.log(ArrayNested[0]);

// modify items in an array with command
// for example

var ArrayModified = [["Hello", "World", 10]]
ArrayModified[0] = 1;
console.log(ArrayModified[0]);
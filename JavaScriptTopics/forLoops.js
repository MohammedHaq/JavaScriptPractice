//another way to iterate using loops is using a for loop
// a for loop in JavaScript is very similar to other languages such as C++
// For loops in JavaScript are NOT like for loops in Python

var MyArray = [];

for (var i = 0; i <= 10; i++) { 
    MyArray.push(i);
}

console.log(MyArray);

// this loop will iterate all the way up to and including 10 using a for loop and add the numbers to the array

//to iterate through an array using a for loop, we can do the following:

var MyArray2 = [1,2,3,4,5,6,7,8,9,10];
var total = 0;

for (var j = 0; j < MyArray2.length; j++) {
    total = total + MyArray2[j]
}

console.log(total)
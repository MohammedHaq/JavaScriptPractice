// let's say, you want to add certain numbers into an array up to a given amount without manually adding it in yourself
// this can be done with a while loop, 
// we use while loops in JavaScript as the following:

var MyArray = []
var i = 0; // must initialize the counting variable seperately

while(i < 10) {
    MyArray.push(i);
    i++                     // since this is a while loop, you must ensure the counter is manually incremented, otherwise it will go into an infinite loop
}

console.log(MyArray)


// a variation of the while loop is the do...while loop
// in this variation, the loop will run atleast once before checking the condition

var MyArray3 = []
var k = 10;

while (k < 5) {
    MyArray3.push(k)
}

console.log(MyArray3)
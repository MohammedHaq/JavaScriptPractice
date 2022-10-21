//else statements can help us create alternative conditions that can be met after the original if statement
// for example

var Array = [1,2,3,4];
if (Array[0] == 2) {
    console.log("If condition satisified")
} else {
    console.log("if condition was not satisfied so the else condition was used")
}

// if else statements follow a very similar syntax
//for example

var Array = [1,2,3,4];
if (Array[0] == 2) {
    console.log("If condition satisified")
} else if (Array[1] == 2){
    console.log("if condition was not satisfied but the if else statement condition was satisfied")
} else {
    console.log("the else statement was used")
}
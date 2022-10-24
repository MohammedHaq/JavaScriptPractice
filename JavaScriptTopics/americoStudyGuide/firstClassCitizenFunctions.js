//a first class citizen is a programming language that has the ability to treat functions as falues and to pass them as arguments to return a function from another function
//if a programming language has this, it is considered to have first class functions
//the first class functions are called first class citizens

//an example of this is the following

var greet = function () {
    console.log("Hello World!")
}

greet();

//these functions can be passed in as arguments
//to see this, we observe the following example 

function teacher(){
    return "Teacher";
}
  
function student(){
    return "Student";
}
  
function meet(user){
    console.log("Welcome", user());    
}
  
// Prints "Welcome Teacher"
var message = meet(teacher);
  
// Prints "Welcome Student" 
var message = meet(student);
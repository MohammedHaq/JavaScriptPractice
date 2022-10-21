//functions are used the same way as python
//typically written at the top or at the bottom of the code file
//they allow us to reuse code

//the syntax of a function is as follows:

function ourReusableFunction() {

    console.log("Hello World!")

}

//inside the circle brackets of thea function are the parameters that the function will take from the main code
//works the same as python

//to call a function, we use the function name and circle brackets containing the prameters

ourReusableFunction();

//This will print Hello World!



//an example of a function that takes arguments is as follows:

function functionWithArguments(a, b) {
    console.log(a - b);
}

functionWithArguments(10, 5);

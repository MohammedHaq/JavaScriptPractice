//Arrow Functions


//This is the syntax of arrow functions in JavaScript
(param1, param2) => {statements}
(param1, param2) => expression;             //if you do not put curly brackets on an arrow function, it will automatically return what is placed after the arrow function
(param1, param2) => { return expression; }  //This line and the line above it are equivalent

(singleparam) => { statements } // when there is only a single parameter, the curly brackets are not required
singleparam => { statements } // this line and the line above this line are equivalent

() => { statements }          // if you are writing a function without any parameters, then this requires parantheses
() => expression;             // the same principles apply here that if there are no curly brackets, then the value in the expression is automatically returned
() => { return expression; }

(param1, param2, paramN) => expression



// we can compare regular functions to arrow functions as the following:

var multiply = function (x,y) {
    return x*y;
}

// this can be written as an arrow function as the following:

var multiply = (x,y) => {return x*y};

var multiply = (x,y) => x*y;









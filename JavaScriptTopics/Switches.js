// switches are a function in JavaScript that operate similar to if and if else statementsa
// an example of switches is the following

function caseInSwitch(Val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha"
            break;                     // if you do not add a break statement, it will continue to check all the cases in the switch statement
        case 2:
            answer = "beta"
            break;
        default:
            answer = "charlie"         // the default case acts as the else statement in the switch statement
            break;
    }
    return answer
}

caseInSwitch(1);
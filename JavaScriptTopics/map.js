var myArray = [1,2,3,4,5]
var doubledMyArray = myArray.map(function(item){
    return item*2;
})

console.log(doubledMyArray)

//this can be written using arrow functions as the following:

var myArray = [1,2,3,4,5]
var doubledMyArray = myArray.map( item => item*2)

console.log(doubledMyArray)


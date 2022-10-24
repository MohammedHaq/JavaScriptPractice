var myArray = [1,2,3,4,5,6]
var arrayOfObjects = []

for (var i = 0; i < myArray.length; i++) {
    arrayOfObjects.push({ i : myArray[i] - 10 })
}

console.log(arrayOfObjects)
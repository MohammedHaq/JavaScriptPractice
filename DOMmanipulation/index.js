//we can select an element on the HTML file using multiple different ways
//some of these ways include:

//getElementById(Id)

let header = document.getElementById("header")
console.log(header)

//getElementByClass(Id)

let headers = document.getElementsByClassName("header")
console.log(headers)

//getElementByTagName()

let tagNames = document.getElementsByTagName("header")

//querySelector()

let queries = document.querySelector("header")

//querySelectorAll()

let queryAll = document.querySelectorAll("header")
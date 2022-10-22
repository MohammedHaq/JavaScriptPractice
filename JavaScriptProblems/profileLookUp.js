var contacts = [
    {
        firstName : "Akria",
        lastName : "Laine",
        number : "0543236543",
        likes : ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName : "Harry",
        lastName : "Potter",
        number : "0994372684",
        likes : ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName : "Sherlock",
        lastName : "Holmes",
        number : "0487345643",
        likes : ["Intriguing Cases", "Violin"],
    },
    {
        firstName : "Kristian",
        lastName : "Vos",
        number : "unknown",
        likes : ["JavaScript", "Gaming", "Foxes"],
    }
]

//we want to create a lookUpProfile function that when passed in a name and a given property, it will return the value of the property

var name;
var property;


function lookUpProfile(name, property) {
    index = 0;
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName == name) {
            return contacts[i][property];
        } 
    }
    return "Nothing was found"
}

console.log(lookUpProfile("Harry", "likes"))
var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["Everything"]
}

//we can change the dog's name using the following command

ourDog.name = "Happy Camper"

// we can add new properties to an object using this notation
// let's say, we want to add a new property to ourdog called bark, we do it as the following

ourDog.bark = "Woof-Woof"

// we can also delete properties from an object with the following command

delete ourDog.bark;
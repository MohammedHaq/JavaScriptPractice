// you can have objects that are stored inside of arrays
//This can be done as the following


var myMusic = [
    {
        "artist" : "Billy Joel",
        "title" : "Piano Man",
        "release_year" : 1973,
        "Formats" : [
            "CD", 
            "8T",
            "LP"
        ],
        "gold" : true,
    },
    {
        "artist" : "Frank Ocean",
        "title" : "White Ferrari",
        "release_year" : 2016,
        "Formats" : [
            "CD", 
            "Youtube Video",
            "LP"
        ],
        "gold" : true,
    },
]

//to access nested objects, we can do the following

var myStorage = {
    "car" : {
        "inside" : {
            "glovebox" : "maps",
            "passenger_seat" : "crumbs",
        },
        "outside" : {
            "trunk" : "Jack"
        },
    }
}

// let's say, we want to access the glove box contents, we would do the following: 

console.log(myStorage.car.inside.glovebox)


//let's say we want to access nested arrays, to do this we do the following

var myPlants = [
    {
        type : "flowers",
        list : [
            "rose", "tulip", "dandelion"
        ],
    },
    {
        type : "trees",
        list : [
            "fir", "pine", "birch"
        ],
    },
]

//let's say we want to access the second item in the list of flowers
//to do this, we do the following

console.log(myPlants[0].list[1])
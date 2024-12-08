console.log("IMP METHODS");

const personsArr = [
    {
        name: "P1",
        age: 19,
        country: "UK"
    },
    {
        name: "P2",
        age: 22,
        country: "USA"
    },
    {
        name: "P3",
        age: 20,
        country: "India"
    },
    {
        name: "P4",
        age: 25,
        country: "USA"
    },
];

// MAP
let getAllNames = personsArr.map((person, idx) => {
    return person.name;
})

console.log(getAllNames);

/**
 * OUTPUT-->
 * (4) ['P1', 'P2', 'P3', 'P4']
0: "P1"
1: "P2"
2: "P3"
3: "P4"
length: 4
[[Prototype]]: Array(0)
 */


// --------------------------------------------

// FIND
// find will return only one object
let getPersonFromUSA = personsArr.find((person, idx) => {
    return person.country == "USA";
})

console.log(getPersonFromUSA);
/** OUTPUT ->
 * {name: 'P2', age: 22, country: 'USA'}
 */


// --------------------------------------------

// FILTER
let getAllPersonFromUSA = personsArr.filter((person, idx) => {
    return person.country == "USA";
})

console.log(getAllPersonFromUSA);

/**
 * Output:
 * (2) [{…}, {…}]
0: {name: 'P2', age: 22, country: 'USA'}
1: {name: 'P4', age: 25, country: 'USA'}
length: 2
[[Prototype]]: Array(0)
 */


// -------------------------------------------

// SOME
let checkSomeWithEx = personsArr.some((person) => {
    return person.age > 23;
})

console.log(checkSomeWithEx);  // return true or false accordingly


// --------------------------------------------

// EVERY
let checkEveryWithEx = personsArr.every((person) => {
    return person.age > 23;
});

console.log(checkEveryWithEx); // return true or false accordingly


// --------------------------------------------


// includes
const fruitsArr = ["apple", "banana", "orange"];

console.log(fruitsArr.includes("apple")); // // return true or false accordingly


// --------------------------------------------


console.log(fruitsArr.indexOf('banana'));
// OUTPUT -> 1


// --------------------------------------------

let getIdxOfPersonFromIndia = personsArr.findIndex((person) => {
    return person.country === "India";
})

console.log(getIdxOfPersonFromIndia);
// OUTPUT -> 2


// -----------------------END---------------------
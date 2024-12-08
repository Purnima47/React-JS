console.log("SPREAD OPERATOR");


const arr2 = [5, 8, 2, 3];
const arr3 = [1, 6, 7];

console.log([...arr2]);

console.log([...arr2, 10, ...arr3]);
// Output - (8) [5, 8, 2, 3, 10, 1, 6, 7]

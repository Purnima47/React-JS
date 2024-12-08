const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
    id,
    productName,
    rating,
};

console.log(product);


const product2 = {
    description: 'Product 2 description',
    id,
    productName,
    rating
}

// const getProductTwoDescription = product2.description;
// console.log(getProductTwoDescription);


// Use "CTRL + Space" to get the values inside the curly braces.
const { description } = product2;
console.log(description);



// ARRAY
const arr = [1, 2, 3];

let getArrFirstVal = arr[0];
let getArrSecondVal = arr[1];

console.log(getArrFirstVal, getArrSecondVal);

const [arrFirstEle, arrSecondEle, arrThirdEle] = arr;
console.log(arrFirstEle, arrSecondEle, arrThirdEle);
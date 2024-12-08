console.log("TERNARY OPERATORS");

let showRecipeOne = true;

function getRecipeOneName(recipeName) {
    return recipeName;
}

function getRecipeTwoName(recipeName) {
    return recipeName;
}

// if (showRecipeOne) {
//     console.log(getRecipeOneName("Burger"));
// } else {
//     console.log(getRecipeTwoName("Coke"));
// }

// condition ? statement1 : statement2;

showRecipeOne ? console.log(getRecipeOneName("Burger")) : console.log(getRecipeTwoName("Coke"));
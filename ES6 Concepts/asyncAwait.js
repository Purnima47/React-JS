console.log("ASYNC AWAIT API CALL");

let getListOfProdEle = document.querySelector('.list-of-products');


function renderProducts(getProducts) {
    getListOfProdEle.innerHTML = getProducts.map((singleProductItem) =>
        `<p>${singleProductItem.title}</p>`
    ).join(" ");
}


async function fetchListOfProd() {
    try {
        const apiResponse = await fetch("https://dummyjson.com/products", {
            method: 'GET',
        });

        const result = await apiResponse.json();
        console.log(result);

        if (result?.products?.length > 0) {
            renderProducts(result?.products);
        }
    } catch (err) {
        console.log(err);
    }
}

fetchListOfProd();
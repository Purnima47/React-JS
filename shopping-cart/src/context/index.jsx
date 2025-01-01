/**
 * CREATE the context
 * PROVIDE the state to context
 * WRAP context in root component
 * CONSUME the context using useContext
 */

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);

    async function fetchProductList() {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json();

        console.log(data);

        if (data && data?.products) {
            setListOfProducts(data?.products);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProductList();
    }, []);

    console.log(listOfProducts);



    return (
        < ShoppingCartContext.Provider
            value={{
                listOfProducts,
                loading,
                productDetails,
                setProductDetails
            }} >
            {children}
        </ShoppingCartContext.Provider >
    );
}


export default ShoppingCartProvider;
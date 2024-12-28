import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import './style.css';

// const initalState = {
//     flagValue: false
// }

/**
 * if we are using only one intial state then we can write as
 */

const initialState = true;

const ProductList = ({ dummyProductData, name, city }) => {
    // console.log(props);
    // const { name, city } = props;


    // const flag = true;

    // in useState()  --> it can be any data type(intial state).
    const [flag, setFlag] = useState(initialState);
    const [count, setCount] = useState(0);
    const [changeStyles, setChangeStyles] = useState(false);

    /**  function renderTextBlock(getFlag) {
         return getFlag ?
             <h4>
                 Name is {name}. <br></br>
                 City is {city}.
             </h4>
             :
             <h4>Hello World</h4>
     }
     */

    /**
     * const renderTextBlock =
       flag ?
           <h4>
               Name is {name}. <br></br>
               City is {city}.
           </h4> :
           <h4>Hello World</h4>
     */

    const handleToggleText = () => {
        setFlag(!flag);
    }

    const handleIncCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setFlag(!flag);
        console.log("Run only once page load");

        return () => {
            console.log('component is unmounted so some sideeffects here also');

        }
    }, []) // this will only runs once when page is loaded.


    useEffect(() => {
        console.log("count is changed");
        if (count === 10) {
            setChangeStyles(true);
        }
    }, [count])

    console.log(changeStyles);


    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem/> */}
            {flag ? (<h4>{name} lives in {city}</h4>) : (<h4>Hii</h4>)}


            {/* {renderTextBlock(flag)} */}
            {/* {renderTextBlock} */}

            <div>
                <button style={{ backgroundColor: changeStyles ? 'black' : 'white', color: changeStyles ? 'white' : 'black' }} onClick={handleIncCount}>Increase count</button>
                <p>Count is {count}</p>
            </div>


            {/* <ul>
                {dummyProductData.map((item, idx) =>
                    <ProductItem singleProductItem={item} key={idx} />
                )}
            </ul> */}

        </div>
    );
}

export default ProductList;

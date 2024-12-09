import ProductItem from "./components/product-item";
import './style.css';


const ProductList = ({ dummyProductData, name, city }) => {
    // console.log(props);
    // const { name, city } = props;


    const flag = true;

    // function renderTextBlock(getFlag) {
    //     return getFlag ?
    //         <h4>
    //             Name is {name}. <br></br>
    //             City is {city}.
    //         </h4>
    //         :
    //         <h4>Hello World</h4>
    // }

    const renderTextBlock =
        flag ?
            <h4>
                Name is {name}. <br></br>
                City is {city}.
            </h4> :
            <h4>Hello World</h4>


    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            {/* <ProductItem/> */}


            {/* {renderTextBlock(flag)} */}
            {renderTextBlock}



            <ul>
                {dummyProductData.map((item, idx) =>
                    <ProductItem singleProductItem={item} key={idx} />
                )}
            </ul>

        </div>
    );
}

export default ProductList;

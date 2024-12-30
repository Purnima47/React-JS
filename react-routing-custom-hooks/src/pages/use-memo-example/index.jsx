import React, { useMemo, useState } from 'react'
import useFetch from '../../hooks/use-fetch';

const UseMemoExample = () => {
    const { data, loading } = useFetch('https://dummyjson.com/products');
    const [flag, setFlag] = useState(false);

    function filterProductsByPrice(getProducts) {
        console.log('Function is getting rendered');
        // when we are clicking on button then every time this function is getting rendered.
        // We don't want it
        // Therefore we will create memorized version

        return getProducts?.length > 0 ? getProducts.filter((singleProdItem) => singleProdItem.price > 10) : [];
    }

    const memorizedVersion = useMemo(() =>
        // Now above function will not be rendered again n again
        filterProductsByPrice(data?.products),
        [data?.products]
    );

    if (loading) {
        return <h1>Loading data! Please wait.</h1>
    }

    console.log(data);


    return (
        <div>
            <h1 style={{ color: flag ? 'red' : 'yellow' }}>Use Memo</h1>
            <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
            {/* <ul>
                {
                    filterProductsByPrice(data?.products).map((item) => (<li style={{ listStyle: 'none' }}>{item.title}</li>))
                }
            </ul> */}

            <ul>
                {
                    memorizedVersion.map((item) => (<li style={{ listStyle: 'none' }}>{item.title}</li>))
                }
            </ul>
        </div>
    );
}

export default UseMemoExample
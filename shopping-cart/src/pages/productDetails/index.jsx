import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../context';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { productDetails, setProductDetails } = useContext(ShoppingCartContext);

  async function fetchProdDetails() {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    console.log(data);

    if (data) {
      setProductDetails(data);
    }
  }

  useEffect(() => {
    fetchProdDetails();
  }, [id]);

  console.log(productDetails);


  return (
    <div className=''>
    </div>
  )
}

export default ProductDetailsPage;

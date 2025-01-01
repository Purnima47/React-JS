import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductTile = ({ singleProdTile }) => {
  const navigate = useNavigate();

  function handleNavigateToProdDetailPage(getCurrProdId) {
    console.log(getCurrProdId);
    navigate(`/productDetails/${getCurrProdId}`);
  }


  return (
    <div className='relative group border border-cyan-700 p-6 cursor-pointer'>
      <div className='overflow-hidden aspect-w-1 aspect-h-1'>
        <img src={singleProdTile?.thumbnail} alt={singleProdTile?.title}
          className='object-cover w-full h-full transition-all duration-300 group-hover:scale-125' />
      </div>

      <div className='flex items-start justify-between mt-4 space-x-4'>
        <div className='font-bold sm:text-sm text-xs md:text-base'>
          <p className='w-[100px] overflow-hidden text-ellipsis whitespace-nowrap'>{singleProdTile?.title}</p>
        </div>

        <div className='text-right'>
          <p className='text-xs font-bold sm:text-sm md:text-[14px]'>${singleProdTile?.price}</p>
        </div>

      </div>

      <button onClick={() => handleNavigateToProdDetailPage(singleProdTile?.id)} className='px-5 mt-5 w-full py-2 rounded-none bg-white text-black font-bold text-lg'>
        View Details
      </button>

    </div>
  )
}

export default ProductTile

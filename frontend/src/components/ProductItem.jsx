import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    
    const { currency } = useContext(ShopContext);

    return (
        <Link 
            onClick={()=>window.scrollTo(0,0)} 
            className='group text-gray-700 cursor-pointer flex flex-col h-full' 
            to={`/product/${id}`}
        >
            {/* 1. Image Section */}
            <div className='w-full aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden relative'>
               {image && image.length > 0 ? (
                   <img 
                       className='w-full h-full object-cover group-hover:scale-110 transition ease-in-out duration-300' 
                       src={image[0]} 
                       alt={name} 
                   />
               ) : (
                   <div className='w-full h-full flex items-center justify-center text-gray-200 bg-gray-50'>
                       <span className='text-xs'>Loading</span>
                   </div>
               )}
            </div>

            {/* 2. Details (STARS REMOVED) */}
            <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
            
            {/* 3. Price */}
            <p className='text-sm font-medium'>
                {currency}{Number(price).toLocaleString('en-IN')}
            </p>

            <div className='sm:hidden mt-2'>
                <button className='w-full bg-black text-white py-2 text-xs font-medium rounded-sm'>
                    BUY NOW
                </button>
            </div>
        </Link>
    )
}

export default ProductItem
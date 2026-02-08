import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [activeTab, setActiveTab] = useState('ingredients'); 

  const fetchProductData = async () => {
    if (products.length > 0) {
        const item = products.find((item) => item._id === productId);
        if (item) {
            // --- FAKE RATING GENERATOR ---
            // If rating is missing, give it a random number between 3.5 and 5
            const fakeRating = item.rating || (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
            // If reviews are missing, give it a random number between 40 and 150
            const fakeReviews = item.reviews || Math.floor(Math.random() * (150 - 40) + 40);

            // Merge fake data with real data
            setProductData({ ...item, rating: fakeRating, reviews: fakeReviews });
            
            setImage(item.image && item.image.length > 0 ? item.image[0] : '')
        }
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  if (!productData) {
    return <div className='opacity-0'></div>
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* --- 1. PRODUCT IMAGES --- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          
          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image && productData.image.map((item, index) => (
                <div key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer aspect-[3/4] overflow-hidden rounded-sm'>
                    <img 
                        onClick={() => setImage(item)} 
                        src={item} 
                        className='w-full h-full object-cover' 
                        alt="" 
                    />
                </div>
              ))
            }
          </div>

          {/* Main Image */}
          <div className='w-full sm:w-[80%]'>
            <div className='w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-50'>
                <img 
                    className='w-full h-full object-cover' 
                    src={image} 
                    alt={productData.name} 
                />
            </div>
          </div>
        </div>

        {/* --- 2. PRODUCT DETAILS --- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          
          {/* Stars & Reviews (NOW WORKING) */}
          <div className='flex items-center gap-1 mt-2'>
             {/* Logic: Force 4 or 5 stars visually */}
             {[...Array(5)].map((_, index) => (
                <img 
                  key={index} 
                  src={index < Math.round(productData.rating) ? assets.star_icon : assets.star_dull_icon} 
                  alt="" 
                  className="w-3.5" 
                />
             ))}
             <p className='pl-2 text-gray-500'>({productData.reviews})</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>{currency}{Number(productData.price).toLocaleString('en-IN')}</p>
          
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          
          <hr className='mt-8 sm:w-4/5' />
          
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* --- 3. TABS SECTION --- */}
      <div className='mt-20'>
        <div className='flex border-b'>
          <p 
            className={`px-5 py-3 text-sm cursor-pointer border-t border-l border-r ${activeTab === 'ingredients' ? 'font-bold bg-white -mb-px' : 'bg-gray-50 text-gray-500'}`} 
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </p>
          <p 
            className={`px-5 py-3 text-sm cursor-pointer border-t border-l border-r ${activeTab === 'howtouse' ? 'font-bold bg-white -mb-px' : 'bg-gray-50 text-gray-500'}`} 
            onClick={() => setActiveTab('howtouse')}
          >
            Ritual
          </p>
        </div>

        <div className='border border-t-0 px-6 py-6 text-sm text-gray-500'>
          {activeTab === 'ingredients' ? (
            <div className='flex flex-col gap-2 leading-relaxed'>
                <p>{productData.ingredients}</p>
            </div>
          ) : (
            <div className='flex flex-col gap-2'>
                {Array.isArray(productData.usage) ? (
                    <ul className='flex flex-col gap-3'>
                        {productData.usage.map((step, index) => (
                            <li key={index} className='flex gap-2'>
                                <span className='font-semibold text-black'>{index + 1}.</span> 
                                {step}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Usage instructions coming soon.</p>
                )}
            </div>
          )}
        </div>
      </div>

      <div className='mb-24'></div>

    </div>
  )
}

export default Product
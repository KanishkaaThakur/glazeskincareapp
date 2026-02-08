import React from 'react'
import Title from '../components/Title'

const Delivery = () => {
  return (
    <div className='pt-10 border-t'>
        <div className='text-2xl mb-3'>
            <Title text1={'DELIVERY'} text2={'POLICY'} />
        </div>
        
        <div className='flex flex-col gap-4 text-sm text-gray-500'>
            <p>We ship to all locations across India. Standard delivery takes 3-5 business days.</p>
            <p>Cash on Delivery is available for most pincodes. Shipping is free for orders above ₹3000.</p>
        </div>
    </div>
  )
}

export default Delivery
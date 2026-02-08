import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      {/* 1. Exchange Icon */}
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Returns</p>
        <p className='text-gray-400'>Hassle-free exchange policy within 7 days.</p>
      </div>

      {/* 2. Checkmark Icon (Quality) */}
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Premium Quality</p>
        <p className='text-gray-400'>Dermatologically tested, safe & clean formulas.</p>
      </div>

      {/* 3. Headset Icon (Support) */}
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>24/7 Support</p>
        <p className='text-gray-400'>Expert skincare advice whenever you need it.</p>
      </div>

    </div>
  )
}

export default OurPolicy
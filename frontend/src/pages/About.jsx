import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        {/* FIXED IMAGE: Added max-h-[450px] and object-cover to crop it neatly */}
        <img className='w-full md:max-w-[450px] max-h-[450px] object-cover' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>
              Glaze was born out of a passion for pure, radiant skin. We believe that skincare shouldn't be complicated—it should be effective, effortless, and leave you glowing.
            </p>
            <p>
              Our journey began with a simple idea: to create a curated collection of essentials that deliver that "fresh from the facial" look, every single day. From hydration heroes to barrier-repairing serums, every bottle is packed with ingredients your skin loves.
            </p>
            <b className='text-gray-800'>Our Mission</b>
            <p>
              Our mission at Glaze is to help you shine. We are dedicated to providing clean, high-performance formulas that give you the confidence to wear your skin proudly.
            </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We rigorously test every formula to ensure it meets our high standards for safety and efficacy.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shop your routine seamlessly with our easy-to-navigate interface and fast shipping.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Service:</b>
          <p className='text-gray-600'>Our team of skincare enthusiasts is here to guide you to the perfect products for your skin type.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { useNavigate } from 'react-router-dom' // <--- 1. Import this

const Contact = () => {

  const navigate = useNavigate(); // <--- 2. Activate navigation

  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        
        <img className='w-full md:max-w-[480px] max-h-[450px] object-cover' src={assets.contact_img} alt="" />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Flagship</p>
          <p className='text-gray-500'>
            Glaze Studios<br /> 
            Suite 45, The Pali Hill Estate,<br />
            Bandra West, Mumbai, Maharashtra 400050
          </p>
          <p className='text-gray-500'>
             Tel: +91 22-4500-8900 <br /> 
             Email: contact@glazeskin.com
          </p>
          
          <p className='font-semibold text-xl text-gray-600'>Careers at Glaze</p>
          <p className='text-gray-500'>Join our team of skincare innovators.</p>
          
          {/* 3. FIXED BUTTON: Navigates to About page for now */}
          <button 
            onClick={() => navigate('/about')} 
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>

        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
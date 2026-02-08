import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom' // --- IMPORT LINK HERE ---

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Left Side */}
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Glaze is dedicated to science-backed skincare. Our products are formulated to support your skin barrier with effective, clean ingredients.
            </p>
        </div>

        {/* Center Side - COMPANY LINKS */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                {/* Replaced static li with Link components */}
                <Link to='/' className='hover:text-black cursor-pointer'>Home</Link>
                <Link to='/about' className='hover:text-black cursor-pointer'>About us</Link>
                <Link to='/delivery' className='hover:text-black cursor-pointer'>Delivery</Link>
                <Link to='/privacy' className='hover:text-black cursor-pointer'>Privacy policy</Link>
            </ul>
        </div>

        {/* Right Side */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-987-654-3210</li>
                <li>contact@glazeskin.com</li>
            </ul>
        </div>

      </div>

      <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright2026@glazeskin.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
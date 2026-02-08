import React from 'react'
import Title from '../components/Title'

const PrivacyPolicy = () => {
  return (
    <div className='pt-10 border-t'>
        <div className='text-2xl mb-3'>
            <Title text1={'PRIVACY'} text2={'POLICY'} />
        </div>
        
        <div className='flex flex-col gap-4 text-sm text-gray-500'>
            <p>At Glaze, we value your privacy. We collect information to improve our services and your shopping experience.</p>
            <p>We do not sell your personal data to third parties. Your payment information is processed securely through Razorpay.</p>
        </div>
    </div>
  )
}

export default PrivacyPolicy
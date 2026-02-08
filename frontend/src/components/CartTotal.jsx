import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    
    const amount = getCartAmount();

    // --- NEW LOGIC: If amount is 0, don't show the component at all ---
    if (amount === 0) {
        return null;
    }

    // Free shipping if amount is greater than 3000
    const shippingFee = amount > 3000 ? 0 : delivery_fee;

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {amount}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {shippingFee}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Total</p>
                    <b>{currency} {amount + shippingFee}.00</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
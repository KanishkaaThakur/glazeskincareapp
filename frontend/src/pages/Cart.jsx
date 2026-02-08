{/* --- MINIMALIST BOTTOM SECTION --- */}
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          
          {cartData.length > 0 ? (
            <>
              <CartTotal />
              <div className='w-full text-end'>
                <button 
                  onClick={() => navigate('/place-order')} 
                  className='bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-700 transition-all uppercase tracking-widest'
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            /* ULTRA-MINIMALIST STATE */
            <div className='flex justify-center py-10'>
              <button 
                onClick={() => navigate('/collection')} 
                className='border border-black text-black px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-500'
              >
                Continue Shopping
              </button>
            </div>
          )}

        </div>
      </div>
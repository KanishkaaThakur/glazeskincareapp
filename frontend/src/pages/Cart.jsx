{/* --- REFINED BOTTOM SECTION --- */}
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          
          {cartData.length > 0 ? (
            <>
              <CartTotal />
              <div className='w-full text-end'>
                <button 
                  onClick={() => navigate('/place-order')} 
                  className='bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-700 transition-all'
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </>
          ) : (
            /* MODERN EMPTY STATE */
            <div className='flex flex-col items-center justify-center py-20 text-center border-t border-b border-gray-100'>
              {/* Using a subtle icon or your logo to add brand presence */}
              <img src={assets.cart_icon} className='w-12 opacity-10 mb-4' alt="" />
              
              <h2 className='text-xl font-light text-gray-800 tracking-widest uppercase'>Your Bag is Empty</h2>
              <p className='text-sm text-gray-500 mt-2 mb-8 max-w-[250px] leading-relaxed'>
                It looks like you haven't added any Glaze favorites to your collection yet.
              </p>
              
              <button 
                onClick={() => navigate('/collection')} 
                className='bg-black text-white px-10 py-3 text-xs tracking-widest uppercase hover:opacity-80 transition-all'
              >
                Start Shopping
              </button>
            </div>
          )}

        </div>
      </div>
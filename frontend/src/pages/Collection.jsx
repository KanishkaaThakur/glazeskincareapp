import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilterAndSort = () => {
    let productsCopy = products.slice();

    // 1. Search Filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // 2. Category Filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    // 3. SubCategory Filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    // 4. Sorting Logic
    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => (a.price - b.price));
        break;

      case 'high-low':
        productsCopy.sort((a, b) => (b.price - a.price));
        break;
        
      case 'rating-low-high':
        productsCopy.sort((a, b) => (a.rating || 0) - (b.rating || 0));
        break;

      case 'rating-high-low':
        productsCopy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;

      default:
        // 'relevant' keeps original order
        break;
    }

    setFilterProducts(productsCopy);
  }

  useEffect(() => {
    applyFilterAndSort();
  }, [category, subCategory, search, showSearch, products, sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Sidebar */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>LINE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Face'} onChange={toggleCategory} /> Face
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Body'} onChange={toggleCategory} /> Body
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Sets'} onChange={toggleCategory} /> Sets
            </p>
          </div>
        </div>
        
        {/* SubCategory Filter (Restored all Types) */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Serums'} onChange={toggleSubCategory} /> Serums
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Moisturizers'} onChange={toggleSubCategory} /> Moisturizers
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Sunscreen'} onChange={toggleSubCategory} /> Sunscreen
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Treatments'} onChange={toggleSubCategory} /> Treatments
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Eye Care'} onChange={toggleSubCategory} /> Eye Care
            </p>
             <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Lip Care'} onChange={toggleSubCategory} /> Lip Care
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          
          {/* Sort Dropdown (5 Options) */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating-low-high">Rating: Low to High</option>
            <option value="rating-high-low">Rating: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
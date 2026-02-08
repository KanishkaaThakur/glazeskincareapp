import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {

  const { backendUrl, token } = useContext(ShopContext);
  
  const [userData, setUserData] = useState({
    name: "User", 
    image: "", 
    email: "",
    phone: "",
    address: { line1: "", line2: "" },
    gender: 'Not Selected',
    dob: ''
  })

  const [isEdit, setIsEdit] = useState(false)

  // Fetch Data
  const loadUserProfile = async () => {
    try {
        const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
        if (data.success) {
            setUserData(data.userData);
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
  }

  // Update Data
  const updateUserProfileData = async () => {
    try {
        const { data } = await axios.post(backendUrl + '/api/user/update-profile', userData, { headers: { token } })
        if (data.success) {
            toast.success(data.message);
            setIsEdit(false);
            loadUserProfile(); 
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {
        loadUserProfile()
    }
  }, [token, backendUrl])

  return (userData ? (
    <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>
      
      {/* --- REPLACED: CLEANER AVATAR LOGIC --- */}
      { userData.image 
        ? <img className='w-24 h-24 rounded-full object-cover' src={userData.image} alt="" />
        : <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-4xl text-gray-500 font-light'>
             {/* Shows the first letter of their name */}
             {userData.name ? userData.name[0].toUpperCase() : 'U'}
          </div>
      }
      {/* -------------------------------------- */}

      {isEdit 
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev, name:e.target.value}))}/>
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          
          <p className='font-medium'>Phone:</p>
          {isEdit 
            ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev, phone:e.target.value}))}/>
            : <p className='text-blue-400'>{userData.phone || 'Add Phone Number'}</p>
          }

          <p className='font-medium'>Address:</p>
          {isEdit
            ? <p>
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" placeholder='Address Line 1'/>
                <br />
                <input className='bg-gray-50 mt-1' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" placeholder='Address Line 2' />
              </p>
            : <p className='text-gray-500'>
                {userData.address.line1 || 'Add Address'}
                <br />
                {userData.address.line2}
              </p>
          }

        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {isEdit
            ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
              <option value="Not Selected">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {isEdit
            ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
            : <p className='text-gray-400'>{userData.dob || 'Not Selected'}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
            ? <button className='border border-black px-8 py-2 hover:bg-black hover:text-white transition-all' onClick={updateUserProfileData}>Save Information</button>
            : <button className='border border-black px-8 py-2 hover:bg-black hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  ) : null )
}

export default MyProfile
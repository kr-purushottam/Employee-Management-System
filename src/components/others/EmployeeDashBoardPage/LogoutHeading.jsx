import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'

const LogoutHeading = ( {data} ) => {
  function handleLogoutUser() {
    localStorage.setItem("loggedInUser", '');
    window.location.reload();
  }
  return (
    <div className='flex justify-between items-center'>
        <p className='text-5xl font-bold'><span className='text-4xl font-semibold'>Hello,</span><br/>{data.name} 👋</p>
        <button 
          className=' bg-amber-600 px-5 py-2 rounded-sm text-lg cursor-pointer'
          onClick={handleLogoutUser}>
          Logout
        </button>
    </div>
  )
}

export default LogoutHeading
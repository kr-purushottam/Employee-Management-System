import React from 'react'

const Heading = () => {
  return (
    <div className='flex justify-between items-center'>
        <p className='text-5xl font-bold'><span className='text-4xl font-semibold'>Hello,</span><br/>Kumar Purushottam 👋</p>
        <button className=' bg-amber-600 px-5 py-2 rounded-sm text-lg cursor-pointer'>Logout</button>
    </div>
  )
}

export default Heading
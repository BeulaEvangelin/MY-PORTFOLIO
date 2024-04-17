import React from 'react'

function Loader() {
    return (
        <div className='h-screen flex justify-center items-center fixed inset-0 bg-black z-[1000]'>
          <div className='flex gap-5 text-7xl sm: text-3xl'>
            <h1 className='text-MyBeige font-semibold d1'>... </h1>
            <h1 className='text-MyBeige c'>... </h1>
            <h1 className='text-MyBeige font-semibold d2'>...</h1>
            </div>  
        </div>
    )
}

export default Loader;

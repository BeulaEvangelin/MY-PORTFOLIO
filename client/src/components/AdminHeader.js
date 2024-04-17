import React from 'react';

function AboutHeader() {
    return (
        <header className="bg-black py-6">
            <div className='h-[40vh] flex flex-col justify-start items-center bg-black  py-10'>
            <div className='text-center mt-20'>
          <h1 className='text-6xl sm:text-3xl text-white font-bold mb-4'>Hey, Beu!</h1>
        <p className='text-white'>Welcome to your admin panel.</p>
            </div>  
        </div>
            
        </header>
    );
}

export default AboutHeader;
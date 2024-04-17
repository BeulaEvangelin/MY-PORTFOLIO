//client> src> pages> About> intro.js
import React from 'react';
import { useSelector} from 'react-redux';

function Intro() {
    const {loading, portfolioData} = useSelector(state => state.root);
    const {intro} = portfolioData;
    const {welcomeTitle, shortDescription} = intro;
    return (
    
        <div className='h-[40vh] flex flex-col justify-start items-center gap-8 py-10'>
            <div className='text-center mt-20'>
                <h1 className='text-6xl sm:text-3xl text-black font-bold mb-4'>{welcomeTitle || ''}</h1>
                <p className='text-black'>{shortDescription || ''}</p>
            </div>
        </div>
    );
}

export default Intro;
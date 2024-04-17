import React from 'react';
import { useSelector} from 'react-redux';

function Experiences() {
    const [selectedItem, setSelectedItemIndex] = React.useState(0);
    const {portfolioData} = useSelector(state => state.root);
    const {experience} = portfolioData;
    return (
        <div>
            <h2 className="text-5xl font-bold mb-8 sm:text-3xl px-5 sm:text-center ">Education and Experiences</h2>
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-5 border-l-2 border-MyLightGreen w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {experience.map((experience, index) => (
                        <div onClick={()=>{
                            setSelectedItemIndex(index);
                        }}
                        className='cursor-pointer'>
                            <h1 className={`text-xl px-5  ${selectedItem === index ? ' text-black font-semibold border-black border-l-4 -ml-[3px] bg-[#ffffff58]' : 'text-black'}`}>
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5 w-2/3 sm:w-full sm:text-center ' >
                    <h1 className='text-black text-2xl font-semibold'>{experience[selectedItem].title}</h1>
                    <h1 className='text-black text-xl font-semibold'>{experience[selectedItem].company}</h1>
                    <p className='text-black'>{experience[selectedItem].description}</p>
                </div>
            </div>  
        </div>
    );
}

export default Experiences;


import React from 'react';
import { useSelector} from 'react-redux';

function AboutSkills() {
    const {loading, portfolioData} = useSelector(state => state.root);
    const {about} = portfolioData;
    const {skills} = portfolioData;
    const {aboutTitle, aboutDescription} = about;
    const {skillsTitle, skills1, skills2} = skills;
    return (
        <div>
            <div className='px-20 sm:px-5'>
            <div className="bg-[#ffffff58] container mx-auto flex justify-center items-center mb-36 sm: rounded-md px-5 py-5"> 
                <div className="flex items-center sm:flex-col">
                    <img src="https://i.imgur.com/CQY1Tfr.jpeg" alt="Profile" className="w-80 h-auto rounded-md mr-10 sm:mr-0 mb-5" /> 
                    <div>
                        <h1 className="text-5xl font-bold mb-16 sm:text-3xl sm:text-center">{aboutTitle || ''}</h1>
                        <p className="mt-2 sm:text-center">{aboutDescription || ''}</p> 
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-5xl font-bold mb-16 flex justify-end sm:text-3xl sm:flex sm:justify-center ">{skillsTitle || ''}</h2>
                <div className='flex flex-wrap gap-6 justify-end mb-8 sm:flex sm:justify-center '>
                    {skills1.map((skill, index) => (
                        <div>
                            <h1 className='bg-black text-white rounded px-4 py-2  '>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <div>
               
                <div className='flex flex-wrap gap-6 justify-end mb-36 sm:flex sm:justify-center  '> 
                    {skills2.map((skill2, index) => (
                        <div>
                            <h1 className='bg-gray-600 text-white rounded px-4 py-2'>{skill2}</h1>
                        </div>
                    ))}
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default AboutSkills;

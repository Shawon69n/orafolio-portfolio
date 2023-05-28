import React from 'react';

const AboutMe = () => {
    return (
        <div className='flex justify-between mt-32 mb-32'>
            <div >
                <h1 className='text-xl text-gray-400 tracking-widest'>ABOUT ME</h1>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className="avatar mt-10">
                    <div className="w-60 rounded-full">
                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    </div>
                    </div>
                  <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='font-semibold ml-96 mt-20 text-3xl tracking-wider '>Hi I'm Donnie and I am passionate about everything that has to do with Digital Design and Art Direction. I enjoy working with agencies and enthusiastic people who want to solve problems through beautiful designs and experiences.</p>  
           
        </div>
    );
};

export default AboutMe;
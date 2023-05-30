import React from 'react';
import styles from './ContactPage.module.css'
import PastClientCaraousel from '../SharedComp/pastClientCaraousel/PastClientCaraousel';
const ContactPage = () => {
    return (
        <div>
            <div  className={styles.mainContainer}>
            <div className='flex justify-between p-16' >
                <div className=''>
                    <h1 data-aos="fade-up" data-aos-delay="90" data-aos-duration="3000" className={styles.leftTxt}>CONTACT</h1>
                    <div className='mt-48'>
                    <div data-aos="fade-up" data-aos-delay="90" data-aos-duration="3000" className="avatar ">
                    <div className="w-56 rounded-full">
                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    </div>
                    </div>
                </div>

                <div className={styles.rightTxt}>
                    <h1  data-aos="fade-up" data-aos-delay="90" data-aos-duration="3000" className='text-7xl font-bold'>Let's Collaborate!</h1>
                    <h2  data-aos="fade-up" data-aos-delay="120" data-aos-duration="2800" className='text-lg mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud.</h2>
                 <input  data-aos="fade-up" data-aos-delay="140" data-aos-duration="2700" className='w-full p-3 rounded-lg mt-6' type="text" placeholder='Name' />
                 <input  data-aos="fade-up" data-aos-delay="170" data-aos-duration="2600" className='w-full p-3 rounded-lg mt-4' type="text" placeholder='Email' />
                 <textarea  data-aos="fade-up" data-aos-delay="190" data-aos-duration="2500" placeholder='Messege' className='w-full p-3 rounded-lg mt-4' name="" id="" cols="10" rows="3"></textarea>
                 <input  data-aos="fade-up" data-aos-delay="220" data-aos-duration="2400" className={styles.submitBtn} type="submit"  />
                </div>
            </div>

           
        </div>
        <div className={styles.carouselDiv}>
         <PastClientCaraousel/>
        </div>
        </div>
    );
};

export default ContactPage;
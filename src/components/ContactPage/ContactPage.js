import React, { useRef, useState } from 'react';
import styles from './ContactPage.module.css'
import PastClientCaraousel from '../SharedComp/pastClientCaraousel/PastClientCaraousel';
import emailjs from '@emailjs/browser';
const ContactPage = () => {
    const form = useRef();

    const [empty,setEmpty] = useState();
     
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ommh25c', 'template_95i8zkn', form.current, '7T83hGUG9rEO8ZKHJ')
        .then((result) => {
            console.log(result.text);
            console.log('msg sent')
            setEmpty('');
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div>
            <div  className={styles.mainContainer}>
            <div className='lg:flex lg:justify-between lg:p-16 pl-16 pr-16 pb-16 pt-5' >
                <div className=''>
                    <h1 data-aos="fade-up" data-aos-delay="90" data-aos-duration="3000" className={styles.leftTxt}>CONTACT</h1>
                    <div className='lg:mt-48 mt-10 lg:mb-0 mb-10 lg:ml-0 ml-32'>
                    <div data-aos="fade-up" data-aos-delay="90" data-aos-duration="3000" className="avatar ">
                    <div className="w-56 rounded-full">
                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    </div>
                    </div>
                </div>

                <div className={styles.rightTxt}>
                    <h1  data-aos="fade-up" data-aos-delay="90" data-aos-duration="3000" className='lg:text-7xl text-4xl font-bold'>Let's Collaborate!</h1>
                    <h2  data-aos="fade-up" data-aos-delay="120" data-aos-duration="2800" className='text-lg mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud.</h2>
                 <form className='text-black' ref={form} onSubmit={sendEmail}>
                    <input value={empty} name="user_name" data-aos="fade-up" data-aos-delay="140" data-aos-duration="2700" className='w-full p-3 rounded-lg mt-6' type="text" placeholder='Name' />
                    <input value={empty} name="user_email" data-aos="fade-up" data-aos-delay="170" data-aos-duration="2600" className='w-full p-3 rounded-lg mt-4' type="email" placeholder='Email' />
                    <textarea value={empty} name="message" data-aos="fade-up" data-aos-delay="190" data-aos-duration="2500" placeholder='Messege' className='w-full p-3 rounded-lg mt-4'  id="" cols="10" rows="3"></textarea>
                    <input  value="Send"  data-aos="fade-up" data-aos-delay="220" data-aos-duration="2400" className={styles.submitBtn} type="submit"  />
                 </form>
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
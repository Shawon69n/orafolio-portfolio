import React, { useEffect } from 'react';
import styles from './about.module.css'
import CaraouselSection from '../Home-Components/CaraouselSection/CaraouselSection';
import Footer from '../SharedComp/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutPage = () => {

    useEffect(() =>{
        Aos.init();
    
      },[])

    return (
            <div className={`${styles.mainContainer}`}>
                <div  data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:flex lg:justify-between mb-24 '>
                <div >
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className="avatar ">
                    <div className="lg:w-96 w-11/12 lg:ml-0 ml-14 rounded-full">
                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    </div>
                    </div>
                <div>
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="3800" className={styles.Ptxt}>7+ years of experience in the field of digital design working with national and international clients. Currently working as a freelance helping brands solve problems through beautiful design and <br /> experiences.</p> 
                <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.Ptxt} mt-14`}>These are some of the clients I've been lucky to work with:</h1> 
                <div  className={`${styles.Ptxt2} mt-16 flex`}>
                    <h1 className='mr-20'>Facebook</h1>
                    <h1 className='mr-20'>Instagram</h1>
                    <h1 className='mr-20'>Whatsapp</h1>
                </div> 
                <div  className={`${styles.Ptxt2} mt-8 flex`}>
                    <h1 className='mr-20'>Google</h1>
                    <h1 className='mr-20'>Four Seasons</h1>
                    <h1 className='mr-20'>Wise</h1>
                </div> 
                
                </div> 
           
                </div>
             <CaraouselSection/>

        <div className={styles.expSection}>
            <div className={styles.ExpLeft}>
                <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.dateTxt}>EXPERIENCES</h1>
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-96 text-lg tracking-wide'>Didn't expect Myspace to be a career-launcher, but that's how I got my start in design. As a mostly self-taught designer, I've worked for startups, agencies, and even solo. These days I'm based in Denver—but I'm a big remote work advocate.</p>
            </div>
            <div className={styles.ExpRight}>
                <div  className={styles.rightTxt1}>
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.dateTxt}>2022 - Present</h1>
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-32 text-2xl font-bold'>Senior Designer <br /> Shopify</h1>
                </div>
                <div className={styles.rightTxt} >
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.dateTxt}>2022 - Present</h1>
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-32 text-2xl font-bold'>Senior Designer <br /> Shopify</h1>
                </div>
                <div className={styles.rightTxt} >
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.dateTxt}>2022 - Present</h1>
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-32 text-2xl font-bold'>Senior Designer <br /> Shopify</h1>
                </div>
                <div className={styles.rightTxt} >
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.dateTxt}>2022 - Present</h1>
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-32 text-2xl font-bold'>Senior Designer <br /> Shopify</h1>
                </div>
            </div>
        </div>
            </div>
     
       
    );
};

export default AboutPage;
import React from 'react';
import styles from './CarouselSection.module.css'
import Caraousel from './Caraousel/Caraousel';
const CaraouselSection = () => {
    return (
        <div className={`${styles.HeroContainer} rounded-3xl`}>
           <div className='ml-56 pt-20 pb-3'>
          <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.Txt}> WHAT I'M DOING</h1>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`flex ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  w-24 h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1  className='text-8xl mt-5 hover:translate-x-3 transition ease-in-out text-white'>BRANDING DESIGN </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`flex ml-28 ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  w-24 h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1 className='text-8xl mt-5 hover:translate-x-3 transition ease-in-out text-white'>UI/UX DESIGN</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`flex ml-24 ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  w-24 h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1 className='text-8xl mt-5 hover:translate-x-3 transition ease-in-out text-white'>DEVELOPMENT </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`flex ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  w-24 h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1 className='text-8xl mt-5 transition ease-in-out text-white'>DIGITAL MARKETING </h1>
                </div>
              
           </div>
           
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-10'>
            <Caraousel/>
            </div>
        </div>
    );
};

export default CaraouselSection;



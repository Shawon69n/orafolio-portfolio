import React from 'react';
import styles from './CarouselSection.module.css'
import Caraousel from './Caraousel/Caraousel';
const CaraouselSection = () => {
    return (
        <div className={`${styles.HeroContainer} rounded-3xl`}>
           <div className='lg:ml-56 pt-20 pb-3'>
          <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.Txt}> WHAT I'M DOING</h1>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`lg:flex lg:ml-0 ml-16 ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  lg:w-24 lg:h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1  className='lg:text-8xl  text-6xl mt-5 lg:hover:translate-x-3 lg:transition lg:ease-in-out text-white'>BRANDING DESIGN </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`lg:flex lg:ml-28 ml-36 ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  lg:w-24 lg:h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1 className='lg:text-8xl text-6xl mt-5 lg:hover:translate-x-3 lg:transition lg:ease-in-out text-white'>UI/UX DESIGN</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`lg:flex lg:ml-24 ml-32 ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  lg:w-24 lg:h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1 className='lg:text-8xl text-6xl mt-5 lg:hover:translate-x-3 lg:transition lg:ease-in-out text-white'>DEVELOPMENT </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`lg:flex  lg:ml-0 ml-14 ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  lg:w-24 lg:h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1 className='lg:text-8xl text-6xl mt-5 lg:transition lg:ease-in-out text-white'>DIGITAL MARKETING </h1>
                </div>
              
           </div>
           
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-10'>
            <Caraousel/>
            </div>
        </div>
    );
};

export default CaraouselSection;



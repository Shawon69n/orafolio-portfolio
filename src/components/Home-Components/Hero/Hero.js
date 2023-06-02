import React from 'react';
import styles from './hero.module.css'
import Buttons from '../../../../experimentComponents/buttons/button1/Buttons';
import Button2 from '../../../../experimentComponents/buttons/button2/Button2';

const Hero = () => {
    return (
        <div   className={` rounded-3xl ${styles.HeroContainer}` }>
             <div className=" flex justify-center ">
                    <div className=" text-center ">
                        <div>
                        <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2500" className=" lg:text-7xl text-5xl pt-10  text-white font-bold">Visual Designer <br /> Based in Indonesia</h1>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000" className="py-6 text-zinc-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud.</p>
                        <div className='ml-52' data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                        <Buttons />
                        </div>
                        </div>
              </div>
            </div>

        <div className={`${styles.heroImgRes} lg:flex lg:justify-evenly `}>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.center}>
            <div className={styles.articleCard}>
                <div className={styles.content}>
                <p className={styles.title}>Article Title Goes Here</p>
                <Button2/>
                </div>
                <img  src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" />
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.center}>
            <div className={styles.articleCard}>
                <div className={styles.content}>
                <p className={styles.title}>Article Title Goes Here</p>
                <Button2/>
                </div>
                <img  src="https://cdn.dribbble.com/userupload/5077085/file/original-9742ff073ae9f35a34678aa77cdf1668.png?compress=1&resize=450x338&vertical=top" />
            </div>
        </div>


        </div>
        

        </div>
    );
};

export default Hero;
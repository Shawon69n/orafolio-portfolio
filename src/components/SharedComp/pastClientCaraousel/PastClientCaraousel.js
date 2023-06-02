import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './pastCilentCarousel.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineArrowRight} from 'react-icons/ai';


// import required modules
import { Pagination, Navigation, Autoplay ,A11y } from "swiper";
import { NavButton } from '@/components/Home-Components/CaraouselSection/Caraousel/NavButton/Navbutton';

const PastClientCaraousel = () => {
    return (
        <div className={styles.CaraouselContainer}>
              <Swiper
             spaceBetween={30}
             centeredSlides={true}
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}

            
            modules={[ Pagination, Navigation , A11y,Autoplay]}
            className="mySwiper"
        >
           
            <SwiperSlide>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.mainContainer}>
                  <div className=''>
                    <p className={styles.CarouselTxt}>
                        "Donnie transformed our brand identity and website into a modern, <br />
                        sleek and professional representation of our company. 
                        Their designskills <br /> are  second to none" 
                        </p>
                  </div>
                
                   <div className='flex lg:ml-36 ml-10 mt-16'>
                    <div className='avatar'>
                            <div className={styles.avatarRound}>
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                    </div>
                    <div className='ml-4 '>
                        <h1 className='text-xl text-black font-bold'>Jessie Pinkman</h1>
                        <h2 className='text-sm'>Lab Technecian</h2>
                    </div>
                   </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.mainContainer}>
                  <div className=''>
                    <p className={styles.CarouselTxt}>
                        "Donnie transformed our brand identity and website into a modern, <br />
                        sleek and professional representation of our company. 
                        Their designskills <br /> are  second to none" 
                        </p>
                  </div>
                
                   <div className='flex lg:ml-36 ml-10 mt-16'>
                    <div className='avatar'>
                            <div className={styles.avatarRound}>
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                    </div>
                    <div className='ml-4 '>
                        <h1 className='text-xl text-black font-bold'>Jessie Pinkman</h1>
                        <h2 className='text-sm'>Lab Technecian</h2>
                    </div>
                   </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.mainContainer}>
                  <div className=''>
                    <p className={styles.CarouselTxt}>
                        "Donnie transformed our brand identity and website into a modern, <br />
                        sleek and professional representation of our company. 
                        Their designskills <br /> are  second to none" 
                        </p>
                  </div>
                
                   <div className='flex lg:ml-36 ml-10 mt-16'>
                    <div className='avatar'>
                            <div className={styles.avatarRound}>
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                    </div>
                    <div className='ml-4 '>
                        <h1 className='text-xl text-black font-bold'>Jessie Pinkman</h1>
                        <h2 className='text-sm'>Lab Technecian</h2>
                    </div>
                   </div>
                </div>
            </SwiperSlide>
          
          
           
        
            

                
                <div >
                <h1 className={`${styles.ExpTxt} text-xl tracking-widest  ml-4 mt-5`}>PAST CLIENT</h1>
                <div className={styles.NavButton}>
                 <NavButton/>
                </div>
                </div>

              </Swiper>
        </div>
    );
};

export default PastClientCaraousel;
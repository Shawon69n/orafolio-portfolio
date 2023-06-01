import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Caraousel.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineArrowRight} from 'react-icons/ai';


// import required modules
import { Pagination, Navigation, Autoplay ,A11y } from "swiper";
import { NavButton } from "./NavButton/Navbutton";

const Caraousel = () => {
    const data = [
        { id: 1, img: "https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad48284d878348280d3f_Nothing-Phone-Mockup-010.jpeg" },
        { id: 2, img: "https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad470e90ea53220438bf_Nothing-Phone-Mockup-016.jpeg" },
        { id: 3, img: "https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad483efb726f0a4b5fb9_Nothing-Phone-Mockup-007.jpeg" },
        { id: 4, img: "https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad48284d878348280d3f_Nothing-Phone-Mockup-010.jpeg" },
        { id: 5, img: "https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad48b8989934ebd889aa_Nothing-Phone-Mockup-004.jpeg" },
      ];
    return (
        <div className={styles.CaraouselContainer}>
              <Swiper
             spaceBetween={30}
             centeredSlides={true}
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}

            
            modules={[ Pagination, Navigation , A11y, ]}
            className="mySwiper"
        >
           
           {data.map((D)=><SwiperSlide key={D.id}> 
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-24'>
                <div className={styles.articleCard}>
                <div className={styles.content}>
                <div className='lg:flex '>
                    <div className='mb-5 mt-5'>
                            <h1 className={styles.title}>PROJECT</h1>
                            <p className={styles.titleTxt1}>Desinging a social</p>
                            <p className={styles.titleTxt1}>Media app for the</p>
                            <p className={styles.titleTxt1}>Black Experience</p>
                        </div>
                        <div className='lg:ml-10'>
                            <h1 className={styles.title}>TYPE</h1>
                            <p className={styles.titleTxt2}>Branding Project</p>
                            <p className={styles.titleTxt2}>Web Desing</p>
                            <p className={styles.titleTxt2}>Mobile Apps</p>
                        </div>
                </div>
                    <div className={styles.arrowBtn}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></div>
                    </div>
                    <img  src={D.img} />
                </div>
        </div>
        </SwiperSlide>)}
                
                <div className="">
                <h1 className={`${styles.ExpTxt} text-xl tracking-widest  ml-10 mt-5`}>SELECTED PROJECT</h1>
                <div className={styles.NavButton}>
                 <NavButton/>
                </div>
                </div>

              </Swiper>
        </div>
    );
};

export default Caraousel;
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Caraousel.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation, Autoplay,A11y } from "swiper";
import { NavButton } from "./NavButton/Navbutton";

const Caraousel = () => {
    return (
        <div className={styles.CaraouselContainer}>
              <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 3500,
            //   disableOnInteraction: false,
            // }}

            
            modules={[ Pagination, Navigation , A11y]}
            className="mySwiper"
        >
           
            <SwiperSlide>  <img className={`${styles.imgSize} rounded-3xl m-auto`} src="https://img.freepik.com/free-psd/mobile-phone-rocky-surface_53876-76514.jpg?w=826&t=st=1684602097~exp=1684602697~hmac=8e99a93e138cf74c27a52290504c4e9b5f2de16067930b07b818d0fedfd7d369" alt="" /></SwiperSlide>
            <SwiperSlide><img className={`${styles.imgSize} rounded-3xl m-auto`} src="https://img.freepik.com/free-photo/woman-holding-using-smartphone_23-2148793488.jpg?w=1380&t=st=1684602189~exp=1684602789~hmac=63e1a4b92234279684061271e439ca78b127ff0315d26a25489694b5bb4d6131" alt="" /></SwiperSlide>
            <SwiperSlide><img className={`${styles.imgSize} rounded-3xl m-auto`} src="https://img.freepik.com/free-photo/smartphone-screen-showing-lockscreen-with-design-space_53876-105167.jpg?w=996&t=st=1684602227~exp=1684602827~hmac=849c8686d162c39c46e0bf71d4de074355d40d871e897e58569ed3135dba5801" alt="" /></SwiperSlide>
            <SwiperSlide><img className={`${styles.imgSize} rounded-3xl m-auto`} src="https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-76480.jpg?w=996&t=st=1684602250~exp=1684602850~hmac=70ad260ae02f05ac82823dd50b7638727bb9b31fc4d0a43ff465ff2474e5449d" alt="" /></SwiperSlide>
            <SwiperSlide><img className={`${styles.imgSize} rounded-3xl m-auto`} src="https://img.freepik.com/free-photo/bright-screen-smartphone-digital-device_53876-101152.jpg?w=996&t=st=1684602276~exp=1684602876~hmac=50dcca23e317846d0122ec0c73325dcc9d938f2569388b51746fa702957bb5a6" alt="" /></SwiperSlide>
                
                <div className={styles.NavButton}>
                 <NavButton/>
                </div>

              </Swiper>
        </div>
    );
};

export default Caraousel;
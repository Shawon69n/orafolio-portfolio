import { useSwiper } from 'swiper/react';
import { IoIosArrowForward,IoIosArrowBack} from 'react-icons/io';
import styles from './navbutton.module.css'
export const NavButton = () => {
  const swiper = useSwiper();

  return (
    <div className='mt-3' >
      <button className={`${styles.btn} p-3 rounded-full mr-3`}onClick={() => swiper.slidePrev()} ><span className='text-white font-semibold text-xl'><IoIosArrowBack/></span></button>
      <button className={`${styles.btn} p-3 rounded-full mr-6`} onClick={() => swiper.slideNext()}><span className='text-white font-semibold text-xl'><IoIosArrowForward/></span> </button>
    </div>
  );
};
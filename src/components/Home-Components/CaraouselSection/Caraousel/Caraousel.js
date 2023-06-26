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
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase.init";

const Caraousel = () => {
    //GET DATA HERE
 const [data,setData] = useState([])
 const databaseRef = collection(db,'projects')
 const [loading,setLoading] = useState(true)
 useEffect(() =>{
     getData()
   },[])

 const getData = async() => {
     await getDocs(databaseRef)
     .then((response) =>{
       setLoading(false)
       setData(response.docs.map((data)=>{
         return {...data.data(), id: data.id}
       }))
     })
   }

   console.log(data)
    return (
        <div className={styles.CaraouselContainer}>
              <Swiper
             spaceBetween={30}
             centeredSlides={true}
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}

            
            modules={[ Pagination, Navigation , A11y, Autoplay ]}
            className="mySwiper"
        >
           
           {data.map((D)=><SwiperSlide key={D.id}> 
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-24'>
                <div className={styles.articleCard}>
                <div className={styles.content}>
                <div className='lg:flex '>
                    <div className='mb-5 mt-5 w-52'>
                            <h1 className={styles.title}>PROJECT</h1>
                            <p className={styles.titleTxt1}>{D.pName}</p>
                    </div>
                        <div className=' lg:ml-10 mb-5 mt-5 w-52'>
                            <h1 className={styles.title}>TYPE</h1>
                            <p className={styles.titleTxt1}>{D.pName}</p>
                        </div>
                </div>
                    <Link href='works/project1' className={styles.arrowBtn}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></Link>
                    </div>
                    <img  src={D.allImages[0]} />
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
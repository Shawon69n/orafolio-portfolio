import React, { useEffect, useState } from 'react';
import styles from './CarouselSection.module.css'
import Caraousel from './Caraousel/Caraousel';
import { db } from '../../../../firebase.init';
import { collection, getDocs } from 'firebase/firestore';
const CaraouselSection = () => {
    //GET DATA HERE
   const [data,setData] = useState([])
   const databaseRef = collection(db,'homepage')
   const [loading,setLoading] = useState(true)
   useEffect(() =>{
       getData()
     },[])
  
     const getData = async () => {
      await getDocs(databaseRef).then((response) => {
        setLoading(false);
        if (response.docs.length > 0) {
          setData(response.docs[0].data());
        }
      });
    };
    return (
        <div className={`${styles.HeroContainer} rounded-3xl`}>
           <div className='lg:ml-56 pt-20 pb-3'>
          <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.Txt}> WHAT I'M DOING</h1>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`lg:flex lg:ml-0 ml-16 ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  lg:w-24 lg:h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <div>
                        <h1  className='lg:text-8xl  text-6xl mt-5 lg:hover:translate-x-3 lg:transition lg:ease-in-out text-white'> {data?.ct1} </h1>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`lg:flex lg:ml-48 ml-36 ${styles.imgSlideTxt2}`}>
                    <h1 className='lg:text-8xl text-6xl mt-5  lg:transition lg:ease-in-out text-white'>{data?.ct2}</h1>
                    <img className={`${styles.hidden2}  lg:w-24 lg:h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`lg:flex lg:ml-24 ml-32 ${styles.imgSlideTxt}`}>
                    <img className={`${styles.hidden}  lg:w-24 lg:h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                    <h1 className='lg:text-8xl text-6xl mt-5 lg:hover:translate-x-3 lg:transition lg:ease-in-out text-white'>{data?.ct3} </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`lg:flex  lg:ml-16 ml-14 ${styles.imgSlideTxt2}`}>
                    <h1 className='lg:text-8xl text-6xl mt-5 lg:transition lg:ease-in-out text-white'>{data?.ct4} </h1>
                    <img className={`${styles.hidden2}  lg:w-24 lg:h-24 mt-5 rounded-xl`} src="https://cdn.dribbble.com/userupload/6684431/file/original-d64272b15b005539b403a4dc050fef40.png?compress=1&resize=450x338&vertical=top" alt="" />
                </div>
              
           </div>
           
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-10'>
            <Caraousel/>
            </div>
        </div>
    );
};

export default CaraouselSection;



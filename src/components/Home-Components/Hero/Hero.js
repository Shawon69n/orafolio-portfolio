import React, { useEffect, useState } from 'react';
import styles from './hero.module.css'
import Buttons from '../../../../experimentComponents/buttons/button1/Buttons';
import Button2 from '../../../../experimentComponents/buttons/button2/Button2';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase.init';

const Hero = () => {
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
        <div   className={` rounded-3xl ${styles.HeroContainer}` }>
             <div className=" flex justify-center ">
                    <div className=" text-center w-3/5">
                        <div>
                        <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2500" className=" lg:text-7xl text-5xl pt-10  text-white font-bold">{data.headTxt}</h1>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000" className="py-6 text-zinc-600 text-lg">{data.subTxt}</p>
                        <div className='md:ml-96 ml-28' data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
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
                {data.allImages && data.allImages.length > 0 && (<img src={data.allImages[0]} alt="First Image" />)}
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.center}>
            <div className={styles.articleCard}>
                <div className={styles.content}>
                <p className={styles.title}>Article Title Goes Here</p>
                <Button2/>
                </div>
                {data.allImages && data.allImages.length > 0 && (<img src={data.allImages[1]} alt="First Image" />)}
            </div>
        </div>


        </div>
        

        </div>
    );
};

export default Hero;
import React, { useEffect, useState } from 'react';
import styles from './about.module.css'
import CaraouselSection from '../Home-Components/CaraouselSection/CaraouselSection';
import Footer from '../SharedComp/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.init';
import Loading from '../SharedComp/Loading/Loading';
import Link from 'next/link';
const AboutPage = () => {

    useEffect(() =>{
        Aos.init();
    
      },[])



      //GET DATA HERE
 const [data,setData] = useState([])
 const databaseRef = collection(db,'aboutpage')

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

  const expFields = data.ExpFields;

    return (
            <>
                {loading? <Loading/> :<div className={`${styles.mainContainer}`}>
                <div  data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:flex lg:justify-between mb-24 '>
                <div >
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className="avatar ">
                    <div className="lg:w-96 w-11/12 lg:ml-0 ml-14 rounded-full">
                        <img src={data.url} />
                    </div>
                    </div>
                    </div>
                <div>
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="3800" className={styles.Ptxt}>{data.headTxt}</p> 
                <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.Ptxt} mt-14`}>{data.subTxt}</h1> 
                <div  className={`${styles.Ptxt2} mt-16 flex`}>
                    <Link href={data.facebook} target="_blank" className='mr-20'>Facebook</Link>
                    <Link href={data.instagram} target="_blank" className='mr-20'>Instagram</Link>
                    <Link href={data.github} target="_blank" className='mr-20'>Github</Link>
                    <Link href={data.linkedin} target="_blank" className='mr-20'>Linkedin</Link>
                </div> 
                             
                </div> 
           
                </div>
             <CaraouselSection/>

        <div className={styles.expSection}>
            <div className={styles.ExpLeft}>
                <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.dateTxt}>EXPERIENCES</h1>
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-96 text-lg tracking-wide'>{data.expTxt}</p>
            </div>
            <div className={styles.ExpRight}>
    
                {expFields.map((d,index)=>{ 
                     const platformWords = d.platform.split(/\s+/);
                     const platform = platformWords.slice(0, 2).join(" ");
                     const remainingWords = platformWords.slice(2).join(" ");
                    return(
                        <div key={index} className={styles.rightTxt1}>
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.dateTxt}>{d.year} - Present</h1>
                    <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-32 text-2xl font-bold'>{platform} <br /> {remainingWords}</h1>
                     </div>
                    )
                })}
                
            </div>
        </div>
            </div>}
            </>
     
       
    );
};

export default AboutPage;
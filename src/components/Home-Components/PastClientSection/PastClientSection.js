import React, { useEffect, useState } from 'react';
import styles from './PastClient.module.css'

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase.init';
const PastClientSection = () => {

     //GETTING DATA HERE
     const [data,setData] = useState([])
     const [loading,setLoading] = useState(true)

     const databaseRef = collection(db,'pastclient');

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
 

    return (
       <div className='mt-24'>
        <h1 className='text-xl text-gray-400 mt-20 mb-10 ml-40 tracking-widest'>PAST CLIENT</h1>
        {data.map((D,index)=> 
        <div  key={D.id} className={`${styles.MainContainer}`}>
        <div className={`${styles.SubContainer} lg:flex lg:justify-between `}>
            <h1 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000"  className='font-medium text-xl  mr-20 text-gray-400'>{index+1}</h1>
            <img className={styles.unHoverImg} src={D.url} alt="" />
            <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" className={styles.TxtDiv}>
            <h1 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500" className='text-gray-400 text-4xl font-semibold tracking-widest mt-5 mb-16'>{D.name}</h1>
            <p data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000" className='text-xl mb-14'>{D.desc}</p>
            </div>
            <img className={styles.hoverImg} src={D.url} alt="" />
        </div>
    </div>
        )}
       </div>
    );
};

export default PastClientSection;









import React, { useEffect, useState } from 'react';
import styles from '../PastClient.module.css'
import { BiRightArrowAlt } from 'react-icons/bi';
import { collection, getDocs } from 'firebase/firestore';

import Link from 'next/link';
import { db } from '../../../../../firebase.init';
const HomeClient = () => {

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
        {data.slice(0, 3).map((D, index) => (
  <div  key={D.id} className={`${styles.MainContainer}`}>
  <div className={`${styles.SubContainer} lg:flex lg:justify-between `}>
      <h1   className='font-medium text-xl ml-7 md:ml-0 md:mr-20 text-gray-400'>{index+1}</h1>

      <div className='md:flex md:justify-between'>
        <div className={styles.hoverImgDiv}>
          <img className={styles.hoverImg} src={D.url} alt="" />
        </div>

        <div className={styles.TxtDiv}>
        <h1  className='text-gray-400 text-4xl font-semibold tracking-widest md:mt-5 mb-10 md:mb-16'>{D.platform}</h1>
        <p className='text-xl mb-14 '>{D.desc}</p>
        </div>
      </div>
      
  </div>
</div>
))}

        <Link data={data} className={styles.seeBtn} href='/pastclient'>See more <span className='pl-1 pt-1'><BiRightArrowAlt/></span></Link>
       </div>
    );
};

export default HomeClient;









import React, { useEffect, useState } from 'react'
import styles from './work.module.css'
import { AiOutlineArrowRight} from 'react-icons/ai';
import PastClientCaraousel from '../SharedComp/pastClientCaraousel/PastClientCaraousel';
import Link from 'next/link';
import WorkPageLayout from './WorkPageLayout/WorkPageLayout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.init';
const WorkPage = () => {
    
 //GET DATA HERE
 const [data,setData] = useState([]);
 const databaseRef = collection(db,'projects');
 const [loading,setLoading] = useState(true);

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
    <div className={styles.MainContainer}>
       <div className='lg:ml-0 ml-8'>
       <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-24 mb-5 font-bold text-7xl text-black'>Selected Project</h1>
         
         
         <div className='mt-16'>

         <div className="grid-container">
            {data.map((d, index) => (
                <WorkPageLayout key={d.id} d={d} index={index} />
            ))}
        </div>

         </div>





         {/* <div className='lg:flex'>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" >
                    <div className={styles.articleCard2}>
                    <div className={styles.content}>
                    <div className=' ml-6'>
                        <div className='mb-5'>
                                <h1 className={styles.title}>PROJECT</h1>
                                <p className={styles.titleTxt1}>Desinging a social</p>
                                <p className={styles.titleTxt1}>Media app for the</p>
                                <p className={styles.titleTxt1}>Black Experience</p>
                            </div>
                            <div className=''>
                                <h1 className={styles.title}>TYPE</h1>
                                <p className={styles.titleTxt2}>Branding Project</p>
                                <p className={styles.titleTxt2}>Web Desing</p>
                                <p className={styles.titleTxt2}>Mobile Apps</p>
                            </div>
                    </div>
                        <Link href='/works/project1' className={styles.arrowBtn2}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></Link>
                        </div>
                        <img  src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad470e90ea53220438bf_Nothing-Phone-Mockup-016.jpeg" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-3' >
                    <div className={styles.articleCard2}>
                    <div className={styles.content}>
                    <div className=' ml-6'>
                        <div className='mb-5'>
                                <h1 className={styles.title}>PROJECT</h1>
                                <p className={styles.titleTxt1}>Desinging a social</p>
                                <p className={styles.titleTxt1}>Media app for the</p>
                                <p className={styles.titleTxt1}>Black Experience</p>
                            </div>
                            <div className=''>
                                <h1 className={styles.title}>TYPE</h1>
                                <p className={styles.titleTxt2}>Branding Project</p>
                                <p className={styles.titleTxt2}>Web Desing</p>
                                <p className={styles.titleTxt2}>Mobile Apps</p>
                            </div>
                    </div>
                        <Link href='/works/project1' className={styles.arrowBtn2}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></Link>
                        </div>
                        <img  src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad483efb726f0a4b5fb9_Nothing-Phone-Mockup-007.jpeg" />
                    </div>
                </div>
          </div> */}

       </div>

    <PastClientCaraousel/>
    </div>
  )
}

export default WorkPage
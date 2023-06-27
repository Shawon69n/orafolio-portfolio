import NavFootLayout from '@/components/SharedComp/NavFootLayout/NavFootLayout'
import React, { useEffect, useState } from 'react'
import styles from './ProjectDetails.module.css'
import { HiArrowLeft} from 'react-icons/hi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase.init';
const ProjectDetailLayout = ({children}) => {


    const router = useRouter();
    const id = router.query.project;

    const [loading,setLoading] = useState(true)
    const [data, setData] = useState({});
    const databaseRef = doc(db, 'projects', `${id}`);
    
    
    useEffect(() => {
        getDoc(databaseRef)
        .then((doc) =>{
           setData(doc.data())
           setLoading(false)
        })

    }, [id]);


    console.log(data)



  return (
    <NavFootLayout>
        <div className={styles.MainContainer}>
            <div className='lg:ml-0 ml-20'>
            <Link data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" href="/works" className={`${styles.LeftTxt} flex items-center  mt-20 mb-16`}> <span className={styles.arrow}><HiArrowLeft/></span> BACK</Link>
            <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:text-7xl text-6xl mb-16 font-bold text-black'>{data.pName}</h1>
            <div className='lg:flex mb-16'>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mb-5'>
                            <h1 className={styles.title}>YEAR</h1>
                            <p className={styles.titleTxt1}>{data.year}</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-10 lg:mb-0 mb-5'>
                            <h1 className={styles.title}>ROLE</h1>
                            <p className={styles.titleTxt1}>{data.role}</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-10'>
                            <h1 className={styles.title}>TYPE</h1>
                            <p className={styles.titleTxt1}>{data.type}</p> 
                        </div>
                </div>
           
           
            {/* first section  */}
            <div>
                <div className={styles.imgDiv1}>
                    {/* img 1  */}
                {data.allImages && data.allImages.length > 0 && (
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.imgSize} mb-6 mr-3`} src={data.allImages[0]} alt="First Image" />
                    )}
                </div>
                <div className={styles.imgDiv2}>
                    {/* img 2  */}
                    {data.allImages && data.allImages.length > 0 && (
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.imgSize} mb-6 mr-3`} src={data.allImages[1]} alt="First Image" />
                    )}

                        {/* img 3  */}
                        {data.allImages && data.allImages.length > 0 && (
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.imgSize} `} src={data.allImages[2]} alt="First Image" />
                    )}
                </div>
            </div>
       
       
            {/* middle section  */}
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:flex lg:justify-between lg:mt-10 mt-96 lg:mb-16'>
                <h1 className={styles.LeftTxt}>PROJECT DESCRIPTION</h1>
                <div className={styles.txtDiv}>
                <p >{data.desc}</p>
                </div>
            </div>
            <div className={styles.middleDivImg}>
                {/* img 4  */}
                {data.allImages && data.allImages.length > 0 && (
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.imgSize} `} src={data.allImages[3]} alt="First Image" />
                    )}
            </div>
            <div className='lg:flex lg:justify-between mt-10 '>
                <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.LeftTxt}>SOLUTION</h1>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.txtDiv}>
                <p >BLACK built its ecosystem due to well-designed products while our rivals' approach was to make theirs by acquiring similar services and stimulating their growth with enormous money investments.</p>
                </div>
            </div>
     
     
     
            {/* last Section  */}
            <div className='lg:mb-0  mb-96'>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.imgDiv1}>
                    {/* img 5  */}
                    {data.allImages && data.allImages.length > 0 && (
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.imgSize} `} src={data.allImages[4]} alt="First Image" />
                    )}
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.imgDiv2}>
                    {/* img 6  */}
                    {data.allImages && data.allImages.length > 0 && (
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.imgSize} lg:mr-3 mb-6`} src={data.allImages[5]} alt="First Image" />
                    )}
                    {/* img 7 */}
                    {data.allImages && data.allImages.length > 0 && (
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.imgSize} lg:ml-3 `} src={data.allImages[6]} alt="First Image" />
                    )}
                    
                </div>
            </div>
            </div>
        </div>
    </NavFootLayout>
  )
}

export default ProjectDetailLayout
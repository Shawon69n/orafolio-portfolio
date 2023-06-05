import NavFootLayout from '@/components/SharedComp/NavFootLayout/NavFootLayout'
import React from 'react'
import styles from './ProjectDetails.module.css'
import { HiArrowLeft} from 'react-icons/hi';
import Link from 'next/link';
const ProjectDetailLayout = ({children}) => {
  return (
    <NavFootLayout>
        <div className={styles.MainContainer}>
            <div className='lg:ml-0 ml-20'>
            <Link data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" href="/works" className={`${styles.LeftTxt} flex items-center  mt-20 mb-16`}> <span className={styles.arrow}><HiArrowLeft/></span> BACK</Link>
            <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:text-7xl text-6xl mb-16 font-bold text-black'>Designing a Social Media App for <br /> the Black Experience</h1>
            <div className='lg:flex mb-16'>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mb-5'>
                            <h1 className={styles.title}>YEAR</h1>
                            <p className={styles.titleTxt1}>2022-2023</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-10 lg:mb-0 mb-5'>
                            <h1 className={styles.title}>ROLE</h1>
                            <p className={styles.titleTxt1}>UI/UX Design</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:ml-10'>
                            <h1 className={styles.title}>TYPE</h1>
                            <p className={styles.titleTxt1}>Product Strategy, UI/UX/IxD, Prototyping, Design system</p> 
                        </div>
                </div>
           
           
            {/* first section  */}
            <div>
                <div className={styles.imgDiv1}>
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.imgSize} src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad4976d6a3b33270d6ee_Nothing-Phone-Mockup-001.jpeg" alt="" />
                </div>
                <div className={styles.imgDiv2}>
                    <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={`${styles.imgSize} mb-6 mr-3`} src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad48284d878348280d3f_Nothing-Phone-Mockup-010.jpeg" alt="" />
                    <img  data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800"className={`${styles.imgSize} `} src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad4976d6a3b33270d6ee_Nothing-Phone-Mockup-001.jpeg" alt="" />
                </div>
            </div>
       
       
            {/* middle section  */}
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='lg:flex lg:justify-between lg:mt-10 mt-96 lg:mb-16'>
                <h1 className={styles.LeftTxt}>PROJECT DESCRIPTION</h1>
                <div className={styles.txtDiv}>
                <p >BLACK built its ecosystem due to well-designed products while our rivals'
                     approach was to make theirs by acquiring similar services and stimulating 
                     their growth with enormous money investments. We looked for ways to boost 
                     our revenue streams, but rather than working on each service's revenue separately,
                      we were looking for an amplifying force for all of them at once. Eventually, the 
                      Fintech division became such a solution - consumers received various offerings that made their 
                    transactions in Yandex more beneficial while the services cut expenses on payment infrastructure</p>
                </div>
            </div>
            <div className={styles.middleDivImg}>
                <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.imgSize} src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad4976d6a3b33270d6ee_Nothing-Phone-Mockup-001.jpeg" alt="" />
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
                    <img className={styles.imgSize} src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad4976d6a3b33270d6ee_Nothing-Phone-Mockup-001.jpeg" alt="" />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.imgDiv2}>
                    <img className={`${styles.imgSize} lg:mr-3 mb-6`} src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad48284d878348280d3f_Nothing-Phone-Mockup-010.jpeg" alt="" />
                    <img className={`${styles.imgSize} lg:ml-3 `} src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad4976d6a3b33270d6ee_Nothing-Phone-Mockup-001.jpeg" alt="" />
                </div>
            </div>
            </div>
        </div>
    </NavFootLayout>
  )
}

export default ProjectDetailLayout
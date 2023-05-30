import React from 'react'
import styles from './work.module.css'
import { AiOutlineArrowRight} from 'react-icons/ai';
import PastClientCaraousel from '../SharedComp/pastClientCaraousel/PastClientCaraousel';
const WorkPage = () => {
  return (
    <div className={styles.MainContainer}>
        <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-24 mb-5 font-bold text-7xl text-black'>Selected Project</h1>
         <div className='mt-16'>
        {/* <h1 className={styles.date}>01/05</h1> */}
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.center}>
            <div className={styles.articleCard}>
            <div className={styles.content}>
               <div className='flex ml-6'>
                 <div className='mb-5'>
                        <h1 className={styles.title}>PROJECT</h1>
                        <p className={styles.titleTxt1}>Desinging a social</p>
                        <p className={styles.titleTxt1}>Media app for the</p>
                        <p className={styles.titleTxt1}>Black Experience</p>
                    </div>
                    <div className='ml-10'>
                        <h1 className={styles.title}>TYPE</h1>
                        <p className={styles.titleTxt2}>Branding Project</p>
                        <p className={styles.titleTxt2}>Web Desing</p>
                        <p className={styles.titleTxt2}>Mobile Apps</p>
                    </div>
               </div>
                <div className={styles.arrowBtn}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></div>
                </div>
                <img  src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad4976d6a3b33270d6ee_Nothing-Phone-Mockup-001.jpeg" />
            </div>
        </div>
         </div>

         <div className='flex'>
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
                        <div className={styles.arrowBtn2}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></div>
                        </div>
                        <img  src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad470e90ea53220438bf_Nothing-Phone-Mockup-016.jpeg" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='ml-3' >
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
                        <div className={styles.arrowBtn2}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></div>
                        </div>
                        <img  src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad483efb726f0a4b5fb9_Nothing-Phone-Mockup-007.jpeg" />
                    </div>
                </div>
          </div>

          <div>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='mt-6'>
            <div className={styles.articleCard}>
            <div className={styles.content}>
               <div className='flex ml-6'>
                 <div className='mb-5'>
                        <h1 className={styles.title}>PROJECT</h1>
                        <p className={styles.titleTxt1}>Desinging a social</p>
                        <p className={styles.titleTxt1}>Media app for the</p>
                        <p className={styles.titleTxt1}>Black Experience</p>
                    </div>
                    <div className='ml-10'>
                        <h1 className={styles.title}>TYPE</h1>
                        <p className={styles.titleTxt2}>Branding Project</p>
                        <p className={styles.titleTxt2}>Web Desing</p>
                        <p className={styles.titleTxt2}>Mobile Apps</p>
                    </div>
               </div>
                <div className={styles.arrowBtn}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></div>
                </div>
                <img  src="https://assets.ls.graphics/625816a3416990dd61391b9b/63fbad48284d878348280d3f_Nothing-Phone-Mockup-010.jpeg" />
            </div>
        </div>
         </div>

    <PastClientCaraousel/>
    </div>
  )
}

export default WorkPage
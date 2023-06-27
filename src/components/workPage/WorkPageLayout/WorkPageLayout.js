import React from 'react';
import styles from '../work.module.css'
import Link from 'next/link';
import { AiOutlineArrowRight} from 'react-icons/ai';
const WorkPageLayout = ({d}) => {
    
    return (
        <div>
             <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className={styles.center}>
            <div className={styles.articleCard}>
            <div className={styles.content}>
               <div className='flex ml-6'>
                 <div className='mb-5 mt-5 w-52'>
                        <h1 className={styles.title}>PROJECT</h1>
                        <p className={styles.titleTxt1}>{d.pName}</p>
                    </div>
                 <div className=' lg:ml-10 mb-5 mt-5 w-52'>
                        <h1 className={styles.title}>TYPE</h1>
                        <p className={styles.titleTxt1}>{d.type}</p>
                    </div>

               </div>
                <Link href={`/works/${d.id}`} className={styles.arrowBtn}><h1 className={styles.arrow}><AiOutlineArrowRight/></h1></Link>
                </div>
                <img  src={d.allImages[0]} />
            </div>
        </div>
        </div>
    );
};

export default WorkPageLayout;
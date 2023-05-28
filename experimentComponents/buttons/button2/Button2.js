import React from 'react';
import { AiOutlineArrowRight} from 'react-icons/ai';
import styles from './button2.module.css'
const Button2 = () => {
    return (
        <div >
              
              <div className={`${styles.btn }`}>
                 <span  className={styles.btnTxt}>Learn more</span> 
                 <span className={styles.arrow} ><AiOutlineArrowRight/></span>
                 </div>
        </div>
    );
};

export default Button2;
import React from 'react';
import styles from './Button.module.css'
import Link from 'next/link';
const Buttons = () => {
    return (
        <div className={styles.MainContainer}>
            <div className={styles.container}>
                <button className={styles['learn-more']}>
                <span className={styles.circle} aria-hidden="true">
                    <span className={`${styles.icon} ${styles.arrow}`}></span>
                </span>
                <Link href='/contact' className={styles['button-text']}>Contact Me</Link>
                </button>
            </div>
        </div>
    );
};

export default Buttons;
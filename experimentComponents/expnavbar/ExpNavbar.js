import React from 'react';
import  { useState } from 'react'
import styles from "./expnavbar.module.css";
import { AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai';
const ExpNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleOnClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <div>
            <nav className={styles.nav } >
           <div className={styles.desktopNav}>
			<div className={styles.logo}>
			<img className={styles.icon1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCnv9nmXzRyZT-lSKYVG61QxjVdOZztA8vC4PhpNWGR1tCguh" alt="" />
				</div> 
				<ul className={styles.desktopMenu}>
					<li>Home</li>
					<li >Works</li>
					<img className={styles.icon2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCnv9nmXzRyZT-lSKYVG61QxjVdOZztA8vC4PhpNWGR1tCguh" alt="" />
					<li >About</li>
					<li>Contact</li>
				</ul>
		   </div>
            {isMobileMenuOpen ? <AiOutlineClose className={styles.mobileMenuButton}  onClick={handleOnClick} /> : <AiOutlineMenu className={styles.mobileMenuButton}   onClick={handleOnClick} />}
            {
                isMobileMenuOpen ? <ul className={styles.mobileMenu}>
					
							<li>Home</li>
							<li>Works</li>
							<li>About</li>
							<li>Contact</li>
						
                
                </ul> : ''
            }
        </nav>
        </div>
    );
};

export default ExpNavbar;
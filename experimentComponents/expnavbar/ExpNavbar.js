// import React from 'react';
// import  { useState } from 'react'
// import styles from "./expnavbar.module.css";
// import { AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai';
// const ExpNavbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//     const handleOnClick = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen)
//     }
//     return (
//         <div>
//             <nav className={styles.nav } >
//            <div className={styles.desktopNav}>
// 			<div className={styles.logo}>
// 			<img className={styles.icon1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCnv9nmXzRyZT-lSKYVG61QxjVdOZztA8vC4PhpNWGR1tCguh" alt="" />
// 				</div> 
// 				<ul className={styles.desktopMenu}>
// 					<li>Home</li>
// 					<li >Works</li>
// 					<img className={styles.icon2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCnv9nmXzRyZT-lSKYVG61QxjVdOZztA8vC4PhpNWGR1tCguh" alt="" />
// 					<li >About</li>
// 					<li>Contact</li>
// 				</ul>
// 		   </div>
//             {isMobileMenuOpen ? <AiOutlineClose className={styles.mobileMenuButton}  onClick={handleOnClick} /> : <AiOutlineMenu className={styles.mobileMenuButton}   onClick={handleOnClick} />}
//             {
//                 isMobileMenuOpen ? <ul className={styles.mobileMenu}>
					
// 							<li>Home</li>
// 							<li>Works</li>
// 							<li>About</li>
// 							<li>Contact</li>
						
                
//                 </ul> : ''
//             }
//         </nav>
//         </div>
//     );
// };

// export default ExpNavbar;



import React, { useState } from 'react'
import styles from "./expnavbar.module.css";
import { AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
export const ExpNavbar = () => {
    const router = useRouter();
    const [open,setOpen] =  useState(false)

  return (
    
        <nav className={styles.nav}>
            <div className={styles.logo}>
		      <img className={styles.icon1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJjYQyaSAVTPNs8Sd-wCOdvJyPtSgYhSkh2713TBBqZN7n38M" alt="" />
			</div> 
                <ul className={` flex justify-center ${open ?  `${styles.openTrue}` : `${styles.openFalse}`}`} >
                    <div className={styles.links}>
                        <Link href="/">
                        <p className={router.pathname === '/' ? styles.active : ''}>Home</p>
                        </Link>
                        <Link className='ml-16' href="/about">
                        <p className={router.pathname === '/about' ? styles.active : ''}>About</p>
                        </Link>

                        
                            <img className={`w-7 h-7 ml-28 ${styles.ToggleLogo}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJjYQyaSAVTPNs8Sd-wCOdvJyPtSgYhSkh2713TBBqZN7n38M" alt="" />
                        

                        <Link className='ml-28' href="/works">
                        <p className={router.pathname === '/works' ? styles.active : ''}>Works</p>
                        </Link>
                        <Link className='ml-16' href="/contact">
                        <p className={router.pathname === '/contact' ? styles.active : ''}>Contact</p>
                        </Link>
                    </div>
                </ul>

                <div onClick={() => setOpen(!open)} className={`${styles.icon}`}>
                { open? <AiOutlineClose/>  : <AiOutlineMenu />}
                </div>
        </nav>
    
  )
}

import Link from 'next/link';
import React, { useState } from 'react';
import { MdAdminPanelSettings} from 'react-icons/md';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import styles from './adminpage.module.css'
import { AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai';


const AdminPageLayout = ({children}) => {
    const router = useRouter();
    const [open,setOpen] =  useState(false)

    return (
               
           <div>
                 {/* <div className="gridContainer">
                <Link className="ml-5 font-semibold" href="/admin/edithometexts">Home </Link>
                <Link className="ml-5 font-semibold" href="/admin/editpastclient">Past client</Link>
                <Link className="ml-5 font-semibold" href="/admin/editworks">Works</Link>
                <Link className="ml-5 font-semibold" href="/admin/editabout">About</Link>
                <Link className='ml-10 font-semibold' href="/admin" onClick={() => signOut(auth)}>Signout</Link>
                </div> */}


        <nav className={styles.nav}>
                    <div className={styles.logo}>
                    <img className={styles.icon1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJjYQyaSAVTPNs8Sd-wCOdvJyPtSgYhSkh2713TBBqZN7n38M" alt="" />
                    </div> 
                        <ul className={` flex justify-center ${open ?  `${styles.openTrue}` : `${styles.openFalse}`}`} >
                            <div className={styles.links}>
                                <Link href="/admin/edithometexts">
                                <p className={router.pathname === '/admin/edithometexts' ? styles.active : ''}>Home</p>
                                </Link>
                                <Link className='ml-16' href="/admin/editpastclient">
                                <p className={router.pathname === '/admin/editpastclient' ? styles.active : ''}>Client</p>
                                </Link>

                                <Link className='ml-16' href="/admin/editworks">
                                <p className={router.pathname === '/admin/editworks' ? styles.active : ''}>Works</p>
                                </Link>
                                <Link className='ml-16' href="/admin/editabout">
                                <p className={router.pathname === '/admin/editabout' ? styles.active : ''}>About</p>
                                </Link>
                            </div>
                        </ul>

                        <div onClick={() => setOpen(!open)} className={`${styles.icon}`}>
                        { open? <AiOutlineClose/>  : <AiOutlineMenu />}
                        </div>
                </nav>


                
                {children}
           </div>
       
    );
};

export default AdminPageLayout;
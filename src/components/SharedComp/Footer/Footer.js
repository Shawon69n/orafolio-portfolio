import React from 'react';
import styles from './Footer.module.css'
import Buttons from '../../../../experimentComponents/buttons/button1/Buttons';
const Footer = () => {
    return (
        <div>
             <footer className={`${styles.footer}`}>
                <div className='mb-16'>
                    <h1 className='lg:text-8xl text-5xl font-semibold text-center text-white'>Have a Cool <br /> Project?</h1>
                    <div className={`${styles.contactBtn}  mt-8`}>
                    <Buttons/>
                    </div>
                </div>

                    <div className={styles.footer2ndSec}>
                    <div className='lg:w-56'>
                        <img className='rounded-full w-36 h-36 lg:ml-0 ml-40 ' src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <p className='text-lg text-white font-semibold tracking-wider lg:mt-2 mt-8 lg:mb-0 mb-16 lg:ml-0 ml-24'>Visual Designer Based in Indonesia</p>
                    </div> 

                   <div className='lg:flex lg:ml-0 ml-44'>
                        <div className='mr-20 lg:mb-0 mb-14'>
                            <h1 className='text-xl font-bold text-white'>Navigation</h1>
                           <ul>
                           <li className='mt-3'> <a className="link link-hover text-lg text-white">Home</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">About</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">Expertise</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">Work</a> </li>
                           </ul>
                           
                        </div> 
                        <div className='mr-20 lg:mb-0 mb-14'>
                            <h1 className='text-xl font-bold text-white'>Services</h1>
                            <ul>
                           <li className='mt-3'> <a className="link link-hover text-lg text-white">Branding</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">UI/UX Design</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">Development</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">Digital Marketing</a> </li>
                           </ul>
                        </div> 
                        <div>
                            <h1 className='text-xl font-bold text-white'>Social Media</h1>
                            <ul>
                           <li className='mt-3'> <a className="link link-hover text-lg text-white">Dribbble</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">Twitter</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">Instagram</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">LinkedIn</a> </li>
                           </ul>
                        </div> 
                      
                   </div>
                    </div>
                    <h3 className='text-center text-lg tracking-wider font-semibold text-zinc-600 pt-8 pb-8'>2023 | Blulab</h3>
            </footer>
        </div>
    );
};

export default Footer;
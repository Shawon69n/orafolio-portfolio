import React from 'react';
import styles from './Footer.module.css'
import Buttons from '../../../../experimentComponents/buttons/button1/Buttons';
const Footer = () => {
    return (
        <div>
             <footer className={`${styles.footer}`}>
                <div className='mb-16'>
                    <h1 className='text-8xl font-semibold text-center text-white'>Have a Cool <br /> Project?</h1>
                    <div className='ml-96 mt-8'>
                    <Buttons/>
                    </div>
                </div>

                    <div className={styles.footer2ndSec}>
                    <div>
                        <img className='rounded-full w-36 h-36 ' src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <p className='text-lg text-white font-semibold tracking-wider mt-2'>Visual Designer Based in <br /> Indonesia</p>
                    </div> 

                   <div className='flex'>
                        <div className='mr-20'>
                            <h1 className='text-xl font-bold text-white'>Navigation</h1>
                           <ul>
                           <li className='mt-3'> <a className="link link-hover text-lg text-white">Home</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">About</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">Expertise</a> </li>
                           <li className='mt-2'> <a className="link link-hover text-lg text-white">Work</a> </li>
                           </ul>
                           
                        </div> 
                        <div className='mr-20'>
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
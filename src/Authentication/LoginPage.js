import React, { useState } from 'react';
import styles from './Login.module.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router'
import { auth } from '../../firebase.init';
import { GrUserAdmin} from 'react-icons/gr';
import Loading from '@/components/SharedComp/Loading/Loading';
import Link from 'next/link';
import { HiArrowLeft} from 'react-icons/hi';

const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginError,setLoginError] = useState(false)
    const router = useRouter()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    

   const handleOnSubmit = (e) =>{
    e.preventDefault()
    if(user){
        router.push('/admin')
    }
   }

 

    return (
        <div>

           {loading? <Loading/> : 
            <div className={styles.loginContainer}>
                        <Link data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" href="/" className={` flex items-center mt-6`}> <span className='arrow'><HiArrowLeft/></span> GO HOME</Link>

                <div className={styles.card}>
                <h2 style={{color:"rgb(237,123,72)"}} className='flex justify-center text-center text-2xl font-semibold pb-5'> ADMIN <GrUserAdmin  className='ml-3 mt-1 '/></h2>
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input className={styles.LoginInput} onChange={event => setEmail(event.target.value)} type="email" id="email" name="email" placeholder="Enter your email" required />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input className={styles.LoginInput} onChange={event => setPassword(event.target.value)} type="password" id="password" name="password" placeholder="Enter your password" required />
                    <br />
                    {error ?  <h1 className='text-red-600 text-sm'>invalid email/password</h1> : '' }
                    <button className={styles.loginButton} onClick={() => signInWithEmailAndPassword(email, password)} type="submit">Login</button>
                </form>   
            </div>
            </div>
           }
        </div>
    );
};

export default LoginPage;
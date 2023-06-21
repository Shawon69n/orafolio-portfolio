import React, { useState } from 'react';
import styles from './Login.module.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router'
import { auth } from '../../firebase.init';
const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

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

            <div className={styles.card}>
                <h2>Login</h2>
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input className={styles.LoginInput} onChange={event => setEmail(event.target.value)} type="email" id="email" name="email" placeholder="Enter your email" required />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input className={styles.LoginInput} onChange={event => setPassword(event.target.value)} type="password" id="password" name="password" placeholder="Enter your password" required />
                    <br />
                    <button className={styles.loginButton} onClick={() => signInWithEmailAndPassword(email, password)} type="submit">Login</button>
                </form>   
            </div>
        </div>
    );
};

export default LoginPage;
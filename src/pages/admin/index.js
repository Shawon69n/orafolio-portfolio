import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import LoginPage from '@/Authentication/LoginPage';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import AdminPage from '@/AdminComponent/AdminPage';


const index = () => {
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div>
            {loading? <h1>LOADING</h1> :

                <div>
                    {user? 
                    
                    <div>
                        <AdminPage/>
                        <Link href="/" onClick={() => signOut(auth)}>Signout</Link>
                    </div>
                    
                    : <LoginPage/> }
                </div>
             }
           
        </div>
    );
};

export default index;
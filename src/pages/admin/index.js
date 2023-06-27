import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import LoginPage from '@/Authentication/LoginPage';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import AdminPage from '@/AdminComponent/AdminPage';
import { AiOutlineLogout} from 'react-icons/ai';
import Loading from '@/components/SharedComp/Loading/Loading';

const index = () => {
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div>
            {loading? <div className='ml-5 mt-28'><Loading/></div> :

                <div>
                    {user? 
                    
                    <div className='AdminContainer'>
                        <AdminPage/>
                        <Link className='ml-[940px] mt-10 flex w-20 p-2 btn btn-outline btn-error ' href="/admin" onClick={() => signOut(auth)}>Signout</Link>
                    </div>
                    
                    : <LoginPage/> }
                </div>
             }
           
        </div>
    );
};

export default index;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase.init';
import LoginPage from '@/Authentication/LoginPage';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { AiOutlineHome,AiOutlineFundProjectionScreen,AiOutlineLogout} from 'react-icons/ai';
import { ImProfile} from 'react-icons/im';
import { IoIosPeople} from 'react-icons/io';

import Loading from '@/components/SharedComp/Loading/Loading';
import AdminPageLayout from '@/AdminComponent/AdminPageLayout';
import { collection, getDocs } from 'firebase/firestore';
import NavFootLayout from '@/components/SharedComp/NavFootLayout/NavFootLayout';

const index = () => {
    const [user, loading, error] = useAuthState(auth);
    const databaseRef = collection(db,'aboutpage');


        //GET DATA HERE
        const [data,setData] = useState([])
        const [isUpdate, setIsUpdate] = useState(false);
        const [dataLoading,setDataLoading] = useState(true);


        useEffect(() =>{
            getData()
        },[])

        const getData = async() => {
            await getDocs(databaseRef)
            .then((response) =>{
            setDataLoading(false)
            setData(response.docs.map((data)=>{
                return {...data.data(), id: data.id}
            }))
            })
        }
    
    return (
        <NavFootLayout>
            {loading? <div className='ml-5 mt-28'><Loading/></div> :

                <div>
                    {user? 
                    
                    <div className='AdminContainer'>       
                          {data.map((d)=>{
                          return(
                            <div key={d.id}  className=''>

                            <div style={{backgroundColor : "#131315"}} className='bg-slate-500 p-5 rounded text-white' >
                                <div>
                                   <h1 className='text-4xl pt-10'>WELCOME TO ADMIN PAGE -</h1>
                                   <h1 className='text-6xl mt-10 pb-10 ml-48'>SHAWON</h1>
                                </div>
                            </div>
                            
                            <div className='grid grid-cols-3 w-1/2 gap-4 p-10 text-white'>
                                <Link  href='/admin/edithometexts' className='p-3 rounded-md linkBtns' >
                                   Edit Home <AiOutlineHome/>
                                </Link>

                                <Link  href='/admin/editpastclient' className='p-3 rounded-md linkBtns'>
                                    Edit Client <IoIosPeople/>
                                </Link>

                                <Link href="/admin/editworks" className='p-3 rounded-md linkBtns' >
                                    Edit Works <AiOutlineFundProjectionScreen/>
                                </Link>

                                <Link href="/admin/editabout" className='p-3 rounded-md linkBtns'>
                                         Edit About <ImProfile/>
                                </Link>
                            </div>

                            <div className='pt-16'>
                                <h1 className='font-normal'><span className='font-medium'>Email</span> - {user.email}</h1>
                                <Link className='text-red-500 flex mt-5 items-center btn btn-outline btn-error w-32 ' href="/admin" onClick={() => signOut(auth)}>
                                   Logout <span className='ml-2'><AiOutlineLogout/></span> 
                                </Link>
                            </div>

                            
                            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className="avatar absolute top-40 left-[1000px] ">
                                <div className="lg:w-96 w-11/12 lg:ml-0 ml-14 rounded-full">
                                    <img src={d.url} />
                                </div>
                             </div>
                       
                        </div>
                          )
                       })}
                    </div>
                    
                    : <LoginPage/> }
                </div>
             }
           
        </NavFootLayout>
    );
};

export default index;
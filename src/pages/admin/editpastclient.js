import { addDoc, collection, deleteDoc, doc, getDocs , serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../../../firebase.init';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import Link from 'next/link';
import { HiArrowLeft} from 'react-icons/hi';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginPage from '@/Authentication/LoginPage';
import AdminPageLayout from '@/AdminComponent/AdminPageLayout';

const editpastclient = () => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [platform,setPlatform] = useState('');
    const [desc,setDesc] = useState('');
    const [imgUrl,setImgUrl] = useState('');
    const databaseRef = collection(db,'pastclient');
   const [loading,setLoading] = useState(true);


   const [descErr,setDescErr] = useState(false);

   const handleDescChange = () => {
    
    if (desc.length >= 186 && desc.length <= 250) {
      setDescErr(false);
    } else {
      setDescErr(true);
    }
  };

    // UPLOADING HERE 
    const handleUpload = async(e) =>{
      e.preventDefault()
      if (desc.length >= 186 && desc.length <= 250) {
        setDesc(desc);
        if(imgUrl){
          const imageRef = ref(storage, `pastclientimages/${imgUrl.name + v4()}`);
          await uploadBytes(imageRef, imgUrl).then(() =>{
            getDownloadURL(imageRef).then((url) =>{  
              addDoc(databaseRef,{
                platform,
                desc,
                url,
                Timestamp : serverTimestamp()
              })
              .then(() => {
                alert('Data added')
                setPlatform('')
                setDesc('')
                setImgUrl('')
                getData()
              })
              .catch((err) =>{
                console.error
              }) 
            })
          })
    
        }
      } else{
        alert('minimum letters is 186 and max is 250')
      }
      
    

      
        
       
    }

    
    //GETTING DATA HERE
    const [data,setData] = useState([])

    useEffect(() =>{
        getData()
      },[])

    const getData = async() => {
        await getDocs(databaseRef)
        .then((response) =>{
          setLoading(false)
          setData(response.docs.map((data)=>{
            return {...data.data(), id: data.id}
          }))
        })
      }

      //UPDATE DATA HERE 
      const [deleteUrl,setDeleteUrl] = useState('');
      const [ID,setID] = useState('');
      //getting the single data onclick
      const getSingleData = (id, platform , desc,url) => {
        setID(id);
        setPlatform(platform);
        setDesc(desc);
        setDeleteUrl(url);
        setIsUpdate(true);
        
      }
      //UPDATE FUNCTION
      const updateData = async(e) =>{
        let fieldToEdit = doc(db, 'pastclient', ID);
        e.preventDefault() 
        if(imgUrl){
          const path = deleteUrl.split('%2F')[1].split('?')[0];
          const urlRef = ref(storage, `pastclientimages/${path}`);
          deleteObject(urlRef)
          .then(() =>{
            const imageRef = ref(storage, `pastclientimages/${imgUrl.name + v4()}`);
             uploadBytes(imageRef, imgUrl).then(() =>{
              getDownloadURL(imageRef).then((url) =>{  
                updateDoc(fieldToEdit, {
                  platform: platform,
                  desc : desc,
                  url: url,
                  Timestamp: serverTimestamp(),
                })
                .then(() => {
                  alert('Data Updated')
                  getData()
                  setPlatform('')
                  setDesc('')
                  setImgUrl('')
                  setIsUpdate(false)
                })
                .catch((err) => {
                  console.log(err);
                })
              })
            })
            
          })
        }
        else{
          updateDoc(fieldToEdit, {
            platform: platform,
            desc : desc,
            Timestamp: serverTimestamp(),
          });

          alert('Data Updated')
                  getData()
                  setPlatform('')
                  setDesc('')
                  setImgUrl('')
                  setIsUpdate(false)



        }
        
      }

      //DELETE DATA
      const deleteSingleData = (id,url) => {
        //delete photo from fire storage first 
        const path = url.split('%2F')[1].split('?')[0];
        const urlRef = ref(storage, `pastclientimages/${path}`);
        deleteObject(urlRef)
      
        let fieldToEdit = doc(db, 'pastclient', id);
        deleteDoc(fieldToEdit)
        .then(() => {
          alert('Data Deleted')
          getData()
        })
        .catch((err) => {
          alert('Cannot Delete that field..')
        })
      }

      const [user, Authloading, error] = useAuthState(auth);

    return (
      <AdminPageLayout>
        {user? <div className='mainDiv'>
            {loading ? <h1>LOADING</h1> : <div>
            <Link data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" href="/admin" className={` flex items-center mt-6`}> <span className='arrow'><HiArrowLeft/></span> BACK</Link>

            <div className='inputDiv flex justify-center rounded'>
                <form onSubmit={isUpdate? updateData: handleUpload}>
                    <h1 className='text-center font-bold pt-5 pb-5 text-2xl'>UPLOAD CLIENT</h1>
                    <label htmlFor="platfrom">Platform :</label> <br />
                    <input value={platform} className="input input-bordered input-primary w-full max-w-xs mb-5" onChange={event => setPlatform(event.target.value)} type="text" id="" name="platform" required  /> <br />
                    <label htmlFor="desc">Description :</label> <br />
                    <textarea  value={desc} className="textarea textarea-primary w-full max-w-xs mb-5" onBlur={handleDescChange} onChange={event => setDesc(event.target.value)} type="text" name="desc"/>  <br />
                    {descErr? <h1 className='text-red-600 pb-2 text-sm'>Description length should be under 155-166 letters</h1> : ''}
                    <input className="file-input file-input-bordered w-full max-w-xs mb-5"   onChange={(e) => { setImgUrl(e.target.files[0]) }} type="file" accept='image/*' name="" id="" /> <br />
                    {isUpdate? <button className='btn w-full max-w-xs ' >Update</button> : <input type='submit' value="UPLOAD"  className='btn w-full max-w-xs '/>}
                </form>
          </div>

            <div className='mt-20  grid grid-cols-3 gap-12'>
                {data.map((d)=>{
                    return (
                        <div key={d.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='flex rounded-lg w-full '>
                          <img style={{width: '200px', height:'200px'}} src={d.url} alt="" /> <br />
                            <div className='ml-10 pl-5 pr-5'>
                                <h4 className='text-xl mt-8'>{d.platform}</h4>
                                <button onClick={() =>getSingleData(d.id,d.platform,d.desc,d.url,)} className='btn-sm btn btn-info mt-10 ' >Update</button>
                                <button onClick={() => deleteSingleData(d.id,d.url)} className='btn-sm btn btn-error ml-5 mt-5'>Delete</button>
                            </div>
                        </div>
                      )
                })}
            </div>
            </div> }
        </div> : <LoginPage/>}
        </AdminPageLayout>
    );
};

export default editpastclient;
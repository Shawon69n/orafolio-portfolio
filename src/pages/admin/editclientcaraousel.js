import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, storage } from '../../../firebase.init';
import { HiArrowLeft} from 'react-icons/hi';
import LoginPage from '@/Authentication/LoginPage';
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import Link from 'next/link';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import AdminPageLayout from '@/AdminComponent/AdminPageLayout';

const editclientcaraousel = () => {
   
    const [user, Authloading, error] = useAuthState(auth);

    const [isUpdate, setIsUpdate] = useState(false);
    const [review,setReview] = useState('');
    const [name,setName] = useState('');
    const [profession,setProfession] = useState('');
    const [imgUrl,setImgUrl] = useState('');
    const databaseRef = collection(db,'clientcaraousel');
    const [loading,setLoading] = useState(false);



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

     console.log(data)

 // UPLOADING HERE 
 const handleUpload = async(e) =>{
    e.preventDefault()
    if(imgUrl){
        const imageRef = ref(storage, `clientcaraouselimages/${imgUrl.name + v4()}`);
        await uploadBytes(imageRef, imgUrl).then(() =>{
          getDownloadURL(imageRef).then((url) =>{  
            addDoc(databaseRef,{
              review,
              name,
              profession,
              url,
              Timestamp : serverTimestamp()
            })
            .then(() => {
              alert('Data added')
              setReview('')
              setName('')
              setImgUrl('')
              
            })
            .catch((err) =>{
              console.error
            }) 
          })
        })
  
      }
}



   //UPDATE DATA HERE 
   const [deleteUrl,setDeleteUrl] = useState('');
   const [ID,setID] = useState('');
   //getting the single data onclick
   const getSingleData = (id, name , profession,review,url) => {
     setID(id);
     setName(name);
     setProfession(profession);
     setReview(review);
     setDeleteUrl(url);
     setIsUpdate(true);
     
   }
   //UPDATE FUNCTION
   const updateData = async(e) =>{
     let fieldToEdit = doc(db, 'clientcaraousel', ID);
     e.preventDefault() 
     if(imgUrl){
       const path = deleteUrl.split('%2F')[1].split('?')[0];
       const urlRef = ref(storage, `clientcaraouselimages/${path}`);
       deleteObject(urlRef)
       .then(() =>{
         const imageRef = ref(storage, `clientcaraouselimages/${imgUrl.name + v4()}`);
          uploadBytes(imageRef, imgUrl).then(() =>{
           getDownloadURL(imageRef).then((url) =>{  
             updateDoc(fieldToEdit, {
                review: review,
                name: name,
                profession: profession,
                url: url,
                Timestamp: serverTimestamp(),
             })
             .then(() => {
               alert('Data Updated')
               getData()
               setReview('')
               setName('')
               setImgUrl('')
               setProfession('')
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
                review: review,
                name: name,
                profession: profession,
                Timestamp: serverTimestamp(),
       });

       alert('Data Updated')
               getData()
               setReview('')
               setName('')
               setImgUrl('')
               setProfession('')
               setIsUpdate(false)



     }
     
   }






    return (
        <AdminPageLayout>
        {user? <div className='mainDiv'>
            {loading ? <h1>LOADING</h1> : <div>
            <Link data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" href="/admin" className={` flex items-center mt-6`}> <span className='arrow'><HiArrowLeft/></span> BACK</Link>

            <div className='clientInputDiv flex justify-center'>
                <form onSubmit={isUpdate? updateData : handleUpload}>
                    <h1 className='text-center font-bold pt-5 pb-5 text-2xl'>UPLOAD CLIENT</h1>
                    <label htmlFor="name">Name :</label> <br />
                    <input value={name} className="input input-bordered input-primary w-full max-w-xs mb-5" onChange={event => setName(event.target.value)} type="text" id="" name="platform" required  /> <br />
                    <label htmlFor="profession">Profession :</label> <br />
                    <input value={profession} className="input input-bordered input-primary w-full max-w-xs mb-5" onChange={event => setProfession(event.target.value)} type="text" id="" name="platform" required  /> <br />
                    <label htmlFor="review">Review :</label> <br />
                    <textarea value={review} className="textarea textarea-primary w-full max-w-xs mb-5" onChange={event => setReview(event.target.value)} type="text" name="desc"/>  <br />
                    <input className="file-input file-input-bordered w-full max-w-xs mb-5"  onChange={(e) => { setImgUrl(e.target.files[0]) }} type="file" accept='image/*' name="" id="" /> <br />
                    {isUpdate? <button className='btn w-full max-w-xs ' >Update</button> : <input type='submit' value="UPLOAD"  className='btn w-full max-w-xs '/>}
                </form>
          </div>

            <div className='mt-20  grid grid-cols-2 gap-12'>
                {data.map((d)=>{
                    return (
                        <div key={d.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='flex rounded-lg w-full '>
                          <img style={{width: '200px', height:'200px'}} src={d.url} alt="" /> <br />
                            <div className='ml-10 pl-5 pr-5'>
                                <h4 className='text-xl mt-8'>Name : {d.name}</h4>
                                <p>Review : {d.review}</p>
                                <button onClick={() =>  getSingleData(d.id, d.name , d.profession,d.review,d.url)} className='btn-sm btn btn-info mt-10 ' >edit</button>
                                <button className='btn-sm btn btn-error ml-5 mt-5'>Delete</button>
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

export default editclientcaraousel;
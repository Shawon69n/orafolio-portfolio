import { addDoc, collection, deleteDoc, doc, getDocs , serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db, storage } from '../../../firebase.init';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const editpastclient = () => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [platform,setPlatform] = useState('');
    const [desc,setDesc] = useState('');
    const [imgUrl,setImgUrl] = useState('');
    const databaseRef = collection(db,'pastclient');
   const [loading,setLoading] = useState(true);
    // UPLOADING HERE 
    const handleUpload = async(e) =>{
        e.preventDefault()
        if(imgUrl){
            const imageRef = ref(storage, `pastclientimages/${imgUrl.name}`);
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
        e.preventDefault()
        let fieldToEdit = doc(db, 'pastclient', ID);

        if(deleteUrl){
          const path = deleteUrl.split('%2F')[1].split('?')[0];
          const urlRef = ref(storage, `pastclientimages/${path}`);
          deleteObject(urlRef)
        }
        else{
          return console.log('couldn delete');
        }
      
      
        if(imgUrl){
          const imageRef = ref(storage, `pastclientimages/${imgUrl.name}`);
          await uploadBytes(imageRef, imgUrl).then(() =>{
            getDownloadURL(imageRef).then((url) =>{  
              updateDoc(fieldToEdit, {
                platform: platform,
                desc : desc,
                url : url ,
                Timestamp : serverTimestamp()
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

    return (
        <div className='mainDiv'>
            {loading ? <h1>LOADING</h1> : <div>
            <div className='inputDiv flex justify-center'>
                <form onSubmit={isUpdate? updateData: handleUpload}>
                    <h1 className='text-center font-bold pt-5 pb-5 text-2xl'>UPLOAD CLIENT</h1>
                    <label htmlFor="platfrom">Platform :</label> <br />
                    <input value={platform} className="input input-bordered input-primary w-full max-w-xs mb-5" onChange={event => setPlatform(event.target.value)} type="text" id="" name="platform" required  /> <br />
                    <label htmlFor="desc">Description :</label> <br />
                    <textarea value={desc} className="textarea textarea-primary w-full max-w-xs mb-5" onChange={event => setDesc(event.target.value)} type="text" name="desc"/>  <br />
                    <input className="file-input file-input-bordered w-full max-w-xs mb-5"  onChange={(e) => { setImgUrl(e.target.files[0]) }} type="file" accept='image/*' name="" id="" /> <br />
                    {isUpdate? <button className='btn w-full max-w-xs ' >Update</button> : <input type='submit' value="UPLOAD"  className='btn w-full max-w-xs '/>}
                </form>
          </div>

            <div className='mt-20  grid grid-cols-3 gap-12'>
                {data.map((d)=>{
                    return (
                        <div key={d.id} style={{border:'1px solid black'}} className='flex w-full '>
                          <img style={{width: '200px', height:'200px'}} src={d.url} alt="" /> <br />
                            <div className='ml-10 pl-5 pr-5'>
                                <h4 className='text-xl mt-8'>{d.platform}</h4>
                                <button onClick={() =>getSingleData(d.id,d.platform,d.desc,d.url,)} className='btn-sm btn-info mt-10 ' >Update</button>
                                <button onClick={() => deleteSingleData(d.id,d.url)} className='btn-sm btn-error mt-5'>Delete</button>
                            </div>
                        </div>
                      )
                })}
            </div>
            </div> }
        </div>
    );
};

export default editpastclient;
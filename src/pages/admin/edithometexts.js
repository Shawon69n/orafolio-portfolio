import { addDoc, arrayUnion, collection, deleteDoc, deleteField, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../../../firebase.init';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Loading from '@/components/SharedComp/Loading/Loading';
import Link from 'next/link';
import { HiArrowLeft} from 'react-icons/hi';
import { v4 } from 'uuid';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginPage from '@/Authentication/LoginPage';
const edithometexts = () => {

  
  const [user, loading, error] = useAuthState(auth);

    const [headTxt,setHeadTxt] = useState('');
    const [subTxt,setSubTxt] = useState('');

    const [images,setImages] = useState('');

    const [caraouselTxt1,setCaraouselTxt1] = useState('');
    const [caraouselTxt2,setCaraouselTxt2] = useState('');
    const [caraouselTxt3,setCaraouselTxt3] = useState('');
    const [caraouselTxt4,setCaraouselTxt4] = useState('');


    const [isUpdate, setIsUpdate] = useState(false);
    const [Ploading,setPLoading] = useState(true);


    //ADD DATA HERE 
    const handleMultipleImages = (e) => {
      const selectedFiles = e.target.files;
  
      if (selectedFiles.length !== 2) {
        // Display an error message or take appropriate action
        alert("Please select exactly two images.");
        return;
      }

        for (let i = 0; i < selectedFiles.length;  i++) {
        const newImage = selectedFiles[i];
        setImages((prevState) => [...prevState, newImage]);
        }
        
    };
    const handleUpload = async(e) =>{
        e.preventDefault();

      
        try {
          const databaseRef = await addDoc(collection(db, 'homepage'), {
            headTxt: headTxt,
            subTxt: subTxt,
            ct1: caraouselTxt1,
            ct2: caraouselTxt2,
            ct3: caraouselTxt3,
            ct4: caraouselTxt4,
            Timestamp: serverTimestamp(),
          });
          await Promise.all(
            images.map(async (img) => {
              const imgRef = ref(storage, `homeimages/${img.name + v4()}`);
      
              try {
                await uploadBytes(imgRef, img, 'data_url');
                const downloadURL = await getDownloadURL(imgRef);
      
                await updateDoc(doc(db, 'homepage', databaseRef.id), {
                  allImages: arrayUnion(downloadURL),
                });
              } catch (error) {
                console.error('Error uploading image:', error);
                // Handle or log the error as needed
              }
            })
          );
        } catch (error) {
          console.error('Error saving data in Firestore:', error);
          // Handle or log the error as needed
        }
        setHeadTxt('')
        setSubTxt('')
        setImages('')
        setCaraouselTxt1('')
        setCaraouselTxt2('')
        setCaraouselTxt3('')
        setCaraouselTxt4('')
    }

    //GET DATA HERE
    const [data,setData] = useState([])
    const databaseRef = collection(db,'homepage')

    useEffect(() =>{
        getData()
      },[])

    const getData = async() => {
        await getDocs(databaseRef)
        .then((response) =>{
          setPLoading(false)
          setData(response.docs.map((data)=>{
            return {...data.data(), id: data.id}
          }))
        })
      }

      //UPDATE HERE
      const [ID, setID] = useState(null);
      const [allImages, setAllimages] = useState()
      const [oldAllImages, setOldAllimages] = useState()

      const getSingleData = (id,headTxt,subTxt,allImages,c1,c2,c3,c4) => {
        setID(id)
        setOldAllimages(allImages)
        setHeadTxt(headTxt)
        setSubTxt(subTxt)
        setCaraouselTxt1(c1)
        setCaraouselTxt2(c2)
        setCaraouselTxt3(c3)
        setCaraouselTxt4(c4)
        setIsUpdate(true)
        
      }

     const updateData = async(e) =>{
      e.preventDefault()
      let fieldToEdit = doc(db, 'homepage', ID);
      if(images){
        await oldAllImages.forEach((url) => {
          const path = url.split('%2F')[1].split('?')[0];
          const urlRef = ref(storage, `homeimages/${path}`);
          deleteObject(urlRef);
        });
        
        //deleting allimages field here
        const data = { allImages: deleteField() };
        await updateDoc(fieldToEdit, data)
          .then(() => {
            console.log("allImages field has been deleted successfully");
          })
          .catch((error) => {
            console.log(error);
          });

          await updateDoc(fieldToEdit, {
            headTxt: headTxt,
            subTxt: subTxt,
            ct1: caraouselTxt1,
            ct2: caraouselTxt2,
            ct3: caraouselTxt3,
            ct4: caraouselTxt4,
            Timestamp: serverTimestamp(),
          });
        
          // Add new images to the allImages field
          await Promise.all(
            images.map(async (img) => {
              const imgRef = ref(storage, `homeimages/${img.name + v4()}`);
              await uploadBytes(imgRef, img, "data_url");
              const downloadURL = await getDownloadURL(imgRef);
              await updateDoc(fieldToEdit, {
                allImages: arrayUnion(downloadURL),
              });
            })
          );
          
      }
      else{    
        await updateDoc(fieldToEdit, {
          headTxt: headTxt,
          subTxt: subTxt,
          ct1: caraouselTxt1,
          ct2: caraouselTxt2,
          ct3: caraouselTxt3,
          ct4: caraouselTxt4,
          Timestamp: serverTimestamp(),
        });
      }
      getData();
      setIsUpdate(false);
     }


     //DELETE DATA 
     const deleteData = async (id, allImages) => {
      allImages.forEach((url) => {
        const path = url.split('%2F')[1].split('?')[0];
        const urlRef = ref(storage, `homeimages/${path}`);
        deleteObject(urlRef)
      });

      let fieldToEdit = doc(db, 'homepage', id);
      deleteDoc(fieldToEdit)
      .then(() => {
          alert('Data Deleted')
          getData()
      })
      .catch((err) => {
          alert('Cannot Delete that field..')
      })
          
    };

    return (
        <>
          {user? 
            <div className='mainDiv'>
            { Ploading ?  <div><Loading/></div> : <div>
            <Link data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" href="/admin" className={` flex items-center mt-6`}> <span className='arrow'><HiArrowLeft/></span> BACK</Link>
                
                  {isUpdate?  
                  <div className='HomeinputDiv flex justify-center'>
                  <form onSubmit={isUpdate? updateData: handleUpload}>
                      <h1 className='text-center font-bold pt-5 pb-5 text-2xl'>UPLOAD HOME TEXT & PHOTO</h1>
                      <label htmlFor="platfrom">Heading Text :</label> <br />
                      <input value={headTxt} className="input input-bordered input-primary w-full  mb-5" onChange={event => setHeadTxt(event.target.value)} type="text" id="" name="platform" required  /> <br />
                      <label htmlFor="desc">Sub Heading Text :</label> <br />
                      <input value={subTxt} className="textarea textarea-primary w-full  mb-5" onChange={event => setSubTxt(event.target.value)} type="text" name="desc"/>  <br />
                      
                      {/* carousel txt inputs  */}
                    <div className='grid grid-cols-2 gap-4'>
                          <div>
                          <label htmlFor="c1">Caraousel Text 1 :</label> <br />
                          <input value={caraouselTxt1} className="textarea textarea-primary w-full max-w-xs mb-5" onChange={event => setCaraouselTxt1(event.target.value)} type="text" name="c1"/>  
                          </div>
                          <div>
                          <label htmlFor="c2">Caraousel Text 2 :</label> <br />
                          <input value={caraouselTxt2} className="textarea textarea-primary w-full max-w-xs mb-5" onChange={event => setCaraouselTxt2(event.target.value)} type="text" name="c2"/>  
                          </div>
                          <div>
                          <label htmlFor="c3">Caraousel Text 3 :</label> <br />
                          <input value={caraouselTxt3} className="textarea textarea-primary w-full max-w-xs mb-5" onChange={event => setCaraouselTxt3(event.target.value)} type="text" name="c3"/>  
                          </div>
                          <div>
                          <label htmlFor="c4">Caraousel Text 4 :</label> <br />
                          <input value={caraouselTxt4} className="textarea textarea-primary w-full max-w-xs mb-5" onChange={event => setCaraouselTxt4(event.target.value)} type="text" name="c4"/>  
                          </div>
                    </div>
        
        
        
        
                      <input  multiple onChange={handleMultipleImages} className="file-input file-input-bordered w-full  mb-5"  type="file" accept='image/*'  name="" id="" /> <br />
                       <div className='flex justify-between'>
                       <input type='submit' value="UPDATE" className='btn btn-success w-4/12  '/> 
                       <button onClick={()=> setIsUpdate(false)} className='btn btn-error'>Cancel</button>
                       </div>
                      
                    
                  </form>
                  </div>
                  :
                  
                  <div className='mt-20 w-full  grid grid-cols-1 gap-12'>
                        {data.map((d)=>{
                            return (
                                <div key={d.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='w-full rounded-lg p-5 '>
                                    <div className=' pl-5 pr-5 flex'>
                                      <div className=' mt-14'>
                                        <img  className='rounded-lg w-72 h-56 mb-5' src={d.allImages[0]} alt="" /> 
                                        <img className=' rounded-lg w-72 h-56' src={d.allImages[1]} alt="" /> 
                                      </div>
        
                                  <div className='ml-48'>
                                            <h4 className='text-2xl mt-8 font-bold'><strong>Head Text</strong> : {d.headTxt}</h4>
                                            <h4 className='text-lg font-semibold mt-8'><strong>Sub Text:</strong> {d.subTxt}</h4>
                                            <h5 className='text-base font-semibold mt-8'>C1 : {d.ct1}</h5>
                                            <h5 className='text-base font-semibold mt-8'>C2 : {d.ct2}</h5>
                                            <h5 className='text-base font-semibold mt-8'>C3 : {d.ct3}</h5>
                                            <h5 className='text-base font-semibold mt-8'>C4 : {d.ct4}</h5>
                  
                                            <button onClick={() =>getSingleData(d.id,d.headTxt,d.subTxt,d.allImages,d.ct1,d.ct2,d.ct3,d.ct4)} className='btn-sm btn-info btn  mt-5 ' >Edit</button>
                                            {/* <button onClick={() => deleteData(d.id,d.allImages)} className='btn-sm btn btn-error ml-5 mt-5'>Delete</button> */}
                                  </div>
                                    </div>
                                </div>
                              )
                        })}
                    </div>}
        
               {/* show data here  */}
                    
        
            </div>
            }
         </div>
          : <LoginPage/>}
        </>
    );
};

export default edithometexts;
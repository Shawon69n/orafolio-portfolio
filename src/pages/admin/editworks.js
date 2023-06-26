import { addDoc, arrayUnion, collection, deleteDoc, deleteField, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { db, storage } from '../../../firebase.init';
import { v4 } from 'uuid';

const editworks = () => {
    const [projectName,setProjectName] = useState('');
    const [year,setYear] = useState('');
    const [type,setType] = useState('');
    const [role,setRole] = useState('');
    const [desc,setDesc] = useState('');
    const [isUpdate,setIsUpdate] = useState(false);
    const [images,setImages] = useState('');
    const [loading,setLoading] = useState(true)




 //GET DATA HERE
 const [data,setData] = useState([])
 const databaseRef = collection(db,'projects')

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




    const handleMultipleImages = (e) =>{
        const selectedFiles = e.target.files;

  if (selectedFiles.length !== 7) {
    // Display an error message or take appropriate action
    alert("Please select exactly seven images.");
    return;
  }

  for (let i = 0; i < selectedFiles.length; i++) {
    const newImage = selectedFiles[i];
    setImages((prevState) => [...prevState, newImage]);
  }
    }

    //Upload new project
    const handleUpload = async (e) => {
      e.preventDefault();
    
      if (images.length === 0) {
        // Handle the case where no images are selected
        alert('Please select at least one image.');
        return;
      }
    
      try {
        const databaseRef = await addDoc(collection(db, 'projects'), {
          pName: projectName,
          desc: desc,
          year: year,
          role: role,
          type: type,
          Timestamp: serverTimestamp(),
        });
    
        await Promise.all(
          images.map(async (img) => {
            const imgRef = ref(storage, `projectimages/${img.name + v4()}`);
    
            try {
              await uploadBytes(imgRef, img, 'data_url');
              const downloadURL = await getDownloadURL(imgRef);
    
              await updateDoc(doc(db, 'projects', databaseRef.id), {
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
    
      setProjectName('');
      setDesc('');
      setYear('');
      setRole('');
      setType('');
      setImages([]);
    };
    
     //UPDATE DATA HERE 
     const [oldAllImages, setOldAllimages] = useState()
     const [ID,setID] = useState('');
     //getting the single data onclick
     const getSingleData = (id,pName,desc,role,type,year,allImages) => {
       setID(id);
       setProjectName(pName);
       setDesc(desc);
       setRole(role);
       setType(type);
       setYear(year)
       setIsUpdate(true);
       setOldAllimages(allImages)
     }

     

     const updateData = async(e) =>{
      e.preventDefault()
      let fieldToEdit = doc(db, 'projects', ID);
      if(images){
        await oldAllImages.forEach((url) => {
          const path = url.split('%2F')[1].split('?')[0];
          const urlRef = ref(storage, `projectimages/${path}`);
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
            pName: projectName,
            desc: desc,
            year: year,
            role: role,
            type: type,
            Timestamp: serverTimestamp(),
          });
        
          // Add new images to the allImages field
          await Promise.all(
            images.map(async (img) => {
              const imgRef = ref(storage, `projectimages/${img.name + v4()}`);
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
          pName: projectName,
          desc: desc,
          year: year,
          role: role,
          type: type,
          Timestamp: serverTimestamp(),
        });
      }
     }



//delete data
 //DELETE DATA 
 const deleteData = async (id, allImages) => {
        allImages.forEach((url) => {
          const path = url.split('%2F')[1].split('?')[0];
          const urlRef = ref(storage, `projectimages/${path}`);
          deleteObject(urlRef)
        });

        let fieldToEdit = doc(db, 'projects', id);
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
           <div>
        <div className='HomeinputDiv flex justify-center'>
          <form onSubmit={isUpdate? updateData : handleUpload}>
              <h1 className='text-center font-bold pt-5 pb-5 text-2xl'>UPLOAD PROJECT</h1>
              <label htmlFor="project name">Project Name</label> <br />
              <input value={projectName} className="input input-bordered input-primary w-full  mb-5" onChange={event => setProjectName(event.target.value)} type="text" id="" name="project name" required  /> <br />
              <label htmlFor="desc">Description :</label> <br />
              <textarea value={desc} className="textarea textarea-primary w-full  mb-5" onChange={event => setDesc(event.target.value)} type="text" name="desc"/>  <br />
              <label htmlFor="project type">Project Type</label> <br />
              <input value={type} className="input input-bordered input-primary w-full  mb-5" onChange={event => setType(event.target.value)} type="text" id="" name="platform" required  /> <br />
              {/* carousel txt inputs  */}
            <div className='grid grid-cols-2 gap-4'>
                  <div>
                  <label htmlFor="year">Year :</label> <br />
                  <input value={year} className="textarea textarea-primary w-full max-w-xs mb-5" onChange={event => setYear(event.target.value)} type="number" name="year"/>  
                  </div>
                  <div>
                  <label htmlFor="role">Role :</label> <br />
                  <input value={role} className="textarea textarea-primary w-full max-w-xs mb-5" onChange={event => setRole(event.target.value)} type="text" name="role"/>  
                  </div>   
            </div>

             <input  multiple onChange={handleMultipleImages} className="file-input file-input-bordered w-full  mb-5"  type="file" accept='image/*'   name="" id="" /> <br />
              {isUpdate? <input type='submit' value="UPDATE"  className='btn w-full  '/> : 
              <input type='submit' value="UPLOAD"  className='btn w-full  '/>
              }
          </form>
        </div>

         {/* show data here  */}
        <div className='mt-20  grid grid-cols-3 gap-12'>
                {data.map((d)=>{
                    return (
                        <div key={d.id} style={{border:'1px solid black'}} className='w-full p-5 '>
                            <div className=' pl-5 pr-5'>
                                <h4 className='text-xl mt-8 font-bold'>Project Name : {d.pName}</h4>
                                <h4 className='text-sm font-semibold mt-8'>Sub Text: {d.desc}</h4>
                                <h5 className='text-sm font-semibold mt-8'>Role : {d.role}</h5>
                                <h5 className='text-sm font-semibold mt-8'>Type : {d.type}</h5>
                                <h5 className='text-sm font-semibold mt-8'>Year : {d.year}</h5>
                                <div className='flex mt-14'>
                                <img style={{width: '200px', height:'200px'}} src={d.allImages[0]} alt="" /> 
                                </div>
                                <button onClick={() =>getSingleData(d.id,d.pName,d.desc,d.role,d.type,d.year,d.allImages)}  className='btn-sm btn-info mt-5 ' >Update</button>
                                <button onClick={() => deleteData(d.id,d.allImages)} className='btn-sm btn-error mt-5'>Delete</button>
                            </div>
                        </div>
                      )
                })}
            </div>
        </div>
    );
};

export default editworks;
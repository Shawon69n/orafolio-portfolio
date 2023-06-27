import React, { useEffect, useState } from 'react';
import { db, storage } from '../../../firebase.init';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import Link from 'next/link';
import { HiArrowLeft} from 'react-icons/hi';
const editabout = () => {
    const [headTxt,setHeadTxt] = useState('');
    const [subTxt,setSubTxt] = useState('');


    const [expTxt,setExpTxt] = useState('');

    const [imgUrl,setImgUrl] = useState('');

    const [isUpdate, setIsUpdate] = useState(false);
    const [loading,setLoading] = useState(true);
    const databaseRef = collection(db,'aboutpage');

          //GET DATA HERE
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
    
 

    // UPLOADING HERE 
    // const handleUpload = async(e) =>{
    //     e.preventDefault()
    //     if(imgUrl){
    //         const imageRef = ref(storage, `aboutimage/${imgUrl.name}`);
    //         await uploadBytes(imageRef, imgUrl).then(() =>{
    //           getDownloadURL(imageRef).then((url) =>{  
    //             addDoc(databaseRef,{
    //               headTxt,
    //               subTxt,
    //               url,
    //               expTxt,
    //               ExpFields: expFields,
    //               Timestamp : serverTimestamp()
    //             })
    //             .then(() => {
    //               alert('Data added')
    //               setHeadTxt('')
    //               setSubTxt('')
    //               setImgUrl('')
    //               setExpFields([{ year: '', platform: '' },
    //               { year: '', platform: '' },
    //               { year: '', platform: '' },
    //               { year: '', platform: '' }])
    //             })
    //             .catch((err) =>{
    //               console.error
    //             }) 
    //           })
    //         })
      
    //       }
    // }


    const [expFields, setExpFields] = useState([
        { year: '', platform: '' },
        { year: '', platform: '' },
        { year: '', platform: '' },
        { year: '', platform: '' }
      ]);
      
      const handleExpFieldChange = (index, field, value) => {
        const updatedExpFields = [...expFields];
        updatedExpFields[index][field] = value;
        setExpFields(updatedExpFields);
      };


      //UPDATE DATA HERE
       const [deleteUrl,setDeleteUrl] = useState('');
       const [ID,setID] = useState('');
       //getting the single data onclick
       const getSingleData = (id,headTxt,subTxt,url,ExpFields,expTxt) => {
         setID(id);
         setHeadTxt(headTxt);
         setSubTxt(subTxt);
         setDeleteUrl(url);
         setExpFields(ExpFields)
         setExpTxt(expTxt)
         setIsUpdate(true);
       }

       
       const updateData = async(e) =>{
        let fieldToEdit = doc(db, 'aboutpage', ID);
        e.preventDefault() 
        if(imgUrl){
          const path = deleteUrl.split('%2F')[1].split('?')[0];
          const urlRef = ref(storage, `aboutimage/${path}`);
          deleteObject(urlRef)
          .then(() =>{
            const imageRef = ref(storage, `aboutimage/${imgUrl.name}`);
             uploadBytes(imageRef, imgUrl).then(() =>{
              getDownloadURL(imageRef).then((url) =>{  
                updateDoc(fieldToEdit, {
                  headTxt: headTxt,
                  subTxt: subTxt,
                  expTxt: expTxt,
                  ExpFields: expFields,
                  url: url,
                  Timestamp: serverTimestamp(),
                })
                .then(() => {
                  alert('Data Updated')
                  getData()
                  setHeadTxt('')
                  setSubTxt('')
                  setImgUrl('')
                  setExpFields([
                  { year: '', platform: '' },
                  { year: '', platform: '' },
                  { year: '', platform: '' },
                  { year: '', platform: '' }])
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
            headTxt: headTxt,
            subTxt: subTxt,
            expTxt: expTxt,
            ExpFields: expFields,
            Timestamp: serverTimestamp(),
          });

          alert('Data Updated')
                  getData()
                  setHeadTxt('')
                  setSubTxt('')
                  setExpFields([
                  { year: '', platform: '' },
                  { year: '', platform: '' },
                  { year: '', platform: '' },
                  { year: '', platform: '' }])
                  setIsUpdate(false)



        }
        
      }


    return (
        <div className='AboutContainer'>
          {isUpdate? <form onSubmit={isUpdate && updateData } className='aboutFormDiv' >
        <h1 className='text-center font-bold pt-5 pb-5 text-2xl'>UPLOAD HOME TEXT & PHOTO</h1>
        <div className='flex justify-between'>
              <div className='w-3/6'>
                <label htmlFor="platfrom">Heading Text :</label> <br />
                <input value={headTxt} className="input input-bordered input-primary w-full  mb-5" onChange={event => setHeadTxt(event.target.value)} type="text" id="" name="platform" required  /> <br />
                <label htmlFor="desc">Sub Heading Text :</label> <br />
                <input value={subTxt} className="textarea textarea-primary w-full  mb-5" onChange={event => setSubTxt(event.target.value)} type="text" name="desc"/>  <br />
                
                {/* experience txt inputs  */}        
                    <div>
                    <label htmlFor="c4">Experience :</label> <br />
                    <textarea value={expTxt} className="textarea textarea-primary w-full mb-5" onChange={event => setExpTxt(event.target.value)} type="text" name="c4"/>  
                    </div>
              </div>
               <div>
                     {/* exp fields text input multiple */}
                {expFields.map((expField, index) => (
                <div key={index}>
                        <h1>Expfield : {index +1}</h1>
                        <div className='flex'>
                        <input
                            className="textarea textarea-primary w-full max-w-xs mb-5"
                            type="number"
                            value={expField.year}
                            onChange={(e) => handleExpFieldChange(index, 'year', e.target.value)}
                            placeholder="Year"
                            />
                            <input
                            className="textarea textarea-primary w-full ml-3 max-w-xs mb-5"
                            type="text"
                            value={expField.platform}
                            onChange={(e) => handleExpFieldChange(index, 'platform', e.target.value)}
                            placeholder="Platform"
                            />
                        </div>
                </div>
                ))}
               </div>
        </div>




              <input  className="file-input file-input-bordered w-full   mb-5" onChange={(e) => { setImgUrl(e.target.files[0]) }}  type="file" accept='image/*'  name="" id="" /> <br />
              <div className='flex justify-between'>
              <input type='submit' value="UPDATE"  className='btn w-4/12  '/> 
              <button onClick={()=> setIsUpdate(false)} className='btn btn-error'>Cancel</button>
              </div>
      </form> : 
      

      <div className='mt-20 '>
        <Link data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" href="/admin" className={` flex items-center mt-6`}> <span className='arrow'><HiArrowLeft/></span> BACK</Link>
                       {data.map((d)=>{
                          return(
                            <div key={d.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className=' flex rounded-lg justify-between p-5 '>
                            
                            <div className='w-2/4 mt-14'>
                             <img className='w-full h-96' src={d.url} alt="" />  
                            </div>

                            <div className='w-2/4 mt-10 ml-10'>
                               <h4 className='text-xl mt-8 font-bold'>Head Text : <br /> {d.headTxt}</h4>
                               <h4 className='text-sm font-semibold mt-8'>Sub Text: <br /> {d.subTxt}</h4>
                               <button onClick={() =>getSingleData(d.id,d.headTxt,d.subTxt,d.url,d.ExpFields,d.expTxt)} className='btn btn-active btn-accent mt-5 ' >Edit</button>
                            </div>
                             
                       
                        </div>
                          )
                       })}
            </div>}
          
        
   

        </div>
    );
};

export default editabout;
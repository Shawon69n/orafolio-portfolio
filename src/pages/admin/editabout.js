import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../../../firebase.init';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import Link from 'next/link';
import { HiArrowLeft} from 'react-icons/hi';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginPage from '@/Authentication/LoginPage';
import AdminPageLayout from '@/AdminComponent/AdminPageLayout';
const editabout = () => {
    const [headTxt,setHeadTxt] = useState('');
    const [subTxt,setSubTxt] = useState('');


    const [expTxt,setExpTxt] = useState('');

    const [imgUrl,setImgUrl] = useState('');


    const [facebook,setFacebook] = useState('');
    const [insta,setInsta] = useState('');
    const [github,setGithub] = useState('');
    const [linkedin,setLinkedin] = useState('');

    const [isUpdate, setIsUpdate] = useState(false);
    const [loading,setLoading] = useState(true);
    const databaseRef = collection(db,'aboutpage');

    const [user, Authloading, error] = useAuthState(auth);


    // errors 
    const [expErr,setExpErr] = useState(false);
    const [headtxtErr,setHeadTxtErr] = useState(false);



    const handleExpChange = () => {
     
     if (expTxt.length >= 200 && expTxt.length <= 250) {
       setExpErr(false);
     } else {
       setExpErr(true);
     }
   };



   


   const handleHeadTxtChange = () => {
   
     if (headTxt.length >= 180 && headTxt.length <= 220) {
       setHeadTxtErr(false)
     } else {
       setHeadTxtErr(true)
     }
   };
   
   


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
       const getSingleData = (id,headTxt,subTxt,url,ExpFields,expTxt,facebook,instagram,github,linkedin) => {
         setID(id);
         setHeadTxt(headTxt);
         setSubTxt(subTxt);
         setDeleteUrl(url);
         setExpFields(ExpFields)
         setExpTxt(expTxt);
         setFacebook(facebook);
         setInsta(instagram);
         setGithub(github);
         setLinkedin(linkedin);
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
                  facebook: facebook,
                  instagram: insta,
                  github: github,
                  linkedin: linkedin,
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
            facebook: facebook,
            instagram: insta,
            github: github,
            linkedin: linkedin,
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
        <AdminPageLayout>
          {user? <div className='AboutContainer'>
          {isUpdate? <form onSubmit={isUpdate && updateData } className='aboutFormDiv' >
        <h1 className='text-center font-bold pt-5 pb-5 text-2xl'>UPLOAD HOME TEXT & PHOTO</h1>
        <div className='flex justify-evenly'>
              <div className='w-3/6'>
                <label htmlFor="platfrom">Heading Text :</label> <br />
                <input value={headTxt} className="input input-bordered input-primary w-full  mb-5" onBlur={handleHeadTxtChange } onChange={event => setHeadTxt(event.target.value)} type="text" id="" name="platform" required  /> <br />
                {headtxtErr? <h1 className='text-red-600 pb-2 text-sm'>Experience length should be under 180-220 letters</h1> : ''}
                <label htmlFor="desc">Sub Heading Text :</label> <br />
                <input value={subTxt} className="textarea textarea-primary w-full  mb-5" onChange={event => setSubTxt(event.target.value)} type="text" name="desc"/>  <br />
                
                {/* experience txt inputs  */}        
                    <div>
                    <label htmlFor="c4">Experience :</label> <br />
                    <textarea value={expTxt} className="textarea textarea-primary w-full mb-5" onBlur={handleExpChange} onChange={event => setExpTxt(event.target.value)} type="text" name="c4"/>  
                    {expErr? <h1 className='text-red-600 pb-2 text-sm'>Experience length should be under 200-250 letters</h1> : ''}
                    </div>
              </div>

              <div className='pl-5 pr-5'>
                <label htmlFor="facebook">Facebook:</label> <br />
                <input value={facebook} className="textarea textarea-primary w-full  mb-5" onChange={event => setFacebook(event.target.value)} type="text" name="facebook"/>  <br />
                <label htmlFor="Instagram">Instagram:</label> <br />
                <input value={insta} className="textarea textarea-primary w-full  mb-5" onChange={event => setInsta(event.target.value)} type="text" name="facebook"/>  <br />
                <label htmlFor="whatsapp">Github:</label> <br />
                <input value={github} className="textarea textarea-primary w-full  mb-5" onChange={event => setGithub(event.target.value)} type="text" name="facebook"/>  <br />
                <label htmlFor="desc">Linkedin:</label> <br />
                <input value={linkedin} className="textarea textarea-primary w-full  mb-5" onChange={event => setLinkedin(event.target.value)} type="text" name="facebook"/>  <br />
                
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
                            <div key={d.id}  className=' flex rounded-lg justify-between p-5 '>
                            
                            <div className='w-2/4 mt-14'>
                             <img className='w-4/5 h-96 rounded' src={d.url} alt="" />  
                            </div>

                            <div className='w-2/4 mt-10 ml-10'>
                               <h4 className='text-xl mt-8 font-bold'>Head Text : <br /> {d.headTxt}</h4>
                               <h4 className='text-xl font-semibold mt-8'>Sub Text: <br /> {d.subTxt}</h4>
                               <button onClick={() =>getSingleData(d.id,d.headTxt,d.subTxt,d.url,d.ExpFields,d.expTxt,d.facebook,d.instagram,d.github,d.linkedin)} className='btn btn-active btn-accent mt-5 ' >Edit</button>
                            </div>
                             
                       
                        </div>
                          )
                       })}
            </div>}
          
        
   

        </div>
        : 
        <LoginPage/>  
      }
        </AdminPageLayout>
    );
};

export default editabout;
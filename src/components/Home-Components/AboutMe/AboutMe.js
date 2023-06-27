import React, { useEffect, useState } from 'react';
import { db } from '../../../../firebase.init';
import { collection, getDocs } from 'firebase/firestore';

const AboutMe = () => {
      //GET DATA HERE
 const [data,setData] = useState([])
 const databaseRef = collection(db,'aboutpage')

 const [loading,setLoading] = useState(true)
 useEffect(() =>{
     getData()
   },[])

   const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setLoading(false);
      if (response.docs.length > 0) {
        setData(response.docs[0].data());
      }
    });
  };

  
  
    return (
        <div className='lg:flex lg:justify-between mt-32 mb-32'>
            <div >
                <h1 className='lg:text-xl text-center text-gray-400 tracking-widest'>ABOUT ME</h1>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className="avatar mt-10">
                    <div className="lg:w-60 w-96 ml-28 rounded-full">
                        <img src={data.url} />
                    </div>
                    </div>
                    </div>
                  <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="2800" className='font-semibold lg:ml-96 mt-20 text-3xl tracking-wider '>{data.headTxt}</p>  
           
        </div>
    );
};

export default AboutMe;
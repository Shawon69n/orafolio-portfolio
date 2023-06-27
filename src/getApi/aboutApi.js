// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../../firebase.init";


// //GETTING DATA HERE
// const [data,setData] = useState([])
// const [loading,setLoading] = useState(true)
// const databaseRef = collection(db,'aboutpage');
// const getAboutData = async() => {
//     useEffect(() =>{
//             getDocs(databaseRef).then((response) => {
//             setLoading(false);
//             if (response.docs.length > 0) {
//               setData(response.docs[0].data());
//             }
//           });
//      },[])
//      return[data,loading]
//   }

//   export default getAboutData;
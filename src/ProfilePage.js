import React, { Component, useEffect, useState } from 'react'
import Sidebar from './sidebar'
import Profiles from './profile'
import axios from 'axios';
import HeaderInner from './headerinner';

const Profile_Page = ()=>{

//     const [data, setdata]= useState('')


//   // Retrieve the stored data from local storage
// const storedUserId = localStorage.getItem('userid');






// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Log the retrieved data to the console
//         console.log('Retrieved data from local storage:', storedUserId);
  
//         const response = await axios.get('http://localhost:5000/getuserdetails', {
//           params: {
//             id: storedUserId
//           }
//         });
  
//         // Set data after successful retrieval
//         setdata(response.data[0]);
//         console.log(response.data[0]);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     fetchData();
//   }, []); // Empty dependency array to run once on mount
  





return(


    <div className='Profile_Page'>
        <HeaderInner />
        <Sidebar />

        <Profiles />
    </div>
)
}


export default Profile_Page
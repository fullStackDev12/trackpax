import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


import Header from './header';
 import heroimg from './img/hero-img.png'
 import TrackPax from './img/Why TrackPax.png'
 import journey from './img/journey.png'
 import logo from './img/logo.png'
 import salider from './img/salider.png'
 import yes from './img/yes.png'

 import Profile from './img/Profile.png'
 import email from './img/email.png'
 import call from './img/call.png'
import { baseurl } from './baseurl';


 



const Profiles = () => {

    const [data, setdata]= useState('')


    // Retrieve the stored data from local storage
  const storedUserId = localStorage.getItem('userid');
  
  const [pic,setpic]=useState()
  
  
  
  
  useEffect(() => {
      const fetchData = async () => {
        try {
          // Log the retrieved data to the console
          console.log('Retrieved data from local storage:', storedUserId);
    
          const response = await axios.get(`${baseurl}/getuserdetails`, {
            params: {
              id: storedUserId.slice(1, -1)
              // id: storedUserId
            }
          });
    
          // Set data after successful retrieval
          setdata(response.data[0]);

          if(response.data[0].picture=null)
            {
              setpic(Profile)
            }
            else{
              setpic(response.data[0].picture)
            }

          console.log(response.data[0]);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchData();
    }, []); // Empty dependency array to run once on mount
    

   


  
  
  
  







    return (


        <div>
                {/* <Header /> */}

                <section class="Profile">
        <div class="main-Profile">
            <h2>Profile</h2>


            <div class="Profile-box">

            <img src={pic} alt="" />

                <h2>{data.name}</h2>

                <span>
                <img src={email} alt="" />
                    <p>{data.email}</p>
                </span>

                <span>
                <img src={call} alt="" />
                    <p>(415) 555‑0132</p>
                </span>
            </div>
        </div>
    </section>



        </div>
    )

}

export default Profiles
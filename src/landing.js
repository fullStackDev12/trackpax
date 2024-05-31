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
import { baseurl } from './baseurl';
import Popup4 from './popup4';

 



const Landing = () => {

    const [show,setshow]=useState(false)
    const [r,setr]=useState('')

    let data='';

    const [tracking_number,settracking_number]=useState('')
    const demo = async () => {

        const formData={
            tracking_number:tracking_number,
             
        }
        try {
          
    
          // Make a POST request using axios
          const response = await axios.post(`${baseurl}/trackpackage`, formData);
          console.log(tracking_number,"track")
          console.log(response.data,"track")

          data= response.data;

          setr(response.data.ShipmentData)

          setshow(true)
            
         
  
        
          // Set the response data in state
         
        } catch (error) {
          // Handle errors
          console.error('Error:', error.message);
          // Display an error message to the user
          alert('An error occurred. Please try again later.');
        }
      };
  
  


 

   


    return (


        <div>
                <Header />

                
                <section class="Hero">
        <div class="contanir">
            <div class="main-hero">
                <div class="hero-tital">
                    <h1>All-in-one Shipping <span>Tracking App</span></h1>
                    <p>Elevate Your Shipping Experience with Trackpax Cutting-Edge Shipping Tracking Software</p>
                    <div class="hero-search-box">
                        <input id="inp" type="search" placeholder="Enter tracking number..."  required onChange={(e)=>(settracking_number(e.target.value))}/>
                        <button onClick={demo}>Track Package</button>
                    </div>
                </div>
                <div class="hero-img">
                <img src={heroimg} alt="" />
                </div>
            </div>
        </div>
    </section>
      

    <section class="TrackPax">
        <div class="contanir">
            <div class="main-TrackPax">
                <div class="TrackPax-headng">
                    <h2>WhyTrack<span>Pax?</span></h2>
                </div>
                <div class="TrackPax-img">
                <img src={TrackPax} alt="" />
                </div>
                <div class="TrackPax-tital">
                    <div class="TrackPax-box">
                        <div class="TrackPax-list">
                        <img src={yes} alt="" />
                            <h3>Real-Time Tracking</h3>
                        </div>
                        <p>Keep an eye on your shipments in real time, from pickup to delivery. Say goodbye to anxious waiting and give your customers the peace of mind they deserve.</p>
    
                    </div>
    
    
                    <div class="TrackPax-box">
                        <div class="TrackPax-list">
                                     <img src={yes} alt="" />
                            <h3>Location Accuracy</h3>
                        </div>
                        <p>Our advanced GPS technology provides pinpoint accuracy, allowing you to monitor your packages' exact locations, even in the most remote areas.</p>
    
                    </div>
    
    
                    <div class="TrackPax-box">
                        <div class="TrackPax-list">
                                     <img src={yes} alt="" />
                            <h3>Instant Notifications</h3>
                        </div>
                        <p>Our advanced GPS technology provides pinpoint accuracy, allowing you to monitor your packages' exact locations, even in the most remote areas.</p>
    
                    </div>
    
    
    
                    <div class="TrackPax-box">
                        <div class="TrackPax-list">
                                     <img src={yes} alt="" />
                            <h3>Analytics and Insights</h3>
                        </div>
                        <p>Gain valuable insights into your shipping process with our comprehensive analytics. Identify trends, optimize routes, and enhance your overall shipping strategy.</p>
    
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="support">
        <div class="contanir">
            <div class="main-support">
                <div class="support-tital">
                    <h2>We support <span>1122</span> carriers worldwide
                    </h2>
                </div>

                <div class="support-imger">
                <img src={salider} alt="" />
                </div>
            </div>
        </div>
    </section>


    <section class="Optimize">
        <div class="contanir">
            <div class="main-Optimize">
                <div class="Optimize-tital">
                    <h2>Optimize your customer post-purchase journey</h2>
                    <p>Whether you want to get auto-update shipment status or create sales opportunities, we have all the tools you need.
                    </p>
                    <a href="#inp"><button>Track Package</button></a>
                </div>

                <div class="Optimize-imger">
                <img src={journey} alt="" />
                </div>
            </div>
        </div>
    </section>



    <footer>
            <div class="main-footer">
                <div class="footer-1">
                    <div class="footer-logo">
                    <img src={logo} alt="" />
                    </div>
                    <div class="footer-ul-list">
                        <ul>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-2">
                    Copyright © 2023 Trackpax, Inc. All rights reserved.

                </div>
            </div>
    </footer>



        {show &&
        
        // <div className='ts'> 





        // <section class="sidebar-page-1 kasa-ho">
        
        // <div class="main-page-1 kai-hal-ha">
         
        
            
        
        
        //     <div class="bound-box">
        //         <div class="bound-list-1 gogog">
        //             <p>In-bound list packages</p>

        //             <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setshow(false)}><path d="M1 1L16 16" stroke="white" stroke-width="2" stroke-linecap="round"></path><path d="M16 1L1 16" stroke="white" stroke-width="2" stroke-linecap="round"></path></svg>
        //         </div>
        
        
        // <div class="scrllo">
        // <table class="bound-table">
        //             <tr>
        //                 <th>EPackage ID</th>
        //                 <th>Title</th>
        //                 <th>Status</th>
        //                 {/* <th>Edit</th> */}
                        
        //             </tr>
                  
                    
        //       <tr>
        //         <td>{r.tracking_number}</td>
        //         <td>{r.package_title}</td>
        //         <td>{r.status !=null? r.status:'pending'}</td>
        //         {/* Add more table cells for other fields if needed */}
        //       </tr>
        
        
        
        
        //           {/* <tr>
        //             <td>1ZVX157TSS</td>
        //             <td>Package title #223</td>
        //             <td>Out for delivery22
        //                 Today</td>
        //             <td><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M0 13.4588V17H3.54118L13.9853 6.55589L10.4441 3.01472L0 13.4588ZM16.7238 3.81739C17.0921 3.4491 17.0921 2.85419 16.7238 2.4859L14.5141 0.276212C14.1458 -0.0920705 13.5509 -0.0920705 13.1826 0.276212L11.4545 2.0043L14.9957 5.54548L16.7238 3.81739Z" fill="black"/>
        //                 </svg>
        //                 </td>
                   
        //           </tr> */}
        
        
        // {/*           
        //           <tr>
        //             <td>1ZVX15730318094099</td>
        //             <td>Package title #1</td>
        //             <td>Out for delivery
        //                 Today</td>
        //             <td><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M0 13.4588V17H3.54118L13.9853 6.55589L10.4441 3.01472L0 13.4588ZM16.7238 3.81739C17.0921 3.4491 17.0921 2.85419 16.7238 2.4859L14.5141 0.276212C14.1458 -0.0920705 13.5509 -0.0920705 13.1826 0.276212L11.4545 2.0043L14.9957 5.54548L16.7238 3.81739Z" fill="black"/>
        //                 </svg>
        //                 </td>
                   
        //           </tr>
        
        
        //           <tr>
        //             <td>1ZVX15730318094099</td>
        //             <td>Package title #1</td>
        //             <td>Out for delivery
        //                 Today</td>
        //             <td><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M0 13.4588V17H3.54118L13.9853 6.55589L10.4441 3.01472L0 13.4588ZM16.7238 3.81739C17.0921 3.4491 17.0921 2.85419 16.7238 2.4859L14.5141 0.276212C14.1458 -0.0920705 13.5509 -0.0920705 13.1826 0.276212L11.4545 2.0043L14.9957 5.54548L16.7238 3.81739Z" fill="black"/>
        //                 </svg>
        //                 </td>
                   
        //           </tr>
        
        //           <tr>
        //             <td>1ZVX15730318094099</td>
        //             <td>Package title #1</td>
        //             <td>Out for delivery
        //                 Today</td>
        //             <td><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M0 13.4588V17H3.54118L13.9853 6.55589L10.4441 3.01472L0 13.4588ZM16.7238 3.81739C17.0921 3.4491 17.0921 2.85419 16.7238 2.4859L14.5141 0.276212C14.1458 -0.0920705 13.5509 -0.0920705 13.1826 0.276212L11.4545 2.0043L14.9957 5.54548L16.7238 3.81739Z" fill="black"/>
        //                 </svg>
        //                 </td>
                   
        //           </tr>
        
        
        //           <tr>
        //             <td>1ZVX15730318094099</td>
        //             <td>Package title #1</td>
        //             <td>Out for delivery
        //                 Today</td>
        //             <td><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M0 13.4588V17H3.54118L13.9853 6.55589L10.4441 3.01472L0 13.4588ZM16.7238 3.81739C17.0921 3.4491 17.0921 2.85419 16.7238 2.4859L14.5141 0.276212C14.1458 -0.0920705 13.5509 -0.0920705 13.1826 0.276212L11.4545 2.0043L14.9957 5.54548L16.7238 3.81739Z" fill="black"/>
        //                 </svg>
        //                 </td>
                   
        //           </tr>
        
        
        //           <tr>
        //             <td>1ZVX15730318094099</td>
        //             <td>Package title #1</td>
        //             <td>Out for delivery
        //                 Today</td>
        //             <td><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M0 13.4588V17H3.54118L13.9853 6.55589L10.4441 3.01472L0 13.4588ZM16.7238 3.81739C17.0921 3.4491 17.0921 2.85419 16.7238 2.4859L14.5141 0.276212C14.1458 -0.0920705 13.5509 -0.0920705 13.1826 0.276212L11.4545 2.0043L14.9957 5.54548L16.7238 3.81739Z" fill="black"/>
        //                 </svg>
        //                 </td>
                   
        //           </tr>
        
        
        //           <tr>
        //             <td>1ZVX15730318094099</td>
        //             <td>Package title #1</td>
        //             <td>Out for delivery
        //                 Today</td>
        //             <td><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M0 13.4588V17H3.54118L13.9853 6.55589L10.4441 3.01472L0 13.4588ZM16.7238 3.81739C17.0921 3.4491 17.0921 2.85419 16.7238 2.4859L14.5141 0.276212C14.1458 -0.0920705 13.5509 -0.0920705 13.1826 0.276212L11.4545 2.0043L14.9957 5.54548L16.7238 3.81739Z" fill="black"/>
        //                 </svg>
        //                 </td>
                   
        //           </tr> */}
               
        //         </table>
        // </div>
                                
        //     </div>
        // </div>
        // </section>
        
        
     
        
       
        
        
        
        
        
              
        
        
        
        
         
        
        
        
        
        
        //         </div>
        <div className='tracklist'>
            <Popup4 Get_Single_Parcel_DetailsArr={r}/>
            </div>
        
        }





        </div>
    )

}

export default Landing
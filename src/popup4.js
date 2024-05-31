// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {  useNavigate } from 'react-router-dom';


// import Header from './header';
//  import heroimg from './img/hero-img.png'
//  import TrackPax from './img/Why TrackPax.png'
//  import journey from './img/journey.png'
//  import logo from './img/logo.png'
//  import salider from './img/salider.png'
//  import yes from './img/yes.png'

//  import Profile from './img/Profile.png'
//  import email from './img/email.png'
//  import call from './img/call.png'


 



// const Popup4 = ({Get_Single_Parcel_DetailsArr}) => {

//    console.log(Get_Single_Parcel_DetailsArr,"POP UP 4")

//    const [Data,setData]=useState([])



//    const datetimeString = "2023-01-26T14:14:32.000Z";

// // Split the datetime string into date and time parts
// const [datePart, timePart] = datetimeString.split("T");

// // Create Date objects for date and time parts
// const dateObject = new Date(datePart);
// const timeObject = new Date(`1970-01-01T${timePart}`);

// // Format the date and time parts
// const formattedDate = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
// const formattedTime = timeObject.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' });

// console.log("Formatted Date:", formattedDate);
// console.log("Formatted Time:", formattedTime);

   

//     return (


//         <div>
//                 {/* <Header /> */}



//                 <div class="popup-2">
//         <form action="">
//             <div class="form-head">
//                 <p>Package Status</p>
//                 <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M1 1L16 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
//                     <path d="M16 1L1 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
//                     </svg>
                    
                    
//             </div>

//             <div class="form-bodyss">
//                 <table>
//                     <tr>
//                         <th>Date</th>
                     
                    
//                         <th>Status</th>
//                         <th class="spacing">Location</th>
//                         <th>Time</th>
//                     </tr>


//                     {Get_Single_Parcel_DetailsArr.map(item => (
                        
//       <tr key={item.id}>
//         <td>{item.date}</td>
//         <td>{item.status}</td>
//         <td>{item.location}</td>
//         <td>{item.date}</td>
        
      
//         {/* Add more table cells for other fields if needed */}
//       </tr>
//     ))}




//                   {/* <tr>
//                     <td>31-07-23</td>
//                     <td>Delivered</td>
//                     <td class="spacing">Grand junction, CO
//                         81505</td>
//                     <td>08:45:07</td>
//                   </tr>
//                   <tr>
//                     <td>31-07-23</td>
//                     <td>Out for delivery
//                         Today</td>
//                     <td class="spacing">Grand junction, CO
//                         United states</td>
//                     <td>08:59:27</td>
//                   </tr>
//                   <tr>
//                     <td>31-07-23</td>
//                     <td>Out for delivery
//                         Today</td>
//                     <td class="spacing">Grand junction, CO
//                         United states</td>
//                     <td>08:59:27</td>
//                   </tr>
//                   <tr>
//                     <td>31-07-23</td>
//                     <td>Out for delivery
//                         Today</td>
//                     <td class="spacing">Grand junction, CO
//                         United states</td>
//                     <td>08:59:27</td>
//                   </tr>
//                   <tr>
//                     <td>31-07-23</td>
//                     <td>Out for delivery
//                         Today</td>
//                     <td class="spacing">Grand junction, CO
//                         United states</td>
//                     <td>08:59:27</td>
//                   </tr>
//                   <tr>
//                     <td>31-07-23</td>
//                     <td>Out for delivery
//                         Today</td>
//                     <td class="spacing">Grand junction, CO
//                         United states</td>
//                     <td>08:59:27</td>
//                   </tr>
//                   <tr>
//                     <td>31-07-23</td>
//                     <td>Out for delivery
//                         Today</td>
//                     <td class="spacing">Grand junction, CO
//                         United states</td>
//                     <td>08:59:27</td>
//                   </tr> */}
              
             
//                 </table>
//             </div>
//         </form>
//     </div>





//         </div>
//     )

// }

// export default Popup4








import React, { useState } from 'react';

const Popup4 = ({ Get_Single_Parcel_DetailsArr }) => {

  const formatDateAndTime = (datetimeString) => {
    // Split the datetime string into date and time parts
    const [datePart, timePart] = datetimeString.split("T");

    // Create Date objects for date and time parts
    const dateObject = new Date(datePart);
    const timeObject = new Date(`1970-01-01T${timePart}`);

    // Format the date and time parts
    const formattedDate = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = timeObject.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' });

    return { formattedDate, formattedTime };
  }


  const [show,setshow]=useState(true)

  const Click_Cross=()=>{

    setshow(false)
    window.location.reload()

  }




  return (
        <div>
    {
        show&&
    <div className="popup-2">
      <form action="">
        <div className="form-head">
          <p>Package Status</p>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={Click_Cross}>
            <path d="M1 1L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 1L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="form-bodyss">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th className="spacing">Location</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {Get_Single_Parcel_DetailsArr.map(item => (
                <tr key={item.id}>
                  <td>{formatDateAndTime(item.date).formattedDate}</td>
                  <td>{item.status}</td>
                  <td>{item.location}</td>
                  <td>{formatDateAndTime(item.date).formattedTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
    }
    </div>
  );
}

export default Popup4;

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


 



const Popup2 = () => {

    const [show,setshow]=useState(true)

    const toggle=()=>{


        setshow(false)
    }

    
    return (


        <div>
                {/* <Header /> */}

                
    <div class="popup-2">
        <form action="">
            <div class="form-head">
                <p>Add new package</p>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L16 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M16 1L1 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    
                    
            </div>

            <div class="form-body">
                <div class="input-group">
                    <label for="">Enter package tracking number</label>
                    <input type="text"/>
                </div>

                <div class="input-group">
                    <label for="">Title for your package</label>
                    <input type="text"/>
                </div>

                <div class="input-group">
                    <label for="">Select List</label>
                    <select name="hello" id="hello">
                        <option value="volvo">Default (inbound) List</option>
                        <option value="saab">Default (inbound) List1</option>
                        <option value="opel">Default (inbound) List2</option>
                        <option value="audi">Default (inbound) List3</option>
                      </select>
                </div>



                <div class="form-btn-box">
                    <button>Submit Now</button>
                    <button class="Cancel">Cancel</button>
                </div>
            </div>
        </form>
    </div>




        </div>
    )

}

export default Popup2
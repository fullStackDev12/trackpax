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


 



const Popup3 = () => {

   


    return (


        <div>
                {/* <Header /> */}

                
    <div class="popup-2">
        <form action="">
            <div class="form-head">
                <p>Create new List</p>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L16 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M16 1L1 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    
                    
            </div>

            <div class="form-body">
                <div class="input-group">
                    <label for="">Give your list a name</label>
                    <input type="text"/>
                </div>

                <div class="input-group">
                    <label for="">Select List</label>
                    <select name="hello" id="hello">
                        <option value="volvo">in-bound (track incoming package)</option>
                        <option value="saab">in-bound (track incoming package)</option>
                        <option value="opel">in-bound (track incoming package)</option>
                        <option value="audi">in-bound (track incoming package)3</option>
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

export default Popup3
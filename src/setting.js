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


 



const Setting = () => {

   


    return (


        <div>
                {/* <Header /> */}


                <section class="Settings">
        <div class="main-Settings">
            <h2>Settings</h2>


            <div class="Settings-box">
                <div class="settings-list">
                    <p>Status</p>

                    <button>
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27" cy="27" r="27" fill="#4FDEA4"/>
                            </svg>
                            
                        Active
                    </button>
                </div>

                <div class="settings-list">
                    <p>Valid till</p>

         

                    <p>
                        07/25/2023
                    </p>
                </div>


                <div class="settings-list-2">
                    <p>Don't want to be our member anymore :</p>
                    <button>Deactivate account</button>
                </div>
            </div>
        </div>
    </section>



        </div>
    )

}

export default Setting
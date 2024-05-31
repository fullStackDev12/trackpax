import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "./header";
import heroimg from "./img/hero-img.png";
import TrackPax from "./img/Why TrackPax.png";
import journey from "./img/journey.png";
import logo from "./img/logo.png";
import salider from "./img/salider.png";
import yes from "./img/yes.png";

import Profile from "./img/Profile.png";
import email from "./img/email.png";
import call from "./img/call.png";

import hideshow from "./img/hideshow.png";
import { baseurl } from "./baseurl";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [show, setshow] = useState(false);
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const navigate = useNavigate()

  const toggle = () => {
    setshow(true);
  };

  const toggle2 = () => {
    setshow(false);
  };


  const Login=(e)=>{

    e.preventDefault()

    const formData={

      
      email:email,
      password:password
    }




    axios.post(`${baseurl}/login`,formData)
    .then((res)=>{
      console.log(res.data.userRecord.sub)

      localStorage.setItem("userid", '"'+res.data.userRecord.sub+'"');

      navigate('/dashboard')
    })
    .catch((error)=>{
      console.log(error)

      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    })





  }
  

  return (
    <div>
    
    <ToastContainer/>

      <button onClick={toggle}>
        Login
      </button>

      {
        show && 
      <div class="login">
        <form onSubmit={Login}>
          <div class="form-head">
            <p>Login</p>
            <svg onClick={toggle2}
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L16 16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16 1L1 16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div class="form-body">
            <div class="input-group">
              <label for="">
                Email <span>*</span>
              </label>
              <input placeholder="Hello@example.com" type="text"  onChange={(e)=>setemail(e.target.value)}/>
            </div>

            <div class="input-group">
              <label for="">
                Password <span>*</span>
              </label>
              <input placeholder="Your Password" type="text" onChange={(e)=>setpassword(e.target.value)} />
              <div class="input-img">
                <img src={hideshow} alt="" />
              </div>
              {/* <label for="">Forgot Password?</label> */}
            </div>

            <div class="form-btn-box">
              <button>Login</button>
 
            </div>
          </div>
        </form>
      </div>
      }

    </div>
  );
};

export default Login;

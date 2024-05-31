import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import logo1 from "./img/1logo.png";
import { baseurl } from "./baseurl";

import { GoogleLogin } from "@react-oauth/google";
import SignUp from "./signup";
import Login from "./login";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile or not
  const [showsignup, setshowsignup] = useState(true);
  const [showlogin, setshowlogin] = useState(false);
  const [showdashboard,setdashboard]= useState(false)

  const [data, setData] = useState({
    sub: null,
    user_name: null,
    email: null,
    email_verified: null,
    picture: null,
  });

  const [g_obj, setobj] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is less than or equal to 768px
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //

  const [googleLoaded, setGoogleLoaded] = useState(false);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userobj = jwtDecode(response.credential);
    console.log(userobj, "TS");
    setobj(userobj);

    setData({ ...data, sub: g_obj.sub });
    setData({ ...data, email: g_obj.email });
    setData({ ...data, email_verified: g_obj.email_verified });
    setData({ ...data, picture: g_obj.picture });
    setData({ ...data, user_name: g_obj.name });

    if (userobj) {
      console.log("true");
    } else {
      console.log("false");
      console.log(g_obj);
    }
  }

  useEffect(() => {
    /* global google */
    if (typeof google !== "undefined" && google.accounts) {
      google.accounts.id.initialize({
        client_id:
          "908977573799-5d32tvsej91ipptrunk5orilqn3l02qk.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });
      setGoogleLoaded(true);
    }
  }, []);

  const handleCustomSignIn = () => {
    if (googleLoaded) {
      google.accounts.id.prompt();
    } else {
      console.error("Google API not loaded");
    }
  };

  // const demo =()=>{

  //   console.log(g_obj,"TSTTSTS")

  //   axios.post('http://localhost:5000/createuser',g_obj)

  // }
  const Stored_userID = g_obj.sub;

  const demo = async () => {
    try {
      // Make a POST request using axios
      const response = await axios.post(`${baseurl}/createuser`, g_obj);

      const Local_UserID = JSON.stringify(Stored_userID);
      localStorage.setItem("userid", Local_UserID);

      console.log(Local_UserID, "localstorage");

      window.location.href = "/dashboard";
      // Set the response data in state
    } catch (error) {
      // Handle errors
      console.error("Error:", error.message);
      // Display an error message to the user
      alert("Please Login First!");
    }
  };

  return (
    <div>
      <header className="hero-header">
        <div class="contanir">
          <div class="main-row">
            <div className="your-logo">
              <img src={logo1} alt="" />
            </div>
            {isMobile && (
              <button className="menu-button" onClick={toggleMenu}>
                <label class="byby" for="burger">
                  <input type="checkbox" id="burger" />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </button>
            )}

            <div
              className={`header-btn-box ${isMobile && showMenu ? "show" : ""}`}
            >
              {/* //   <button className='Login' onClick={handleCustomSignIn}>Login</button> */}

              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);

                  var userobj = jwtDecode(credentialResponse.credential);
                  console.log(userobj, "TS");
                  setobj(userobj);

                  setData({ ...data, sub: g_obj.sub });
                  setData({ ...data, email: g_obj.email });
                  setData({ ...data, email_verified: g_obj.email_verified });
                  setData({ ...data, picture: g_obj.picture });
                  setData({ ...data, user_name: g_obj.name });

                  if (userobj) {
                    console.log("true");
                    setdashboard(true)
                  } else {
                    console.log("false");
                    console.log(g_obj);
                  }
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />


               <SignUp/>
                <Login/>

{
  showdashboard &&
              <button onClick={demo}>Dashboard</button>
}
            </div>
          </div>
        </div>
      </header>

       
    </div>
  );
};

export default Header;

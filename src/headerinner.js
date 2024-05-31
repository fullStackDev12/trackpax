import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import logo1 from "./img/1logo.png";
const HeaderInner = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile or not

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
  }

  useEffect(() => {
    /* global google */
    if (typeof google !== "undefined" && google.accounts) {
      google.accounts.id.initialize({
        client_id:
          "896318742541-ahqm1k22nr85kfdn9u5n3gp2c5tresnr.apps.googleusercontent.com",
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
    console.log("TS");
    localStorage.clear();
    window.location.href = "/";
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
              {/* <button className='Login' onClick={handleCustomSignIn}>Login</button> */}
              <button onClick={demo}>Logout</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderInner;

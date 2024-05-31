// import './App.css';
// import React, { Profiler, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

// import Landing from './landing';
// import Popup from './popup';
// import Sidebar from './sidebar';
// import List1 from './list1';
// import Profiles from './profile';
// import Setting from './setting';
// import Popup2 from './popup2';
// import Popup3 from './popup3';
// import Popup4 from './popup4';

// // Create your App component with routes
// function App() {
//   return (
//     <Router> {/* Define your routes */}
//        <Routes >

//        <Route path="/" exact element={<Landing />} />

//        <Route path="/popup" exact element={<Popup />} />

//        <Route path="/sidebar" exact element={<Sidebar />} />

//        <Route path="/list1" exact element={<List1 />} />

//        <Route path="/profile" exact element={<Profiles />} />

//        <Route path="/setting" exact element={<Setting />} />

//        <Route path="/popup2" exact element={<Popup2 />} />

//        <Route path="/popup3" exact element={<Popup3 />} />

//        <Route path="/popup4" exact element={<Popup4 />} />

//         </Routes >
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
// Import your Redux store
import store from "./redux/store";
import "./App.css";

import Landing from "./landing";
import Popup from "./popup";
import Sidebar from "./sidebar";
import List1 from "./list1";
import Profiles from "./profile";
import Setting from "./setting";
import Popup2 from "./popup2";
import Popup3 from "./popup3";
import Popup4 from "./popup4";
import Profile_Page from "./ProfilePage";
import Dashboard from "./Dashboard";
import { Setting_Page } from "./Settings";
import Dynamic_List from "./List Section/List";
import SignUp from "./signup";
import Login from "./login";
function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your App with Provider */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/popup" exact element={<Popup />} />
          <Route path="/sidebar" exact element={<Sidebar />} />
          <Route path="/list1" exact element={<List1 />} />
          <Route path="/profile" exact element={<Profiles />} />
          <Route path="/setting1" exact element={<Setting />} />
          <Route path="/popup2" exact element={<Popup2 />} />
          <Route path="/popup3" exact element={<Popup3 />} />
          <Route path="/popup4" exact element={<Popup4 />} />
          <Route path="/profilepage" exact element={<Profile_Page />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/setting" exact element={<Setting_Page />} />
          <Route
            path="/userlist/:sub/:listname"
            exact
            element={<Dynamic_List />}
          />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

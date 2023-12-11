import Navbar from "./Navbar";
import Home from "./Home";
import Results from "./Results";
import About from "./About";
import Section from "./Section";
import ImageSec from "./ImageSec";
import Filter from "./FIlter";

import Login from "./Login";
import Logout from "./Logout";
import { gapi } from "gapi-script";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const clientId =
  "1075111422641-fbhrcvc9ufrqrs9v91cghsr7qs7qrop6.apps.googleusercontent.com";

function App() {
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // });
  const [user, setUser] = useState({});

  function handleCallbackResponse(res) {
    console.log("Encoded JWT ID token:" + res.credential);
    var userObject = jwtDecode(res.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {
          theme: "outline",
          sign: "large",
        }
      );

      window.google.accounts.id.prompt();
    } else {
      console.error("Google API not loaded.");
    }
  }, []);

  function handleSignOut(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  // var accessToken = gapi.auth.getToken().access_token;
  // console.log(accessToken);
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ImageSec />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Login />
      <Logout /> */}
      <div id="signInDiv">
        {Object.keys(user).length != 0 && (
          <button onClick={(e) => handleSignOut}>Sign Out</button>
        )}

        {user && (
          <div>
            <img src={user.picture} alt="" />
            <h3>{user.name}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Search from "./Search";
// import Results from "./Results"; // Assuming you have a Results component

// function App() {
//   return (
//     <Router>

//       <Routes>
//         <Route path="/" element={<Search />} />
//         <Route path="/results" element={<Results />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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
import { useEffect } from "react";

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
  function handleCallbackResponse(res) {
    console.log("Encoded JWT ID token:" + res.credential);
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
    } else {
      console.error("Google API not loaded.");
    }
  }, []);

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
      <div id="signInDiv"></div>
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

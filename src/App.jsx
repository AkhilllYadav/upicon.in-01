// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialIcons from "./component/SocialIcons";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import "./App.css"
import "./index.css"


import Home from "./component/Home"; // Import the Home component
import About from "./component/About";
import BusinessUnits from "./component/BusinessUnits";
import Cmyuva from "./component/Cmyuva";
import ComingSoon from "./component/ComingSoon";
// import youthadda from "./component/youthadda";

const App = () => {
  return (
    <Router>
      <Header />
      <SocialIcons/>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element ={<About/>}/>
        <Route path="/business-units" element ={<BusinessUnits/>}/>
        <Route path="/cmyuva" element = {<Cmyuva/>}/>
        {/* <Route path="/yuthadda" element = {<youthadda/>}/> */}
        <Route path="/comingsoon" element = {<ComingSoon/>}/>
      </Routes>
      <Footer />
      
    </Router>
  );
};

export default App;

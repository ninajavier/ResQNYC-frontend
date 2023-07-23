import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Pages
import About from "./Pages/About";
import Home from "./Pages/Home";
import CommunityHub from "./Pages/CommunityHub";
import Services from "./Pages/Services";
import Error from "./Pages/Error";
//Components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Chatbot />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community-hub" element={<CommunityHub />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

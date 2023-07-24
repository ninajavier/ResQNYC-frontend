import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import About from './Pages/About';
import Home from './Pages/Home';
import CommunityHub from './Pages/CommunityHub';
import Services from './Pages/Services';
import Posts from './Components/Posts';
import Comments from './Components/Comments';//And the Comments page here

//Components
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ErrorModal from './Components/ErrorModal';

const App = () => {
  return (
    <>
      <Router>
        <NavBar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community-hub" element={<CommunityHub />} />
          <Route path="/services" element={<Services />} />
          <Route path="/posts" element={<Posts />} /> 
          <Route path="/posts/:postId/comments" element={<Comments />} />
          <Route path="*" element={<ErrorModal show={true} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;

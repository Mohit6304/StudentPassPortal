import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes component
import Home from './components/Home';
/* import ContactUs from './components/ContactUs';
 */
import Apply from './components/Apply';
import Renew from './components/Renew';
import Modify from './components/Modify';
import ExclusivePass from './components/ExclusivePass';
import GeneralPass from './components/GeneralPass';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route exact path="/" element={<Home />} /> 
        <Route path="/aboutme" element={<AboutMe />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
        
        <Route path="/apply" element={<Apply />} />
        <Route path="/renew" element={<Renew />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/exclusive-pass" element={<ExclusivePass />} />
        <Route path="/general-pass" element={<GeneralPass />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

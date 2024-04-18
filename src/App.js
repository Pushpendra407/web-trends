import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import HeroSection from "./Pages/Home/HeroSection";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import AboutMe from "./Pages/Home/AboutMe";
import Testimonials from "./Pages/Home/Testimonials";
import Footer from "./Pages/Home/Footer";
import ContactMe from "./Pages/Home/ContactMe";
import MySkills from "./Pages/Home/MySkills";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HeroSection />} />
          <Route exact path='/home' element={<HeroSection />} />
          <Route exact path='/portfolio' element={<MyPortfolio />} />
          <Route exact path='/about' element={<AboutMe />} />
          <Route exact path='/port' element={<MyPortfolio />} />
          <Route exact path='/testimonials' element={<Testimonials />} />
          <Route exact path='/contactme' element={<ContactMe />} />
          <Route exact path='/skills' element={<MySkills />} />
        </Routes>
        <Footer/>
      </React.Fragment>
    </Router>
  );
}

export default App;

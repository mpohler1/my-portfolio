import React from 'react';
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import './App.css';

function App() {
  return (
    <div className="App bg">
      <Navbar/>
      <Headline/>
      <AboutMe/>
      <Testimonials/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;

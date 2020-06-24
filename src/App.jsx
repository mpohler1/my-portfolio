import React from 'react';
import Testimonials from "./components/testimonials/Testimonials";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contact/ContactMe";
import Navbar from "./components/navbar/Navbar";
import Headline from "./components/headline/Headline";
import './App.css';

function App() {
    return (
        <div className="bg">
            <Navbar/>
            <Headline/>
            <Projects/>
            <Testimonials/>
            <ContactMe/>
        </div>
    );
}

export default App;

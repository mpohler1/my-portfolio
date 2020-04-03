import React from 'react';
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import './App.css';

function App() {
    return (
        <div className="bg">
            <Navbar/>
            <Headline/>
            <div>
            <Projects/>
            <Testimonials/>
            <ContactMe/>
            </div>
        </div>
    );
}

export default App;

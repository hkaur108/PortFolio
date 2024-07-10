import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavbarHead from './Components/NavbarHead';



export default function App() {
  return (
    <>
    <NavbarHead/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
      
    
    </>
    
  )
}

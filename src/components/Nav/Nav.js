import React, { useState } from "react";
import './nav.css'
// import Toggle from "../Toggle/Toggle";



const Footer = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className=''>
      <a href="#" className={activeNav === '#' ? 'active ' : ''}>Home</a>
     
      <a href="#works" onClick={() => setActiveNav('#works')} className={activeNav === '#works' ? 'active ' : ''}>About</a>
      <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active ' : ''} >Skill</a>

      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active ' : ''} >Servics</a>

      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active ' : ''}>Protfolio</a>
      
      {/* <Toggle /> */}

    </nav>
  );
};

export default Footer;
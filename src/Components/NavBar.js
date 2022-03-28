import React,{useEffect} from 'react';
import {Link} from 'react-scroll'
import './NavBar.css';

const Navbar=() => {
  return (
    <div className = "navbar">

        <div className = "logo animate__animated animate__fadeInUp animate__delay-2s">
          <img className = "logoimg"></img>
        </div>
        
        <div className="navigation animate__animated animate__fadeInUp animate__delay-2s">
            <div className = "navElements"><Link className = "navA navAHover" to='landing' spy={true} smooth={true}>Home</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='aboutMe'spy={true} smooth={true}>About</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='skills' spy={true} smooth={true}>Skills</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='projects' spy={true} smooth={true}>Projects</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='experience' spy={true} smooth={true}>Experience</Link></div>
        </div>

    </div>
  )
};

export default Navbar;
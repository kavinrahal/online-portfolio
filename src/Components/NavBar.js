import React from 'react';
import { useState } from "react"
import {Link} from 'react-scroll'
import './NavBar.css';

const Navbar=() => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className = "navbar">

        <div className = "logo animate__animated animate__fadeInUp animate__delay-2s">
          <Link to='landing' spy={true} smooth={true} offset={-100}>
            <img className = "logoimg" alt=""></img>
          </Link>
        </div>

        <div className="navigation animate__animated animate__fadeInUp animate__delay-2s">
            <div className = "navElements"><Link className = "navA navAHover" to='landing' spy={true} smooth={true} offset={-100}>Home</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='aboutMe' spy={true} smooth={true} offset={-100}>About</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='skills' spy={true} smooth={true} offset={-100}>Skills</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='projects' spy={true} smooth={true} offset={-100}>Projects</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='experience' spy={true} smooth={true} offset={-100}>Experience</Link></div>
        </div>

        <div className='collapsedNav animate__animated animate__fadeInUp animate__delay-2s'>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded)
            }}
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="orange"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className={isNavExpanded ? "expanded" : "navigation-menu"}>
            <div className = "navElements"><Link className = "navA navAHover" to='landing' spy={true} smooth={true} offset={-100} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Home</Link></div>
            <div className = "navElements" ><Link className = "navA navAHover" to='aboutMe' spy={true} smooth={true} offset={-100} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>About</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='skills' spy={true} smooth={true} offset={-100} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Skills</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='projects' spy={true} smooth={true} offset={-100} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Projects</Link></div>
            <div className = "navElements"><Link className = "navA navAHover" to='experience' spy={true} smooth={true} offset={-100} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Experience</Link></div>
          </div>
        </div>

        </div>
  )
};

export default Navbar;
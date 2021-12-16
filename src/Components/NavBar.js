import React,{useEffect} from 'react';
import './NavBar.css';

const Navbar=() => {
  return (
    <div className = "navbar">

        <div className = "logo animate__animated animate__fadeInUp animate__delay-2s">
          <img className = "logoimg"></img>
        </div>
        
        <div className="navigation animate__animated animate__fadeInUp animate__delay-2s">
            <div className = "navElements"><a className = "navA" href="#post1">Home</a></div>
            <div className = "navElements"><a className = "navA" href="#post1">About</a></div>
            <div className = "navElements"><a className = "navA" href="#post1">Skills</a></div>
            <div><a className = "navA" href="#post1">Projects</a></div>
        </div>

    </div>
  )
};

export default Navbar;
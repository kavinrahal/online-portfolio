import React,{useEffect} from 'react';
import './NavBar.css';
// import Logo from './../img/logo.svg';

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")}>
        
        <nav className="navigation">
            <div className = "navElements"><a className = "navA" href="#post1">Home</a></div>
            <div className = "navElements"><a className = "navA" href="#post1">About</a></div>
            <div className = "navElements"><a className = "navA" href="#post1">Skills</a></div>
            <div className = "navElements"><a className = "navA" href="#post1">Projects</a></div>
        </nav>

    </header>
  )
};

export default Navbar;
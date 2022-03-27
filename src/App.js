import './App.css';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills2 from './Components/Skills2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <AboutMe/>
      <Skills2/>
      <Projects />
      <Experience />
      <Router>
        <Routes>
          <Route path='/landing' component={<Landing/>}/>     
          <Route path='/aboutMe' component={<AboutMe/>}/>     
          <Route path='/skills' component={<Skills2/>}/>
          <Route path='/projects' component={<Projects/>}/>
          <Route path='/experience' component={<Experience/>}/>     
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

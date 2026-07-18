import './App.css';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills2 from './Components/Skills2';
import More from './Components/More';

function App() {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <AboutMe/>
      <Skills2/>
      <Projects />
      <Experience />
      <More />
    </div>
  );
}

export default App;

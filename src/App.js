import './App.css';
import { useRef } from 'react';
import Header from './componentes/Header';
import Title from './componentes/Title';
import About from './componentes/About';
import Skills from './componentes/Skills';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';

function App() {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  const handleSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  };


  return (
    <div className="App">
      <Header onAboutClick={handleAboutClick} onSkillsClick={handleSkillsClick}
      onProjectsClick={handleProjectsClick} onContactClick={handleContactClick}/>
      <Title/>
      <About ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Proyectos ref={projectsRef}/>
      <Contacto ref={contactRef}/>
    </div>
  );
}

export default App;

import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <div className='main'>
        <AboutMe />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </div>
    </Fragment>
  );
}

export default App;
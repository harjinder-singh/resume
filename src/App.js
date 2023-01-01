import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <div className='main'>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </div>
    </Fragment>
  );
}

export default App;
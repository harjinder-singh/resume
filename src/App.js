import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <div className='main'>
        <AboutMe></AboutMe>
      </div>
    </Fragment>
  );
}

export default App;
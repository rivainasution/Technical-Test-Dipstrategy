import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  About,
  Contact,
  Dashboard,
  Footer,
  Portfolio,
  Services,
  Team,
  Value,
  Workflow,
  NavigationBar
} from "./components";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Dashboard />
      <div className='bg-color-dark'>
        <Services />
      </div>
      <div className='bg-color-white'>
        <Workflow />
        <Portfolio />
      </div>
      <div className='bg-color-dark'>
        <About />
      </div>
      <div className='bg-color-light'>
        <Team />
      </div>
      <div className='bg-color-dark'>
        <Value />
      </div>
      <div className='bg-color-light'>
        <Contact />
      </div>
      <div className='bg-color-warning'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

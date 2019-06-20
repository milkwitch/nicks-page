import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App" >
      <div className='background' >
      <HashRouter>
        <Home />
        <Navbar />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
      </ HashRouter>
      </div>
    </div>
  );
}

export default App;

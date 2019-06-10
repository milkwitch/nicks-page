import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import MainImage from './components/MainImage';
import yogaImg from './yoga-bg.jpg'

function App() {
  return (
    <HashRouter>
      <div className="App" >
        <img id='bg-img' src={yogaImg} alt='background' />
        <Route path='/home' component={MainImage} />
        <Navbar />
      </div>
    </ HashRouter>
  );
}

export default App;

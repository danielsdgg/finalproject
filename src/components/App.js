import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import AddAnimal from './AddAnimal';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/contacts" element={<Contacts/>} ></Route>
          <Route path="/add-animal" element={<AddAnimal/>} ></Route>        
        </Routes>
        
    </div>
  );
}

export default App;

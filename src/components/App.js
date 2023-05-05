import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import AddAnimal from './AddAnimal';
import UpdateAnimal from './UpdateAnimal';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/contacts" element={<Contacts/>} ></Route>
          <Route path="/add-animal" element={<AddAnimal/>} ></Route>
          <Route exact path="/update" element={<UpdateAnimal/>} ></Route>        
        </Routes>
        
    </div>
  );
}

export default App;

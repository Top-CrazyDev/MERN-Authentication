import React from 'react'
import { BrowserRouter,Routes, Route, } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome/>} />
          <Route path="/Login" exact element={<Login/>} />
          <Route path="/Signup" exact element={<Signup/>} />
          <Route path="/Main" exact element={<Main/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

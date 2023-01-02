import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='users' element={<Users/>}/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

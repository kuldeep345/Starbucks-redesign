import React from 'react';
import { BrowserRouter as Router , Navigate , Route , Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import './App.css';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(state => state.user.user)

  return (
    <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='account/signin' element={!user ? <Navigate to="/menu" replace /> : <Login/> }/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

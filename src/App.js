import React, { useEffect } from 'react';
import { BrowserRouter as Router , Navigate , Route , Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import './App.css';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import SignUp from './pages/signup/SignUp';
import Menu from './pages/menu/Menu';
import Featured from './pages/featured/Featured';

function App() {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(  
          login({
          email:user.email,
          uid:user.uid,
          displayName:user.displayName
        }))
      } else {
        dispatch(logout())
      }
    });
  }, [dispatch])
  

  return (
    <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='menu/featured' element={<Featured/>}/>
            <Route path='account/signin' element={user ? <Navigate to="/menu" replace={true} /> : <Login/> }/>
            <Route path='account/signup' element={user ? <Navigate to="/menu" replace={true} /> : <SignUp/> }/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

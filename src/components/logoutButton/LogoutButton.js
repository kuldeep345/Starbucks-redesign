import React from 'react'
import './logoutButton.css'
import { signOut } from "firebase/auth";
import { logout } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const LogoutButton = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutOfApp = async() => {
    await signOut(auth)
    .then(() => {   
      dispatch(logout)
      navigate('/')
  }).catch((error)=>{
    alert(error.message)
  })
  }

  return (
    <a className='logoutButton' onClick={logoutOfApp}>
    Log Out
  </a>
  )
}

export default LogoutButton
import React from 'react'
import { Link } from 'react-router-dom'
import './signInButton.css'

const SignInButton = () => {
  return (
    <Link className="signInButton" to="/account/signIn">
      Sign in
    </Link>
  )
}

export default SignInButton
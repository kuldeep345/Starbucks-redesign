import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FindAStore from '../findAStore/FindAStore'
import { Example } from '../navbar/Example'
import SignInButton from '../signInButton/SignInButton'
import SignUpButton from '../signUpButton/SignUpButton'
import LogoutButton from '../logoutButton/LogoutButton'
import './header.css'

const Header = ({menuPage}) => {
  
  const user = useSelector(state => state.user.user)

  return (
    <div className={`header ${menuPage && 'header_menuPage'}`}>
      <div className='header_left'>
        <Link to="/" className='header_logo'>
          <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' alt="" />
        </Link>
   
        <Link to='/' className='header_link'>
          Menu
        </Link>
        <Link className='header_link'>Rewards</Link>
        <Link className='header_link'>Gift Cards</Link>
    </div>
     
      <div className='header_right'>
        <Example/>
        <FindAStore/>
        {!user ? (
          <>
          <Link to="/account/signin">
            <SignInButton/>
          </Link>
          <Link to="/account/signin">
            <SignUpButton/>
          </Link>
          </>
        ): (
            <div className='header_logout'>
                {user ? <LogoutButton/> : <Link to="/">Order Now</Link>}
            </div>
        )}
      </div>  
    </div>
  )
}

export default Header
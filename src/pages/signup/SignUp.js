import React from 'react'
import { Link } from 'react-router-dom'
import FooterSecondary from '../../components/footerSecondary/FooterSecondary'
import SignupForm from '../../components/SignupForm/SignupForm'
import './signup.css'

const SignUp = () => {
  return (
    <div className='signupScreen'>
        <div className='signupScreen_header'>
            <Link to="/">
                <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                alt=''
                />
            </Link>
        </div>
        <h1 className="signupScreen_heading">Create an account</h1>
        <div className="signupScreen_rewards">
        <h4>STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <Link>more</Link>.
        </p>
      </div>
      <SignupForm/>
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
  )
}

export default SignUp
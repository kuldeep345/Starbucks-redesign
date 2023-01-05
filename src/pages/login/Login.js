import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import { Close, ReportProblemRounded, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import FooterSecondary from '../../components/footerSecondary/FooterSecondary';
import FormSubmit from '../../components/formSubmit/FormSubmit';
import {auth} from '../../firebase'
import { signInWithEmailAndPassword  } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ passwordShown , setPasswordShown  ] = useState(false)

  const dispatch = useDispatch()

  const onSubmit = async({email,password}) => {

    console.log(email,password)

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    dispatch(login({
      email:user.email,
      uid:user.uid,
      displayName:user.displayName
    }))
    console.log(user)
  })
  .catch((error) => {
    alert(error.message)
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  }

  return (
    <div className="loginScreen">
    <div className="loginScreen_left">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
          alt=""
        />
      </Link>
      <div className="loginScreen_info">
        <h1>Sign in or create an account 🌟</h1>
      </div>
    </div>
    <div className="loginScreen_right">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginScreen_inputContainer">
          <TextField
            name="email"
            label="Email Address"
            type="email"
            InputLabelProps={{
              style: { color: "rgba(0,0,0,.56)" },
            }}
            InputProps={{ style: { fontWeight: "800" } }}
            className="loginScreen_input"
            {...register("email", { required: true })}
            variant="standard"
          />
          {errors.email && (
            <div className="loginScreen_error">
              <Close fontSize="small" />
              <span>Enter an email.</span>
              <ReportProblemRounded
                fontSize="small"
                className="loginScreen_reportIcon"
                
              />
            </div>
          )}
        </div>
        <div className="loginScreen_inputContainer">
          <TextField
            name="password"
            label="Password"
            type={passwordShown ? "text" : "password"}
            InputLabelProps={{
              style: { color: "rgba(0,0,0,.56)" },
            }}
            InputProps={{ style: { fontWeight: "800" } }}
            className="loginScreen_input"
           {...register("password", { required: true })}
           variant="standard"
          />
          {passwordShown ? (
            <VisibilityOutlined
              onClick={() => setPasswordShown(!passwordShown)}
              className="loginScreen_visibilityIcon"
            />
          ) : (
            <VisibilityOffOutlined
              onClick={() => setPasswordShown(!passwordShown)}
              className="loginScreen_visibilityIcon"
            />
          )}
          {errors.password && (
            <div className="loginScreen_error">
              <Close fontSize="small" />
              <span>Enter an password.</span>
              <ReportProblemRounded
                fontSize="small"
                className="loginScreen_reportIcon"
              />
            </div>
          )}
        </div>
        <div className="loginScreen_resetLinks">
          <Link>Forgot your username?</Link>
          <Link>Forgot your password?</Link>
        </div>
        <FormSubmit name="Sign in" type="submit" onClick={handleSubmit(onSubmit)} />
      </form>
      <div className="loginScreen_rewards">
        <h4>JOIN STARBUCKS® REWARDS</h4>
      </div>
      <div className="loginScreen_joinNow">
        <div className="loginScreen_joinNowContainer">
          <Link to="/account/create">Join now</Link>
          <h4>Create an account and bring on the Rewards!</h4>
          <p>
            Join Starbucks® Rewards to earn free food and drinks, get free
            refills, pay and order with your phone, and more.
          </p>
        </div>
      </div>
      <FooterSecondary paddingLeft={30} flexDirection="column" />
    </div>
  </div>
  )
}

export default Login
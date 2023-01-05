import { Close, ReportProblemRounded, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import FormSubmit from '../formSubmit/FormSubmit'
import './signupForm.css'
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice'
import { useForm } from "react-hook-form";
import './signupForm.css'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ passwordShown , setPasswordShown  ] = useState(false)
    const navigate = useNavigate() 
    const dispatch = useDispatch()
  
    const onSubmit = async({fName, lName , email , password}) => {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName:fName
              }).then(()=>{
                dispatch(login({
                    email:user.email,
                    uid:user.uid,
                    displayName:user.displayName
                }))
                console.log(user)
                navigate("/menu")
              })
        }).catch((error)=>alert(error.message))
    }


  return (
    <div className="signupForm">
    <div className="signupForm__container">
      <form onSubmit={handleSubmit(onSubmit)} className="signupForm__form">
        <h4 className="signupForm__section">Personal Information</h4>
        <div className="signupForm__inputContainer">
          <TextField
            name="fName"
            label="First name"
            type="text"
            InputLabelProps={{
              style: { color: "rgba(0,0,0,.56)" },
            }}
            InputProps={{ style: { fontWeight: "800" } }}
            className="signupForm__input"
            {...register("fName", { required: true })}
            variant="standard"
          />
          {errors.fName && (
            <div className="signupForm__error">
              <Close fontSize="small" />
              <span>Enter your first name.</span>
              <ReportProblemRounded
                fontSize="small"
                className="signupForm__report"
              />
            </div>
          )}
        </div>

        <div className="signupForm__inputContainer">
          <TextField
            name="lName"
            label="Last name"
            type="text"
            InputLabelProps={{
              style: { color: "rgba(0,0,0,.56)" },
            }}
            InputProps={{ style: { fontWeight: "800" } }}
            className="signupForm__input"
            {...register("lName", { required: true })}
            variant="standard"
          />
          {errors.lName && (
            <div className="signupForm__error">
              <Close fontSize="small" />
              <span>Enter your last name.</span>
              <ReportProblemRounded
                fontSize="small"
                className="signupForm__report"
              />
            </div>
          )}
        </div>
        <h4 className="signupForm__section">Account Security</h4>
        <div className="signupForm__inputContainer">
          <TextField
            name="email"
            label="Email Address"
            type="email"
            InputLabelProps={{
              style: { color: "rgba(0,0,0,.56)" },
            }}
            InputProps={{ style: { fontWeight: "800" } }}
            className="signupForm__input"
            {...register("email", { required: true })}
            variant="standard"
          />
          {errors.email && (
            <div className="signupForm__error">
              <Close fontSize="small" />
              <span>Enter an email.</span>
              <ReportProblemRounded
                fontSize="small"
                className="signupForm__report"
              />
            </div>
          )}
        </div>

        <div className="signupForm__inputContainer">
          <TextField
            name="password"
            label="Password"
            type={passwordShown ? "text" : "password"}
            InputLabelProps={{
              style: { color: "rgba(0,0,0,.56)" },
            }}
            InputProps={{ style: { fontWeight: "800" } }}
            className="signupForm__input"
            {...register("password", { required: true })}
            variant="standard"
          />
          {passwordShown ? (
            <VisibilityOutlined
              onClick={() => setPasswordShown(!passwordShown)}
              className="signupForm__visibility"
            />
          ) : (
            <VisibilityOffOutlined
              onClick={() => setPasswordShown(!passwordShown)}
              className="signupForm__visibility"
            />
          )}
          {errors.password && (
            <div className="signupForm__error">
              <Close fontSize="small" />
              <span>Enter an password.</span>
              <ReportProblemRounded
                fontSize="small"
                className="login__report"
              />
            </div>
          )}
        </div>
        <h4 className="signupForm__rewards">
          COLLECT MORE STARS & EARN REWARDS
        </h4>
        <span className="signupForm__span">
          Email is a great way to know about offers and what’s new from
          Starbucks.
        </span>
        <FormSubmit name="Create account" type="submit" onClick={handleSubmit(onSubmit)}/>
      </form>
    </div>
  </div>
  )
}

export default SignupForm
import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import { Close, ReportProblemRounded } from '@mui/icons-material';

const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = ({email,password})=>{

  }

  return (
    <div className='loginScreen'>
        <div className='loginScreen_left'>
            <Link>
                    <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                    alt=""
                />
            </Link>
            <div className='loginScreen_info'>
                <h1>Sign in or create an account</h1>
            </div>
        </div>
       <div className='loginScreen_right' >
        <form onSubmit={()=>handleSubmit(onSubmit)}>
          <div className='loginScreen_inputContainer'>
            <TextField 
            label="Standard" 
            name="email" 
            type='email' 
            InputLabelProps={{style:{color:'rgba(0,0,0,0.56)'}}}
            InputProps={{style:{fontWeight:"800"}}}
            className="loginScreen_input"
            inputRef={register({required:true})}
            />
            {
              errors.email && (
                <div className='loginScreen_error'>
                  <Close/>
                    <span>Enter an email</span>
                    <ReportProblemRounded
                    fontSize='small'
                    className='loginScreen_reportIcon'
                    />
                </div>
              )
            }
          </div>
        </form> 
       </div> 
    </div>
  )
}

export default Login
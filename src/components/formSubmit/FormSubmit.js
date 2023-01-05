import React from 'react'
import './formSubmit.css'

function FormSubmit({ name, type, onClick }) {
  return (
    <a onClick={onClick} className='formSubmit' type={type}>
      {name}
    </a>
  )
}

export default FormSubmit
import React from 'react'
import './menuItem.css'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const MenuItem = ({type ,image}) => {
  return (
    <Fade>
      <Link className='menuItem'>
        <img src={image} alt={type} className="menuItem_image"/>
        <h4 className='menuItem_type'>{type}</h4>
      </Link>
  </Fade>
  )
}

export default MenuItem
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menuHeader.css'

const MenuHeader = () => {

    const [index , setIndex] = useState(0)

  return (
    <div className='menuHeader'>
        <div className='menuHeader_links'>
            <Link 
            className={`${index === 0 && 'menuHeader_link--active'}`}
            onClick={()=>setIndex(0)}
            >   
            All products
            </Link>

            <Link 
            to="/menu/featured"
            className={`${index === 1 && 'menuHeader_link--active'}`}
            onClick={()=>setIndex(0)}
            >   
            Featured
            </Link>
        <Link>Previous Orders</Link>
        <Link>Favourite Products</Link>
        </div>
    </div>
  )
}

export default MenuHeader
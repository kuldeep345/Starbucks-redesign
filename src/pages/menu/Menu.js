import React from 'react'
import Header from '../../components/header/Header'
import './menu.css'
import menuList from '../../menuList.json'
import MenuItem from '../../components/menuItem/MenuItem'
import MenuList from '../../components/menuList/MenuList'
import MenuHeader from '../../components/menuHeader/MenuHeader'

const Menu = () => {
  return (
    <>
    <div className='headers'>
    <Header/>
    <MenuHeader/>
    </div>
     <div className='menuScreen'>
        <div className='menuScreen_container'>
            <div className='menuScreen_left'>
                <MenuList/>
            </div>
            <div className='menuScreen_right'>
                <h1>Menu</h1>

                <div className='menuScreen_category'>
                    <h2>Food</h2>
                     <div className='menuScreen_items'>
                        {menuList.map((menuListCategory) => menuListCategory.food.map(({type , path , image})=>(
                              <MenuItem type={type} image={image} />  
                        )))}
                    </div>   
                </div>
                
                <div className='menuScreen_category'>
                    <h2>At Home Coffee</h2>
                     <div className='menuScreen_items'>
                        {menuList.map((menuListCategory) => menuListCategory.atHomeCoffee.map(({type , path , image})=>(
                              <MenuItem type={type} image={image} />  
                        )))}
                    </div>   
                </div>
                
                <div className='menuScreen_category'>
                    <h2>Drinks</h2>
                     <div className='menuScreen_items'>
                        {menuList.map((menuListCategory) => menuListCategory.drinks.map(({type , path , image})=>(
                              <MenuItem type={type} image={image} />  
                        )))}
                    </div>   
                </div>

                <div className='menuScreen_category'>
                    <h2>Merchandise</h2>
                     <div className='menuScreen_items'>
                        {menuList.map((menuListCategory) => menuListCategory.merchandise.map(({type , path , image})=>(
                              <MenuItem type={type} image={image} />  
                        )))}
                    </div>   
                </div>

            </div>
        </div>        
     </div>
    </>
  )
}

export default Menu
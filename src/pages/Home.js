import React from 'react'
import Header from '../components/header/Header'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import './home.css'
import Info from '../components/info/Info'
import Heading from '../components/heading/Heading'
import {Example} from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='homeScreen'>
        <Fade>
          <div className='home'>
              <div className='Home_left'>
              <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82516.jpg"
              alt=""
            />
              </div>
              <div className='home_right'>
                  <h2>Get more with gift cards</h2>
                  <p>Earn free faves twice as fast when you use gift cards in the app.</p>
                  <a>Add gift card</a>
              </div>
          </div>
        </Fade>

        <Fade>
        <div className='home' >
        <div className='home_right_second' style={{padding:'50px 0px'}}>
                  <h2>Cozy caramel</h2>
                  <p>Our creamy and comforting Caramel Brulée Latte is the gift you give yourself..</p>
                  <a>Order now</a>
              </div>
              <div className='Home_left'>
              <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82377.jpg"
              alt=""
            />
              </div>
            
          </div>
        </Fade>

        <Fade>
        <div className='home' >
       
              <div className='Home_left' style={{backgroundColor: '#006241', margin:'30px 0px 0px 0px'}}>
              <img
              className='burgur'
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82316.png"
              alt=""
            />
              </div>

              <div className='home_right_third'>
                  <h2>Warm and hearty</h2>
                  <p>The Impossible™ Breakfast Sandwich will keep you going with an Impossible Sausage patty made from plants, egg and Cheddar.*.</p>
                  <a>Order now</a>
              </div>
            
          </div>
        </Fade>

        <Fade>
        <Heading heading="MORE TO DISCOVER" />
      </Fade>
      <Fade>
        <div className="homeScreen__discover">
          <Info
            title="Order and pick up. Easy as that."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
            info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
            link="See pickup options"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
          <Info
            title="Coffee delivered. Day made."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
            info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
            link="Order now"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </div>
      </Fade>
      <Example/>
      </div>
    </div>
  )
}

export default Home
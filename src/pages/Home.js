import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Hero from '../assets/hero.png';


function Home() {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
      <h1>Say goodbye to long pharmacy lines</h1>
      <p>At MedKart, we're committed to providing fast, reliable, and personalized medicine delivery at affordable prices.</p> 
      <div className="button-container">
            <Link to='/menu'>
              <button>ORDER NOW</button>
            </Link>
        </div>
      </div>
      <img src={Hero}/>
    </div>


  )
}

export default Home

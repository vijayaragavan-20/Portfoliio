import React from 'react'
import './Home.css'
import imgg from './Images/ai_profile_pic.avif'


const Home = () => {
  return (
    <div className='home'>


      <img className='igg' src={imgg} alt="img" />
      <div>
      <h2>Hi, I’m Abinesh , Web Developer Based In India.</h2>
      <p className='per1'> I'm a Web Developer with a proven skills to collaborate effectively with senior developers 
        while spending extra time to be mentored with a passion for both personal growth and for software development.</p>
        </div>
    </div>
  )
}

export default Home

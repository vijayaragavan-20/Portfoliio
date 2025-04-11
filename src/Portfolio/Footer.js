import React from 'react'
import './Footer.css'
import whatsapp from './Images/whatsapp.png'
import mail from './Images/gmialll.png'
import link from './Images/linkedin.png'

const Footer = () => {
  return (
    <div className='foot'>
        <div className='last_line'>

        <img className='wh' src={whatsapp} alt="whatsapp" /> 
        <a  className='tr' href='#'> 6369189924</a>

        <img className='gm' src={mail} alt="mail" />
        <a className='tr' href='#'> abinesh8822@gmail.com</a>

        <img className='in' src={link} alt="linkedin" />
        <a className='tr' href='www.linkedin.com/in/abineshm8822'>Linkedin</a>

        
    </div>
        
       
      
    </div>
  )
}

export default Footer

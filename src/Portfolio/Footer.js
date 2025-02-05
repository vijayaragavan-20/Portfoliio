import React from 'react'
import './Footer.css'
import whatsapp from './Images/whatsapp.png'
import mail from './Images/gmialll.png'
import link from './Images/linkedin.png'
import netly from './Images/netsm.png'

const Footer = () => {
  return (
    <div className='foot'>
        <div className='last_line'>

        <img className='wh' src={whatsapp} alt="whatsapp" /> 
        <a  className='tr' href='#'> 9384217682</a>

        <img className='gm' src={mail} alt="mail" />
        <a className='tr' href='#'> vijayragavan572@gmail.com</a>

        <img className='in' src={link} alt="linkedin" />
        <a className='tr' href='https://www.linkedin.com/in/vijayaragavan20'>Linkedin</a>

        <img className='nt' src={netly} alt="netlify" />
        <a className='tr' href='https://app.netlify.com/teams/vijayragavan572/sites'>Netlify</a>
    </div>
        
       
      
    </div>
  )
}

export default Footer

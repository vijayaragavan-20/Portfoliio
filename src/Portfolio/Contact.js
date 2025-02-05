import React from 'react'
import './Contact.css'
import EmailTemp from './EmailTemp';
import Footer from './Footer';

import phone from './Images/contact.png';

const Contact = () => {
  return (
    
    <div className='cont'>
      <div className='qwe'>
      <img src={phone} alt='phone' className='phone'/>
      <h1 className='head'>Contact Me</h1>
      </div>
      <p className='sub_head'>Get in Touch</p>


      <EmailTemp/>
      <Footer />
            
    </div>
  )
}

export default Contact

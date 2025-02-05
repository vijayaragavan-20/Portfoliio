import React from 'react'
import './Qualificaiton.css'
import bookie from './Images/education.png';
import  toppi from './Images/book.png';
import sett from './Images/iconprojects.png';



const Qualificaiton = () => {
  return (
  <div className='quali'>
      <div className='sono'>
      <img src={bookie} alt='education' className='bookie'/>
      <h1 className='head'>Education</h1>
      </div>
      

    <div className='section'>

      <div className='pg'>

      <div className='qual12'>
      <p className='para'>Qualification</p>
      <img src={toppi} alt='logo' className='toppi'/>
      </div>

        <h3>Master of Computer Applications</h3>
          <h5>Coimbatore,India</h5>
          <h6 className='yr'>2022-2024</h6>
          <br/>
      
        <h3>Bachelor of Computer Applications</h3>
          <h5>Madurai,India</h5>
          <h6 className='yr'>2019-2022</h6>
      </div>
      <div className='project'>

     <div className='pro12'> 
      <p className='para'>Project</p>
      <img src={sett} alt='logo' className='sett'/>
      </div>

        <h3>Lung Cancer Dedection Using ML</h3>
        <h6 className='head6'>Used technologies: HTML,Css,JavaScript,Machine Learning</h6>
        <br/>
        <br/>
        
        <h3>Smart Parking System Using Node-MCU</h3>
        <h6 className='head6'>Used technologies: Embeded c</h6>


      </div>



      

    </div>

  </div>
  )
}

export default Qualificaiton

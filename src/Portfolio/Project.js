import React from 'react'
import './Project.css'
import frnt from './Images/iconsreact.png';
import webbi from './Images/iconsweb.png';
import ser2 from './Images/service.png';





const Project = () => {
  return (
<div className='ser'>

  <div className='qs'>
    <img src={ser2} alt="img"  className='ser2'/>
      <h1 className='head'>Services</h1>
      </div>
    
  <div className='container'>

    <div className='parag1'>
      <img src={frnt} alt="img"  className='frnt'/>
      <h5>Front-End Development</h5>
      <p>Creative Frontend Developer with strong skills in HTML, CSS, and JavaScript. Experienced in building responsive, 
         user-friendly interfaces using frameworks like Bootstrap and React.</p>
    </div>

    <div className='parag2'>
      <img src={webbi} alt="img"  className='webbi'/>
            <h5>Web Develpoment</h5>
      <p>Skilled Web Developer with expertise in both frontend and backend technologies. Committed to building responsive, 
        efficient, and user-friendly websites and applications with a focus on seamless functionality.</p>
    </div>

  </div>

</div>
  )
}

export default Project

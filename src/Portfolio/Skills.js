import React from 'react'
import './Skills.css'
import top1 from './Images/skills.png';


import Html_img from './Images/html-1.svg';
import Css_img from './Images/css-3.svg';
import Bootstrap_img from './Images/bootstrap-5-1.svg';
import JavaScript_img from './Images/logo-javascript.svg';
import React_img from './Images/react-2.svg';

// \\\\\\\\\

import Vscodee_img from './Images/visual-studio-code-1.svg';
import Canva_img from './Images/canva-1.svg';
import Git_img from './Images/git-icon.svg';
import Netlify_img from './Images/netlify.svg';
import Chrome_img from './Images/chrome.svg';


const Skills = () => {
  return (
<div className='skill'>

      <div className='top22'>
      <img src={top1} alt='logo' className='top1' />
       <h1 className='head11'>Skills</h1>
       </div>

  <div className='switch'>
    
      <p className='p1'>Web Skills</p>

          <div className='webskill'>
            <img className='dummy' src={Html_img} alt="html" />
            <img className='dummy' src={Css_img} alt="css" />
            <img className='dummy' src={Bootstrap_img} alt="bootstrap" />
            <img className='dummy' src={JavaScript_img} alt="javascript" />
            <img className='dummy' src={React_img} alt="react" />
            
          </div>
      
   
      <p className='p2'>Web Dev Tools</p>

          <div className='webtoll' >
            <img className='dummy2' src={Vscodee_img} alt="vscode" />
            <img className='dummy2' src={Canva_img} alt="canva" />
            <img className='dummy2' src={Git_img} alt="git" />
            <img className='dummy2' src={Netlify_img} alt="netlify" />
            <img className='dummy2' src={Chrome_img} alt="chrome" />
          </div>

  </div>

</div>
  )
}

export default Skills

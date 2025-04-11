import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailTemp.css';


const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill out all fields before sending.');
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      user_message: message,
    };

    emailjs
      .send(
        'service_huk3i2a',
        'template_fw6xhlc', 
        templateParams,
        'PBOzQzCl6_4YpJW8_' 


      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert(`Message sent successfully by ${name}!`);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send the message. Please try again.');
        }
      );
  };


  return (

<div className='mini'>
    
    <div style={{  display: 'flex', flexDirection: 'column', padding: '20px', maxWidth: '400px', margin: ' auto'}}>

      <form className='fm' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '90%', padding: '10px', marginBottom: '10px', border: '2px solid black',borderRadius: '5px' ,backgroundColor: 'transparent',color: 'rgb(93, 144, 186)'}}
        ></input>
        <input 
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '90%', padding: '10px', marginBottom: '10px', border: '2px solid black' ,borderRadius: '5px',backgroundColor: 'transparent',color: 'rgb(93, 144, 186)'}}
        />
        <textarea 
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: '95%', height: '50px', marginBottom: '10px', border: '2px solid black',borderRadius: '5px' ,backgroundColor: 'transparent',color: 'rgb(93, 144, 186)'}}
        ></textarea>
        <button className='btn'  type="submit" style={{  width: '96%', fontSize: '20px',padding: '10px 20px', cursor: 'pointer', border: '2px solid black',borderRadius: '5px',backgroundColor: '#26408f'}}>
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default EmailForm;

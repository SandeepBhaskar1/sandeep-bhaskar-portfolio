import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(
      'personal-portfolio',
      'template_ubl255c',
      form.current, 
      '4wKAmQQh2tfA8NZq5'
    )
      .then((result) => {
        alert(`Thanks for sending the message, I'll get back to you soon!`);
        form.current.reset();
      }, (error) => {
        alert('Something went wrong! Please try again later');
      });
  };

  return (
    <div id='contact' className='contact-container'>
      <header className='header'>Get In Touch</header>

      <form ref={form} onSubmit={sendEmail} className="contact-form"> 
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" id="name" placeholder='Your Name' />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email ID :</label>
          <input type="email" name="email" id="email" placeholder='youremail@example.com' />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input type="tel" name="contactNumber" id="contactNumber" placeholder='1234567890' />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea name="message" id="message" placeholder='Enter your message here...' rows='7.5' cols='115'></textarea>
        </div>

        <div className="btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
import React from 'react';
import "./contact.css"
import facebook from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/instagram.png"
import youtube from "../../assets/youtube.png"
import github from "../../assets/github.png"
import emailjs from '@emailjs/browser';
import { useRef } from "react"
const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_agcnztc', 'template_6eisg0e', form.current, {
        publicKey: 'gw1b5OM0SoyWxf-vg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    
    <section id="contact">
        <h2 className='contactPageTitle'>Contact <span className='m'>M</span>e</h2>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your GOOD Name' name='your_name'/>
            <input type='email' className='email' placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type="submit" value="send" className='submitBtn' >Submit</button>
            <div className='links'>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <img src={facebook} alt="FACEBOOK" className='link'/>
                  </a>
                  <a href="https://x.com/pavanpendyala_?t=e9UV7FaYqgtcmMI3fLhmyA&s=09" target="_blank" rel="noopener noreferrer">
                      <img src={twitter} alt="TWITTER" className='link'/>
                  </a>
                  <a href="https://www.instagram.com/pavanpendyala_/" target="_blank" rel="noopener noreferrer">
                      <img src={insta} alt="INSTA" className='link'/>
                  </a>
                  <a href="https://www.youtube.com/@mrPK-pp2sn" target="_blank" rel="noopener noreferrer">
                      <img src={youtube} alt="YOUTUBE" className='link'/>
                  </a>
                  <a href="https://github.com/pendyalapavan" target="_blank" rel="noopener noreferrer">
                      <img src={github} alt="GITHUB" className='link'/>
                  </a>
             </div>

        </form>
    </section>
  )
}

export default Contact
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
                <img src={facebook} alt="image" className='link'/>
                <img src={twitter} alt="image" className='link'/>
                <img src={insta} alt="image" className='link'/>
                <img src={youtube} alt="image" className='link'/>
                <img src={github} alt="image" className='link'/>
            </div>
        </form>
    </section>
  )
}

export default Contact
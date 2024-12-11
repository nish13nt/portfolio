import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import {AiOutlineMail} from 'react-icons/ai';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import {AiOutlineWhatsApp} from 'react-icons/ai';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8o9mq19', 'template_ni2e0qm', form.current, 'Udv0L8VcHA4-qFbVn')
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nishantsurvase98@gmail.com</h5>
            <a href='mailto:nishantsurvase98@gmail.com' target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact__option'>
            <RiLinkedinBoxLine className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Nishant Survase</h5>
            <a href='https://www.linkedin.com/in/nishant-survase-771884251/' target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 93568 93551</h5>
            <a href='https://api.whatsapp.com/send?phone=919356893551' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
        {/*............ Contact Options End ...........*/}
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
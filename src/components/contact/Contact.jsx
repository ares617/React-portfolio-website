import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u987pyq', 'template_oc5ry96', form.current, '-CceGnMd0GxMYjiGv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()  
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contactame</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>daniel.nieto@gmail.com</h5>
            <a href='mailto:daniel.nieto@gmail.com'>Enviame un mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input className='contact__form-input' type="text" name="name" placeholder="Tu Nombre Completo" required></input>
          <input className='contact__form-input' type="email" name="email" placeholder='Tu correo' required></input>
          <textarea className='contact__form-textarea' name="message" rows="7" placeholder="Tu mensaje" required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviame un mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

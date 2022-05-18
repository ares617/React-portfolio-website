import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import AboutCard from './AboutCard'

function About() {
  return (
    <section id="about">
      <h5>Conoceme</h5>
      <h2>Sobre mi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <AboutCard title="Experiencia" icon='FaAward' text="4+ años de experiencia"/>
            <AboutCard title="Titulo" icon='MdOutlineSchool' text="Grado superior en desarrollo de Aplicaciones Web"/>
            <AboutCard title="Trabajo Actual" icon='MdWorkOutline' text="Oficina de alta calidad de Caixa en la tecnologia IBM BPM"/>
          </div>
          <p>
            Soy una persona trabajadora y responsable, con la habilidad de aprender rápido. Mis aficiones son la lectura, los videojuegos y el deporte.
          </p>
          <a href='#contact' className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default About

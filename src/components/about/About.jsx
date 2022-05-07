import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import AboutCard from './AboutCard'

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <AboutCard title="Experiencia" icon='FaAward' text="4+ años de experiencia"/>
            <AboutCard title="Clients" icon='FiUsers' text="200+ WorlWide"/>
            <AboutCard title="Proyectos" icon='VscFolderLibrary' text="80+ proyectos completados"/>
          </div>
          <p>
            lorem sadmiqwemfierwmvcmrw wefciwemivmcirwe mwe mwemcmweicmweimci mecmweimciwemicmwei cmweimciwemcmwe wecmiwemciwemcmwemcwmcenwncei ecmiwemcmwe m
          </p>
          <a href='#contact' className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default About

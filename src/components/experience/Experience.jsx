import React from 'react'
import './experience.css';
import ExperienceArticle from './ExperienceArticle';

function Experience() {
  return (
    <section id="experience">
      <h5>¿Que habilidades tengo?</h5>
      <h2>Mi experiencia</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <ExperienceArticle title="HTML" text="Experto"/>
            <ExperienceArticle title="CSS" text="Intermedio"/>
            <ExperienceArticle title="JS" text="Experto"/>
            <ExperienceArticle title="Boostrap" text="Intermedio"/>
            <ExperienceArticle title="Angular" text="Intermedio"/>
            <ExperienceArticle title="React" text="Intermedio"/>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <ExperienceArticle title="nodeJs" text="Experto"/>
            <ExperienceArticle title="PHP" text="Intermedio"/>
            <ExperienceArticle title="MySQL" text="Experto"/>
            <ExperienceArticle title="Python" text="Intermedio"/>
            <ExperienceArticle title="MongoDB" text="Intermedio"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

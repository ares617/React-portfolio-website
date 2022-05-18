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
            <ExperienceArticle title="IBM BPM" text="Experto"/>
            <ExperienceArticle title="JS" text="Experto"/>
            <ExperienceArticle title="HTML" text="Experto"/>
            <ExperienceArticle title="CSS" text="Intermedio"/>
            <ExperienceArticle title="Angular" text="Intermedio"/>
            <ExperienceArticle title="React" text="Intermedio"/>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <ExperienceArticle title="nodeJs" text="Intermedio"/>
            <ExperienceArticle title="PHP" text="Intermedio"/>
            <ExperienceArticle title="MySQL" text="Intermedio"/>
            <ExperienceArticle title="Java" text="Intermedio"/>
            <ExperienceArticle title="ElasticSearch" text="Intermedio"/>
            <ExperienceArticle title="Python" text="Principiante"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

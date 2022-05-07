import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Titulo Proyecto1',
    github: 'https://github.com',
    demo: 'https://github.com' 
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Mis ultimos proyectos</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target="_blank">Github</a>
                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
            </article>
            )
          })  
        }
      </div>
    </section>
  )
}

export default Portfolio

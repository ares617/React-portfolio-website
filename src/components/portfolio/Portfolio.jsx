import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import {Link} from "react-router-dom";

import {BiTennisBall} from 'react-icons/bi'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'AmericanasPadel',
    link: '/americanasPadel'
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Mis ultimos proyectos</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,link}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                    <Link className='btn' to={link}>Demo</Link>
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

import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

function ExperienceArticle(props) {
  return (
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
          <h4>{props.title}</h4>
          <small className='text-light'>{props.text}</small>
        </div>
    </article>
  )
}

export default ExperienceArticle

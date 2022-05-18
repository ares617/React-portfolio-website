import React from 'react'
import {FaAward} from 'react-icons/fa'
import {MdWorkOutline, MdOutlineSchool} from 'react-icons/md'

function AboutCard(props) {
    
  return (
    <article className='about__card'>
        {props.icon === 'FaAward'? <FaAward className='about__icon'/>: null }
        {props.icon === 'MdOutlineSchool'? <MdOutlineSchool className='about__icon'/>: null }
        {props.icon === 'MdWorkOutline'? <MdWorkOutline className='about__icon'/>: null }
        <h5>{props.title}</h5>
        <small>{props.text}</small>
    </article>
  )
}

export default AboutCard

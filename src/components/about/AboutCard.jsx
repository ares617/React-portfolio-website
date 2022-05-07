import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function AboutCard(props) {
    
  return (
    <article className='about__card'>
        {props.icon === 'FaAward'? <FaAward className='about__icon'/>: null }
        {props.icon === 'FiUsers'? <FiUsers className='about__icon'/>: null }
        {props.icon === 'VscFolderLibrary'? <VscFolderLibrary className='about__icon'/>: null }
        <h5>{props.title}</h5>
        <small>{props.text}</small>
    </article>
  )
}

export default AboutCard

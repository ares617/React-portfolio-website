import React from 'react'
import './footer.css';
import {FaLinkedin, FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

function Footer() {
  return (
    <footer className='container__footer'>
      <a href='#' className='footer__logo'>Daniel Nieto</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://linkedin.com'><FaLinkedin/></a>
        <a href='https://instagram.es'><FiInstagram/></a>
        <a href='https://twitter.es'><FaTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Daniel Nieto Arteaga. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import './footer.css';
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

function Footer() {
  return (
    <footer className='container__footer'>
      <a href='#' className='footer__logo'>Daniel Nieto</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
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

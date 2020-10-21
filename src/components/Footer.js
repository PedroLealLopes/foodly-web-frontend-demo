import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Container from './Container'
import IconFacebook from '../images/icon-facebook.svg'
import IconYoutube from '../images/icon-youtube.svg'
import IconTwitter from '../images/icon-twitter.svg'
import IconPinterest from '../images/icon-pinterest.svg'
import IconInstagram from '../images/icon-instagram.svg'
import Button from './Button'

const Footer = () => {
  return (
    <Container className="footer-container">
      <div className='footer-logos'>
        <Logo isDark={false} />
        <div>
          <img src={IconFacebook} alt=""/>
          <img src={IconYoutube} alt=""/>
          <img src={IconTwitter} alt=""/>
          <img src={IconPinterest} alt=""/>
          <img src={IconInstagram} alt=""/>
        </div>
      </div>
      <div className='footer-links'>
        <div className='footer-links-left'>
          <Link to='/restaurants'>Restaurants</Link>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
        <div className='footer-links-right'>
          <a href="#careers">Careers</a>
          <a href="#support">Support</a>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
      <div className='footer-links-button'>
        <Button />
        <p>
        © Easybank. All Rights Reserved
        </p>
      </div>
    </Container>
  )
}

export default Footer

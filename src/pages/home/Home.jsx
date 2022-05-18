import React from 'react'
import './home.css'
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Portfolio from '../../components/portfolio/Portfolio';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Experience from '../../components/experience/Experience';

function Home() {
  return (
    <div className='homePage'>
        <Header />
        <About/>
        <Experience />
        <Portfolio/>
        <Contact/>
        <Footer />
    </div>
  )
}

export default Home

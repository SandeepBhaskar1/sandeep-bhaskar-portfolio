import React from 'react';
import logo from '/logo.png';
import './Navbar.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Resume from '../../../CV/Sandeep_Bhaskar_Resume.pdf';

const Navbar = () => {

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    const offset = document.querySelector('.navbar').offsetHeight; 
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="navbar">
      <div className='nav-left'>
       <a href="/"> <img src={logo} alt='logo' className='nav-logo' /> </a>
      </div>

      <div className="nav-right">
        <a href="#about" className='li-component' onClick={(e) => handleScroll(e, '#about')}>About</a>
        <a href="#projects" className='li-component' onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
        <a href="#contact" className='li-component' onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
        <a href="#" className='li-component'><ThemeSwitcher /></a>
        <a href={Resume} className='cv-link' download>
          <button className='cv-dwnld'>Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

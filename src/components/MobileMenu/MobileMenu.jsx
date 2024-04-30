import './MobileMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const toggleAboutUs = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  return (
    <div style={{ zIndex: '9999' }} className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className='close-icon-container'>
        <button onClick={toggleMenu} className='sidemenu-close-button'>
          <span className='close-icon'>×</span>
        </button>
      </div>
      <Link className='option-container' to='/learning-center'>
        Learn
      </Link>
      <div className='option-container'>
        Pre-Qualify
      </div>
      <div className='option-container'>
        Calculator
      </div>
      <Link className='option-container' to='/loan-options'>
        Loan Options
      </Link>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}>
        <div className='option-container' style={{ borderBottom: 0 }}>
          About Us
        </div>
        <div style={{ height: '30px', width: '30px', position: 'absolute', right: '10px' }} onClick={toggleAboutUs}>
          <span className={`dropdown-arrow ${isAboutUsOpen ? 'up' : 'down'}`}></span>
        </div>
      </div>
      <div className={`option-container about-us-extra ${isAboutUsOpen ? 'show' : 'hide'}`}>
        <div>
          Meet Our Team
        </div>
      </div>
      <div className={`option-container about-us-extra ${isAboutUsOpen ? 'show' : 'hide'}`}>
        <div>
          Reviews
        </div>
      </div>
      <div className='option-container'>
        Blog
      </div>
      <div className='option-container'>
        Contact Us
      </div>
      <div className='option-container'>
        Apply Online
      </div>
      <div className='option-container'>
        Get a Quote
      </div>
    </div>
  )
}

export default MobileMenu;
import './MobileMenu.css';
import { useState } from 'react';

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const toggleAboutUs = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  return (
    <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className='close-icon-container'>
        <button onClick={toggleMenu}>
          <span className='close-icon'>×</span>
        </button>
      </div>
      <div className='option-container'>
        Learn
      </div>
      <div className='option-container'>
        Pre-Qualify
      </div>
      <div className='option-container'>
        Calculator
      </div>
      <div className='option-container'>
        Loan Options
      </div>
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
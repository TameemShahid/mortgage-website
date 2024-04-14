import whiteLogo from '../../assets/header_logo_white.webp';
import blueLogo from '../../assets/header_logo.webp';
import { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  const handleScroll = () => {
    setScrolled(window.scrollY > 5);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div
      style={{
        height: '86px',
        width: '100%',
        position: 'sticky',
        top: '0',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0)',
        transform: isMenuOpen ? 'translateX(-210px)' : 'translateX(0px)',
        zIndex: '5'
      }}
      id='navbar-container'
    >
      <div
        style={{
          width: width <= 768 ? '88.5%' : '95%',
          height: '100%',
        }}
        className="mx-auto">
        <div
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <a href='#' style={{ width: width <= 425 ? '50%' : 'inherit' }}>
            <img
              src={scrolled ? blueLogo : whiteLogo}
              alt="Company Logo"
              style={{ width: '100%', maxWidth: '242px', maxHeight: '70px' }}
            />
          </a>
          <div style={{ display: width >= 1350 ? 'flex' : 'none', justifyContent: 'flex-end' }} className={`list-menu ${scrolled ? 'scrolled' : ''}`}>
            <ul style={{ listStyle: 'none', margin: '0' }}>
              <li className='list-item'><a href="#">Learn</a></li>
              <li><a href="#">Pre-Qualify</a></li>
              <li><a href="#">Calculator</a></li>
              <li><a href="#">Loan Options</a></li>
              <li
                style={{ height: '50px' }}
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                <a href="#" style={{ display: 'flex', alignItems: 'center', width: '100%' }}
                >About Us</a>
                <ul className='sub-menu' style={{ display: showSubMenu ? 'block' : 'none' }}>
                  <li>Meet Our Team</li>
                  <li>Reviews</li>
                </ul>
              </li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><button type="button" className='btn btn-info'>Apply Online</button></li>
              <li><button type="button" className='btn btn-info'>Get A Quote</button></li>
            </ul>
          </div>
          <a href="#"
            style={{ display: width < 1350 ? 'block' : 'none', textDecoration: 'none' }}
            className={`hamburger ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
            <p>Menu</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
import { useEffect, useState } from 'react';
import './Navbar.css';
import blueLogo from '../../assets/header_logo.webp';
import whiteLogo from '../../assets/header_logo_white.webp';

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNavLinks, setHideNavLinks] = useState(window.innerWidth > 1350 ? false : true);


  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  }

  const handleResize = () => {
    setHideNavLinks(window.innerWidth > 1350 ? false : true);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, []);



  return (
    <div className='sticky-top'>
      <nav id="navbar" style={{ padding: '8px 30px', backgroundColor: isScrolled ? 'rgba(253, 253, 253, 0.8)' : '' }} className={`navbar sticky-top navbar-expand-lg navbar-light ${isScrolled ? 'scrolled' : ''}`}>
        <div style={{ padding: '0' }} className="container-fluid">
          <a className="navbar-brand" href="#">
            <img id="header_logo" src={isScrolled ? blueLogo : whiteLogo} alt="Company Logo" />
          </a>
          <div style={{ display: hideNavLinks ? 'block' : 'none' }} className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <p>
              Menu
            </p>
          </div>
          <div className={`collapse navbar-collapse d-flex flex-row-reverse ${hideNavLinks ? 'collapsed' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <strong className={`${isScrolled ? 'scrolled' : ''}`}>Learn</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <strong>Pre-Qualify</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <strong>Calculator</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <strong>Loan Options</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <strong>About Us</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <strong>Blog</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <strong>Contact Us</strong>
                </a>
              </li>
              <li>
                <button type="button" className="btn btn-info">
                  Apply Online
                </button>
              </li>
              <li style={{ marginRight: '0%' }}>
                <button type="button" className="btn btn-info">
                  Get A Quote
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
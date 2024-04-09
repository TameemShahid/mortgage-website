import { useEffect, useState } from 'react';
import './Header.css';
import blueLogo from '../../assets/header_logo.webp';
import whiteLogo from '../../assets/header_logo_white.webp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav id="navbar" style={{ padding: '8px 30px', backgroundColor: isScrolled ? 'rgba(253, 253, 253, 0.8)' : '' }} className={`navbar sticky-top navbar-expand-lg navbar-light ${isScrolled ? 'scrolled' : ''}`}>
      <div style={{ padding: '0' }} className="container-fluid">
        <a className="navbar-brand" href="#">
          <img id="header_logo" src={isScrolled ? blueLogo : whiteLogo} alt="Company Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
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
  )
}

export default Header;
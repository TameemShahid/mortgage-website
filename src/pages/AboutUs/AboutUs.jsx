import './AboutUs.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div id='about-us-container' className='main-content'>
      <div className='aboutus-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <p className='small-text'>About Us</p>
            <p className='large-text'><strong>A little about how we began and where we are going.</strong></p>
            <div className='spacer'></div>
            <p className='paragraph'>We are here to serve you.</p>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content mx-auto'>
            <div className='paragraph-container mb-4'>
              <p className='mb-4'>Founded in 2011, the key to our success has been a combination of consistently offering the lowest possible and above all providing outstanding customer service. We take pride in treating our clients with honesty and integrity.</p>
              <p>We want to get to know you so that one of our seasoned loan officers can offer you the ideal financing solution. We are proud to have helped finance thousands of loans, helping Americans find, keep and afford their dream homes.</p>
            </div>
          </div>
        </div>
        <div className='section-3-container'>
          <div className='section-3-content'>
            <h2>What are your goals? Everyone is unique, request your personalized rates and fees.</h2>
            <button type="button" className='btn btn-info' onClick={() => navigate('/quote')}>Get Started <span style={{ paddingLeft: '1rem' }}>{">"}</span></button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs;
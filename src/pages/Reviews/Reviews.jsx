import './Reviews.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import image1 from '../../assets/reviews/couple-looking-at-home.jpg';

const Reviews = () => {
  const navigate = useNavigate();

  return (
    <div id='reviews-container' className='main-content'>
      <div className='reviews-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <div className='text-column my-auto'>
              <h1>Client reviews from around the internet.</h1>
              <p>Our clients are the foundation of our success.</p>
              <div className='btn-container'>
                <button type="button" className='btn btn-info'>Get Your Quote</button>
                <button type="button" className='btn btn-outline-light btn-alternative'>Learn More</button>
              </div>
            </div>
            <div className='img-container'>
              <img
                className='section-1-img'
                src={image1}
                alt="Couple looking at a laptop"
                loading="lazy"
                decoding="async"
                srcSet={`${image1} 630w, ${image1} 300w, ${image1} 150w`}
                sizes="(max-width: 630px) 100vw, 630px"
                style={{
                  borderRadius: '20px',
                  width: '-webkit-fill-available',
                  maxWidth: '630px',
                  maxHeight: '630px',
                }}
              />
            </div>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content'>
            <div className='heading-container'>
              <h1 className='mx-auto'>Reviews</h1>
              <div className='grey-border-bottom' />
            </div>
            <div className='spacer' />
            <div className='cards-container'>
              <iframe src='https://54f22efbe70843cfb9a8d2b44d41ac59.elf.site' width='100%' height='600'></iframe>
            </div>
            <div className='spacer' />
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

export default Reviews;
import './FeatureSection3.css';
import stars from '../../assets/5Stars.png';
import mainImage from '../../assets/Homepage-pic-3.webp';
import image1 from '../../assets/Homepage-pic-3-300x300.webp';
import image2 from '../../assets/Homepage-pic-3-150x150.webp';
import image3 from '../../assets/Homepage-pic-3-500x500.webp';

const FeaturesSection3 = ({ width }) => {
  return (
    <div style={{
      top: '-86px',
      width: '100vw',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '70px 0px',
      position: 'relative',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '747px',
        display: 'flex',
        padding: '15px',
        flexWrap: 'wrap',
        maxWidth: '100vh',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{ height: '30px' }}></div>
        <div>
          <img width="300" height="46" src={stars} alt="5Stars" loading="lazy" decoding="async" />
        </div>
        <div style={{ height: '30px' }}></div>
        <div>
          <h2 style={{ fontWeight: '500', fontSize: '25px' }}>Our clients are the foundation for our success.</h2>
        </div>
        <div style={{ height: '30px' }}></div>
        <div>
          <h1 style={{ fontWeight: '500', fontSize: '36px' }}>Client Reviews</h1>
        </div>
        <div style={{ height: '30px' }}></div>
        <div>
          <p style={{ fontSize: '18px', fontWeight: '300' }}>Client reviews from around the internet.</p>
        </div>
        <div style={{ height: '30px' }}></div>
        <div>
          <button type="button" className='btn btn-info'
            style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: '500',
              padding: '15px 35px',
              backgroundColor: 'rgb(42, 166, 208)'
            }}
          >Read Reviews</button>
        </div>
      </div>
      <img
        src={mainImage}
        alt="Couple looking at a laptop"
        loading="lazy"
        decoding="async"
        srcSet={`${mainImage} 630w, ${image3} 500w, ${image1} 300w, ${image2} 150w`}
        sizes="(max-width: 630px) 100vw, 630px"
        style={{
          borderRadius: '40px',
          width: '-webkit-fill-available',
          maxWidth: '630px',
          maxHeight: '630px',
          padding: '15px'
        }}
      ></img>
    </div>
  )
}

export default FeaturesSection3;
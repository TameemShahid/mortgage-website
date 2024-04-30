import './FeaturesSection2.css';
import mainImage from '../../assets/Homepage-pic-2.webp';
import image1 from '../../assets/Homepage-pic-2-300x300.webp';
import image2 from '../../assets/Homepage-pic-2-150x150.webp';

const FeaturesSection2 = ({ width }) => {
  return (
    <div style={{
      top: '-86px',
      width: '100vw',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '70px 0px',
      position: 'relative',
      justifyContent: 'center',
      flexFlow: `${width > 1024 && 'row-reverse'}`
    }}>
      <div style={{
        width: '747px',
        display: 'flex',
        padding: '15px',
        flexWrap: 'wrap',
        maxWidth: '100vh',
        textAlign: 'center',
        // flexDirection: 'column',
        alignItems: 'space-between'
      }}>
        <div style={{ height: '30px' }}></div>
        <h2 style={{
          fontSize: '36px',
          maxWidth: '625px',
          fontWeight: '500',
        }}
          className='mx-auto'
        >Let's Learn!
        </h2>
        <div className='spacer' style={{ height: '30px', width: '100%' }}></div>
        <div style={{
          textAlign: 'left',
          display: 'grid',
          maxWidth: '480px'
        }}
          className='mx-auto'
        >
          <div
          >
            <p style={{ fontSize: '26px', fontWeight: '300', marginBottom: '1.5rem' }}>Please check out our <a style={{ textDecoration: 'none', color: 'rgb(42, 166, 208)' }} href="">27 educational articles</a> we put together.</p>
            <p style={{ fontSize: '26px', fontWeight: '300', marginBottom: '1.5rem' }}>As an education-focused mortgage company we strive to provide helpful information.</p>
            <p style={{ fontSize: '26px', fontWeight: '300', marginBottom: '1.5rem' }}>Visit our learning center to learn some great tips about buying a home.</p>
          </div>
          <button className='btn btn-info'
            style={{
              width: '100%',
              color: 'white',
              fontSize: '20px',
              fontWeight: '500',
              maxWidth: '382px',
              borderRadius: '8px',
              letterSpacing: '1px',
              padding: '15px 25px',
              justifySelf: 'center',
              textTransform: 'uppercase',
              backgroundColor: '#2AA6D0',
            }}>VIEW EDUCATIONAL ARTICLES</button>
        </div>
      </div>
      <img
        src={mainImage}
        alt="Couple looking at a laptop"
        loading="lazy"
        decoding="async"
        srcSet={`${mainImage} 630w, ${image1} 300w, ${image2} 150w`}
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

export default FeaturesSection2;
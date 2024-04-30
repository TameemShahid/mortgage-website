import './FeaturesSection.css';
import mainImage from '../../assets/Homepage-pic-1.webp';
import image1 from '../../assets/Homepage-pic-1-300x300.webp';
import image2 from '../../assets/Homepage-pic-1-150x150.webp';

const FeaturesSection = ({ width }) => {
  return (
    <div style={{
      top: '-86px',
      width: '100vw',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '70px 20px',
      position: 'relative',
      justifyContent: 'center',
    }}>
      <img
        src={mainImage}
        alt="Couple looking at a laptop"
        loading="lazy"
        decoding="async"
        srcSet={`${mainImage} 630w, ${image1} 300w, ${image2} 150w`}
        sizes="(max-width: 630px) 100vw, 630px"
        style={{
          borderRadius: '20px',
          width: '-webkit-fill-available',
          maxWidth: '630px',
          maxHeight: '630px'
        }}
      ></img>
      <div style={{
        minWidth: width <= 428 ? '100px' : '747px',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0 25px',
        maxWidth: '100vh'
      }}>
        <div className='dot-design'>
          <p style={{ color: 'rgb(119, 119, 119)', fontSize: '18px', fontWeight: '400' }}><span></span>Mortgage solutions designed for you</p>
        </div>
        <div style={{ flexBasis: '100%' }}></div>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '500',
          maxWidth: '625px'
        }}>Here's how we ensure your transaction goes smooth and fast.
        </h2>
        <div style={{ flexBasis: '100%', maxWidth: '625px', borderBottom: '0.8px solid rgb(224, 224, 224)', margin: '50px 0' }}></div>
        <div style={{
          rowGap: '40px',
          display: 'grid',
          columnGap: '40px',
          gridTemplateColumns: `${width >= 768 ? '1fr 1fr' : '1fr'}`,
        }}>
          <div style={{ width: '292px' }}>
            <h1
              style={{
                fontWeight: '600',
                fontSize: '1.35em',
                textTransform: 'capitalize'
              }}
            >1: Initial goal analysis consultation</h1>
            <p
              style={{
                marginBottom: 0,
                fontSize: '18px',
                fontWeight: 300
              }}
            >This is where we go over your goals to better understand your specific situation and needs.</p>
          </div>
          <div style={{ width: '292px' }}>
            <h3
              style={{
                fontWeight: '600',
                fontSize: '1.35em',
                textTransform: 'capitalize'
              }}
            >2: Solution Preparation</h3>
            <p
              style={{
                marginBottom: 0,
                fontSize: '18px',
                fontWeight: 300
              }}
            >This is where we tke the info from our call and build out some of the best options on the market for you regarding rates, closing costs, and program structures.</p>
          </div>
          <div style={{ width: '292px' }}>
            <h3
              style={{
                fontWeight: '600',
                fontSize: '1.35em',
                textTransform: 'capitalize'
              }}
            >3: Suggestion Presentation</h3>
            <p
              style={{
                marginBottom: 0,
                fontSize: '18px',
                fontWeight: 300
              }}
            >This is where we go over what we found. If you decide you want to keep what we propose, we put your loan into process.</p>
          </div>
          <div style={{ width: '292px' }}>
            <h3
              style={{
                fontWeight: '600',
                fontSize: '1.35em',
                textTransform: 'capitalize'
              }}
            >4: Execute</h3>
            <p
              style={{
                marginBottom: 0,
                fontSize: '18px',
                fontWeight: 300
              }}
            >Our team will guide you every step of the way to gather all the necessary documents to get you on your way.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection;
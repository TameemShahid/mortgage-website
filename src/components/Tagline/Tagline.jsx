import { useState, useEffect } from 'react';
import './Tagline.css';

const Tagline = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          padding: `95px ${width >= 425 ? '3rem' : '1.5rem'}`,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          alignContent: 'center',
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <h1
          style={{
            fontSize: '45px',
            fontWeight: '600',
            color: 'white',
            width: '100%'
          }}>
          your home, your future
          <br />
          our expertise
        </h1>
        <div id='line-spacer'
          style={{
            borderBottom: '3px solid #2aa6d0',
            width: '100%',
            marginTop: '32px',
            marginBottom: '45px',
            maxWidth: '500px'
          }}></div>
        <hr style={{ width: '100%', margin: 0 }} />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: '15px',
            rowGap: '15px',
            minWidth: 0
          }}
        >
          <button style={{ height: '70px', width: '303px', fontSize: '24px', fontWeight: '500', color: 'white', textTransform: 'uppercase', backgroundColor: '#2aa6d0', borderColor: '#2aa6d0' }} type="button" className='btn btn-info'>Get Preapproved</button>
          <button style={{ height: '70px', width: '303px', fontSize: '24px', fontWeight: '500', color: 'white', textTransform: 'uppercase', backgroundColor: '#2aa6d0', borderColor: '#2aa6d0' }} type="button" className='btn btn-info'>Request A Quote</button>
        </div>
      </div>
    </>
  )
}

export default Tagline
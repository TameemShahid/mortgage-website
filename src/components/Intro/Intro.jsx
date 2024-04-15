import './Intro.css';

const Intro = ({ width }) => {
  return (
    <div
      className='intro-container'
    >
      <h1
        style={{
          fontSize: width <= 426 ? '30px' : '40px'
        }}
        id='welcome-heading'
      >Welcome to Osterville Mortgage Group</h1>
      <div className='spacer'></div>
      <div
        className='intro-dot-design'
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='spacer'></div>
      <div style={{
        padding: `0 ${width <= 425 ? '1.4rem' : '3rem'}`
      }}
        className='intro-paragraph'
      >
        <p>Founded in 2011, the key to our success has been a combination of consistently offering the lowest possible and above all providing outstanding customer service. We take pride in treating our clients with honesty and integrity.</p>
        <p style={{ margin: '0' }}>We want to get to know you so that one of our seasoned loan officers can offer you the ideal financing solution. We are proud to have helped finance thousands of loans, helping Americans find, keep and afford their dream homes.</p>
      </div>
      <div style={{ flexBasis: '100%', minHeight: '60px' }}></div>
      <div
        className='intro-buttons-container'
      >
        <button type="button" className='btn btn-info'>GET PREAPPROVED</button>
        <button type="button" className='btn btn-info'
          style={{
            background: 'white',
            color: 'black',
            borderColor: 'black',
          }}>REQUEST A QUOTE</button>
      </div>
    </div>
  )
}

export default Intro;
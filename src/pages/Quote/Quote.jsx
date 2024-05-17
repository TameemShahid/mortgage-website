import './Quote.css';
import Questionnaire from '../../components/Questionnaire/Questionnaire';
import Footer from '../../components/Footer/Footer';

const Quote = () => {
  return (
    <div id='quote-container' className='main-content'>
      <div className='quote-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <div className='column-1'>
              <h1>Fill out the questionnaire on this page to start a discussion about your mortgage needs today!</h1>
              <div style={{ height: '20px', width: '100%' }} />
              <p>We pride ourselves on excellent communication and easy accessibility when you need us. Our experienced staff is here to guide you every step of the way.</p>
              <div style={{ height: '40px', width: '100%' }} />
              <p className='p-alternate'><i className='far fa-check-circle' />Speak to a Local Mortgage Professional</p>
              <p className='p-alternate'><i className='far fa-check-circle' />Free Consultation</p>
              <p className='p-alternate'><i className='far fa-check-circle' />Competitive Rates & Fees</p>
            </div>
            <div className='column-2'>
              <Questionnaire />
            </div>
            <div className='m-5' />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Quote;
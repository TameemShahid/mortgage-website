import image1 from '../../assets/pre_qualify/Couple-meeting-with-Loan-Officer.jpg';
import Questionnaire from '../../components/Questionnaire/Questionnaire';
import Footer from '../../components/Footer/Footer';
import './Pre-Qualify.css';
import { useRef } from 'react';

const PreQualify = () => {
  const quoteSectionRef = useRef(null);
  const infoSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='prequalify-container' className='main-content'>
      <div className='prequalify-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <div className='text-column my-auto'>
              <h1>Become more attractive to sellers as a pre-qualified buyer.</h1>
              <p>Some realtors require buyers to get pre-qualified before even starting to house hunt.</p>
              <div className='btn-container'>
                <button type="button" className='btn btn-info' onClick={() => scrollToSection(quoteSectionRef)}>Get Your Quote</button>
                <button type="button" className='btn btn-outline-light btn-alternative' onClick={() => scrollToSection(infoSectionRef)}>Learn More</button>
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
        <div ref={infoSectionRef} className='section-2-container'>
          <div className='section-2-content mx-auto'>
            <div className='text-col-1'>
              <h3>Before you start looking for your first home, we can help you with a mortgage prequalification.</h3>
              <p>We work to help you get pre-qualified and on your way to home ownership! Simply fill out our mortgage prequalification form securely on our website. With a prequalification letter in hand, you know that you may get approved for a mortgage before you even look at your first potential new home.</p>
              <p>Some realtors require buyers to get pre-qualified before even starting to house hunt. A simple mortgage prequalification letter can help you narrow your search to find exactly the home you need. It also makes the mortgage application process that much smoother.</p>
            </div>
            <div className='text-col-1'>
              <h3>Determine how your credit looks.</h3>
              <p>Lenders will look at your payment history, income, and current debts to determine how likely you are to pay your loan each month. The number value assigned to your “reliability” is known as your credit score and is one of the biggest factors in getting approved for a mortgage.</p>
              <p>There are many websites that allow you to quickly check your credit score for free. Two of our favorites are <a href="http://www.freecreditreport.com/">www.freecreditreport.com</a> and <a href="https://www.creditkarma.com/">www.creditkarma.com</a>.</p>
              <p>If you have a credit score below 640, consider delving deeper into your report to make sure it is accurate. Stay current with all monthly payments and reduce debt where possible to boost your score.</p>
            </div>
            <div className='mt-5' />
          </div>
        </div>
        <div ref={quoteSectionRef} className='section-3-container'>
          <h1>Get started today!</h1>
          <div className='divider mt-3' />
          <p>Fill out the questionnaire on this page to start a discussion about your mortgage needs today!</p>
          <div className='divider mt-4' />
          <Questionnaire />
          <div className='divider mt-5' />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PreQualify;
import React from 'react';
import './ThankYou.css';
import Footer from '../../components/Footer/Footer';

const ThankYou = () => {
  return (
    <div id='thank-you-container' className='main-content'>
      <div className='thank-you-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <h6>Request Received</h6>
            <h1>Thank you for requesting a mortgage quote!</h1>
            <p className='mt-3'>We are here to serve you.</p>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content px-3'>
            <p>We appreciate your interest in our mortgage services. Your request has been received, and our team is already working diligently to provide you with the best mortgage options tailored to your needs.</p>
            <p className='mt-3'>What happens next:</p>
            <ol>
              <li><strong>Review Process:</strong> Our expert mortgage specialists will carefully review your request to understand your unique financial situation and goals.</li>
              <li><strong>Personalized Solutions:</strong> We will analyze the information you provided to create personalized mortgage options designed to meet your specific requirements.</li>
              <li><strong>Dedicated Support:</strong> A dedicated mortgage consultant will reach out to you within the next 24 hours to discuss your options, answer any questions you may have, and guide you through the mortgage process.</li>
              <li><strong>Stay Connected:</strong> In the meantime, we encourage you to explore our website for valuable resources on mortgages, home buying tips, and financial advice.</li>
            </ol>
            <p className='mt-3'>Thank you for considering Osterville Mortgage Group as your trusted mortgage partner. If you have any immediate questions or concerns, please don’t hesitate to contact us at <strong>info@vonkdigital.com</strong>.</p>
            <div className='spacer mt-5'></div>
          </div>
        </div>
        <div className='section-3-container'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ThankYou;
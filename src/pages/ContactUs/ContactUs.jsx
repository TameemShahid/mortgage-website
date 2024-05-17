import './ContactUs.css';
import Questionnaire from '../../components/Questionnaire/Questionnaire';
import Footer from '../../components/Footer/Footer';

const ContactUs = () => {
  return (
    <div id='contact-us-container' className='main-content'>
      <div className='contactus-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <div className='column-1'>
              <h1 className='large-text'>Contact Us</h1>
              <p className='small-text'>Feel free to send us a message, give us a call. Our group of friendly staff is here to help.</p>
              <div style={{ width: '100%', height: '40px' }} />
              <div className='details-container'>
                <div className='detail-row'>
                  <div className='icon'><span className='fas fa-map-marker-alt'></span></div>
                  <div className='text-part'>
                    <h2>Office Location</h2>
                    <p>101 N. Acacia Ave, Solana Beach, CA 92007</p>
                  </div>
                </div>
                <div className='detail-row'>
                  <div className='icon'><span className='fas fa-map-marker-alt'></span></div>
                  <div className='text-part'>
                    <h2>Phone Number</h2>
                    <p>(877) 297-8055</p>
                  </div>
                </div>
                <div className='detail-row'>
                  <div className='icon'><span className='fas fa-map-marker-alt'></span></div>
                  <div className='text-part'>
                    <h2>Send a Message</h2>
                    <p>info@vonkdigital.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='column-2'>
              <div style={{ width: '100%' }}>
                <iframe width="600" height="450" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content'>
            <h1>Request an Intro Meeting.</h1>
            <div className='divider mt-4' />
            <Questionnaire />
            <div className='divider mt-5' />
            <p>(Get a personalized quote and expert advice today.)</p>
            <div className='divider mt-5' />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ContactUs;
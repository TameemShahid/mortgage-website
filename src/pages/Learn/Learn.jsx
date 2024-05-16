import './Learn.css';
import { Link, useNavigate } from 'react-router-dom';
import data from '../../data/learning_center/data';
import Footer from '../../components/Footer/Footer';

const Learn = () => {
  const navigate = useNavigate();

  const cards = data.map((element, index) => (
    <>
      {index % 3 === 0 && index !== 0 && <div style={{ flexBasis: '100%' }} key={index}></div>}
      <div key={element.key} id='card' className="card card-custom flex-item col-12 col-md-4 p-0">
        <img width="100%" height="100%"
          src={element.img}
          alt={element.altText} decoding="async"
        />
        <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
          <div style={{ marginBottom: '15px' }}>
            <Link to="/learning-center">Learn</Link>
          </div>
          <p className="card-text">{element.body}</p>
        </div>
      </div>
    </>
  ))

  return (
    <div
      style={{
        width: '100vw',
        height: '1000px',
      }}
      className='main-content'
      id='learning-container'
    >
      <div id='learning-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <p className='small-text'>Learning Center</p>
            <p className='large-text'>Learn everything you need to know about buying a home.</p>
            <div className='spacer'></div>
            <p className='paragraph'>Please read through the articles below to help you learn more about the home buying process.</p>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content mx-auto'>
            <div className='cards-container container-fluid'>
              <div className='row justify-content-center column-gap-3'>
                {cards}
              </div>
            </div>
          </div>
        </div>
        <div className='section-3-container'>
          <div className='section-3-content'>
            <p>What are your goals?</p>
            <div style={{ flexBasis: '100%' }}></div>
            <h2>Request a Free <br />Consultation</h2>
            <div style={{ flexBasis: '100%', height: '25px' }}></div>
            <button type="button" className='btn btn-info' onClick={() => navigate('/quote')}>Get Started {">"}</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Learn;
import './Blog.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../../data/learning_center/data';
import Footer from '../../components/Footer/Footer';

const Blog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    verification: ""
  });
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (formData.firstName !== '' && formData.lastName !== '' && formData.email !== '' && formData.verification === '11') {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [formData])

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
            <Link style={{ textDecoration: 'none', color: 'rgb(42, 166, 208)' }} to="/learning-center">Learn</Link>
          </div>
          <p className="card-text">{element.body}</p>
        </div>
      </div>
    </>
  ))

  return (
    <div id="blog-container" className="main-content">
      <div className="blog-wrapper">
        <div className="section-1-container">
          <div className="section-1-content">
            <div className='text-column my-auto'>
              <h1><span>Stay Informed</span> with changes and news about the mortgage market <span>join our email list</span></h1>
              <div style={{ height: '25px' }} />
              <div className="vc-zigzag-inner" style={{ width: '10%', minHeight: '14px', backgroundColor: '0', backgroundRepeat: 'repeat-x', backgroundImage: 'url(data:image/svg+xml;utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20width%3D%2214px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2018%2015%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpolygon%20id%3D%22Combined-Shape%22%20fill%3D%22%232a2a2a%22%20points%3D%228.98762301%200%200%209.12771969%200%2014.519983%209%205.40479869%2018%2014.519983%2018%209.12771969%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E)' }}></div>
              <div style={{ height: '25px' }} />
              <p>Our blog articles are geared towards first-time home buyers and mortgage market news.</p>
              <div style={{ height: '35px' }} />
              <p className='p-alternative'><i className="fa fa-check icon" />We will never spam you or sell your information.</p>
              <div style={{ height: '35px' }} />
              <button className='btn btn-info'>Read the articles</button>
              <div style={{ height: '35px' }} />
            </div>
            <div className='form-column my-auto'>
              <div className='form'>
                <label htmlFor="firstName">First Name: <span style={{ color: '#790000' }}>*</span></label>
                <input className='mb-4' type="text" id='firstName' placeholder='First Name' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                <label htmlFor="lastName">Last Name: <span style={{ color: '#790000' }}>*</span></label>
                <input className='mb-4' type="text" id='lastName' placeholder='Last Name' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                <label htmlFor="email">Email: <span style={{ color: '#790000' }}>*</span></label>
                <input className='mb-4' type="text" id='email' placeholder='test@gmail.com' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <label htmlFor="verification">8+3= <span style={{ color: '#790000' }}>*</span></label>
                <input className='mb-4' style={{ maxWidth: '225px' }} type="text" id='verification' value={formData.verification} onChange={(e) => setFormData({ ...formData, verification: e.target.value })} />
                <p className='mb-4'>Are you human?</p>
                <button type='submit' className='btn btn-info' style={{ visibility: showButton ? 'visible' : 'hidden' }}>Keep Me Informed!</button>
              </div>
            </div>
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
            <h2>What are your goals? Everyone is unique, request your personalized rates and fees.</h2>
            <button type="button" className='btn btn-info' onClick={() => navigate('/quote')}>Get Started <span style={{ paddingLeft: '1rem' }}>{">"}</span></button>
          </div>
        </div>
        <Footer />
      </div>
    </div >
  )
}

export default Blog;
import './Homepage.css';
import { useState, useEffect } from 'react';
import houseImage from '../../assets/EHO-dark.png';
import Intro from '../../components/Intro/Intro.jsx';
import Tagline from '../../components/Tagline/Tagline.jsx';
import MobileMenu from '../../components/MobileMenu/MobileMenu.jsx';
import Questionnaire from '../../components/Questionnaire/Questionnaire.jsx';
import VideoBackground from '../../components/VideoBackground/VideoBackground.jsx';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';
import FeaturesSection3 from '../../components/FeatureSection3/FeatureSection3.jsx';
import FeaturesSection2 from '../../components/FeaturesSection2/FeaturesSection2.jsx';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div>
      <div
        className={`main-content ${isMenuOpen ? 'dimmed' : ''}`}
      >
        <VideoBackground isMenuOpen={isMenuOpen} />
        <Tagline />
        <Intro width={width} />
        <FeaturesSection width={width} />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          padding: '100px 0 50px',
          position: 'relative',
          top: '-86px'
        }}>
          <Questionnaire width={width} />
          <div style={{ width: '100%' }} className='divider mt-5' />
          <p className='px-4 text-center'>(Get a Personalized Quote and Expert Advice Today.)</p>
        </div>
        <FeaturesSection2 width={width} />
        <div style={{
          top: '-86px',
          width: '100vw',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '60px 18.8px',
          position: 'relative',
          justifyContent: 'center',
          backgroundColor: '#f7f7f7',
        }}>
          <p
            style={{
              flexBasis: '100%',
              fontWeight: '500',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: 'rgb(42, 166, 208)',
            }}
          >What are your goals?</p>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '500',
              textAlign: 'center',
              textTransform: 'capitalize',
              padding: `${width > 420 && '0px 15px'}`
            }}
          >Contact Us for a free consultation</h2>
          <div style={{ height: '25px', flexBasis: '100%' }}></div>
          <button type="button" className='btn'
            style={{
              fontSize: '20px',
              fontWeight: '500',
              padding: '15px 35px',
              letterSpacing: '1px',
              border: '1px solid black',
              textTransform: 'uppercase',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderBottom: '0.8px solid rgb(0, 0, 0)',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
            }}>
            Request A Quote
          </button>
        </div>
        <FeaturesSection3 width={width} />
        <div style={{
          top: '-86px',
          width: '100vw',
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          padding: '0 4rem 30px',
          justifyContent: 'center',
          backgroundColor: '#f7f7f7',
        }}>
          <div>
            <div
              style={{
                display: 'grid',
                paddingTop: '40px',
                rowGap: `${width < 430 ? '3rem' : '0'}`,
                gridTemplateColumns: `${width < 430 ? '1fr' : '1fr 1fr 1fr 1fr'}`
              }}
              className='mx-auto'
            >
              <div style={{ padding: '0 17px' }}>
                <div style={{ paddingBottom: '40px', maxWidth: '333px' }}>
                  <p style={{ fontSize: '17px', fontWeight: '800' }}>About Us</p>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Founded in 2011, the key to our success has been a combination of consistently offering the lowest possible and above all providing outstanding customer service. We take pride in treating our clients with honesty and integrity.</p>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Company NMLS: xxxxxx</p>
                </div>
                <div>
                  <p style={{ fontSize: '17px', fontWeight: '800' }}>Equal Housing Authority</p>
                  <img width="75" height="75" alt="Equal Housing Opportunity" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" loading="lazy" src={houseImage} />
                </div>
              </div>
              <div style={{ padding: '0 17px' }}>
                <p style={{ fontSize: '17px', fontWeight: '800' }}>Contact Us</p>
                <div style={{
                  display: 'flex',
                  columnGap: '15px',
                  flexFlow: 'row',
                }}>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8"><path fill="currentColor" d="M4 0C2.34 0 1 1.34 1 3c0 2 3 5 3 5s3-3 3-5c0-1.66-1.34-3-3-3m0 1a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4"></path></svg></p>
                  <p>101 N. Acacia Avenue<br />Suite 113<br />Solana Beach, CA 92075</p>
                </div>
                <div style={{
                  display: 'flex',
                  columnGap: '15px',
                  flexFlow: 'row',
                }}>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#31373d" d="m34.06 26.407l-3.496-3.496a4.942 4.942 0 0 0-8.34 2.528c-5.765-1.078-11.372-6.662-11.721-11.653a4.908 4.908 0 0 0 2.586-1.36a4.943 4.943 0 0 0 0-6.99L9.594 1.94a4.943 4.943 0 0 0-6.99 0C-7.882 12.426 23.574 43.882 34.06 33.396a4.944 4.944 0 0 0 0-6.989"></path></svg></p>
                  <p>(877) 297-8055</p>
                </div>
                <div style={{
                  display: 'flex',
                  columnGap: '15px',
                  flexFlow: 'row',
                }}>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7c22.4 17.4 52.1 39.5 154.1 113.6c21.1 15.4 56.7 47.8 92.2 47.6c35.7.3 72-32.8 92.3-47.6c102-74.1 131.6-96.3 154-113.7M256 320c23.2.4 56.6-29.2 73.4-41.4c132.7-96.3 142.8-104.7 173.4-128.7c5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7c16.8 12.2 50.2 41.8 73.4 41.4" /></svg></p>
                  <p>info@vonkdigital.com</p>
                </div>
              </div>
              <div style={{ padding: '0 17px' }}>
                <p style={{ fontSize: '17px', fontWeight: '800' }}>Connect With Us</p>
                <div>
                  <div className='facebook-icon'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'inherit',
                      height: '1.846em',
                      width: '1.846em',
                      lineHeight: '1',
                      cursor: 'pointer',
                      textAlign: 'center',
                      borderRadius: 'inherit',
                      transition: 'all .15s ease',
                      boxSizing: 'content-box',
                      textDecoration: 'none',
                      padding: '0',
                      verticalAlign: 'top',
                      letterSpacing: 'normal',
                      backgroundColor: 'rgb(0, 0, 0)',
                      color: 'white',
                      marginRight: '5px',
                      marginBottom: '5px'
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                  </div>
                  <div className='facebook-icon'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'inherit',
                      height: '1.846em',
                      width: '1.846em',
                      lineHeight: '1',
                      cursor: 'pointer',
                      textAlign: 'center',
                      borderRadius: 'inherit',
                      transition: 'all .15s ease',
                      boxSizing: 'content-box',
                      textDecoration: 'none',
                      padding: '0',
                      verticalAlign: 'top',
                      letterSpacing: 'normal',
                      backgroundColor: 'rgb(0, 0, 0)',
                      color: 'white',
                      marginRight: '5px',
                      marginBottom: '5px'
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334" /></svg>
                  </div>
                  <div className='facebook-icon'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'inherit',
                      height: '1.846em',
                      width: '1.846em',
                      lineHeight: '1',
                      cursor: 'pointer',
                      textAlign: 'center',
                      borderRadius: 'inherit',
                      transition: 'all .15s ease',
                      boxSizing: 'content-box',
                      textDecoration: 'none',
                      padding: '0',
                      verticalAlign: 'top',
                      letterSpacing: 'normal',
                      backgroundColor: 'rgb(0, 0, 0)',
                      color: 'white',
                      marginRight: '5px',
                      marginBottom: '5px'
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg>
                  </div>
                  <div className='facebook-icon'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'inherit',
                      height: '1.846em',
                      width: '1.846em',
                      lineHeight: '1',
                      cursor: 'pointer',
                      textAlign: 'center',
                      borderRadius: 'inherit',
                      transition: 'all .15s ease',
                      boxSizing: 'content-box',
                      textDecoration: 'none',
                      padding: '0',
                      verticalAlign: 'top',
                      letterSpacing: 'normal',
                      backgroundColor: 'rgb(0, 0, 0)',
                      color: 'white',
                      marginRight: '5px',
                      marginBottom: '5px'
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" /></svg>
                  </div>
                  <div className='facebook-icon'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'inherit',
                      height: '1.846em',
                      width: '1.846em',
                      lineHeight: '1',
                      cursor: 'pointer',
                      textAlign: 'center',
                      borderRadius: 'inherit',
                      transition: 'all .15s ease',
                      boxSizing: 'content-box',
                      textDecoration: 'none',
                      padding: '0',
                      verticalAlign: 'top',
                      letterSpacing: 'normal',
                      backgroundColor: 'rgb(0, 0, 0)',
                      color: 'white',
                      marginRight: '5px',
                      marginBottom: '5px'
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08" /></svg>
                  </div>
                </div>
              </div>
              <div style={{ padding: '0 17px' }}>
                <p style={{ fontSize: '17px', fontWeight: '800' }}>Resources</p>
                <div>
                  <ul style={{ listStyle: 'none', padding: '0' }}>
                    <li style={{ padding: '8px 0' }}>Learning Center</li>
                    <li style={{ padding: '8px 0' }}>Contact Us</li>
                    <li style={{ padding: '8px 0' }}>Apply Online</li>
                    <li style={{ padding: '8px 0' }}>Get A Quote</li>
                    <li style={{ padding: '8px 0' }}>Reviews</li>
                    <li style={{ padding: '8px 0' }}>Mortgage Calculator</li>
                    <li style={{ padding: '8px 0' }}>NMLS Consumer Access</li>
                    <li style={{ padding: '8px 0' }}>ADA Accessibility Statement</li>
                    <li style={{ padding: '8px 0' }}>Real Estate Agent Recommendation</li>
                    <li style={{ padding: '8px 0' }}>Privacy Policy</li>
                    <li style={{ padding: '8px 0' }}>Communication Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          top: '-86px',
          width: '100vw',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '10px 18.8px',
          position: 'relative',
          justifyContent: 'center',
          backgroundColor: 'rgb(221, 221, 221)',
        }}>
          <p style={{
            color: 'rgb(158, 158, 158)',
            letterSpacing: '0px',
            textAlign: 'center',
            fontWeight: '300',
            fontSize: '12px'
          }}>The content provided within this website is presented for information purposes only. This is not a commitment to lend or extend credit. Information and/or dates are subject to change without notice. All loans are subject to credit approval. Other restrictions may apply. Mortgage loans may be arranged through third party providers.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
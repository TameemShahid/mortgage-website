import './MeetOurTeam.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import emp1 from '../../assets/meet_our_team/employee1-center-top-250x250@2x.jpg';
import emp2 from '../../assets/meet_our_team/employee2-center-top-250x250@2x.jpg';
import emp3 from '../../assets/meet_our_team/employee3-center-top-250x250@2x.jpg';
import emp4 from '../../assets/meet_our_team/employee4-center-top-250x250@2x.jpg';

const teamData = [
  {
    imgSrc: emp1,
    name: "Tom Jackson"
  },
  {
    imgSrc: emp2,
    name: "Stephanie Mills"
  },
  {
    imgSrc: emp3,
    name: "Liz Thomas"
  },
  {
    imgSrc: emp4,
    name: "Joseph Brady"
  }
]

const MeetOurTeam = () => {
  const navigate = useNavigate();

  const teamCards = () => {
    return teamData.map(e => {
      return (
        <div className='card-container'>
          <img alt={e.name} decoding="async" src={e.imgSrc} width="250" height="250" />
          <div className='text-column'>
            <h2>{e.name}</h2>
            <div className='divider mx-auto' />
            <p className='small-text mb-0'>Loan Officer</p>
            <p className='small-text'>NMLS#: 123456</p>
          </div>
        </div>
      )
    })
  }
  return (
    <div id='meet-team-container' className='main-content'>
      <div className='meetteam-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <p className='small-text'>Meet The Team</p>
            <p className='large-text'><strong>
              Backed By Great People,<br /> 100% Customer Focused.</strong></p>
            <div className='spacer'></div>
            <p className='paragraph'>The most important asset to our company, is our people. Our team was built with you as our focus.</p>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content mx-auto'>
            {teamCards()}
          </div>
        </div>
        <div className='section-3-container'>
          <div className='section-3-content'>
            <p>What are your goals?</p>
            <h2>Request a Free <br />Consultation</h2>
            <button type="button" className='btn btn-info' onClick={() => navigate('/quote')}>Get Started {">"}</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MeetOurTeam;
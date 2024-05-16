import './App.css';
import './assets/font-awesome.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import MobileMenu from './components/MobileMenu/MobileMenu.jsx';

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
} from 'react-router-dom';
import Learn from './pages/Learn/Learn.jsx';
import LoanOptions from './pages/LoanOptions/LoanOptions.jsx';
import ThankYou from './pages/ThankYou/ThankYou.jsx';
import PreQualify from './pages/Pre-Qualify/Pre-Qualify.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [overlayHeight, setOverlayHeight] = useState('1000px');

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   useEffect(() => {
      setTimeout(() => {
         if (document.getElementsByClassName('main-content')[0]) {
            setOverlayHeight(document.getElementsByClassName('main-content')[0].offsetHeight);
         } else {
            setOverlayHeight(document.getElementById('root').offsetHeight);
         }
      }, 500);
   }, [])


   return (
      <Router>
         <div style={{ overflowX: 'clip' }}>
            <div style={{
               top: '0',
               width: '100%',
               position: 'absolute',
               height: overlayHeight,
               display: isMenuOpen ? 'block' : 'none',
            }}>
               <div id='black-overlay' style={{ display: isMenuOpen ? 'block' : 'none' }} onClick={toggleMenu}></div>
            </div>
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Routes>
               <Route path='/' element={<Homepage />} />
               <Route path='/about-us' element={<AboutUs />} />
               <Route path='/learning-center' element={<Learn />} />
               <Route path='/pre-qualify' element={<PreQualify />} />
               <Route path='/loan-options' element={<LoanOptions />} />
               <Route path='/thank-you-for-mortgage-quote' element={<ThankYou />} />
            </Routes>
            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
         </div>
      </Router>
   )
}

export default App;

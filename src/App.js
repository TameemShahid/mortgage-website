import './App.css';
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
               <Route path='/learning-center' element={<Learn />} />
            </Routes>
            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
         </div>
      </Router>
   )
}

export default App;

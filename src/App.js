import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import MobileMenu from './components/MobileMenu/MobileMenu.jsx';
import VideoBackground from './components/VideoBackground/VideoBackground.jsx';
import Tagline from './components/Tagline/Tagline.jsx';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <div style=
         {{
            height: '2000px',
            width: '100%',
         }}
      >
         <div id='black-overlay' style={{ display: isMenuOpen ? 'block' : 'none' }} onClick={toggleMenu}></div>
         <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
         <div
            className={`main-content ${isMenuOpen ? 'dimmed' : ''}`}>
            <VideoBackground isMenuOpen={isMenuOpen} />
            <Tagline />
         </div>
         <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
   )
}

export default App;

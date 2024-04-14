import { useEffect, useState } from 'react';
import video from '../../assets/Home_Background_Video.mp4';

const VideoBackground = ({ isMenuOpen }) => {
  const [width, setWidth] = useState(window.innerWidth);

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
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: '-2'
    }}>
      <video autoPlay loop muted
        style={{
          width: '100%',
          height: width >= 768 ? '100vh' : '133vh',
          objectFit: 'none'
        }}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: '0'
        }}
      ></div>
    </div>
  )
}

export default VideoBackground;
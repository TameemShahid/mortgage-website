import { useEffect, useState } from 'react';
import video from '../../assets/Home_Background_Video.mp4';

const VideoBackground = ({ isMenuOpen }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState('133vh');

  const handleResize = () => {
    setWidth(window.innerWidth);
    handleContainerSize();
  }

  const handleContainerSize = () => {
    setContainerHeight(document.getElementById('tagline').offsetHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleContainerSize();

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
          height: containerHeight,
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
          height: containerHeight,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: '0'
        }}
      ></div>
    </div>
  )
}

export default VideoBackground;
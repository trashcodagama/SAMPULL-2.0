import React from 'react';
import videoBg from '../assets/videos/videoBg.mp4';

const Landing = ({ children }) => {
  return (
    <div className="Landing">
      <div className="overlay"></div>

      <video src={videoBg} autoPlay loop muted />
      <div className="content White">{children}</div>
    </div>
  );
};


export default React.memo(Landing);

import React from 'react';
import '../css/Counter.css'; // Import the CSS file

// Define the paths for your images
import progressImage1 from '../assets/images/circle2.svg';
import progressImage2 from '../assets/images/circle3.svg';
import progressImage3 from '../assets/images/circle.svg';

const NumberCounter = ({ count, imageSrc }) => {
  return (
    <div className="counter-container">
      <div className="counter-circle">
        {/* Background image for the progress circle */}
        <img
          src={imageSrc}
          alt="Progress Circle"
          className="counter-progress-image"
        />

        {/* Text centered inside the circle with its own background */}
        <div className='counter-text-bg'>
          {count}+
        </div>
      </div>
    </div>
  );
};

const Counter = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="counters-row">
        <div className="counter-item">
          <NumberCounter count={50} imageSrc={progressImage3} />
          <h3 className="counter-label">Year Legacy</h3>
        </div>
        <div className="counter-item">
          <NumberCounter count={2000} imageSrc={progressImage1} />
          <h3 className="counter-label">Projects</h3>
        </div>
        <div className="counter-item">
          <NumberCounter count={50} imageSrc={progressImage3} />
          <h3 className="counter-label">Experts</h3>
        </div>
        <div className="counter-item">
          <NumberCounter count={500000} imageSrc={progressImage2} />
          <h3 className="counter-label">Entrepreneurs Created</h3>
        </div>
        <div className="counter-item">
          <NumberCounter count={100} imageSrc={progressImage1} />
          <h3 className="counter-label">Partnerships</h3>
        </div>
      </div>
    </div>
  );
};

export default Counter;
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../css/Sliderhome.css'; // Import the dedicated CSS file

import decobg from '../assets/images/Group48095817.png'; // Decorative frame image
import ins from '../assets/images/Insurance.png'; // Ensure this image is imported for the first slide 
import obj1 from '../assets/images/object-1.png'; // Second slide image
import  obj2 from '../assets/images/object-2.png'; // Third slide image
import obj3 from '../assets/images/object-3.png'; // Fourth slide image
import obj4 from '../assets/images/object-4.png'; // Fifth slide image

function Sliderhome() {
  // Array of slide data to avoid repetition
  const slides = [
    {
      image: ins,
      title: "Enroll Now for CM YUVA Udyami Vikas",
      subtitle: "get certificate after giving Assessment",
      buttonLink: "http://udyami.upicon.in/",
      buttonText: "Learn More"
    },
    {
      image: obj1,
      title: "Want to Revive and accelerate MSME Business?",
      subtitle: "Get Support from World-Bank Funded Program - RAMP",
      buttonText: "Learn More"
    },
    {
      image: obj2,
      title: "Need MSME Financial Assistance?",
      subtitle: "Competent Interest Rates",
      buttonText: "Learn More"
    },
    {
      image: obj3,
      title: "Do You Want to Become An Entrepreneur?",
      subtitle: "Easy Steps",
      buttonLink: "http://udyami.upicon.in/",
      buttonText: "Learn More"
    },
    {
      image: "../assets/images/object-4.png", // This slide matches the requested image
      title: "Do You Want to Get the Agri-Loan?",
      subtitle: "Quick Sanction",
      buttonText: "Learn More"
    }
  ];

  return (
    <div className="container-fluid g-0">
      <div className="slider-home">
        <Carousel interval={3000} fade>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="row g-0">
                {/* Left Column: Image */}
                <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="slider-image"
                  />
                </div>

                {/* Right Column: Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 p-0 content-column">
                  <div className="content-wrapper">
                    {/* Decorative Frame Image */}
                    <img
                      src={decobg}
                      alt="Decorative Frame"
                      className="decorative-frame"
                    />
                    
                    {/* Text and Button Container */}
                    <div className="text-overlay">
                      <h3 className="slider-title">{slide.title}</h3>
                      <p className="slider-subtitle">{slide.subtitle}</p>
                      <Button 
                        className="learn-more-btn" 
                        href={slide.buttonLink} 
                        target={slide.buttonLink ? "_blank" : "_self"}
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Sliderhome;
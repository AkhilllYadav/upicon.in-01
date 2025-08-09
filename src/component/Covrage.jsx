import React from "react";
import { FaQuoteLeft } from 'react-icons/fa';
import '../css/Coverage.css'; // Import the dedicated CSS file

import video1 from '../assets/Video/1682918705027049.compressed.mp4'; // Ensure this video is in the correct path
// import videoPoster from '../assets/images/vidio.jpeg'; // Poster image for the video
import approachIcon from '../assets/images/Rectangle.png'; // Icon for the approach section
import honouredImage from '../assets/images/Honoured.png'; // Image for the honoured section
import rectangleImage from '../assets/images/RectangleL.png'; // Image for the rectangle section

const Covrage = () => {
    return (
        <section id="covrage" className="container-fluid covrage-section">
            <div className="container">
                <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
                    {/* Left Column */}
                    <div className="col-lg-5 col-md-12">
                        <h5 className='text-start shorthead chooseus'>50 Years of UPICON</h5>
                        <h2 className='text-start fw-bold mt-4'>5 Decades of Transforming Uttar Pradesh’s Entrepreneurship Landscape</h2>
                        <p className='text-start covrage-text'>
                            At UPICON, we distinguish ourselves as the ideal choice for industrial consultancy due to our vision and unwavering commitment to excellence... (and so on)
                        </p>
                        <a href="/about" className="btn-get-started text-white float-start">Learn More</a>
                        
                        <video
                            controls
                            className="responsive-video shadow"
                            
                        >
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Middle Column */}
                    <div className="col-lg-4 col-md-12 text-center">
                        <img 
                            src={approachIcon}   
                            alt="Approach Icon" 
                            className="img-fluid shadow covrage-img-middle" 
                        />
                        <div className="card text-center border-0 text-box">
                            <div className="card-body text-italic p-3">
                                <FaQuoteLeft size="1.5em" className="quote-icon" />
                                <p className="card-text fst-italic ms-4 quote-text">
                                    At Upicon, we excel in providing comprehensive solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-3 col-md-12">
                        <div className="row gy-3">
                            <div className="col-12">
                                <img 
                                    src={rectangleImage} 
                                    alt="Approach Icon" 
                                    className="img-fluid rounded shadow covrage-img-right" 
                                />
                            </div>
                            <div className="col-12">
                                <img 
                                    src={honouredImage} 
                                    alt="Honoured" 
                                    className="img-fluid rounded shadow covrage-img-right" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Covrage;
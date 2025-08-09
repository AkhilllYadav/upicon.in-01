import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { Card, Row, Col } from "react-bootstrap";
import axios from '../apiConfig';

// Import local assets and data
import about01 from '../assets/images/about1.png';
import about02 from '../assets/images/about2.png';
import { empowermentCards, initiativesCards, executionCards, supportCards } from '../data/aboutPageData.js';

// Import the dedicated CSS file
import '../css/index.css';

const About = () => {
  const [meta, setMeta] = useState({
    meta_title: 'About | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind UPICON.',
    meta_keywords: 'about, mission, vision, UPICON, industrial consultants',
  });

  // Fetch meta tags when the component mounts
  useEffect(() => {
    axios.get('/meta-tags/about')
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data);
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>
      
      <section id="about-page">
        {/* --- Hero Banner --- */}
        <div className="about-hero-banner">
          <div className="container">
            <h1 className='about-hero-title'>About UP Industrial Consultants Limited</h1>
          </div>
        </div>

        {/* --- Overview Section --- */}
        <div className="container about-section">
          <Row>
            <Col lg={7} md={6}>
              <h5 className='section-subhead'>Overview</h5>
              <h2 className='section-head'>Detailed Information About The Coverage Offered By UP Industrial Consultants Limited</h2>
              <p className="about-paragraph">In Uttar Pradesh, the heartland of India, Micro, Small, and Medium Enterprises (MSMEs) form the backbone of our economy, driving innovation, generating employment, and promoting inclusive entrepreneurial growth. At UPICON, we recognize the immense potential of this sector and are committed to taking the necessary steps to ensure its continued success.

UP Industrial Consultants Limited was established by the Government of Uttar Pradesh in 1974 and further restructured in 1976 by the Industrial Development Bank of India (IDBI). As a visionary consultancy organization, UPICON is dedicated to being a provider of end-to-end support to micro, small, and medium enterprises (MSMEs) while building a dynamic entrepreneurial ecosystem. Our core mission has always been to encourage and nurture entrepreneurship by offering resources, mentorship, and financial assistance to local businesses to succeed and contribute to the economy growth.

Uttar Pradesh is experiencing a surge in entrepreneurial spirit, with MSMEs venturing into diverse sectors such as manufacturing, technology, agriculture, and services. This growth reflects the evolving and adaptive small business ecosystem and the drive of entrepreneurs to explore new opportunities. To further support this growth, UPICON plays a crucial role in facilitating access to skill development through various training programs for artisans and aspiring entrepreneurs, providing consultancy for new businesses, assistance in securing financial aid, advocating for technology upgrades, and expanding access to markets.

We firmly believe that government initiatives are crucial for the growth of Uttar Pradesh's economy. Programs like the Vishwakarma Shram Samman Yojana (VSSY), World-Bank Funded Project – RAMP, SANKALP, One District One Product (ODOP), Jal Jeevan Mission, schemes for SC/ST/OBC communities, Handicraft, Mission Shakti, and many more are instrumental in uplifting the underprivileged, providing skills and training to artisans and aspiring business owners, and empowering them to earn their livelihoods and build better lives. These initiatives not only strengthen individual livelihoods but also contribute significantly to the state's overall economic and entrepreneurship development.</p>
            </Col>
            <Col lg={5} md={6} className="d-flex flex-column">
              <img src={about01} alt="Team discussion" className="img-fluid rounded mb-3 mt-2 w-100" />
              <img src={about02} alt="Industrial site" className="img-fluid rounded mb-3 w-100 mt-4" />
            </Col>
          </Row>
        </div>

        {/* --- Empowering MSMEs Section --- */}
        <div className="container-fluid empower-section">
            <div className="container">
                <h5 className="section-subhead">UPICON Empowering MSMEs and Entrepreneurs</h5>
                <h2 className="section-head">With Government Programs: UPICON Empowering MSMEs and Entrepreneurs</h2>
                <p className="about-paragraph">UPICON takes a proactive role in executing these vital government initiatives...</p>
                <Row className="g-3 mt-4">
                    {empowermentCards.map((card, index) => (
                        <Col key={index} xs={12} md={6} lg={3} className="d-flex">
                            <div className="info-card-vertical">
                                <div className="info-card-title-section"><h5>{card.title}</h5></div>
                                <div className="info-card-text-section">
                                    {card.text}
                                    <div className="orange-divider"></div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
        
        {/* ... Other sections would follow a similar, clean pattern ... */}

        {/* --- How We Execute Projects Section --- */}
        <div className="container about-section">
            <h5 className="section-subhead">Project Planning</h5>
            <h2 className="section-head">How We Execute Projects</h2>
            <p className="about-paragraph">At UPICON, we believe in the power of micro, small, and medium-sized industries...</p>
            
            {/* Horizontal Cards */}
            <Row>
                {executionCards.slice(0, 2).map((card, index) => (
                    <Col key={index} md={6} className="mb-4">
                        <div className="info-card-horizontal">
                            <img src={card.img} alt={card.title} className="info-card-horizontal-img" />
                            <div className="info-card-horizontal-body">
                                <h5>{card.title}</h5>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Vertical Cards */}
            <Row className="justify-content-center">
                 {executionCards.slice(2, 5).map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                        <Card className="info-card-vertical-styled h-100">
                           <Card.Img variant="top" src={card.img} className="p-2"/>
                           <Card.Body>
                             <Card.Title className="fw-bold">{card.title}</Card.Title>
                             <Card.Text>{card.text}</Card.Text>
                           </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Large Support Cards */}
             <Row>
                {supportCards.map((card, index) => (
                    <Col key={index} md={6} className="mb-4">
                         <div className="info-card-horizontal">
                            <img src={card.img} alt={card.title} className="info-card-horizontal-img" />
                            <div className="info-card-horizontal-body">
                                <h5>{card.title}</h5>
                                {Array.isArray(card.text) ? (
                                    <>
                                      <p>{card.text[0]}</p>
                                      <ul className="custom-list">
                                        {card.text.slice(1).map((point, i) => <li key={i}>{point}</li>)}
                                      </ul>
                                    </>
                                ) : ( <p>{card.text}</p> )}
                            </div>
                        </div>
                    </Col>
                ))}
             </Row>
        </div>
      </section>
    </>
  );
};

export default About;
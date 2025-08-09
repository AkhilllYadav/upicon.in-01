import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, Row, Col } from 'react-bootstrap';
import axios from '../apiConfig';

// Import the dedicated CSS file, data, and image assets
import '../css/About.css';
import {
  empowermentCards,
  initiativesCards,
  executionCards,
  supportCards
} from '../data/aboutPageData.js';
import about01 from '../assets/images/about1.png';
import about02 from '../assets/images/about2.png';

const About = () => {
  const [meta, setMeta] = useState({
    meta_title: 'About | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind UPICON.',
    meta_keywords: 'about, mission, vision, UPICON, industrial consultants',
  });

  useEffect(() => {
    // In a real app, you would fetch this data
    // axios.get('/meta-tags/about').then(...)
  }, []);

  return (
    <>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>

      <div className="about-page">
        {/* --- Hero Banner --- */}
        <section className="hero-banner">
          <div className="container">
            <h1 className="hero-title">About UP Industrial Consultants Limited</h1>
          </div>
        </section>

        {/* --- Overview Section --- */}
        <section className="container section-padding">
          <Row>
            <Col lg={7} md={12}>
              <h5 className="section-subhead">Overview</h5>
              <h2 className="section-head">Detailed Information About The Coverage Offered By UP Industrial Consultants Limited</h2>
              <p className="section-paragraph">
                In Uttar Pradesh, the heartland of India, Micro, Small, and Medium Enterprises (MSMEs) form the backbone of our economy, driving innovation, generating employment, and promoting inclusive entrepreneurial growth. At UPICON, we recognize the immense potential of this sector and are committed to taking the necessary steps to ensure its continued success.
              </p>
              <p className="section-paragraph">
                UP Industrial Consultants Limited was established by the Government of Uttar Pradesh in 1974 and further restructured in 1976 by the Industrial Development Bank of India (IDBI). As a visionary consultancy organization, UPICON is dedicated to being a provider of end-to-end support to micro, small, and medium enterprises (MSMEs) while building a dynamic entrepreneurial ecosystem. Our core mission has always been to encourage and nurture entrepreneurship by offering resources, mentorship, and financial assistance to local businesses to succeed and contribute to the economy growth.
              </p>
              <p className="section-paragraph">
                Uttar Pradesh is experiencing a surge in entrepreneurial spirit, with MSMEs venturing into diverse sectors such as manufacturing, technology, agriculture, and services. This growth reflects the evolving and adaptive small business ecosystem and the drive of entrepreneurs to explore new opportunities. To further support this growth, UPICON plays a crucial role in facilitating access to skill development through various training programs for artisans and aspiring entrepreneurs, providing consultancy for new businesses, assistance in securing financial aid, advocating for technology upgrades, and expanding access to markets.
              </p>
              <p className="section-paragraph">
                We firmly believe that government initiatives are crucial for the growth of Uttar Pradesh's economy. Programs like the Vishwakarma Shram Samman Yojana (VSSY), World-Bank Funded Project – RAMP, SANKALP, One District One Product (ODOP), Jal Jeevan Mission, schemes for SC/ST/OBC communities, Handicraft, Mission Shakti, and many more are instrumental in uplifting the underprivileged, providing skills and training to artisans and aspiring business owners, and empowering them to earn their livelihoods and build better lives. These initiatives not only strengthen individual livelihoods but also contribute significantly to the state's overall economic and entrepreneurship development.
              </p>
            </Col>
            <Col lg={5} md={12} className="overview-images">
              <img src={about01} alt="UPICON Team Members" className="img-fluid rounded shadow-sm mb-4" />
              <img src={about02} alt="UPICON Event" className="img-fluid rounded shadow-sm" />
            </Col>
          </Row>
        </section>

        {/* --- Empowering with Government Programs Section --- */}
        <section className="empower-section section-padding">
          <div className="container">
            <h5 className="section-subhead">UPICON Empowering MSMEs and Entrepreneurs</h5>
            <h2 className="section-head">With Government Programs: UPICON Empowering MSMEs and Entrepreneurs</h2>
            <p className="section-paragraph">UPICON takes a proactive role in executing these vital government initiatives, to ensure their effective implementation and maximum impact. We work closely with various government departments and agencies to:</p>
            <Row className="g-4 mt-3">
              {empowermentCards.map((card, index) => (
                <Col key={index} lg={3} md={6} className="d-flex">
                  <div className="empowerment-card">
                    <div className="empowerment-card-title"><h5>{card.title}</h5></div>
                    <div className="empowerment-card-text">
                      {card.text}
                      <div className="orange-divider"></div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* --- UPICON's Initiatives Section --- */}
        <section className="initiatives-section section-padding">
            <div className="container">
                <h5 className="section-subhead">UPICON and MSME’s</h5>
                <h2 className="section-head">UPICON’s Initiatives to Empower MSMEs</h2>
                <p className="section-paragraph">In addition to our role in executing government programs, UPICON is actively involved in several other initiatives to empower MSMEs and foster entrepreneurship in Uttar Pradesh. These include:</p>
                <Row className="g-4 mt-3">
                    {initiativesCards.map((card, index) => (
                        <Col key={index} lg={3} md={6} className="d-flex">
                            <Card className="initiative-card">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title as="h5">{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>

        {/* --- Text Sections: History, Offices, Problem Solving --- */}
        <section className="container section-padding">
            <div className="text-section">
                <h5 className="section-subhead">UPICON History</h5>
                <h2 className="section-head">UPICON’s Local History</h2>
                <p className="section-paragraph">With a legacy dating back to 1974, we began with the vision of supporting and empowering entrepreneurs across Uttar Pradesh. Over the years, we have established a rich history of advancing entrepreneurship, promoting skill development, and ensuring financial stability by assisting individuals in obtaining financial aid. This was all possible throughout these years only when we evolved and adopted new technology, IOT, AI, and many revolutionary processes. UPICON's consultancy and innovation-driven solutions have changed the small business ecosystem of Uttar Pradesh with its commitment to evolution and adaptability.</p>
            </div>
             <div className="text-section">
                <h5 className="section-subhead">UPICON Offices</h5>
                <h2 className="section-head">Offices That Have Grown Over Time</h2>
                <p className="section-paragraph">We started with our headquarters in Kanpur; now, we have expanded to five more branches, totalling six offices across the country, including Lucknow, Bhopal, Prayagraj, Patna, and Noida. This strategic positioning allows us to serve the industrial sector's diverse needs effectively. UPICON's evolution reflects our commitment to adapting and expanding our services to help the industrial landscape and entrepreneurship graph grow.</p>
            </div>
             <div className="text-section">
                <h5 className="section-subhead">Problem Solving</h5>
                <h2 className="section-head">What Problems Can UPICON Solve?</h2>
                <p className="section-paragraph">The vision of UPICON is to address the challenges of rural development and promote entrepreneurship across Uttar Pradesh and, eventually Pan India. The Mission of UPICON is to provide consultancy to micro, small, and medium enterprises (MSMEs) while building and promoting a micro-business ecosystem. We are able to achieve this by facilitating skills training and development under various government programs, ensuring banking inclusion, enhancing workforce development, implementing social welfare projects, empowering women, ensuring safety and auditing, acquiring innovation, and adopting technology to secure prosperity.</p>
            </div>
        </section>

        {/* --- How We Execute Projects Section --- */}
        <section className="container section-padding">
            <h5 className="section-subhead">Project Planning</h5>
            <h2 className="section-head">How We Execute Projects</h2>
            <p className="section-paragraph">At UPICON, we believe in the power of micro, small, and medium-sized industries to drive economic progress and prosperity to the state. We have a network of dedicated professionals, including office staff, field workers, trainers, and managers, who work tirelessly to provide new businesses with the expertise, resources, and support they need to thrive. We manage and execute each project end-to-end through our detailed execution plans, which include:</p>

            <Row className="g-4 mt-3">
                {executionCards.map((card, index) => (
                    <Col key={index} lg={6} className="d-flex">
                        <div className="execution-card-horizontal">
                            <img src={card.img} alt={card.title} className="execution-card-img" />
                            <div className="execution-card-body">
                                <h5>{card.title}</h5>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            <Row className="g-4 mt-4">
                {supportCards.map((card, index) => (
                    <Col key={index} lg={4} md={6} className="d-flex">
                        <Card className="execution-card-vertical">
                           <Card.Img variant="top" src={card.img} />
                           <Card.Body>
                             <Card.Title as="h5">{card.title}</Card.Title>
                             <Card.Text>{card.text}</Card.Text>
                           </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
            <Row className="g-4 mt-4">
               {/* This section can be expanded with more data if needed */}
            </Row>

        </section>
        
        {/* --- Final Paragraph --- */}
        <section className="container section-padding pt-0">
            <p className="section-paragraph">UPICON is dedicated to building a future where industry and society grow together. Our commitment to socio-economic development is evident in our initiatives that empower communities, support small businesses, and create sustainable growth opportunities. We are proud to be a trusted partner to small businesses, helping them overcome the complexities of the industrial world. We are working tirelessly to pave the way for a brighter, more inclusive Uttar Pradesh and India. Together, we can achieve great things and make a lasting impact on the entire small Business Ecosystem. All the initiatives that UPICON takes are to promote entrepreneurship and support the growth of startups in the entire Uttar Pradesh & eventually pan India.</p>
        </section>
      </div>
    </>
  );
};

export default About;
import React, { useState,useEffect, useRef } from 'react';

import { Carousel } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/SocialIcons.css';
import '../assets/css/smartfund.css';
import { Helmet } from 'react-helmet';
import axios from '../apiConfig'; 
const SmartFund = () => {
    const [meta, setMeta] = useState({
      meta_title: 'Smartfund | UPICON',
      meta_description: 'Learn about our mission, vision, and the team behind My Website.',
      meta_keywords: 'UPICON, industrial consultants',
    });
  
    useEffect(() => {
      // Fetch meta tags for the 'business units' page with URL encoding for space
      axios.get('/meta-tags/smartfund') // URL encoded for spaces
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data); // Update state with dynamic meta tags
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
  }, []); 
  const containerRef = useRef(null);
  const circlesRef = useRef([]);

  const texts = [
    "Submit Pitch Deck",
    "Investor Identification",
    "UPICON Mandate and Terms",
    "Initial Review, Call for Business Plan & VDR",
    "Due Diligence",
    "Term Sheet",
    "Equity/Debt Agreement"
  ];

  useEffect(() => {
    const container = containerRef.current;
    const circles = circlesRef.current.filter(Boolean);
    const rotation = 360 / circles.length;

    const setCirclePositions = () => {
      const isSmallScreen = window.innerWidth <= 768;
      const radius = isSmallScreen
        ? container.offsetWidth / 2 - circles[0].offsetWidth / 8
        : container.offsetWidth / 2 - circles[0].offsetWidth / 8;

      circles.forEach((circle, i) => {
        const value = `rotate(${i * rotation}deg) translate(${radius}px) rotate(-${i * rotation}deg)`;
        circle.style.transform = value;
      });
    };

    setCirclePositions();
    window.addEventListener('resize', setCirclePositions);

    return () => {
      window.removeEventListener('resize', setCirclePositions);
    };
  }, []);

  return (
    <>
      <Helmet>
                        <title>{meta.meta_title}</title>
                        <meta name="description" content={meta.meta_description} />
                        <meta name="keywords" content={meta.meta_keywords} />
                      </Helmet>
        {/* <Helmet>
                    <title>Smartfund | UPICON</title>
                    <meta name="description" content="Learn about our mission, vision, and the team behind My Website." />
                    <meta name="keywords" content="about, mission, vision, team" />
                  </Helmet> */}
  
    <section id="smartfund" className="mt-5">
      <div className="container-fluid position-relative smartfund">
        <div className="container my-5">
          <div className="row gy-5 align-items-center justify-content-center text-center">
            <div className="">
              <h1 className="my-5 text-center p-5 text-white display-5 fw-bold">UPICON's 50th Anniversary Initiative for SmartCap Fund: From Investment to Business Development</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <h5 className="text-start shorthead sectionhead">Business Unit</h5>
            <h2 className="text-start">SmartCap Fund: “UPICON’s 50th Anniversary Initiative for Supporting Early-Stage Startups”</h2>
          </div>
        </div>
        <div className="row">
      <div className="col-lg-12">
        <Carousel id="customCarousel1" controls={false} >
          <Carousel.Item className="carousel-item my-5">
            <div className="container fundcinatiner">
              <div className="row bg-warning funtsection align-items-center">
                <div className="col-lg-6 p-5">
                  <h3 className="text-white content text-end">
                    “Uttar Pradesh Start-up Workshop-2023: Fostering Entrepreneurship and Innovation for Unicorn Creation”
                  </h3>
                </div>
                <div className="col-lg-6 funddetail p-5">
                  <div className='card fundimgs'>
                    <img src="/assets/images/4.webp" alt="Black pottery" className="fimg" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item my-5">
            <div className="container fundcinatiner">
              <div className="row bg-warning funtsection align-items-center">
                <div className="col-lg-6 p-5">
                  <h3 className="text-white content text-end">
                    “UPICON's 50th Anniversary Initiative for SmartCap Fund: From Investment to Business Development”
                  </h3>
                </div>
                <div className="col-lg-6 funddetail p-5">
                  <div className='card fundimgs'>
                    <img src="/assets/images/4.webp" alt="Black pottery" className="fimg" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item my-5">
            <div className="container fundcinatiner">
              <div className="row bg-warning funtsection align-items-center">
                <div className="col-lg-6 p-5">
                  <h3 className="text-white content text-end">
                    “50 Years of Empowering Startups: UPICON's Legacy of Support and Success”
                  </h3>
                </div>
                <div className="col-lg-6 funddetail p-5">
                  <div className='card fundimgs'>
                    <img src="/assets/images/4.webp" alt="Black pottery" className="fimg" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item my-5">
            <div className="container fundcinatiner">
              <div className="row bg-warning funtsection align-items-center">
                <div className="col-lg-6 p-5">
                  <h3 className="text-white content text-end">
                    “Uttar Pradesh Start-up Workshop-2023: Fostering Entrepreneurship and Innovation for Unicorn Creation”
                  </h3>
                </div>
                <div className="col-lg-6 funddetail p-5">
                  <div className='card fundimgs'>
                    <img src="/assets/images/4.webp" alt="Black pottery" className="fimg" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item my-5">
            <div className="container fundcinatiner">
              <div className="row bg-warning funtsection align-items-center">
                <div className="col-lg-6 p-5">
                  <h3 className="text-white content text-end">
                    "Black pottery teaches us that life itself is an art, and every piece created is a testament to the power of human creativity"
                  </h3>
                </div>
                <div className="col-lg-6 funddetail p-5">
                  <div className='card fundimgs'>
                    <img src="/assets/images/4.webp" alt="Black pottery" className="fimg" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
        <div className="row mb-3">
          <h5 className='text-start'> The SmartCap Fund offers several benefits for startups, including:</h5>
          <div className="col-lg-12 text-start mt-3">
            <div className="timeline">
              <div className="timeline-item">
                <h5 className="card-title"> Financial Assistance</h5>
                <p className="card-text">Startups can receive seed capital and equity investments to help them establish and grow their businesses.</p>
              </div>
              <div className="timeline-item">
                <h5 className="card-title">Mentorship</h5>
                <p className="card-text">Startups can benefit from mentorship from experienced entrepreneurs and industry experts</p>
              </div>
              <div className="timeline-item">
                <h5 className="card-title">Networking Opportunities</h5>
                <p className="card-text">SmartCap Fund provides startups with access to a vast network of potential investors, customers, and partners.</p>
              </div>
              <div className="timeline-item">
                <h5 className="card-title">Business Development Support</h5>
                <p className="card-text">Startups can benefit from assistance with business planning, marketing, and other essential functions.</p>
              </div>
              <div className="timeline-item">
                <h5 className="card-title">Increased Exposure</h5>
                <p className="card-text">Startups selected for investment by SmartCap Fund will receive increased exposure to potential customers, investors, and partners.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
  <div className="row mt-5 mb-3">
    <div className="col-lg-12">
      <h5 className="text-start shorthead headfundsection sectionhead">Business Unit</h5>
      <h2 className="text-start">Claiming The Crown</h2>
      <p className="text-start">SmartCap Funded winners from our Workshop</p>
    </div>
  </div>
  <div className="row mb-5">
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div className="row g-0">
          <div className="col-8">
            <img src="/assets/images/c2.webp" alt="Entrepreneurship Development" className="img-fluid fundimg" />
          </div>
          <div className="col-4 cardheadfund d-flex align-items-center">
            <h5 className="card-title text-end p-3">ACS Jewels & Stones Pvt. Ltd.</h5>
          </div>
        </div>
        <div className="card-body cardcolor">
          <p className="card-text cardpara text-start fs-6 p-1">ACS Jewels & Stones is an avant-garde B2B platform that is transforming the gems & jewelry trade via cutting-edge technology & innovative supply chain mechanisms. Their unwavering focus on innovation, transparency, & elevated standards is aptly reflected in their motto, “Vishwas se Vyapar.”</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div className="row g-0">
          <div className="col-8">
            <img src="/assets/images/c1.webp" alt="Entrepreneurship Development" className="img-fluid fundimg" />
          </div>
          <div className="col-4 cardheadfund d-flex align-items-center">
            <h5 className="card-title text-end p-3 mt-5">AgroNxt</h5>
          </div>
        </div>
        <div className="card-body cardcolor">
          <p className="card-text cardpara text-start fs-6 p-1">AgroNxt is an innovative agriculture platform that provides intelligent solutions & services to Indian farmers. The company aims to the revolutionize of the farming industry by the enlisting participation of the various stakeholders. Their deep tech expertise enables them to create bespoke soil health solutions.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div className="row g-0">
          <div className="col-8">
            <img src="/assets/images/c3.webp" alt="Entrepreneurship Development" className="img-fluid fundimg" />
          </div>
          <div className="col-4 cardheadfund d-flex align-items-center">
            <h5 className="card-title text-end p-3 mt-4">LCB Fertilizers</h5>
          </div>
        </div>
        <div className="card-body cardcolor">
          <p className="card-text cardpara text-start fs-6 p-1">LCB Fertilizers aims to the offer natural fertilizer, high-quality fertilizers and farming products to the farmers across India using bio-tech, nano-tech, and chemical engineering. Founded in 2020, The LCB Fertilizers provides crop – specific solutions to the increase yields and the profits while reducing investments.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    <div className="container">
      <div className="row mt-5 mb-3">
        <div className="col-12">
          <h5 className="text-start shorthead underline">Business Unit</h5>
          <h2 className="text-start">Visual Archive</h2>
          <p className="text-start">Thanks to all for making this event successful</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-8 col-md-12 mb-3">
          <video controls className="img-fluid rounded shadow">
            <source src="/assets/images/1682918705027049.compressed.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="accordion-card">
            <Carousel id="customCarousel1" controls={false}>
              {['m-1.webp', 'm2.webp', 'm3.webp', 'm4.webp', 'm5.webp', 'm6.webp', 'm7.webp', 'm8.webp'].map((image, index) => (
                <Carousel.Item key={index} className="carousel-items">
                  <div className='card accordioncard'>
                    <img
                      src={`/assets/images/${image}`}
                      alt="Visual Archive"
                      className="funimgcarousell img-fluid"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  

        <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-lg-12">
          <h2 className="text-start text-center Investhead fw-bold">We Invest, Build & Grow Startups</h2>
        </div>
      </div>
      <div className='row my-5'>
        <div className="col-lg-12 d-flex justify-content-center align-items-center flex-column">
          <div className="circle-container" ref={containerRef}>
            <div className="testdiv">
              <img
                src="/assets/images/work.webp"
                alt="Corporate Social Responsibility"
                className="testinground"
              />
              <h5 className="text-center text-white fundprocrss position-absolute top-44  fw-bold fs-2 m-0">UPICON Smart Cap <br/>Fund Process</h5>
            </div>
            {texts.map((text, i) => (
              <li className="circle-item" ref={el => circlesRef.current[i] = el} key={i}>
                <span className="circle-info">{text}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>

      </div>
    </section>
    </>
  );
}

export default SmartFund;

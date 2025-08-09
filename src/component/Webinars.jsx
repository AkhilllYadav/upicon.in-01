import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; 
import axios from '../apiConfig'; 
const Webinars = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Webinars & Recorded Sessions | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'UPICON, industrial consultants',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    axios.get('/meta-tags/webinars') // URL encoded for spaces
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data); // Update state with dynamic meta tags
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
  }, []);
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
      .resarch {
        background: linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/articalrearch.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 120px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .read-more-links {
        color: #3EB7BB;
        text-decoration: none;
        font-weight: bold;
        display: block;
        margin-top: 10px;
        text-align: left;
      }
      .sectionhead::after {
        content: '';
        position: absolute;
        left: 1px;
        bottom: -6px;
        width: 60px;
        height: 2px;
        background-color: #e68021;
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

   
    const videos = [
      {
          id: 1,
          title: "ESG Workshop Webinar",
          src: "/assets/videos/esg_workshop_webinar.mp4",
          thumbnail: "/assets/images/videoimg2.png",
      },
      {
          id: 2,
          title: "ESG Recorded Session",
          src: "/assets/videos/esg_recorded_session.mp4",
          thumbnail: "/assets/images/videoimg.png",
      },
      {
          id: 3,
          title: "Advanced Manufacturing Technologies",
          src: "/comingsoon",
          thumbnail: "/assets/images/videoimg1.png",
      },
  ];

    return (
        <>
          <Helmet>
                <title>{meta.meta_title}</title>
                <meta name="description" content={meta.meta_description} />
                <meta name="keywords" content={meta.meta_keywords} />
              </Helmet>
       

            <div className="container-fluid">
                <div className="row resarch">
                    <h5 className="my-5 text-center p-5 text-white display-4 fw-bold">
                        Webinars & Recorded Sessions
                    </h5>
                </div>
            </div>

            <Container className="mt-4">
                <div className="eleranacc col-lg-12 col-md-6 articlescol">
                    <h5 className="text-start shorthead sectionhead">UPICON Webinars</h5>
                    <div className="col-lg-10 col-md-6 p-0">
                        <h2 className="text-start fw-bold">Webinars & Recorded Sessions</h2>
                    </div>
                    <p className="text-start" style={{ color: "#6E6E6E" }}>
                        Explore our collection of educational webinars and recorded sessions covering various topics.
                    </p>
                </div>

                <Row className="g-4 my-5">
                {videos.map((video) => (
  <Col key={video.id} md={4}>
    <Card className="shadow-sm">
      <Card.Body>
      <a href={video.src} target="_blank" rel="noopener noreferrer">
  <img
    src={video.thumbnail}
    alt="Video Thumbnail"
    width="100%"
    height="200"
    style={{ cursor: "pointer" }}
  />
</a>

        {/* <img
          src={video.thumbnail}
          alt="Video Thumbnail"
          width="100%"
          height="200"
          href={video.src}
          target="_blank"
          style={{ cursor: "pointer" }}
        /> */}
        <Card.Title className="mt-2">{video.title}</Card.Title>
        <Link to={video.src} target="_blank" className="read-more-links">
  View Full Video <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>
</Link>

        
      </Card.Body>
    </Card>
  </Col>
))}
                </Row>
            </Container>
        </>
    );
};

export default Webinars;

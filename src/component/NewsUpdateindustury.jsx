// import React, { useState, useEffect } from 'react';
// import axios from '../apiConfig';
// import { Helmet } from "react-helmet";
// import { Card, Row, Col } from "react-bootstrap"; // Import Bootstrap components
// import { Link } from "react-router-dom";

// const Industry = () => {

//     const [meta, setMeta] = useState({
//         meta_title: 'Industry News & Updates  | UPICON',
//         meta_description: 'Learn about our mission, vision, and the team behind My Website.',
//         meta_keywords: 'about, mission, vision, team',
//       });
    
//       useEffect(() => {
//         const pageName = 'Industry News & Updates';
//         const encodedPageName = encodeURIComponent(pageName); // Properly encode the page title
      
//         axios.get(`/meta-tags/${encodedPageName}`)
//           .then(response => {
//             if (response.data && !response.data.error) {
//               setMeta({
//                 meta_title: response.data.meta_title || meta.meta_title,
//                 meta_description: response.data.meta_description || meta.meta_description,
//                 meta_keywords: response.data.meta_keywords || meta.meta_keywords,
//               });
//             }
//           })
//           .catch(error => {
//             console.error('Failed to fetch meta tags:', error);
//           });
//       }, []);
      
//     useEffect(() => {
//         const style = document.createElement("style");
//         style.innerHTML = `
//       .Industry {
//         background: linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
// linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/Industry.png');
//         background-size: cover;
//         background-position: center;
//         background-repeat: no-repeat;
//         position: relative;
//         padding: 120px 0; 
//         display: flex;
//         justify-content: center;
//         align-items: center;
//       }
      
//       .card-custom {
//         border-radius: 8px;
//         overflow: hidden;
//         margin-bottom: 20px;
//       }
//       .card-img-top {
//         height: 200px;
//         object-fit: cover;
//       }
//       .card-body {
//         padding: 20px;
//       }
//       .sectionhead {
//         color: #3EB7BB;
//       }
//       .card-title {
//         height: 75px; /* Fixed height for card title */
//         overflow: hidden;
//       }
//     .read-more-links {
//   color: #3EB7BB;
//   text-decoration: none;
//   font-weight: bold;
//   display: block;
//   width: auto;  /* Remove fixed width to allow natural alignment */
//   height: 30px;
//   line-height: 30px;
//   border-radius: 4px;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   margin-top: 10px; /* Add spacing between title and button */
//   text-align: left;  /* Align the text to the left */
// }
//   .sectionhead::after {
//     content: '';
//     position: absolute;
//     left: 15px;
//     bottom: -6px;
//     width: 60px;
//     height: 2px;
//     background-color: #e68021;
// }

//       .read-more-links:hover {
//            color: #3EB7BB;
//       }
//     `;
//         document.head.appendChild(style);

//         return () => {
//             document.head.removeChild(style);
//         };
//     }, []);

//     return (
//         <>
//            <Helmet>
//                                        <title>{meta.meta_title}</title>
//                                        <meta name="description" content={meta.meta_description} />
//                                        <meta name="keywords" content={meta.meta_keywords} />
//                                      </Helmet>

//             <div className="container-fluid">
//                 <div className="row Industry">
//                     <h5 className="my-5 text-center p-5 text-white display-4 fw-bold">
//                     Industry News & Updates
//                     </h5>
//                 </div>
//             </div>

//                 <div className="container">
//                     <div className="row">
//                         <h5 className="text-start fw-bold mt-5 sectionhead">Latest Updates</h5>
//                         <h2 className="text-start fw-bold mt-5">Industry News & Updates</h2>
//                         <p className="section-content text-start" style={{ color: '#2E2E2E' }}>
//                         The industrial landscape is constantly evolving, driven by technological advancements, policy changes, and market dynamics. In recent times, various industries, including manufacturing, technology, infrastructure, and energy, have witnessed significant developments that are shaping the global economy. Here are the latest industry news and updates:                        </p>
//                     </div>

//                     {/* Cards Section */}
//                     <Row className="justify-content-center mt-5">
//                         <Col xs={12} sm={6} md={3} className="mb-4">
//                             <Card className="card-custom shadow-sm border-0" style={{backgroundColor:"#FFFFFF"}}>
//                                 <Card.Img className="p-2" variant="top" src="/assets/images/Industry1.png" />
//                                 <Card.Body>
//                                     <Card.Title className="fw-bold" style={{ fontSize: '18px' }}>Key Features of Budget 2024-2025 </Card.Title>
//                                     <Link to={`/budget`} className="read-more-links"> Read more <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>  </Link>
//                                 </Card.Body>
//                             </Card>
//                         </Col>

//                         <Col xs={12} sm={6} md={3} className="mb-4" >
//                             <Card className="card-custom shadow-sm border-0" style={{backgroundColor:"#FFFFFF"}}>
//                                 <Card.Img className="p-2" variant="top" src="/assets/images/Industry2.png" />
//                                 <Card.Body>
//                                     <Card.Title className="fw-bold" style={{ fontSize: '18px' }}>Privatization of Power Distribution Companies</Card.Title>
//                                     <Link to={`/comingsoon`} className="read-more-links"> Read more <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>  </Link>
//                                 </Card.Body>
//                             </Card>
//                         </Col>

//                         <Col xs={12} sm={6} md={3} className="mb-4">
//                             <Card className="card-custom shadow-sm border-0" style={{backgroundColor:"#FFFFFF"}}>
//                                 <Card.Img className="p-2" variant="top" src="/assets/images/Industry3.png" />
//                                 <Card.Body>
//                                     <Card.Title className="fw-bold" style={{ fontSize: '18px' }}>Ambitious Economic Growth Plans</Card.Title>
//                                     <Link to={`/comingsoon`} className="read-more-links"> Read more <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span> </Link>
//                                 </Card.Body>
//                             </Card>
//                         </Col>

//                         <Col xs={12} sm={6} md={3} className="mb-4">
//                             <Card className="card-custom shadow-sm border-0" style={{backgroundColor:"#FFFFFF"}}>
//                                 <Card.Img className="p-2" variant="top" src="/assets/images/Industry4.png" />
//                                 <Card.Body>
//                                     <Card.Title className="fw-bold" style={{ fontSize: '18px' }}>Maha Kumbh 2025 Preparations</Card.Title>
//                                     <Link to={`/comingsoon`} className="read-more-links"> Read more <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>  </Link>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </div>
        

           
//         </>
//     );
// };

// export default Industry;
import React, { useState, useEffect } from 'react';
import axios from '../apiConfig';
import { Helmet } from "react-helmet";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Industry = () => {

  const [meta, setMeta] = useState({
    meta_title: 'Industry News & Updates | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'about, mission, vision, team',
  });

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch meta tags
  useEffect(() => {
    const pageName = 'Industry News & Updates';
    const encodedPageName = encodeURIComponent(pageName);

    axios.get(`/meta-tags/${encodedPageName}`)
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta({
            meta_title: response.data.meta_title || meta.meta_title,
            meta_description: response.data.meta_description || meta.meta_description,
            meta_keywords: response.data.meta_keywords || meta.meta_keywords,
          });
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
  }, []);

  // Fetch industry news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/industry_news");
        if (response.data && Array.isArray(response.data)) {
          setNewsData(response.data);
        }
      } catch (error) {
        console.error("Error fetching industry news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Dynamic styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .Industry {
        background: linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/Industry.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        padding: 120px 0; 
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card-custom {
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      .card-img-top {
        height: 200px;
        object-fit: cover;
      }
      .card-body {
        padding: 20px;
      }
      .sectionhead {
        color: #3EB7BB;
        position: relative;
        margin-bottom: 10px;
      }
      .card-title {
        height: 75px;
        overflow: hidden;
      }
      .read-more-links {
        color: #3EB7BB;
        text-decoration: none;
        font-weight: bold;
        display: block;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        transition: background-color 0.3s ease, color 0.3s ease;
        margin-top: 10px;
        text-align: left;
      }
      .sectionhead::after {
        content: '';
        position: absolute;
        left: 15px;
        bottom: -6px;
        width: 60px;
        height: 2px;
        background-color: #e68021;
      }
      .read-more-links:hover {
        color: #3EB7BB;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>

      <div className="container-fluid">
        <div className="row Industry">
          <h5 className="my-5 text-center p-5 text-white display-4 fw-bold">
            Industry News & Updates
          </h5>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h5 className="text-start fw-bold mt-5 sectionhead">Latest Updates</h5>
          <h2 className="text-start fw-bold mt-2">Industry News & Updates</h2>
          <p className="section-content text-start" style={{ color: '#2E2E2E' }}>
            The industrial landscape is constantly evolving, driven by technological advancements, policy changes, and market dynamics. In recent times, various industries, including manufacturing, technology, infrastructure, and energy, have witnessed significant developments that are shaping the global economy. Here are the latest industry news and updates:
          </p>
        </div>

        {loading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : (
          <Row className="justify-content-center mt-5">
            {newsData.map((item, index) => (
              <Col xs={12} sm={6} md={3} className="mb-4" key={index}>
                <Card className="card-custom shadow-sm border-0" style={{ backgroundColor: "#FFFFFF" }}>
                  <Card.Img
                    className="p-2"
                    variant="top"
                    src={item.image || "/assets/images/default.png"}
                    alt={item.title}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold" style={{ fontSize: '18px' }}>
                      {item.title}
                    </Card.Title>
                    <Link to={`/industry_news/${item.slug || 'comingsoon'}`} className="read-more-links">
                      Read more <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default Industry;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsPlayFill, BsPeopleFill, BsPersonFill, BsLink45Deg } from 'react-icons/bs';
import axios from '../apiConfig'; 
import { Helmet } from 'react-helmet';
const SkillDevelopment = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
 const [meta, setMeta] = useState({
      meta_title: 'Skill Development  | UPICON',
      meta_description: 'Learn about our mission, vision, and the team behind My Website.',
      meta_keywords: 'UPICON, industrial consultants',
    });
  
    useEffect(() => {
      // Fetch meta tags for the 'business units' page with URL encoding for space
      axios.get('/meta-tags/skill%20development') // URL encoded for spaces
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data); // Update state with dynamic meta tags
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
  }, []); 
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
         <Helmet>
                            <title>{meta.meta_title}</title>
                            <meta name="description" content={meta.meta_description} />
                            <meta name="keywords" content={meta.meta_keywords} />
                          </Helmet>

    <div className="container-fluid mb-5">
      <div className="row skilldevelopment">
        <div className="">
          <h1 className="my-5 text-center p-5 text-white display-3 fw-bold">
            Training & Skill Development
          </h1>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row mt-5 mb-3">
          <div className="col-lg-6 order-lg-1 order-2">
            <h6 className="text-start shorthead sectionhead">Business Unit</h6>
            <h2 className="text-start">Training Domain</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="section-content text-start">
              This division looks after the training needs of entrepreneurs and
              executives throughout the State. A large number of specially
              designed programmes are being conducted at the instance of
              government departments, financial institutions and commercial
              banks etc. with a view to motivate and improve the latent talent
              of potential entrepreneurs. Special training programmes are
              organized for the managers, entrepreneurs and workers as per the
              need of the client. UPICON is conducting a number of practical
              training programmes under MEGSAT (Mass Employment Generation
              through Science and Technology) Scheme of the Government of India.
            </p>
          </div>
        </div>
        <div className="row mb-5">
     
          <div className="col-lg-4 mb-4">
          <img
                  src="/assets/images/Frame1.png"
                  alt="Entrepreneurship Development"
                  className="img-fluid"
                />

          </div>
          <div className="col-lg-4 mb-4">
          <img
                  src="/assets/images/frame2.png"
                  alt="Entrepreneurship Development"
                  className="img-fluid"
                />

          </div>
          <div className="col-lg-4 mb-4">
          <img
                  src="/assets/images/frame3.png"
                  alt="Entrepreneurship Development"
                  className="img-fluid"
                />

          </div>
               {/* <div className="col-lg-4 mb-4">
            <div className="image-wrapper">
              <div className="image-blur">
                <img
                  src="/assets/images/7024.jpg"
                  alt="Skill Development Programme"
                  className="img-fluid"
                />
              </div>
              <div className="image-overlay">
                <h3 className="image-text">SKILL DEVELOPMENT PROGRAMME</h3>
              </div>
              <div className="info-card text-start">
                <p className="h6">
                  Trained over 70k candidates under schemes like Deen Dayal
                  Upadhyaya Grameen Kaushalya Yojana (DDU-GKY), Jal Jeevan
                  Mission, Madhya Pradesh Council of Employment & Training
                  (MAPCET).
                </p>
                <a href="#" className="shorthead underline" onClick={handleModalOpen}>
                  Click to View More
                </a>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 mb-4">
            <div className="image-wrapper">
              <div className="image-blur">
                <img
                  src="/assets/images/7129.jpg"
                  alt="Entrepreneurship Development"
                  className="img-fluid"
                />
              </div>
              <div className="image-overlay">
                <h3 className="image-text">ENTREPRENEURSHIP DEVELOPMENT</h3>
              </div>
              <div className="info-card text-start">
                <p className="h6">
                  Trained over 70k candidates under schemes like Deen Dayal
                  Upadhyaya Grameen Kaushalya Yojana (DDU-GKY), Jal Jeevan
                  Mission, Madhya Pradesh Council of Employment & Training
                  (MAPCET).
                </p>
                <a href="#" className="shorthead underline" onClick={handleModalOpen}>
                  Click to View More
                </a>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 mb-4">
            <div className="image-wrapper">
              <div className="image-blur">
                <img
                  src="/assets/images/1.jpg"
                  alt="Corporate Social Responsibility"
                  className="img-fluid"
                />
              </div>
              <div className="image-overlay">
                <h3 className="image-text">CORPORATE SOCIAL RESPONSIBILITY</h3>
              </div>
              <div className="info-card text-start">
                <p className="h6">
                  Trained over 70k candidates under schemes like Deen Dayal
                  Upadhyaya Grameen Kaushalya Yojana (DDU-GKY), Jal Jeevan
                  Mission, Madhya Pradesh Council of Employment & Training
                  (MAPCET).
                </p>
                <a href="#" className="shorthead underline" onClick={handleModalOpen}>
                  Click to View More
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-lg-3 mt-2 ">
            <div className="card shadow text-center p-4 mb-3">
            <div className="icon text-center">
    <img 
        src="/assets/images/Vector.png" 
        alt="Play Icon" 
        className="img-fluid" 
        style={{ width: '40px', height: '40px' }} 
    />
</div>

              <h4 className="text-center mt-2">Go Live</h4>
              <p className="h6 text-center">
                Conducting live training sessions for the candidates to perform, explore and enhance their skills to the fullest.
              </p>
            </div>
            <div className="card shadow text-start p-4">
            <div className="icon text-center">
    <img 
       src="/assets/images/vector3.png" 
        alt="Play Icon" 
        className="img-fluid" 
        style={{ width: '40px', height: '40px' }} 
    />
</div>

              <h4 className="text-center mt-2">Expertise</h4>
              <p className="h6 text-center">
                The trainings are conducted by experts who are professionals in their field.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-2">
            <img
              src="/assets/images/images (2).jpg"
              alt="Entrepreneurship Development"
              className="img-data"
            />
          </div>
          <div className="col-lg-3 mt-2">
            <div className="card shadow text-start p-3 mb-3">
            <div className="icon text-center">
    <img 
      src="/assets/images/vector2.png" 
        alt="Play Icon" 
        className="img-fluid" 
        style={{ width: '40px', height: '40px' }} 
    />
</div>

              <h4 className="text-center mt-2">Real Time Monitoring</h4>
              <p className="h6 text-center">
                Live monitoring of training programs through Web & Mobile applications developed by in-house technology team.
              </p>
            </div>
            <div className="card shadow text-start p-3">
            <div className="icon text-center">
    <img 
       src="/assets/images/vector4.png"  
        alt="Play Icon" 
        className="img-fluid" 
        style={{ width: '40px', height: '40px' }} 
    />
</div>

              <h4 className="text-center mt-2">Forward linkage</h4>
              <p className="h6 text-center">
                We have launched ‘UP MSME Mart’, a unique gifting solution outlet as a Forward Linkage initiative to provide sustainable livelihood, competitive advantage and better market access to the artisans.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for "Click to View More" */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} id="viewMoreModal" tabIndex="-1" aria-labelledby="viewMoreModalLabel" aria-hidden={!showModal}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewMoreModalLabel">DDU-GKY Program Details</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleModalClose}></button>
            </div>
            <div className="modal-body">
              <p className="h6">
                Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY) aims to skill rural youth who are poor and provide them with jobs having regular monthly wages or above the minimum wages. It is one of the cluster of initiatives of the Ministry of Rural Development, Government of India that seeks to promote rural livelihoods. It is a part of the National Rural Livelihood Mission (NRLM). UPICON is the Project Implementation Agency (PIA) for Uttar Pradesh at present and is imparting training at 3 Centres namely Kanpur, Orai & Raebareli. Till date, UPICON has trained over 1k candidates in various trades such as Retail, Housekeeping, ITES and have coordinated for successful placement of many of these students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SkillDevelopment;

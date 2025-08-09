import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';
import axios from '../apiConfig'; 
const ConsultancyGroup = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Consultancy Group | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'UPICON, industrial consultants',
  });

  useEffect(() => {
    const pageName = 'Consultancy Group';
    axios.get(`/meta-tags/${encodeURIComponent(pageName)}`)
  
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data);
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
    
  }, []);
  return (
    <>
       <Helmet>
                                                      <title>{meta.meta_title}</title>
                                                      <meta name="description" content={meta.meta_description} />
                                                      <meta name="keywords" content={meta.meta_keywords} />
                                                    </Helmet>


    <div className="container-fluid">
      <div className="row group">
        <div className=''>
          <h1 className='my-5 text-center p-5 text-white display-3 fw-bold'>Consultancy Group</h1>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 mb-3">
          <div className="col-lg-6">
            <h5 className="text-start shorthead headfinancial sectionhead">Business Unit</h5>
            <h2 className="text-start">Consultancy Group</h2>
            <p className="section-content text-start">
              U.P. Industrial Consultants Limited, popularly known by its acronym UPICON, is a premier consultancy organization with it’s headquartering at Kanpur, a leading industrial city of the state of Uttar Pradesh in North India. UPICON was established in 1974 by the Govt. of U.P. Further restructured in 1976 by the apex financial Institutions of the country, namely, Industrial Development Bank of India (IDBI).
            </p>
            <p className="section-content text-start">
              UPICON now provides a new age consultancy service, focused towards impact generation, through a combination of deep knowledge of domain, support from new age technologies such as data analytics and artificial intelligence, including other data collection methods such as I.O.T, and a strong presence on-ground that allows for data inputs not accessible by regular consulting firms.
            </p>
            <p className="section-content text-start">
              Consultancy has gone from being a one-way street, to a two-way interactive process, to a process that evolves and personalises itself based on customised inputs from the client, to now being a new revolutionary process pioneered by UPICON. Under this process, consultancy is about deeply customised process creation and execution, controlled and monitored using new age technologies, while leading to impact followed by feedback that helps improve the process.
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="/assets/images/gropcons.png"
              alt="Entrepreneurship Development"
              className="img-fluid groupimg" style={{marginTop:'85px'}}
            />
          </div>
        </div>
        <div className='row consultancy my-5'>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow p-4 equal-height">
              <div className="card-body text-start">
                <div className="mb-4">
                  <img src="/assets/images/blockchain.avif" className="card-img-top" alt="Block chain" />
                </div>
                <h5 className="card-title">BLOCK CHAIN</h5>
                <p className="card-text">Block chain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A block chain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the block chain.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow p-4 equal-height">
              <div className="card-body text-start">
                <div className="mb-4">
                  <img src="/assets/images/Dorne.jpg" className="card-img-top" alt="Drone Survey" />
                </div>
                <h5 className="card-title">DRONE SURVEY</h5>
                <p className="card-text">Drone Survey offers enormous potential to GIS professionals. It is possible to carry out topographic surveys of same quality as highly accurate measurements collected by traditional methods, but in a fraction of time. This substantially reduces the cost of site survey & workload of specialists in the field.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow p-4 equal-height">
              <div className="card-body text-start">
                <div className="mb-4">
                  <img src="/assets/images/Tendering.png" className="card-img-top" alt="TENDERING PROCESS" />
                </div>
                <h5 className="card-title">TENDERING PROCESS</h5>
                <p className="card-text">Through GEM and E-Tender, software portal the process of steps generally include the call for submissions, the bid of submission, the selection process, and the formation of the contract. Once these steps are all complete, the contractor starts the project and sees it through completion.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow p-4 equal-height">
              <div className="card-body text-start">
                <div className="mb-4">
                  <img src="/assets/images/ProjectManagement.jpg" className="card-img-top" alt="Project management" />
                </div>
                <h5 className="card-title">PMU</h5>
                <p className="card-text">Project management is the application of processes, methods, skills, knowledge and experience to achieve specific project objectives according to the project acceptance criteria within agreed parameters. Project management has final deliverables that are constrained to a finite timescale and budget.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow p-4 equal-height">
              <div className="card-body text-start">
                <div className="mb-4">
                  <img src="/assets/images/concept.jpg" className="card-img-top" alt="Safety audits" />
                </div>
                <h5 className="card-title">SAFETY AUDIT</h5>
                <p className="card-text">Safety audits are about accountability. Safety audits are intended to assure that effective program elements are in place for identifying, eliminating, or controlling hazards that could adversely impact a company’s physical & human assets. We have dedicated & experienced team around across all sectors.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow p-4 equal-height">
              <div className="card-body text-start">
                <div className="mb-4">
                  <img src="/assets/images/istockphoto.jpg" className="card-img-top" alt="PMA" />
                </div>
                <h5 className="card-title">PMA</h5>
                <p className="card-text">An agency handles several tasks required to deliver on their clients projects. Whether it’s on boarding new customers or creating deliverable and rendering services, it takes a system to make it all work. It means the unit responsible for coordinating and supervising the overall day-to-day carrying out of the Project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ConsultancyGroup;

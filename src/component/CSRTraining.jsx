
import React, { useState, useEffect } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min';
  import axios from '../apiConfig'; 
  import { Helmet } from 'react-helmet';
  
  const CSRTraining = () => {
      const [meta, setMeta] = useState({
        meta_title: 'CSR Training | UPICON',
        meta_description: 'Learn about our mission, vision, and the team behind My Website.',
        meta_keywords: 'UPICON, industrial consultants',
      });
    
      useEffect(() => {
        const pageName = 'CSR Training';
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
       
      <div className="container-fluid mt-5">
        <div className="row training">
          <div className="">
            <h1 className="my-5 text-center p-5 text-white display-3 fw-bold">
            CSR Training
            </h1>
          </div>
        </div>
  
        <div className="container mt-5">
          <div className="row mt-5 mb-3">
            <div className="col-lg-6">
              <h5 className="text-start shorthead headfinancial sectionhead">Business Unit</h5>
              <h2 className="text-start mt-3">CSR Training</h2>
              <p className="section-content text-start">
              Sustainable business practices and CSR initiatives have gained prominence in recent years, driven by growing concerns about environmental degradation, social inequality, and ethical issues. UPICON recognizes the importance of addressing these challenges and strives to integrate sustainability and social responsibility into its core operations.            
                </p>
                <p className="section-content text-start">
                One of the critical components of UPICON’s CSR training program is sustainability. The company acknowledges its responsibility to operate in an environmentally sustainable manner. This involves taking steps to minimize its carbon footprint, utilizing sustainable materials, and implementing waste reduction strategies.                </p>
                <p className="section-content text-start">
                Operating ethically and with integrity is another crucial aspect of UPICON’s CSR training program. The company understands its duty to comply with laws and regulations, ensuring that its business practices align with legal frameworks and ethical standards. UPICON maintains transparency in its operations, ensuring that stakeholders have access to accurate and reliable information about its activities.                </p>
            </div>
  
            <div className="col-lg-6">
             
              <img
                src="/assets/images/t3.webp"
                alt="Entrepreneurship Development"
                className="img-fluids "  style={{marginTop:'85px'}}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <img
                src="/assets/images/awareness.jpg"
                alt="Entrepreneurship Development"
                className="img-fluide  mt-5"  style={{marginTop:'85px'}}
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h5 className="text-start shorthead headfinancial sectionhead">Business Unit</h5>
              <h2 className="text-start mt-3">Beyond Profit: UPICON's Path to Ethical Success</h2>
              <p className="section-content text-start mt-4">
              UPICON recognizes its responsibility to create a positive impact on society. The company actively engages in initiatives that support local communities, promote diversity and inclusivity, and contribute to philanthropic causes. By leveraging its resources and influence, UPICON aims to address social issues and make a meaningful difference.              </p>
              <p className="section-content text-start">
              While implementing sustainable business practices and CSR initiatives may present challenges, UPICON addresses them through leadership commitment, employee education and training, resource allocation, and monitoring and measuring impact. These proactive measures ensure that UPICON continues to make progress in its sustainability journey.              </p>
              <p className="section-content text-start">
              In a world where sustainability and social responsibility are increasingly important, UPICON stands as a beacon of change, inspiring other businesses to adopt sustainable practices and contribute to a more sustainable future.
              </p>
            </div>
          </div>
        
   
        </div>
      </div>
      </>
    );
  };
  
  export default CSRTraining;
  

// src/Map.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from '../apiConfig'; 
import { Helmet } from 'react-helmet';
const Empowerment = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Workforce Empowerment | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'UPICON, industrial consultants',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    const pageName = 'Workforce Empowerment';
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
      <div className='row workplace'>
        <div className=''>
          <h1 className='my-5 text-center p-5 text-white display-3 fw-bold'>Workforce Empowerment</h1>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 mb-3">
          <div className="col-lg-12">
            <h5 className="text-start shorthead sectionhead">Business Unit</h5>
            <h2 className="text-start mt-2">Workforce Empowerment</h2>
            <p className="section-content text-start">
              In today’s fast-paced and competitive world, empowering the workforce is crucial for sustainable development. UPICON firmly believes that by equipping individuals with the right knowledge and skills, they can make a significant impact in their respective fields. To achieve this goal, UPICON has implemented a comprehensive strategy that encompasses various initiatives aimed at fostering reliance and self-sufficiency among different groups within the community.              </p>
            <p className="section-content text-start">
              UPICON’s approach to workforce empowerment involves the implementation of targeted awareness programs and skill development initiatives. These programs are designed to educate and empower different groups, including youth, entrepreneurs, personnel, women, and organizations.              </p>

          </div>
          </div>
          <div className='row my-5'>
            <div className="col-lg-6">
              <p className="section-content text-start">
              UPICON understands the importance of creating awareness among the target groups. By conducting awareness programs, they strive to inform individuals about the opportunities available to them and the resources at their disposal. These programs play a crucial role in motivating and inspiring the workforce to take charge of their personal and professional development.
              </p>             
               <p className="section-content text-start">
               UPICON organizes skill development programs across various trades, providing individuals with the opportunity to acquire new skills or enhance their existing ones. These programs cover a wide range of disciplines, including technical and vocational training, entrepreneurship, leadership, and more. By focusing on skill development, UPICON ensures that the workforce is equipped with the necessary competencies to contribute effectively to the development process.              </p>


            </div>
              <div className="col-lg-6">
              <img
                src="/assets/images/group.png"
                alt="Entrepreneurship Development" 
                className=" " style={{height:'355px',width:'368px'}}
              />
            </div>
          </div>
          <div className="row mt-5 mb-3">
          <div className="col-lg-6">
              <img
                src="/assets/images/group_2.png"
                alt="Entrepreneurship Development"
                className="fluidimgs"    
              />
            </div>
          <div className="col-lg-6">
            <h5 className="text-start shorthead sectionhead">Business Unit</h5>
            <h2 className="text-start">Empower, Excel, Succeed: UPICON’s Formula for Workforce Empowerment</h2>
            <p className="section-content text-start">
            UPICON’s initiatives are further bolstered by the support it receives from different organizations and departments. Collaborations with renowned institutions, industry experts, and government bodies enable UPICON to enhance the quality and reach of its programs. This collaboration ensures that the workforce receives the best possible guidance and support to excel in their respective fields.</p>      
                  <p className="section-content text-start">
            UPICON’s ultimate goal is to empower the target groups through knowledge and skills. By equipping individuals with the necessary tools and competencies, UPICON enables them to take charge of their personal and professional growth. The organization believes that self-reliance is crucial for long-term success and ensures that its programs and initiatives foster self-sufficiency among the workforce.          </p>

          </div>
          </div>
   
        </div>
      </div>
      </>
      );
};

      export default Empowerment;

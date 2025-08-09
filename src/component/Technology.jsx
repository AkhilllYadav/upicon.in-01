import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Helmet } from 'react-helmet';
import axios from '../apiConfig'; 
const Technology = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Technology & Innovation | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'UPICON, industrial consultants',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    const pageName = 'Technology & Innovation';
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
      <div className='row technology'>
        <div className=''>
          <h1 className='my-5 text-center p-5 text-white display-3 fw-bold'>Technology & Innovation</h1>
        </div>
      </div>

      <div className="container my-5">
        <div className='row my-5'>
          <div className="col-lg-6 order-lg-1 order-2">
            <h5 className='text-start shorthead sectionhead'>Business Unit</h5>
            <h2 className='text-start mt-3'>Digital Transformation Unleashed: Harnessing Emerging Technologies with Our Expert Team</h2>
            <p className="section-content text-start">
              In the rapidly evolving digital landscape, technology and innovation have become essential for businesses to thrive. Advancements in technology have revolutionized the way organizations operate, communicate, and deliver value to their customers. At UPICON, we understand the significance of these developments and aim to assist our clients in achieving digital transformation.
            </p>
            <p className="section-content text-start">
              Our team is at the forefront of digital innovation, constantly exploring emerging technologies and trends to deliver cutting-edge solutions. We offer a comprehensive range of digital services, including:
            </p>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <img
              src="/assets/images/tech-2.png"
              alt="Technology"
              className="my-2 img-fluid"
            />
          </div>
        </div>
        <div className='row' style={{ marginTop: '15%' }}>
          <div className="col-lg-8 col-md-12">
          <img
              src="/assets/images/Evatronix.png"
              alt="Technology"
              className="my-2 img-fluid tech"
            />
          </div>
          <div className="col-lg-4 col-md-12">
              <div className="accordion-card card bg-white">
              <div className="card-body">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                      Data Analysis and Insights
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                      <div className="accordion-body">
                        Data is the fuel that powers the digital world. Our experts excel in gathering, analyzing, and interpreting data to extract meaningful insights. By leveraging advanced analytics techniques, we help our clients uncover hidden patterns, identify trends, and make data-driven decisions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Digital Marketing Strategies
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      Our team specializes in developing customized marketing campaigns that leverage various channels, such as social media, search engine optimization (SEO), content marketing, and email marketing. We ensure that our clients’ brand messages are delivered to the right people at the right time.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Cloud Computing and Infrastructure
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      Cloud computing has revolutionized the way businesses store, process, and access data. Our experts assist our clients in migrating their operations to the cloud, enabling them to leverage scalable and cost-effective infrastructure.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                      Artificial Intelligence and Automation
                      </button>
                    </h2>
                    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      Artificial intelligence (AI) and automation have the potential to transform businesses across industries. Our team helps organizations harness the power of AI to streamline processes, enhance productivity, and deliver personalized customer experiences.                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='uppara'>At UPICON, we believe that technology and innovation are key drivers of success in today’s world. Our mission is to empower our clients with digital transformation, enabling them to harness the power of data and technology to achieve their business goals. Through our comprehensive range of digital solutions, we drive innovation, enhance operational efficiency, and help our clients stay ahead of the competition.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Technology;

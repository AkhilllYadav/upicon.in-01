
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from '../apiConfig'; 
import { Helmet } from 'react-helmet';
const FinancialInclusion = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Banking & Financial Inclusion | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'UPICON, industrial consultants',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    const pageName = 'Banking & Financial Inclusion';
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
      <div className='row inclusion'>
        <div className=''>
          <h1 className='my-5 text-center p-5 text-white display-3 fw-bold'>Banking & Financial Inclusion</h1>
        </div>
      </div>

      <div className="container">
        <div className='row my-5'>
          <div className="row mt-5 mb-3">
            <div className="col-lg-6">
              <h5 className="text-start shorthead headfinancial sectionhead">Business Unit</h5>
              <h2 className="text-start">Financial Inclusion</h2>
              <p className="section-content text-start">
                Financial inclusion lies at the heart of UPICON’s mission. Our innovative banking services have empowered marginalized populations, providing them with equal opportunities to access financial resources. Citizens who were previously excluded from the traditional banking system now have the means to participate actively in the financial ecosystem. This newfound accessibility to banking services has paved the way for greater financial literacy, savings, and investment opportunities.
              </p>
              <p className="section-content text-start">
                UPICON’s services have brought convenience and flexibility to the lives of individuals who may have previously faced challenges in accessing and managing their finances.
              </p>
              <p className="section-content text-start">
                The impact of UPICON’s banking services extends beyond individual empowerment. By enabling financial inclusion, UPICON has contributed significantly to the overall economic growth and stability of the country. As more individuals gain access to banking services, they become active participants in economic activities, such as entrepreneurship, investment, and consumption.
              </p>

              <div className="row">
    <div className="col-lg-6 col-md-6  col-sm-6  text-center">
        <img 
            src="/assets/images/finagroup.png" 
            alt="Experts" 
            className="img-fluid rounded"
            style={{ width: '50%', height: 'auto' }} 
        />
    </div>
    <div className="col-lg-6 col-md-6  col-sm-6  text-center">
        <img 
            src="/assets/images/fingroip2.png" 
            alt="Assignments" 
            className="img-fluid rounded"
            style={{ width: '50%', height: 'auto' }} 
        />
    </div>
</div>

              {/* <div className="row">
                <div className="col-lg-6">
                  <span className="progress-number text-start">50 </span>
                  <h4 className='spanhead'>Experts</h4>
                </div>
                <div className="col-lg-6">
                  <span className="progress-number text-start">2K</span>
                  <h4 className='spanhead'>Assignments</h4>
                </div>
              </div> */}
            </div>

            <div className="col-lg-6">
              <img
                src="/assets/images/fin.png"
                alt="Entrepreneurship Development"
                className="img-fluid csrimg"
              />
            </div>
          </div>
        </div>
        <div className='row my-5'>
        <div className="col-lg-6">
              <img
                src="/assets/images/FinancialInclusion.jpg"
                alt="Entrepreneurship Development"
                className="img-fluid "
              />
            </div>
          <div className="col-lg-6">
            <h5 className="text-start shorthead sectionhead mt-3">Business Unit</h5>
            <h2 className="text-start mt-2">Financial Inclusion</h2>
            <p className="section-content text-start">
            As part of Financial Inclusion, UPICON actively works with Major PSUs and Regional Rural Banks having presence in 16 States in PAN India basis with 2300 BC agents (Business Correspondent Agents) who are providing banking services in unbanked areas with full participation in the society.            </p>
            <p className="section-content text-start">
            We also empower women entrepreneurs in financial Inclusion by appointing them as BC Sakhi in Sultanpur district of Uttar Pradesh State with the help of Bank of Baroda, which not only empowers their livelihood but also makes them financially strong so that they can support their families and societies.
</p>
            

          </div>
         
        </div>
        </div>
   
      

    </div>
    </>
  );
};

export default FinancialInclusion;

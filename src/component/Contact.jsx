import React, { useState, useEffect } from 'react';
import axios from '../apiConfig';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Helmet } from 'react-helmet';
import Careersform from './Careersform';
const Contact = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Contact  | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'about, mission, vision, team',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    axios.get('/meta-tags/contact') // URL encoded for spaces
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data); // Update state with dynamic meta tags
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

    <section id="career" className="mt-5">
      <div className="container-fluid position-relative contact">
        <div className="container mt-5">
          <div className="row gy-5 align-items-center justify-content-center text-center">
            <div className="">
              <h1 className="my-5 text-center p-5 text-white display-5 fw-bold">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <Careersform />
      <div className="container-fluid map">
      <div className="row gy-5 align-items-center justify-content-center text-center ">
            <div className="">
              <h1 className=" text-center text-black display-5 fw-bold contactcenterhead"> Our Office</h1>
            </div>
          </div>
          <div className="container my-5">
      <div className="row text-start">
  <div className="col-lg-6">
    <div className="timeline">
      <div className="timeline-item">
        <h5 className="card-title">Corporate Office - Lucknow</h5>
        <p className="card-text">A-708-709, 7th Floor, Summit Building, Vibhuti Khand, Gomti Nagar, Lucknow – 226 010, Uttar Pradesh</p>
      </div>
      <div className="timeline-item">
        <h5 className="card-title">Registered Office - Kanpur</h5>
        <p className="card-text">5th Floor, Kabir Bhawan, G.T. Road, Kanpur – 208002, Uttar Pradesh Phone No: +91-884-013-1822</p>
      </div>
      <div className="timeline-item">
        <h5 className="card-title">Branch Office - Noida</h5>
        <p className="card-text">Administrative Block, Sector-VI, Noida–201301, Uttar Pradesh Phone No.: +91-895-434-4715</p>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="timeline">
      <div className="timeline-item">
        <h5 className="card-title"> Zonal Office - Bhopal</h5>
        <p className="card-text">36B, In front of G-Shy Hotel, Zone 2, MP Nagar, Bhopal-462011, M.P. Phone No: +91-971-370-6201</p>
      </div>
      <div className="timeline-item">
        <h5 className="card-title">Branch Office - Prayagraj</h5>
        <p className="card-text">2nd Floor, 30/9C/3, P.D. Tandon Road, Civil Lines, Prayagraj – 211001, U.P. Phone No: +91-945-322-7566</p>
      </div>
    </div>
  </div>
</div>

      </div>
         </div>
      {/* <div className="container my-5">
      <div className="row text-start">
  <div className="col-lg-6">
    <div className="timeline">
      <div className="timeline-item">
        <h5 className="card-title">Corporate Office - Lucknow</h5>
        <p className="card-text">A-708-709, 7th Floor, Summit Building, Vibhuti Khand, Gomti Nagar, Lucknow – 226 010, Uttar Pradesh</p>
      </div>
      <div className="timeline-item">
        <h5 className="card-title">Registered Office - Kanpur</h5>
        <p className="card-text">5th Floor, Kabir Bhawan, G.T. Road, Kanpur – 208002, Uttar Pradesh Phone No: +91-884-013-1822</p>
      </div>
      <div className="timeline-item">
        <h5 className="card-title">Branch Office - Noida</h5>
        <p className="card-text">Administrative Block, Sector-VI, Noida–201301, Uttar Pradesh Phone No.: +91-895-434-4715</p>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="timeline">
      <div className="timeline-item">
        <h5 className="card-title"> Zonal Office - Bhopal</h5>
        <p className="card-text">36B, In front of G-Shy Hotel, Zone 2, MP Nagar, Bhopal-462011, M.P. Phone No: +91-971-370-6201</p>
      </div>
      <div className="timeline-item">
        <h5 className="card-title">Branch Office - Prayagraj</h5>
        <p className="card-text">2nd Floor, 30/9C/3, P.D. Tandon Road, Civil Lines, Prayagraj – 211001, U.P. Phone No: +91-945-322-7566</p>
      </div>
    </div>
  </div>
</div>

      </div> */}
    </section>
    </>
  );
}

export default (Contact);

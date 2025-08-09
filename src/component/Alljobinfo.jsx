
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ApplicationForm from './ApplicationForm';
import Careersform from './Careersform';
import axios from '../apiConfig'; 
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
const Careers = () => {
  const [jobVacancies, setJobVacancies] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  // Handle apply click to navigate to the apply page
  const handleApplyClick = (job) => {
    history.push('/apply', { state: { job } }); // Pass job data to the target route
  };

  // Fetch job vacancies on component mount
  useEffect(() => {
    const fetchJobVacancies = async () => {
      try {
        const response = await axios.get('/job-vacancies');
        setJobVacancies(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching job vacancies data:', error);
      }
    };

    fetchJobVacancies();
  }, []);

  return (
 
         <>
            <Helmet>
            <title>Job | UPICON</title>
            <meta name="description" content="Learn about our mission, vision, and the team behind My Website." />
            <meta name="keywords" content="about, mission, vision, team" />
        
          </Helmet>
    <section id="career" className="mt-5">
      <div className="container-fluid career">
        <div className="container mt-5">
          <h1 className="text-center text-white display-5 fw-bold">
            Unlock Your Potential: Join Our Team of Visionaries
          </h1>
        </div>
      </div>
     
      <div className="container my-5">
        <h5 className="text-start sectionhead">Recent Job Openings</h5>
        <div className="row gy-4 mt-3">
          {error && <div className="error">Error fetching job vacancies data: {error.message}</div>}
          {jobVacancies.map((job) => (
            <div key={job.id} className="col-md-4">
              <div className="card">
                <img src="/assets/images/carerimg.jpeg" alt={job.title} className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title sectionhead"><strong>{job.title}</strong></h5>
                  <button className="btn btn-primary mt-3" onClick={() => handleApplyClick(job)}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Careers;
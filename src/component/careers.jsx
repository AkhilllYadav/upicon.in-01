import React, { useState, useEffect } from 'react';
import axios from '../apiConfig';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loader from "./Loader";
const Careers = () => {
  const [jobVacancies, setJobVacancies] = useState([]);
  const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
   const [meta, setMeta] = useState({
    meta_title: 'Careers | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'Learn about our mission, vision, and the team behind My Website.',
  });

  useEffect(() => {
    axios.get('/meta-tags/careers')
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data);
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
  }, []);
  const history = useHistory();

  // Handle apply click to navigate to the apply page
  const handleApplyClick = (job) => {
    history.push('/apply', { job }); // Pass job data to the target route
  };

  // Fetch job vacancies on component mount
  useEffect(() => {
    const fetchJobVacancies = async () => {
      try {
        setLoading(true);
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
                     <title>{meta.meta_title}</title>
                     <meta name="description" content={meta.meta_description} />
                     <meta name="keywords" content={meta.meta_keywords} />
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
  {error ? (
    <div className="error">
      <Loader />
    </div>
  ) : jobVacancies.length === 0 ? (
    <div className="text-center mt-5">
      <h5 className="text-muted">Sorry, we don't have any job vacancy right now.</h5>
    </div>
  ) : (
    jobVacancies.map((job) => {
      const formattedDate = new Date(job.created_at).toLocaleDateString("en-GB"); // Format the date

      return (
        <div key={job.id} className="col-md-3">
          <div className="card carrearcard">
            <img
              src="/assets/images/carerimg.jpeg"
              alt={job.title}
              className="img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title truncate" style={{ color: "#000000" }}>
                <strong>{job.title}</strong>
              </h5>
              <p className="card-text truncate" style={{ color: "#DF7C21" }}>
                <strong>Number of Positions:</strong> {job.openings}
              </p>
              <p className="card-text truncate" style={{ color: "#DF7C21" }}>
                <strong>Experience Required:</strong> {job.experience} years
              </p>
              <p className="card-text truncate" style={{ color: "#DF7C21" }}>
                <strong>Location:</strong> {job.location}
              </p>
              <div className="text-start">
                <a
                  className="btn btn-primarys mt-3 text-start"
                  onClick={() => handleApplyClick(job)}
                >
                  Apply for this job
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    })
  )}
</div>

        {/* <div className="row gy-4 mt-3">
          {error && <div className="error"><Loader /></div>}
          {jobVacancies.length === 0 ? (
            <div className="text-center mt-5">
              <h5 className="text-muted">No vacancies available at the moment. Please check back later.</h5>
            </div>
          ) : (
            jobVacancies.slice().map((job) => {
              const formattedDate = new Date(job.created_at).toLocaleDateString('en-GB'); 
              return (
                <div key={job.id} className="col-md-3">
                  <div className="card carrearcard">
                    <img src="/assets/images/carerimg.jpeg" alt={job.title} className="img-fluid" />
                    <div className="card-body">
                      <h5 className="card-title truncate" style={{ color: '#000000' }}>
                        <strong>{job.title}</strong> 
                      </h5>
                      <p className="card-text truncate" style={{ color: '#DF7C21' }}>
                        <strong>Number of Positions:</strong> {job.openings}
                      </p>
                      <p className="card-text truncate" style={{ color: '#DF7C21' }}>
                        <strong>Experience Required:</strong> {job.experience} years
                      </p>
                      <p className="card-text truncate" style={{ color: '#DF7C21' }}>
                        <strong>Location:</strong> {job.location}
                      </p>

                      <div className="text-start">
                        <a
                          className="btn btn-primarys mt-3 text-start"
                          onClick={() => handleApplyClick(job)}
                        >
                          Apply for this job
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div> */}
      </div>
    </section>
    </>
  );
};

export default Careers;

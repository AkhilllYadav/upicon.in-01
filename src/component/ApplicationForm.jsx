


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../apiConfig";
import { Helmet } from 'react-helmet';
const JobApplicationForm = () => {
  const location = useLocation();
  const selectedJob = location.state?.job; // Access job data passed via state
  const jobid = selectedJob['id'];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [jobVacancies, setJobVacancies] = useState([]);
  const [error, setError] = useState(null);

  const htmlToPlainText = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "N/A";
  };
  const [meta, setMeta] = useState({
    meta_title: 'Job Application | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'about, mission, vision, team',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    axios.get('/meta-tags/apply') // URL encoded for spaces
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data); // Update state with dynamic meta tags
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
  }, []);
  useEffect(() => {
    const fetchJobVacancies = async () => {
      try {
        const response = await axios.get("/job-vacancies");
        setJobVacancies(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching job vacancies data:", error);
      }
    };

    fetchJobVacancies();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithResume = new FormData();
      
      // Append existing form data
      Object.keys(formData).forEach((key) => {
        formDataWithResume.append(key, formData[key]);
      });
  
      // Append resume file
      formDataWithResume.append("resume", resumeFile);
  
      // Append job ID
      if (selectedJob && selectedJob.id) {
        formDataWithResume.append("job_id", selectedJob.id);
      }
  
      await axios.post("/submit-form", formDataWithResume, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      alert("Application submitted successfully");
  
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
      });
      setResumeFile(null);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application.");
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formDataWithResume = new FormData();
  //     Object.keys(formData).forEach((key) => {
  //       formDataWithResume.append(key, formData[key]);
  //     });
  //     formDataWithResume.append("resume", resumeFile);

  //     await axios.post("/submit-form", formDataWithResume, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     alert("Application submitted successfully");
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       experience: "",
  //       message: "",
  //     });
  //     setResumeFile(null);
  //   } catch (error) {
  //     console.error("Error submitting application:", error);
  //     alert("Failed to submit application.");
  //   }
  // };

  return (
    <>
       <Helmet>
                        <title>{meta.meta_title}</title>
                        <meta name="description" content={meta.meta_description} />
                        <meta name="keywords" content={meta.meta_keywords} />
                      </Helmet>
        {/* <Helmet>
                <title>Job Application | UPICON</title>
                <meta name="description" content="Learn about our mission, vision, and the team behind My Website." />
                <meta name="keywords" content="about, mission, vision, team" />
              </Helmet> */}
      <div className="container-fluid mb-5 blog">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 text-center text-white fw-bold">
              {selectedJob?.title || "Job Application"}
            </h1>
          </div>
        </div>
      </div>

      <div className="container my-5 mt-5">
        <div className="row">
          {/* Left Side: Job Vacancies */}
          <div className="col-md-4">
            <h4 className="mb-3">Available Job Vacancies</h4>
            {jobVacancies.length > 0 ? (
              jobVacancies.slice(0, 3).map((job, index) => (
                <div
                  key={index}
                  className="card mb-3"
                  style={{ border: "1px solid #ddd" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p className="card-text">
                      <strong>Experience:</strong> {job.experience}
                    </p>
                    <p className="card-text">
                      <strong>Vacancy Number:</strong> {job.openings}
                    </p>
                    <p className="card-text">
                      <strong>Closing Date:</strong> {job.closing_date}
                    </p>
                    {/* <p className="card-text">
                      <strong>Description:</strong>{" "}
                      <span className="description-text">{job.description}</span>
                    </p> */}
                  </div>
                </div>
              ))
            ) : (
              <p>{error ? "Error fetching jobs" : "Loading jobs..."}</p>
            )}
          </div>

          {/* Right Side: Application Form */}
          <div className="col-md-8">
            <h1>Apply for {selectedJob?.title || "a Job"}</h1>
            <div className="row">
              <div className="col-md-6">
                <p className="text-start">
                  <strong>Location:</strong> {selectedJob?.location || "N/A"}
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-start">
                  <strong>Experience:</strong> {selectedJob?.experience || "N/A"} years
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="text-start">
                  <strong>Vacancy Number:</strong> {selectedJob?.openings || "0"}
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-start">
                  <strong>Closing Date:</strong> {selectedJob?.closing_date || "N/A"}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-start">
                  <strong>Description:</strong>{" "}
                  {htmlToPlainText(selectedJob?.description)}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label d-block text-start">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label d-block text-start">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone and Experience */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label d-block text-start">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="experience" className="form-label d-block text-start">
                    Experience
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="row mb-3">
                <div className="col-md-12">
                  <label htmlFor="message" className="form-label d-block text-start">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* Resume */}
              <div className="row mb-3">
                <div className="col-md-12">
                  <label htmlFor="resume" className="form-label d-block text-start">
                    Resume
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="resume"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApplicationForm;

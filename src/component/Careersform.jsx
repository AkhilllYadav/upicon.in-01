import React, { useState } from 'react';
// import axios from 'axios';
import { User, Mail, Phone  } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faBriefcase, faMapMarkerAlt, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from '../apiConfig'; 
import validator from 'validator';
const Careersform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '', // Experience field
    message: '',
  });

  const [resumeFile, setResumeFile] = useState(null); // Resume file handling
  const [formStatus, setFormStatus] = useState(null); // To show success/error messages

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formDataToSend = new FormData();
  //   formDataToSend.append('name', formData.name);
  //   formDataToSend.append('email', formData.email);
  //   formDataToSend.append('phone', formData.phone);
  //   formDataToSend.append('message', formData.message);
   
  //   try {
  //     const response = await axios.post('/submit-contact-form', formDataToSend, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //     setFormStatus({ type: 'success', message: 'Form submitted successfully!' });

  //     // Reset the form
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       message: '',
  //     });
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     setFormStatus({ type: 'error', message: 'Failed to submit the form. Please try again.' });
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Simple regex checks
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    const strictEmailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[6-9]\d{9}$/; // Indian 10-digit mobile starting with 6-9
  
    // Field validations
    if (!nameRegex.test(formData.name)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid name.' });
      return;
    }
  
  
    if (!validator.isEmail(formData.email) || !strictEmailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    
    if (!phoneRegex.test(formData.phone)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid 10-digit mobile number.' });
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    if (resumeFile) formDataToSend.append('resume', resumeFile);
  
    try {
      const response = await axios.post('/submit-contact-form', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFormStatus({ type: 'success', message: 'Form submitted successfully!' });
  
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setResumeFile(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ type: 'error', message: 'Failed to submit the form. Please try again.' });
    }
  };
  
  return (
    <div className="container my-5">
      <div className="row gy-5 align-items-center justify-content-center text-start">
        {/* Left Content Section */}
        <div className="col-lg-6 contact-background">
          <div className="contact-content">
            <h5 className="text-start shorthead sectionhead">Contact Us</h5>
            <h1 className="text-start text-black mt-4">Unlock Your Potential: Join Our Team of Visionaries</h1>
            <p className="text-start text-black mt-4">Explore Exciting Career Opportunities and Make a Meaningful Impact</p>
            <div className="list-icon mt-4">
              <i className="bi bi-envelope me-2"></i>
              <span className="fw-bold">mdoffice@upicon.in</span>
            </div>
            <div className="list-icon mt-4">
              <i className="bi bi-envelope me-2"></i>
              <span className="fw-bold">info@upicon.in</span>
            </div>
            <div className="list-icon mt-4">
              <i className="bi bi-telephone me-2"></i>
              <span className="fw-bold">0522 – 423-3727</span>
            </div>
            <div className="list-icon my-4">
              <i className="bi bi-clock me-2"></i>
              <span className="fw-bold">
                Mon – Sat: 09.30 AM – 06.00 PM | 2nd & 4th Sat: Closed
              </span>
            </div>
            {/* <hr className="hrline mt-3" /> */}
            <div className="col-md-12 text-center  mt-3">
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/upicon1974/" target="_blank" rel="noopener noreferrer" className="icon-round me-2">
                  <FontAwesomeIcon icon={faLinkedin} className="icon-size" color="#ffffff" />
                </a>
                <a href="https://www.instagram.com/upicon_1974/" target="_blank" rel="noopener noreferrer" className="icon-round me-2">
                  <FontAwesomeIcon icon={faInstagram} className="icon-size" color="#ffffff" />
                </a>
                <a href="https://www.facebook.com/people/Upicon/100091460436785/" target="_blank" rel="noopener noreferrer" className="icon-round me-2">
                  <FontAwesomeIcon icon={faFacebook} className="icon-size" color="#ffffff" />
                </a>
                <a href="https://twitter.com/InfoUpicon" target="_blank" rel="noopener noreferrer" className="icon-round me-2">
                  <FontAwesomeIcon icon={faTwitter} className="icon-size" color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="col-lg-6">
          <div className="form-wrapper">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <h1 className="mb-4">Send us a message</h1>
                <p>Unlock Your Potential: Join Our Team of Visionaries</p>

                {/* Name Field */}
                <div className="form-group position-relative">
                  <label htmlFor="name" className="d-block">
                    <User className="icon" />
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control form-control-lg thick"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-group position-relative">
                  <label htmlFor="email" className="d-block">
                    <Mail className="icon" />
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg thick"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="form-group position-relative">
                  <label htmlFor="phone" className="d-block">
                    <Phone className="icon" />
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control form-control-lg thick"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              
                {/* Message Field */}
             

<div className="form-group position-relative">
  <label htmlFor="message" className="d-block">
    <FontAwesomeIcon icon={faEnvelope} className="icons" />
  </label>
  <textarea
    id="message"
    className="form-control form-control-lg thick"
    rows="4"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
  ></textarea>
</div>


               
                <button type="submit" className="btn btn-primary btn-lg mt-3">
                  Submit
                </button>
              </form>

              {/* Form Submission Status */}
              {formStatus && (
                <div className={`alert mt-3 ${formStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {formStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careersform;

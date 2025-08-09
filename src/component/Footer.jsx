import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Import local CSS and assets
import '../css/Footer.css'; // Corrected path to the CSS file
import footerLogo from '../assets/images/upicon_footer.png';
import footerBg from '../assets/images/mudra.12e75bff6dc375d5c335.webp';

const Footer = () => {
  // Effect to handle the 'back to top' button visibility
  useEffect(() => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTopButton.classList.add('active');
        } else {
          backToTopButton.classList.remove('active');
        }
      };
      window.addEventListener('load', toggleBackToTop);
      document.addEventListener('scroll', toggleBackToTop);

      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener('load', toggleBackToTop);
        document.removeEventListener('scroll', toggleBackToTop);
      };
    }
  }, []);

  return (
    <>
      <footer className="footer-area" style={{ backgroundImage: `url(${footerBg})` }}>
        {/* Floating Social Icons */}
        {/* <div className="social-sidebar">
          <a href="https://www.instagram.com/upicon_1974/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/upicon1974/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div> */}

        <div className="container">
          <div className="footer-main">
            <div className="row">
              <div className="col-12 mb-4">
                <img src={footerLogo} alt="UPICON Logo" className="footer-logo" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg col-md-4 col-sm-6 mb-4">
                <h5>Quick Links:</h5>
                <ul className="list-unstyled footer-links">
                  <li><Link to="/skill-development">Training & Skill</Link></li>
                  <li><Link to="/consultancy-group">Consultancy Group</Link></li>
                  <li><Link to="/csr-training">CSR Training</Link></li>
                  <li><Link to="/cmyuva">CM Yuva</Link></li>
                </ul>
              </div>
              <div className="col-lg col-md-4 col-sm-6 mb-4">
                <h5>Registered Office</h5>
                <p>
                  5th Floor, Kabir Bhawan,<br />
                  G.T. Road,<br />
                  Kanpur – 208002,<br />
                  Uttar Pradesh
                </p>
              </div>
              <div className="col-lg col-md-4 col-sm-6 mb-4">
                <h5>Corporate Office Address:</h5>
                <p>
                  A-708-709, 7th Floor, Rohtas Summit Building, Vibhuti Khand, Gomti Nagar,<br />
                  Lucknow – 226 010,<br />
                  Uttar Pradesh
                </p>
              </div>
              <div className="col-lg col-md-6 col-sm-6 mb-4">
                <h5>Office Hours:</h5>
                <p>
                  Mon-Sat: 09:30AM- 6:00PM<br />
                  2nd & 4th Sat: Closed<br />
                  Sunday: Closed
                </p>
              </div>
              <div className="col-lg col-md-6 col-sm-12 mb-4">
                <h5>Contact Us:</h5>
                <p className="footer-contact">
                  Email: <a href="mailto:info@upicon.in">info@upicon.in</a><br />
                  Phone: <a href="tel:05224233727">0522 423 3727</a><br />
                  Other Enquiry: <a href="mailto:mdoffice@upicon.in">mdoffice@upicon.in</a><br />
                  Banking Support: <a href="mailto:fi.up@upicon.in">fi.up@upicon.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                <span>Copyright @1974 - 2025 UPICON. All rights reserved</span>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <Link to="/privacynotice">Privacy Policy || Terms and Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
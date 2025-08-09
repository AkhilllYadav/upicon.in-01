import React from 'react';
import { Link } from 'react-router-dom'; // Correct use for client-side routing
import { Helmet } from 'react-helmet';   // Excellent for SEO and page metadata

// Import the dedicated CSS file for this component
import '../css/ComingSoon.css';

const ComingSoon = () => {
  return (
    <>
      {/* react-helmet is used perfectly here to manage page-specific head tags. */}
      <Helmet>
        <title>Coming Soon | UPICON</title>
        <meta name="description" content="This page is under construction. We are working hard to bring you new and exciting content." />
        <meta name="keywords" content="coming soon, under construction, UPICON" />
        {/* The 'noindex' tag is a crucial best practice for non-public pages. */}
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Main container for the page content */}
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-message">
            We are working hard to launch this page. Stay tuned!
          </p>
          <div className="home-link-container">
            {/* The Link component is the correct way to handle internal navigation in a React app. */}
            <Link to="/" className="home-button">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
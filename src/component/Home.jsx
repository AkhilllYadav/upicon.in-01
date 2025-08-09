import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from '../apiConfig'; // Great practice: a centralized Axios instance

// Component Imports
import Header from './Header';
import GoogleTag from './GoogleTag';
import BannerSection from './BannerSection';
import Sliderhome from './Sliderhome';
import Counter from './Counter';
import Coverage from './Covrage';
import Initiatives from './Initiatives';
import NewsSection from './NewsSection';

// It's good practice to keep non-component-specific CSS in a central file like index.css
import '../assets/css/index.css'; 

function Home() {
  // State for holding dynamic meta tags fetched from the API
  const [meta, setMeta] = useState({
    meta_title: 'Home | UPICON',
    meta_description: 'Loading page information...',
    meta_keywords: 'UPICON, industrial consultants, MSME',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch dynamic meta tags when the component mounts
  useEffect(() => {
    axios.get('/meta-tags/home')
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data); // Update state with fetched meta tags
        }
      })
      .catch(err => {
        console.error('Failed to fetch meta tags:', err);
        // Optionally, you can set an error state to give user feedback
        setError('Could not load page metadata.');
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the request finishes
      });
  }, []); // The empty dependency array [] ensures this runs only once

  return (
    <>
      {/* react-helmet is used correctly to manage the document head */}
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
        {/* This meta tag for Google Search Console verification is also well-placed */}
        <meta name="google-site-verification" content="OkJ4P8Jy0A9gVRy654X_G51tARaqpFtSe6MBpQKrnuM" />
      </Helmet>
      
      {/* The component composition is clean and easy to read */}
      <Header />
      <GoogleTag />
      <BannerSection />
      <Sliderhome />
      <Counter />
      <Coverage />
      <Initiatives />
      <NewsSection />
    </>
  );
}

export default Home;
import React, { useEffect, useState } from 'react';
import axios from "../apiConfig"; // Centralized Axios instance
import { Helmet } from 'react-helmet';

// Import custom CSS for this component
import '../css/InitiativesPage.css'; 

const InitiativesPage = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState({
    meta_title: 'Initiatives | UPICON',
    meta_description: 'Explore the various initiatives and programs by UPICON.',
    meta_keywords: 'initiatives, programs, UPICON, development',
  });

  // Note: Modal state and handlers are kept in case you wish to implement the modal feature.
  const [showModal, setShowModal] = useState(false);
  const [selectedInitiative, setSelectedInitiative] = useState(null);

  // Fetch meta tags from the API
  useEffect(() => {
    axios.get('/meta-tags/initiative')
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data);
        }
      })
      .catch(err => {
        console.error('Failed to fetch meta tags:', err);
      });
  }, []);

  // Fetch initiatives data from the API
  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const response = await axios.get('/initiatives');
        setInitiatives(response.data);
      } catch (err) {
        setError(err);
        console.error('Error fetching initiatives data:', err);
      }
    };

    fetchInitiatives();
  }, []);

  // Modal handler functions (UI for modal not included in original code)
  const handleShowModal = (initiative) => {
    setSelectedInitiative(initiative);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInitiative(null);
  };

  if (error) {
    return <div className="container text-center py-5">Error: {error.message}</div>;
  }

  return (
    <>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>

      <div className="initiatives-page">
        {/* Page Banner */}
        <div className="page-banner">
          <h1 className="page-banner-title">Initiatives</h1>
        </div>

        {/* Initiatives Grid */}
        <div className="container initiatives-grid">
          <div className="row">
            {initiatives.map((initiative) => (
              <div key={initiative.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="initiative-card">
                  <div className="card-image-container">
                    <img
                      src={initiative.image}
                      alt={initiative.title || 'Initiative Image'}
                      className="initiative-card-image"
                    />
                  </div>
                  <div className="initiative-card-body">
                    <p
                      className="initiative-card-title"
                      dangerouslySetInnerHTML={{ __html: initiative.title }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {error && <div className="error-message">Error fetching data: {error.message}</div>}
        </div>
      </div>
    </>
  );
};

export default InitiativesPage;
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "../apiConfig"; // Assuming this is your configured Axios instance
import { Link } from "react-router-dom";
import Loader from "./Loader";

// Import Owl Carousel and custom component CSS
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/Initiatives.css"; // Import the dedicated CSS file

const Initiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/initiatives"); // Your API endpoint
        setInitiatives(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitiatives();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <Loader size={10} color="#3EB7BB" height="20px" />;
  }

  if (error) {
    // It's good practice to show an error message
    return <div className="container text-center py-5">Failed to load initiatives.</div>;
  }

  return (
    <section id="initiatives" className="initiatives-section">
      <div className="container">
        <div className="row gy-4 align-items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-7 col-md-6">
            <h5 className="text-start shorthead sectionhead">Featured Initiatives</h5>
            <h2 className="text-start fw-bold mt-4">UPICON: Various Initiatives for Diverse Benefits</h2>
          </div>
          <div className="col-lg-5 col-md-6 text-md-end text-start">
            <a href="/initiative" className="btn-get-started text-white">View All</a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <p className="initiatives-lead-text">
              We trained over 4 Lakh people in past year under various schemes!
            </p>
            <p className="initiatives-description">
              These programs aim to provide skills and knowledge to enhance the latent talents of potential entrepreneurs... (and so on)
            </p>
          </div>
        </div>

        <OwlCarousel
          className="owl-theme initiatives-carousel"
          loop
          margin={20}
          autoplay={true}
          nav={true}
          navText={[`<span class="custom-prev"></span>`, `<span class="custom-next"></span>`]}
          dots={false}
          responsive={{
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            1200: { items: 4 },
          }}
        >
          {initiatives.map((initiative) => (
            <div key={initiative.id} className="initiative-card">
              <img
                src={initiative.image}
                alt={initiative.title}
                className="initiative-card-img"
              />
              <div className="initiative-card-body">
                <p
                  className="initiative-card-title"
                  dangerouslySetInnerHTML={{ __html: initiative.title }}
                ></p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Initiatives;
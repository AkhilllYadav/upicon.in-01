


import React, { useEffect, useState } from 'react';
import axios from "../apiConfig";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Helmet } from 'react-helmet';

const formatDate = (dateString) => {
  const date = new Date(dateString); // Convert the date string to a Date object
  return date.toLocaleDateString('en-GB'); // Format the date as 'DD-MM-YYYY' (British format)
};

const Blog = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [readMore, setReadMore] = useState([]);
    const [meta, setMeta] = useState({
      meta_title: 'News | UPICON',
      meta_description: 'Learn about our mission, vision, and the team behind My Website.',
      meta_keywords: 'Learn about our mission, vision, and the team behind My Website.',
    });

    useEffect(() => {
      axios.get('/meta-tags/news')
        .then(response => {
          if (response.data && !response.data.error) {
            setMeta(response.data);
          }
        })
        .catch(error => {
          console.error('Failed to fetch meta tags:', error);
        });
    }, []);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get('/sliders');
        setItems(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlog();
  }, []);

  return (
    <>
         <Helmet>
            <title>{meta.meta_title}</title>
            <meta name="description" content={meta.meta_description} />
            <meta name="keywords" content={meta.meta_keywords} />
          </Helmet>
      <div className="container-fluid mb-5 blog">
        <div className="row">
          <div className="">
            <h2 className="my-5 text-center p-5 text-white display-3 fw-bold">
              Latest News
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {items.map(item => (
            <div key={item.id} className="col-md-3 mb-4">
              <div className="card h-100 rounded-top-4 border shadow">
                <div className="card-image">
                  <img src={item.image} alt={item.title || 'Image'} style={{ height: "220px", objectFit: "cover" }} className="img-fluid" />
                </div>
                <div
                  className="card-body"
                  style={{
                    height: "167px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="card-text text-start"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3, // Show 3 lines
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      position: 'relative',
                    }}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                    />
                  </div>
                  <Link
                    to={`/news/${item.slug}`}
                    className="read-more-link"
                    style={{
                      color: "#3EB7BB",
                      textDecoration: "none",
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "100px",
                      height: "30px",
                      lineHeight: "30px",
                      textAlign: "center",
                      borderRadius: "4px",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                    }}
                  >
                   Read More
                  </Link>
                </div>



                {/* <div className="card-body d-flex flex-column">
                  <p className="text-start" dangerouslySetInnerHTML={{ __html: `${item.text.slice(0, 120)}...` }} />
                  <div className="mt-auto text-start">
                                        <Link style={{
                      color: "#3EB7BB",
                      textDecoration: "none",
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "100px",
                      height: "30px",
                      lineHeight: "30px",
                      textAlign: "center",
                      // border: "1px solid #3EB7BB",
                      borderRadius: "4px",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                    }}  to={`/news-details/${item.slug}`} className="text-start learn-more-btn">Read More</Link>

                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {error && <div className="error">Error fetching data: {error.message}</div>}
      </div>
      <style>
        {`
         .learn-more-btn::after {
    content: '';
    display: block;
    width: 62%;
    height: 2px;
    background-color: #DF7C21;
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: width 0.3s ease;
}

          .card {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
          }

          .card-image img {
            border-radius: 10px 10px 0 0;
          }

          .card-body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
};

export default Blog;

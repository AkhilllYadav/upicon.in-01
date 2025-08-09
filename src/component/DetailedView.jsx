// import React, { useEffect, useState } from 'react';
// import axios from '../apiConfig'; 
// import { useParams } from 'react-router-dom';

// import { Helmet } from 'react-helmet';
// import DOMPurify from 'dompurify'; 

// const formatDate = (dateString) => {
//     const date = new Date(dateString); 
//     return date.toLocaleDateString('en-GB'); 
// };

// const DetailedView = () => {
//     const { slug } = useParams();
//     const [item, setItem] = useState(null);
//     const [items, setItems] = useState([]);
//     const [error, setError] = useState(null);
//   const [meta, setMeta] = useState({
//     meta_title: 'News Detail | UPICON',
//     meta_description: 'Learn about our mission, vision, and the team behind My Website.',
//     meta_keywords: 'about, mission, vision, team',
//   });

//     useEffect(() => {
//         const fetchDetailed = async () => {
//             try {
//                 const response = await axios.get(`/news/slug/${slug}`);

//                 setItem(response.data);
//             } catch (err) {
//                 setError(err.response?.data?.message || 'Network Error');
//             }
//         };

//         if (slug) {
//             fetchDetailed();
//         }
//     }, [slug]);

//     useEffect(() => {
//         const fetchSliders = async () => {
//             try {
//                 const response = await axios.get('/sliders');
//                 setItems(response.data);
//             } catch (error) {
//                 setError(error);
//             }
//         };

//         fetchSliders();
//     }, []);

//     if (error) {
//         return (
//             <div className="text-danger text-center mt-5">
//                 Error fetching data: {error}
//             </div>
//         );
//     }

//     if (!item) {
//         return <div className="text-center mt-5">Loading...</div>;
//     }

//     const filteredItems = items.filter((trendingItem) => trendingItem.slug !== item.slug);
//     const limitedItems = filteredItems.slice(0, 3);

//     return (
//         <>

// <Helmet>
//   <title>News Detail | UPICON</title>
//   <meta name="description" content={item.meta_description || meta.meta_description} />
//   <meta name="keywords" content={item.focus_keyword || meta.meta_keywords} />
// </Helmet>

//             {/* <Helmet>
//                 <title>News Detail | UPICON</title>
//                 <meta name="description" content="Learn about our mission, vision, and the team behind My Website." />
//                 <meta name="keywords" content="about, mission, vision, team" />

//             </Helmet> */}

//             <div className="container-fluid mb-5 blog">
//                 <div className="row">
//                     <div className="col-12">
//                         {/* <h2 className="mt-5 text-center text-white fw-bold">{item.title}</h2> */}
//                         <h1 className="mt-5 text-center text-white display-3 fw-bold">News</h1>
//                     </div>
//                 </div>
//             </div>

//             <div className="container detailed-view-container mb-3">
//                 <div className="row mt-4">
//                     <div className="col-lg-4 col-md-6 col-sm-6">
//                         <div className="card p-3">
//                             <ul className="list-unstyled">
//                                 {limitedItems.map((trendingItem) => (
//                                     <li key={trendingItem.id} className="mb-3">
//                                         <a
//                                             href={`/news/${trendingItem.slug}`}
//                                             className="text-decoration-none d-flex align-items-center"
//                                         >
//                                             <img
//                                                 src={trendingItem.image}
//                                                 alt={trendingItem.focus_keyword}
//                                                 className="img-fluid  me-3"
//                                                 style={{ width: '80px', height: '80px', objectFit: 'cover' }}
//                                             />
//                                             <div>
//                                                 {/* <h6 className="text-black text-start">{trendingItem.text}</h6> */}
//                                                 <h6
//   className="text-black text-start"
//   style={{
//     display: '-webkit-box',
//     WebkitBoxOrient: 'vertical',
//     WebkitLineClamp: 2,
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//   }}
// >
//   {trendingItem.text.replace(/(<([^>]+)>)/gi, '')}
// </h6>

//                                                 {/* <p className="text-muted text-start">{formatDate(trendingItem.created_at)}</p> */}
//                                             </div>
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="col-lg-8 col-md-6 col-sm-6">
//                         <div className="detailed-view">
//                             <img
//                                 src={item.image}
//                                 alt={item.title || 'Image'}
//                                 className="img-fluid float-left me-4 mb-2 newsimage"
//                                 style={{ width: '300px', height: 'auto' }}
//                             />

//                             {/* <h4 className=" text-start">{item.title}</h4> */}

//                             {/* <div className="d-flex justify-content-between align-items-center mb-3">
//                                 <span className="text-muted ms-auto">Posted: {formatDate(item.created_at)}</span>
//                             </div> */}

//                             {/* Render sanitized HTML content */}
//                             <div
//                                 className="mt-3 detailed-text text-start"
//                                 dangerouslySetInnerHTML={{
//                                     __html: DOMPurify.sanitize(item.text),
//                                 }}
//                             />

//                             {/* Internal CSS for lists */}
//                             <style>
//                                 {`
//                                     ul {
//                                         list-style-type: disc; /* Bullets for unordered lists */
//                                         margin-left: 20px; /* Indentation */
//                                     }
//                                     ol {
//                                         list-style-type: decimal; /* Numbers for ordered lists */
//                                         margin-left: 20px; /* Indentation */
//                                     }
//                                     .list-unstyled {
//                                         list-style-type: none; /* No style for unstyled lists */
//                                     }
//                                 `}
//                             </style>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DetailedView;
import React, { useEffect, useState, useMemo } from 'react';
import axios from '../apiConfig';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DOMPurify from 'dompurify';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB');
};

const DetailedView = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState({
    meta_title: 'News Detail | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'about, mission, vision, team',
  });

  // Fetch the detailed item by slug
  useEffect(() => {
    if (!slug) return;

    const fetchDetailed = async () => {
      try {
        const { data } = await axios.get(`/news/slug/${slug}`);
        console.log('paget title', data.page_title);
        setItem(data);
        // Update meta tags if available
        setMeta({
          meta_title: data.page_title === null ? data.meta_title : data.page_title,
          meta_description: data.meta_description || meta.meta_description,
          meta_keywords: data.focus_keyword || meta.meta_keywords,
        });
      } catch (err) {
        setError(err.response?.data?.message || 'Network Error');
      }
    };

    fetchDetailed();
  }, [slug]);

  // Fetch all sliders or trending blogs
  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const { data } = await axios.get('/sliders');
        setItems(Array.isArray(data.blogs) ? data.blogs : []);
      } catch (err) {
        setError(err.message || 'Failed to fetch sliders');
      }
    };

    fetchSliders();
  }, []);

  // Compute filtered and limited items, excluding the current slug
  const filteredItems = useMemo(() => {
    if (!item || !Array.isArray(items)) return [];
    return items.filter(
      (trendingItem) => String(trendingItem.slug) !== String(item.slug)
    );
  }, [item, items]);

  const limitedItems = useMemo(() => filteredItems.slice(0, 3), [filteredItems]);

  if (error) {
    return (
      <div className="text-danger text-center mt-5">
        Error fetching data: {error}
      </div>
    );
  }

  if (!item) {
    return <div className="text-center mt-5">Loading...</div>;
  }


  return (

    <>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>

      <div className="container-fluid mb-5 blog">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 text-center text-white display-3 fw-bold">News</h1>
          </div>
        </div>
      </div>

      <div className="container detailed-view-container mb-3">
        <div className="row mt-4">
          {/* Trending Sidebar */}
          {/* <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card p-3">
              <ul className="list-unstyled">
                {limitedItems.map((trendingItem) => (
                  <li key={trendingItem.id} className="mb-3">
                    <a
                      href={`/news/${trendingItem.slug}`}
                      className="text-decoration-none d-flex align-items-center"
                    >
                      <img
                        src={trendingItem.image}
                        alt={trendingItem.focus_keyword}
                        className="img-fluid me-3"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6
                          className="text-black text-start"
                          style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {trendingItem.title}
                        </h6>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="col-lg-12 col-md-6 col-sm-6">
            <div className="detailed-view">
              <img
                src={item.image}
                alt={item.title || 'Image'}
                className="img-fluid float-left me-4 mb-2 newsimage"
                style={{ width: '300px', height: 'auto' }}
              />

              <h2 className="fw-bold text-start">{item.title}</h2>
              <div
                className="mt-3 detailed-text text-start"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.content),
                }}
              />

              {/* Internal CSS for Lists */}
              <style>
                {`
                  ul {
                    list-style-type: disc;
                    margin-left: 20px;
                  }
                  ol {
                    list-style-type: decimal;
                    margin-left: 20px;
                  }
                  .list-unstyled {
                    list-style-type: none;
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedView;

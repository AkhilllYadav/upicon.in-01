
// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from "../apiConfig";
// import DOMPurify from 'dompurify';

// const Elearning = () => {
//     const navigate = useNavigate();
//     const [content, setContent] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const { slug } = useParams();

//     useEffect(() => {
//         const fetchContent = async () => {
//             setLoading(true);
//             try {
//                 const res = await axios.get(`/blog/${slug}`);
//                 if (res.data.redirect_url) {
//                     navigate("/comingsoon");
//                     return;
//                 }
//                 setContent(res.data);
//             } catch (err) {
//                 setError("Failed to load content. Please try again.");
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchContent();
//     }, [slug, navigate]);

//     useEffect(() => {
//         const style = document.createElement("style");
//         style.innerHTML = `
//             .elearning-header {

//             }
// .newsimage{
//  color: white;
//  width:100%;
//                max-height: 500px;
//                 // padding: 120px 0;
              
// }


// .image-heading {
//   position: absolute;
//   top: 35%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white; /* or any color that stands out */
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* optional: adds contrast */
//   padding: 10px;
//   text-align: center;
// }

//             .elearning-article {
//                 padding: 2rem 1.5rem;
//             }

//             .elearning-article .content-wrapper {
//                 display: flex;
//                 flex-wrap: wrap;
//                 gap: 2rem;
//             }

//             .elearning-article img {
//                 width: 100%;
//                 max-width: 500px;
//                 height: auto;
//                 border-radius: 8px;
//             }

//             .elearning-article .text-content {
//                 flex: 1;
//                 color: #444;
//             }

//             .elearning-article .text-content h2 {
//                 font-size: 1.25rem;
//                 font-weight: 600;
//                 margin-bottom: 1rem;
//             }

//             .elearning-article .text-content p {
//                 line-height: 1.7;
//                 margin-bottom: 1rem;
//             }

//             @media (max-width: 768px) {
//                 .elearning-article .content-wrapper {
//                     flex-direction: column;
//                 }
//             }
//                 strong{
//                 color:black;}
//         `;
//         document.head.appendChild(style);
//         return () => document.head.removeChild(style);
//     }, []);

//     if (loading) {
//         return (
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//                 <div className="spinner-border text-primary" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="text-danger text-center p-5">{error}</div>;
//     }

//     if (!content) {
//         return (
//             <div className="text-center p-5">
//                 <h2>Coming Soon</h2>
//                 <p>This content will be available shortly.</p>
//             </div>
//         );
//     }

//     return (
//         <>
//             <Helmet>
//                 <title>{content.title || "eLearning"} | UPICON</title>
//                 <meta name="description" content={content.meta_description || "Elearning content"} />
//                 <meta name="keywords" content={content.focus_keyword || "elearning, article, research"} />
//                 <meta name="robots" content="index, follow" />
//             </Helmet>




//             <div className="container detailed-view-container my-3">
              



//                 <div className="col-lg-12 col-md-6 col-sm-6">
//                 <div className="detailed-view clearfix">
// {/* "  <h1 className="text-start fw-bold">{content.title}</h1>" */}
//                         {/* <img
//                             src={content.image}
//                             alt={content.title || 'Image'}
//                             className="img-fluid float-left me-4 mb-2 newsimage"
//                             style={{ width: '300px', height: 'auto' }}
//                         /> */}
//                         <div

//                             className="mt-3 detailed-text text-start"
//                             dangerouslySetInnerHTML={{
//                                 __html: DOMPurify.sanitize(content.content),
//                             }}
//                         />
//                         <style>
//                             {`
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
//                         </style>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default Elearning;

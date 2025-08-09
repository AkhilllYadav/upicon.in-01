


// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Card, Spinner } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import axios from "../apiConfig";

// // Slick carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Elearningartical = () => {
//     const [articles, setArticles] = useState([]);
//     const [news, setNews] = useState([]);
//     const [researchPapers, setResearchPapers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [meta, setMeta] = useState({
//         meta_title: 'Articles & Research Papers | UPICON',
//         meta_description: 'Learn about our mission, vision, and the team behind My Website.',
//         meta_keywords: 'about, mission, vision, team',
//     });
//     useEffect(() => {
//         const style = document.createElement("style");
//         style.innerHTML = `
//           .resarch {
//               background: linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
//               linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/articalrearch.png');
//               background-size: cover;
//               background-position: center;
//               background-repeat: no-repeat;
//               position: relative;
//               padding: 120px 0;
//               display: flex;
//               justify-content: center;
//               align-items: center;
//           }
//           .resarchdiv {
//               background-image: url('/assets/images/bgartical.png');
//               background-size: cover;
//               background-position: center;
//               background-repeat: no-repeat;
//               padding-top: 3rem;
//           }
//           .card-custom {
//               border-radius: 8px;
//               overflow: hidden;
//               margin-bottom: 20px;
//           }
//           .card-img-top {
//               height: 200px;
//               object-fit: cover;
//           }
//           .card-body {
//               padding: 20px;
//           }
//           .sectionhead {
//               color: #3EB7BB;
//               position: relative;
//           }
//           .sectionhead::after {
//               content: '';
//               position: absolute;
//               left: 15px;
//               bottom: -6px;
//               width: 60px;
//               height: 2px;
//               background-color: #e68021;
//           }
//           .card-title {
//               height: 100px;
//               overflow: hidden;
//           }
//           .read-more-links {
//               color: #3EB7BB;
//               text-decoration: none;
//               font-weight: bold;
//               display: block;
//               height: 30px;
//               line-height: 30px;
//               margin-top: 10px;
//               text-align: left;
//               transition: background-color 0.3s ease, color 0.3s ease;
//           }
//           .read-more-links:hover {
//               color: #3EB7BB;
//           }
//         `;
//         document.head.appendChild(style);
//         return () => document.head.removeChild(style);
//     }, []);

//     useEffect(() => {
//         const fetchSliders = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get("/blogs");
//                 setArticles(response.data.articles);
//                 setNews(response.data.news);
//                 setResearchPapers(response.data.research);

//                 // Assuming meta info comes like this from API:
//                 if (response.data.meta_title || response.data.meta_description || response.data.meta_keywords) {
//                     setMeta({
//                         meta_title: response.data.meta_title || meta.meta_title,
//                         meta_description: response.data.meta_description || meta.meta_description,
//                         meta_keywords: response.data.meta_keywords || meta.meta_keywords,
//                     });
//                 }
//             } catch (error) {
//                 setError("Error fetching blogs. Please try again later.");
//                 console.error("Error fetching blogs:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSliders();
//     }, []);

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <>
            // <Helmet>
            //     <title>Articles & Research Papers | UPICON</title>
            //     <meta name="description" content={meta.meta_description} />
            //     <meta name="keywords" content={meta.meta_keywords} />
            // </Helmet>
            // <div className="container-fluid">
            //     <div className="row resarch">
            //         <h5 className="my-5 text-center p-5 text-white display-4 fw-bold">
            //             Articles & Research Papers
            //         </h5>
            //     </div>
            // </div>
//             <div className="container-fluid">
//                 <div className="container">
//                     <div className="row">
//                         <h5 className="text-start fw-bold mt-5 sectionhead">News</h5>
//                         <h2 className="text-start fw-bold mt-3"> UPICON Latest</h2>
//                         <p className="section-content text-start" style={{ color: '#2E2E2E' }}>
//                             When we were engaging people to participate in transformative training sessions under programs like RAMP, VSSY, CM YUVA Udyami Vikas Abhiyaan, Mission Shakti, ZED, ESG, Handicraft, and more, the media documented our impactful moments. Reflecting on these experiences fills us with pride. This section highlights UPICON's media coverage, emphasizing the recognition we've received for our significant contributions to the state's industrial landscape.
//                         </p>
//                     </div>

//                     <div className="mt-5">
//                         {loading ? (
//                             <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
//                                 <Spinner animation="border" role="status" variant="info">
//                                     <span className="visually-hidden">Loading...</span>
//                                 </Spinner>
//                             </div>
//                         ) : (
//                             <Slider {...sliderSettings}>
//                                 {news.map((item, index) => (
//                                     <div key={index} className="p-2">
//                                         <Card className="card-custom border-0">
//                                             <Card.Img className="p-2" variant="top" src={item.image} />
//                                             <Card.Body>
//                                                 <Card.Title className="fw-bold" style={{ fontSize: '18px' }}>{item.title}</Card.Title>
//                                                 <Link
//                                                     to={`/news/${item.slug}`}
//                                                     className="read-more-links"
//                                                 >
//                                                     Read more <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>
//                                                 </Link>
//                                             </Card.Body>
//                                         </Card>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <div className="container-fluid resarchdiv">
//                 <div className="container">
//                     <div className="row">
//                         <h5 className="text-start fw-bold mt-5 sectionhead">Articles</h5>
//                         <h2 className="text-start fw-bold mt-3">UPICON Articles</h2>
//                         <p className="section-content text-start" style={{ color: '#2E2E2E' }}>
//                             The platform emphasizes accuracy, originality, and relevance, ensuring that all published content meets rigorous academic standards. Upicon aims to foster knowledge exchange and support intellectual growth by making research accessible to students, educators, and industry experts worldwide.
//                         </p>
//                     </div>

//                     <div className="mt-5 artical">
//                         {loading ? (
//                             <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
//                                 <Spinner animation="border" role="status" variant="info">
//                                     <span className="visually-hidden">Loading...</span>
//                                 </Spinner>
//                             </div>
//                         ) : (
//                             <Slider {...sliderSettings}>
//                                 {articles.map((item, index) => (
//                                     <div key={index} className="p-2">
//                                         <Card className="card-custom border-0">
//                                             <Card.Img className="p-2" variant="top" src={item.image} />
//                                             <Card.Body>
//                                                 <Card.Title className="fw-bold" style={{ fontSize: '18px' }}>{item.title}</Card.Title>
//                                                 <Link
//                                                     to={`/article/${item.slug}`}
//                                                     className="read-more-links"
//                                                 >
//                                                     Read more <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>
//                                                 </Link>
//                                             </Card.Body>
//                                         </Card>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <div className="container-fluid">
//                 <div className="container">
//                     <div className="row">
//                         <h5 className="text-start fw-bold mt-5 sectionhead">Research Papers</h5>
//                         <h2 className="text-start fw-bold mt-3">UPICON Research Papers</h2>
//                         <p className="section-content text-start" style={{ color: '#2E2E2E' }}>
//                             Research Papers is a platform dedicated to publishing high-quality scholarly articles and research papers across various disciplines. It provides researchers, academics, and professionals with a space to share their findings, insights, and innovations with a global audience.
//                         </p>
//                     </div>

//                     <div className="mt-5">
//                         {loading ? (
//                             <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
//                                 <Spinner animation="border" role="status" variant="info">
//                                     <span className="visually-hidden">Loading...</span>
//                                 </Spinner>
//                             </div>
//                         ) : (
//                             <Slider {...sliderSettings}>
//                                 {researchPapers.map((item, index) => (
//                                     <div key={index} className="p-2">
//                                         <Card className="card-custom border-0">
//                                             <Card.Img className="p-2" variant="top" src={item.image} />
//                                             <Card.Body>
//                                                 <Card.Title className="fw-bold" style={{ fontSize: '18px' }}>{item.title}</Card.Title>
//                                                 <Link
//                                                     to={`/research/${item.slug}`}
//                                                     className="read-more-links"
//                                                 >
//                                                     Read more <span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>
//                                                 </Link>
//                                             </Card.Body>
//                                         </Card>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Elearningartical;
import React, { useEffect, useState } from "react";
import { Card, Spinner, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../apiConfig";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ElearningTabs = () => {
  const [allData, setAllData] = useState([]);
  const [news, setNews] = useState([]);
  const [articles, setArticles] = useState([]);
  const [research, setResearch] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);
  const [meta] = useState({
    meta_title: 'Articles & Research Papers | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'about, mission, vision, team',
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .resarch {
        background: linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/articalrearch.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 120px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .card-custom {
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      .card-img-top {
        height: 200px;
        object-fit: cover;
      }
      .card-body {
        padding: 20px;
      }
      .sectionhead {
        color: #3EB7BB;
        position: relative;
      }
      .sectionhead::after {
        content: '';
        position: absolute;
        left: 15px;
        bottom: -6px;
        width: 60px;
        height: 2px;
        background-color: #e68021;
      }
      .card-title {
        height: 100px;
        overflow: hidden;
      }
      .read-more-links {
        color: #3EB7BB;
        text-decoration: none;
        font-weight: bold;
        display: block;
        margin-top: 10px;
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      .read-more-links:hover {
        color: #3EB7BB;
      }
        .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: #DF7C21;
}
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/blogs");
const combined = [
  ...(res.data.news || []).map((item) => ({ ...item, type: "news" })),
  ...(res.data.articles || []).map((item) => ({ ...item, type: "article" })),
  ...(res.data.research || []).map((item) => ({ ...item, type: "research" })),
].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // or use id

        // const combined = [
        //   ...(res.data.news || []).map((item) => ({ ...item, type: "news" })),
        //   ...(res.data.articles || []).map((item) => ({ ...item, type: "article" })),
        //   ...(res.data.research || []).map((item) => ({ ...item, type: "research" })),
        // ];

        setAllData(combined);
        setNews(res.data.news || []);
        setArticles(res.data.articles || []);
        setResearch(res.data.research || []);
      } catch (error) {
        console.error("Error fetching blog data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const getCurrentItems = () => {
    switch (activeTab) {
      case "news": return news;
      case "article": return articles;
      case "research": return research;
      default: return allData;
    }
  };

  const items = getCurrentItems();

  return (
    <>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>

      <div className="container-fluid">
        <div className="row resarch">
          <h5 className="my-5 text-center p-5 text-white display-4 fw-bold">
            Articles & Research Papers
          </h5>
        </div>
      </div>

      <div className="container my-5">
        <Nav variant="pills" className="justify-content-center mb-4" activeKey={activeTab} onSelect={setActiveTab}>
          <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="news">News</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="article">Article</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="research">Research</Nav.Link></Nav.Item>
        </Nav>

        {loading ? (
          <div className="text-center my-5"><Spinner animation="border" /></div>
        ) : (
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-md-3 mb-4">
                <CardItem item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const CardItem = ({ item }) => {
  const bgColor = {
    news: "#DF7C21",
    article: "rgb(64 60 57)",
    research: "rgb(75 163 181)"
  }[item.type] || "#3EB7BB";

  return (
    <Card className="h-100 shadow-sm border-0">
      <div style={{ position: "relative" }}>
        <Card.Img variant="top" src={item.image} style={{ height: 200, objectFit: "cover" }} />
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: bgColor,
            color: "white",
            padding: "5px 12px",
            borderRadius: "20px",
            fontSize: "15px",
            textTransform: "capitalize"
          }}
        >
          {item.type}
        </span>
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title style={{ fontSize: "16px", height: "70px", overflow: "hidden" }}>
          {item.title}
        </Card.Title>
        <Link
          to={`/${item.type}/${item.slug}`}
          className="read-more-links"
        >
          Read more<span className="ms-2" style={{ color: "#3EB7BB" }}>&gt;</span>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ElearningTabs;

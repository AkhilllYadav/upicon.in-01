// import React, { useEffect, useState } from "react";
// import axios from "../apiConfig";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Loader from "./Loader";

// const CardSlider = ({ baseUrl }) => {
//   const [readMore, setReadMore] = useState([]);
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("/allblogs");
//         console.log("API response:", response.data);

//         // ✅ Set items to the 'blogs' array from the response
//         const blogs = response.data.blogs || [];
//         setItems(blogs);
//         setReadMore(Array(blogs.length).fill(false));
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         console.error("Error fetching sliders data:", error);
//         setLoading(false);
//       }
//     };

//     fetchSliders();
//   }, []);

//   if (loading) return <Loader />;
//   if (error) return <div>Error loading data</div>;
//   if (!Array.isArray(items)) return <div>Invalid data format</div>;

//   return (
//     <section id="latest-news" className="latest-news mb-5">
//       <div className="container">
//         <div className="row gy-4 align-items-center" data-aos="fade-up" data-aos-delay="100">
//           <div className="col-lg-6 col-md-6">
//             <h5 className="section-head shorthead sectionhead text-start" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
//               Updated News
//             </h5>
//             <h2 className="text-start fw-bold mt-4" style={{ color: "#000", fontSize: "2.5rem" }}>
//               UPICON Latest
//             </h2>
//           </div>
//           <div className="col-lg-6 col-md-6 text-md-end text-start">
//             <a href="/articles-research" className="btn-get-started text-white">
//               View All
//             </a>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-lg-12">
//             <p className="text-start" style={{ color: "#2E2E2E", fontSize: "1rem", lineHeight: "1.6" }}>
//               When we were engaging people to participate in transformative training sessions under programs like RAMP, VSSY, CM YUVA Udyami Vikas Abhiyaan, Mission Shakti, ZED, ESG, Handicraft, and more, the media documented our impactful moments. Reflecting on these experiences fills us with pride. This section highlights UPICON's media coverage, emphasizing the recognition we've received for our significant contributions to the state's industrial landscape.
//             </p>
//           </div>
//         </div>

//         <div className="row mt-5">
//           {items.slice(0, 4).map((item, index) => (
//             <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
//               <div className="card rounded-4 border-0 shadow-sm news-card" style={{ overflow: "hidden", borderRadius: "10px" }}>
//                 <img
//                   src={item.image}
//                   className="card-img-top"
//                   style={{
//                     height: "220px",
//                     objectFit: "cover",
//                     borderRadius: "10px 10px 0 0",
//                   }}
//                   alt={item.focus_keyword || "Image"}
//                 />
//                 <div
//                   className="card-body"
//                   style={{
//                     height: "167px",
//                     padding: "15px",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <div
//                     className="card-text text-start"
//                     style={{
//                       display: "-webkit-box",
//                       WebkitLineClamp: 3,
//                       WebkitBoxOrient: "vertical",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       position: "relative",
//                     }}
//                   >
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: item.title,
//                       }}
//                     />
//                   </div>
//                   <Link
//                     to={`/${item.type}/${item.slug}`}
//                     className="read-more-link"
//                     style={{
//                       color: "#3EB7BB",
//                       textDecoration: "none",
//                       fontWeight: "bold",
//                       display: "inline-block",
//                       width: "100px",
//                       height: "30px",
//                       lineHeight: "30px",
//                       textAlign: "center",
//                       borderRadius: "4px",
//                       transition: "background-color 0.3s ease, color 0.3s ease",
//                     }}
//                   >
//                     {readMore[index] ? "Read less" : "Read more"}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardSlider;
import React, { useEffect, useState } from "react";
import axios from "../apiConfig";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Loader";

const CardSlider = ({ baseUrl }) => {
  const [readMore, setReadMore] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/allblogs");
        console.log("API response:", response.data);

        // Collect one of each type: news, article, research
        const blogs = [];
        if (response.data.news) blogs.push(response.data.news);
        if (response.data.article) blogs.push(response.data.article);
        if (response.data.research) blogs.push(response.data.research);

        setItems(blogs);
        setReadMore(Array(blogs.length).fill(false));
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching sliders data:", error);
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error loading data</div>;
  if (!Array.isArray(items)) return <div>Invalid data format</div>;

  return (
    <section id="latest-news" className="latest-news mb-5">
      <div className="container">
        {/* Section heading */}
        <div className="row gy-4 align-items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6 col-md-6">
            <h5 className="section-head shorthead sectionhead text-start" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Updated News
            </h5>
            <h2 className="text-start fw-bold mt-4" style={{ color: "#000", fontSize: "2.5rem" }}>
              UPICON Latest
            </h2>
          </div>
          {/* <div className="col-lg-6 col-md-6 text-md-end text-start">
            <a href="/articles-research" className="btn-get-started text-white">
              View All
            </a>
          </div> */}
        </div>

        {/* Description */}
        <div className="row">
          <div className="col-lg-12">
            <p className="text-start" style={{ color: "#2E2E2E", fontSize: "1rem", lineHeight: "1.6" }}>
              When we were engaging people to participate in transformative training sessions under programs like RAMP, VSSY, CM YUVA Udyami Vikas Abhiyaan, Mission Shakti, ZED, ESG, Handicraft, and more, the media documented our impactful moments. Reflecting on these experiences fills us with pride. This section highlights UPICON's media coverage, emphasizing the recognition we've received for our significant contributions to the state's industrial landscape.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row mt-5">
          {/* Blog Cards */}
          {items.map((item, index) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
  <div className="card rounded-4 border-0 shadow-sm news-card" style={{ overflow: "hidden", borderRadius: "10px" }}>
    
    {/* Image with badge on top */}
    <div style={{ position: "relative" }}>
      <img
        src={item.image}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover",
          borderRadius: "10px 10px 0 0",
        }}
        alt={item.focus_keyword || "Image"}
      />
      
      {/* Badge on image */}
    <span
  className="badge position-absolute"
  style={{
    top: "10px",
    left: "10px",
    textTransform: "capitalize",
    padding: "6px 12px",
    fontSize: "0.95rem",
    backgroundColor:
      item.type === "news"
        ? "#DF7C21"
        : item.type === "article"
        ? "rgb(64 60 57)" // Bootstrap 'bg-success'
        : "rgb(75 163 181)", // Bootstrap 'bg-info'
    color: "#fff",
  }}
>
  {item.type}
</span>

    </div>

    {/* Card Body */}
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
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    position: "relative",
  }}
>
  <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
</div>


      <Link
        to={`/${item.type}/${item.slug}`}
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
        }}
      >
        {readMore[index] ? "Read less" : "Read more"}
      </Link>
    </div>
  </div>
</div>

          ))}
<div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch">
  <div
    className="card rounded-4 border-0 shadow-sm w-100 d-flex align-items-center justify-content-center position-relative"
    style={{
      height: "390px",
      textAlign: "center",
      overflow: "hidden",
      backgroundImage: `url("/assets/images/newsbgcard.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay with blur */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.2)", // optional soft overlay
      }}
    ></div>

    <div className="position-relative z-1">
      <a href="/articles-research" className="btn-get-started text-white px-4 py-2">
        View All
      </a>
    </div>
  </div>
</div>



        </div>
      </div>
    </section>
  );
};

export default CardSlider;

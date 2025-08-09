import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from '../apiConfig';



import yuvaImage from '../assets/images/yuva.png'; // Corrected path to the image
import bg from '../assets/images/Background.png'; // Corrected path to the background image
import yuvabg from '../assets/images/yuvabg.png'; // Corrected path to the background image


import '../css/index.css'; // Corrected path to the CSS file
const Elearning = () => {
  const [meta, setMeta] = useState({
    meta_title: 'CM YUVA Abhiyan | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'about, mission, vision, team',
  });
  const [showPopup, setShowPopup] = useState(true);
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    // Normalize the page name: remove spaces, make lowercase
    const pageName = "cm yuva";
    const normalizedSlug = pageName.replace(/\s+/g, '').toLowerCase(); // becomes "cmyuva"

    axios.get(`/meta-tags/${normalizedSlug}`)
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
  const isPopupShown = sessionStorage.getItem('popupShown');
  if (!isPopupShown) {
    setShowPopup(true);
    sessionStorage.setItem('popupShown', 'true');
  }
}, []);
  useEffect(() => {

    const style = document.createElement("style");
    style.innerHTML = `
      .resarch {
        background: linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/images/yuva.png');
        background-size: cover;
 
        background-repeat: no-repeat;
        position: relative;
        padding: 120px 0; 
        display: flex;
        justify-content: center;
        align-items: center;
      }
        .accordion-button{
        background: linear-gradient(90deg, #DF7C21 0%, #3EB7BB 100%);
        }
         .accordion-button::after {
   background: #3EB7BB 100%;
        background-size: contain;
        content: "";
        height: 20px;
        width: 22px;
      }

      .accordion-button:not(.collapsed)::after {
      background: #3EB7BB 100%;
        background-size: contain;
        content: "";
        height: 20px;
        width: 22px;
      }
     
      .resarchdiv {
        background-image: url('../assets/images/yuva.png');
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;
        padding-top: 2rem;
         
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
      .read-more-links {
        color: #3EB7BB;
        text-decoration: none;
        font-weight: bold;
        display: block;
        margin-top: 10px;
        text-align: left;
        transition: color 0.3s ease;
      }
      .read-more-links:hover {
        color: #DF7C21;
      }
        .yuvaul {
    list-style: disc !important; 
} 
    .gatewaydiv{
margin-top:5rem;
 }
  
   @media screen and (max-width: 992px) {
   .documents{
 padding-left:unset !important;
   }
 .gatewaydiv{
margin-top:unset;
 }
    }
  .yuvaul li::marker {
      color: #DF7C21; 
    }
      @media (max-width: 992px) {
      .resarchdiv{
      background-image:unset;
      }
  }
      .modal-backdrop {
  z-index: 1040 !important;
}

.modal {
  z-index: 1050;
}

    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const faqItem = [
    {
      question: "Here’s what you need to know: ",
      // answer: "The CM YUVA Udyami (Franchise) Abhiyan is structured to support and contribute to the larger vision...",
      // howToStartHeading: "The CM YUVA Udyami (Franchise) Abhiyan aims to:",
      howToStartSteps: [
        "5-day online entrepreneurship training.",
        "30-hours total reading training content.",
        "30-minute online assessment.",
        "Govt-recognized certificate upon completion.",
        "Eligible to apply for a bank loan up to ₹5,00,000.",
        "Ideal for aspiring youth & first-time entrepreneurs in Uttar Pradesh.",
      ],
    },
  ];
  const faqItemes = [

    {
       
      question: "How to Login and Register for the CM YUVA Entrepreneurship Course (EP)? ",
 headingContent: "Here's a simple, step-by-step guide to help you register, log in, and start your journey: ",
      answer: (
        <ul style={{ listStyleType: "disc", marginLeft: "20px"}}>
          <li><strong style={{ color: "#DF7C21" }}>Step 1 : </strong> Visit <a href="https://upicon.in"  target="_blank" class="fw-bold" style={{ color: "#3EB7BB" }}>upicon.in</a>.</li>
          <li><strong style={{ color: "#DF7C21" }}>Step 2 : </strong> Click on <a href="https://udyami.upicon.in/"  target="_blank" class="fw-bold" style={{ color: "#3EB7BB" }}> e-Learning </a>.</li>
          <li><strong style={{ color: "#DF7C21" }}>Step 3 : </strong> Select the <strong> CM YUVA EP Course.</strong></li>
          {/* <li><strong style={{ color: "#DF7C21" }}>Step 4 : </strong>Click <a href="https://udyami.upicon.in/login" class="fw-bold" style={{ color: "#3EB7BB" }}>Login</a> `&gt;` then <a href="https://udyami.upicon.in/registration" class="fw-bold" style={{ color: "#3EB7BB" }}>Register</a> Now if you’re a new user </li> */}
                   <li><strong style={{ color: "#DF7C21" }}>Step 4 : </strong> If you're a new user, <a href="https://udyami.upicon.in/registration" target="_blank" class="fw-bold" style={{ color: "#3EB7BB" }}>Register</a> yourself.</li>

          <li><strong style={{ color: "#DF7C21" }}>Step 5 : </strong> After successful registration, <a href="https://udyami.upicon.in/login"  target="_blank" class="fw-bold" style={{ color: "#3EB7BB" }}>login</a>  with your credentials.
            </li>
           
          <li><strong style={{ color: "#DF7C21" }}>Step 6 : </strong> Enroll in the course by making the payment.
            </li>

           <li><strong style={{ color: "#DF7C21" }}>Step 7 : </strong> The course list will be displayed on your dashboard.
            </li>
            <li><strong style={{ color: "#DF7C21" }}>Step 8 : </strong> On successful completion of the online assessment, you will be awarded the certificate.
            </li>
        </ul>


      ),

    },
  ];




  const faqItems = [
    {
      question: "Why this Initiative?",
      answer: "The CM YUVA Udyami (Franchise) Abhiyan is structured to support and contribute to the larger vision...",
      howToStartHeading: "The CM YUVA Udyami (Franchise) Abhiyan aims to:",
      howToStartSteps: [
        "Encouraging youth entrepreneurship by offering a well-defined franchise model  with guided support. ",
        "Ensuring financial accessibility with 100% interest-free, collateral-free loans to  make business ownership easier.",
        "Connecting aspiring entrepreneurs with 30+ established franchise brands,  minimizing risk and maximizing growth potential.   ",
        "Promoting self-reliance and skill-based entrepreneurship, helping youth apply  their knowledge and training in real-world business scenarios.",
      ],
    },
    {
      question: "Who can Apply?",
      answer: "This initiative is exclusively for the youth of Uttar Pradesh, providing them with the  resources and financial support needed to get started on their entrepreneurial journey  through franchise business model.",
      heading: <span style={{ color: "#DF7C21" }}>Age: 21 to 40 years.</span>,
      howToStartSteps: [
        "Minimum Qualification: 8th pass or equivalent.  ",
        "Aspiring entrepreneurs who want to start their own business through franchise  business model and build a successful future.",
      ],
    },
    {
      question: "Key Benefits",
      answer: (
        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
          <li><strong style={{ color: "#DF7C21" }}>Financial Freedom:</strong>  Up to ₹5-10 lakh interest-free, collateral-free loans to start a  business by getting a franchise. </li>
          <li><strong style={{ color: "#DF7C21" }}>Guided Success:</strong> Directly connect with 30+ reputed franchise brands and  industry experts and get to get in touch with thousands of franchise brands online.  </li>
          <li><strong style={{ color: "#DF7C21" }}>Knowledge & Training:</strong>Get insights into business ownership, operations, and  scaling strategie.</li>
        </ul>
      ),
    },
    {
      question: "Documents Required",
      answer: (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Left Side - Centered Categories with Bullets */}
          <ul style={{ listStyleType: "disc", margin: 0, paddingLeft: "20px", minWidth: "180px", textAlign: "center" }}>
            <li style={{ fontWeight: "bold", color: "#DF7C21", listStylePosition: "inside", marginBottom: "74px", textDecoration: "underline", textDecorationThickness: "1.5px", textUnderlineOffset: "4px" }}>
              Skill Documents
            </li>
            <li className="documents" style={{ fontWeight: "bold", color: "#DF7C21", listStylePosition: "inside", marginBottom: "74px", paddingLeft: '20px', textDecoration: "underline", textDecorationThickness: "1.5px", textUnderlineOffset: "4px" }}>
              Project Documents
            </li>
            <li className="documents" style={{ fontWeight: "bold", color: "#DF7C21", listStylePosition: "inside", marginBottom: "74px", paddingLeft: '27px', textDecoration: "underline", textDecorationThickness: "1.5px", textUnderlineOffset: "4px" }}>
              Personal Documents
            </li>

          </ul>

          {/* Right Side - Bullet Lists */}
          <div>
            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
              <li>Skill Certificate</li>
              <li>Training Certificate</li>
              <li>Computer Training Certificate</li>
              <li>ITI Certification</li>
            </ul>
            <ul style={{ listStyleType: "disc", marginLeft: "20px", marginTop: "10px" }}>
              <li>Project Report</li>
              <li>GST Registration (Optional)</li>
              <li>Udyam Registration (Optional)</li>
            </ul>
            <ul style={{ listStyleType: "disc", marginLeft: "20px", marginTop: "10px" }}>
              <li>PAN Card  Residency Certificate (Issued by Ward Member/Gram Pradhan)  </li>
              <li> Bank Account Details (First page of passbook showing contact history with the bank) </li>
              <li> Notarized Affidavit </li>
              <li>Educational Qualification Certificate</li>
              <li>Age</li>
              <li>Proof  Signature</li>
              <li>Recent Photograph</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      question: "Join our Event",
      answer: (
        <div
          style={{
            backgroundImage: "url('../assets/images/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "40px",
            backgroundColor: '#e6dfe0',
            textAlign: "center"
          }}
        >
          {/* White Background Wrapper */}
          <div className="evendeatil
                " style={{
              background: "white", padding: "20px", borderRadius: "8px", display: "inline-block", maxWidth: "800px",
              width: "100%",
            }}>
            {/* Event Title */}
            <h2 style={{ color: "#DF7C21", marginBottom: "20px" }}>Join our Event</h2>

            {/* Event Details */}
            <div className="" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/assets/images/Group 48095811.png"
                  alt="Event Date"
                  style={{ width: "24px", height: "24px" }}
                />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#DF7C21",
                    textDecoration: "underline",
                    textDecorationThickness: "1.5px", // Adjust thickness
                    textUnderlineOffset: "4px" // Adjust spacing between text and underline
                  }}
                >
                  Coming Soon
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", }}>
                <img src="/assets/images/Group 48095812.png" alt="Location" style={{ width: "24px", height: "24px" }} />
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#DF7C21" }}>
                  Jupiter Hall, Indira Gandhi Pratishthan, Lucknow
                </span>
              </div>

              {/* Register Button */}
              <a
                href="https://forms.gle/PbzVQAEbXA2QLadC8"
                target="_blank"
                rel="noopener noreferrer"
                style={{

                  background: " linear-gradient(90deg, #DF7C21 0%, #3EB7BB 100%)",
                  boxShadow: "inherit",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                  display: "inline-block",
                  marginTop: "20px"
                }}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      ),
    }

  ];

  return (
    <>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>
      {/* <Helmet>
                <title>CM YUVA Abhiyan | Yuva Udyami | UPICON</title>
                <meta name="description" content=" UPICON is driving the CM Yuva Abhiyan to empower the youth of Uttar Pradesh, specifically targeting individuals aged 18 to 40 years. This initiative aims to help them build a successful career and business by providing interest-free loans without any collateral or guarantee." />
                <meta name="keywords" content="CM YUVA abhiyan, cm yuva yojana, yuva vikas yojana, yuva vikas abhiyan, cm yuva scheme, udyami yojana, business franchise scheme, yuva udyami loan, youth empowerment scheme" />
       
            </Helmet> */}

      {/* Hero Section */}


      {showPopup && (
  <div
    className="modal fade show"
    style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }}
    tabIndex="-1"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-danger text-white d-flex justify-content-between align-items-center w-100">
          <h5 className="modal-title">
            🚨 Important Notice: Strict Warning
          </h5>
          <div className="d-flex align-items-center gap-2">
            <button
              className={`btn btn-sm ${language === 'en' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => setLanguage('en')}
            >
          
            </button>
            <button
              className={`btn btn-sm ${language === 'hi' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => setLanguage('hi')}
            >
            
            </button>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowPopup(false)}
            ></button>
          </div>
        </div>

        <div className="modal-body">
          {language === 'en' ? (
            <>
              <p className="fs-6 text-start">
                <strong>English:</strong> Only certificates that are generated
                or downloaded through the official website after successful
                course completion are considered valid.
              </p>
              <p className="fs-6 text-start">
                Any certificate obtained through unauthorized third-party
                sources or alternate methods will be deemed invalid and not
                recognized by the organization.
              </p>
              <p className="fs-6 text-start">
                Please ensure authenticity by using only the official process.
              </p>
              <p className="fs-6 text-start fw-bold">
                — Vigilance Department, UPICON
              </p>
            </>
          ) : (
            <>
              <p className="fs-6 text-start">
                <strong>महत्वपूर्ण सूचना: </strong> सी एम युवा ईपी प्रमाण पत्र
                के संबंध में केवल वही प्रमाण पत्र मान्य होंगे जो कोर्स पूर्ण
                होने के बाद आधिकारिक वेबसाइट के माध्यम से जनरेट या डाउनलोड किए
                गए हों।
              </p>
              <p className="fs-6 text-start">
                किसी भी तीसरे पक्ष के माध्यम या अन्य किसी गैर-आधिकारिक तरीके से
                प्राप्त किए गए प्रमाण पत्र अवैध माने जाएंगे और संस्था द्वारा
                स्वीकार नहीं किए जाएंगे।
              </p>
              <p className="fs-6 text-start">
                कृपया केवल आधिकारिक प्रक्रिया का पालन करें और प्रमाण पत्र की
                प्रामाणिकता सुनिश्चित करें।
              </p>
              <p className="fs-6 text-start fw-bold">
                — सतर्कता विभाग, यूपिकॉन
              </p>
            </>
          )}
        </div>

        <div className="modal-footer justify-content-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setShowPopup(false)}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      <div className="container-fluid">
        <div className="row resarch">
          <h5 className="my-5 text-center p-5 text-white display-6 fw-bold">
            Mukhyamantri YUVA Udyami Vikas Abhiyan
          </h5>
        </div>
      </div>


      {/* Entrepreneurship Details */}
      <div className="container-fluid">

        <div className="container">
          <div className="row">
            <h5 className="text-start fw-bold  sectionhead mt-5">Overview</h5>
         <div className="row">
 <div className="col-md-9 col-sm-6 text-end ">
    <h2 className="text-start fw-bold mt-3">
      CM Yuva Entrepreneurship Training Program
    </h2>
  </div>
<div className="col-md-3 col-sm-6 mt-4" >
  <div className="card ms-5" style={{ backgroundColor: "#25D366", borderRadius:"20px" , width:"250px"}}>
    <div className="card-body text-center" style={{ backgroundColor: "#25D366", borderRadius:"20px"}}>
      <a
        href="https://whatsapp.com/channel/0029VbAsbTtIHphRAsZ8bJ3u"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-decoration-none fw-bold"
      >
        <i className="fab fa-whatsapp fa-lg me-2"></i>
        Follow WhatsApp Channel
      </a>
    </div>
  </div>
</div>


</div>

            <p className="text-start my-2">
              CM YUVA Entrepreneurship Training Program is the first step towards CM YUVA Loan conducted by UPICON (U.P. Industrial Consultancy limited). Participants must complete a 5-day online training, qualify a 30-minute online assessment Upon successful completion, they receive a certification that can help them secure a bank loan of up to ₹5 lakhs to start their own business or entrepreneurial venture.
            </p>
            <div className="container mb-5">
              <div className="row accodiv">
                <div className="eleranacc col-lg-12">
                  <Accordion defaultActiveKey={faqItem.map((_, index) => index.toString())} alwaysOpen>
                    {(faqItem || []).map((item, index) => (
                      <Accordion.Item
                        eventKey={index.toString()}
                        key={index}
                        style={{
                          marginBottom: "20px",
                          borderRadius: "8px",
                          backgroundColor: "#FFFFFF",
                        }}
                      >
                        <Accordion.Header>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                              gap: "10px",
                            }}
                          >
                            <h3
                              style={{
                                fontWeight: "bold",
                                color: "white",
                                margin: 0,
                                flex: "1 1 auto",
                                minWidth: "200px",
                              }}
                            >
                              {item.question}
                            </h3>
                            <a
                              href="https://udyami.upicon.in/login"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                background: "linear-gradient(90deg, rgb(223, 124, 33) 0%, rgb(53 127 129) 100%)",
                                boxShadow: "inherit",
                                color: "white",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                textDecoration: "none",
                                fontSize: "17px",
                                fontWeight: "bold",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Register Now
                            </a>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="row">
                            {/* Left Column: Text Content */}
                            <div className="col-md-6">
                              {item.answer && <p className="text-start">{item.answer}</p>}

                              {item.heading && (
                                <>
                                  <h5 className="text-start fw-bold mt-3">{item.heading}</h5>
                                  <p className="text-start">{item.headingContent}</p>
                                </>
                              )}

                              {item.howToStartHeading && (
                                <h5 className="text-start fw-bold mt-3">{item.howToStartHeading}</h5>
                              )}

                              <ul style={{ lineHeight: "50px" }}>
                                {item.howToStartSteps?.map((step, stepIndex) => (
                                  <li
                                    className="text-start"
                                    key={stepIndex}
                                    style={{ listStyleType: "disc", marginLeft: "20px" }}
                                  >
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Right Column: YouTube Video */}
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                              <div style={{ width: "100%", textAlign: "center" }}>
                                <iframe
                                  width="100%"
                                  height="315"
                                  src="https://www.youtube.com/embed/S5WiHDY3VVE"
                                  title="CM YUVA EP YouTube video"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  style={{
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    maxWidth: "100%",
                                  }}
                                ></iframe>
                              </div>
                            </div>

                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>



            <div className="container mb-5">
              <div className="row accodiv">
                <div className="eleranacc col-lg-12" style={{lineHeight:"38px"}}>
                  <Accordion defaultActiveKey="0" alwaysOpen>
                    {faqItemes.map((item, index) => (
                      <Accordion.Item
                        eventKey={index.toString()}
                        key={index}
                        style={{
                          marginBottom: "20px",
                          borderRadius: "8px",
                          backgroundColor: "#FFFFFF",
                        }}
                      >
                        <Accordion.Header>
                          <h4 style={{ margin: 0, fontWeight: "bold", color: "#333" }}>{item.question}</h4>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="row">
                            {/* Text Side */}
                            <div className="col-md-12 text-start">
                              <h2 className="text-start fw-bold mt-3">{item.heading}</h2>
                              <h5 className="text-start">{item.headingContent}</h5>
                              <p className="text-start">{item.answer}</p>
                               {/* <p className="text-start">{item.bellowcontent}</p>
                              <p className="text-start fw-bold" style={{ color: "#DF7C21" }}><a href="https://udyami.upicon.in/registration" target="_blank"  style={{ color: "#DF7C21" }}>{item.registrationapply}</a></p> */}

                              {/* <img
                    // src={item.videoImage}
                    // alt="CM YUVA EP"
                    
                  /> */}
                              {/* <p className="mt-3"><strong>{item.registrationInfo}</strong></p>
                              <p className="mt-3"><strong>After entering all the details, click <span  class="fw-bold" style={{color:"#3EB7BB"}}>“Register.”</span>  </strong></p> 
                              <p className="text-start">{item.loginSteps}</p> */}
                            
<p>
 You can now begin learning and work toward your <span class="fw-bold" style={{ color: '#3EB7BB' }}> CM YUVA EP Certificate </span> —a key document to help you secure funding and take your entrepreneurial dreams forward.
</p>




                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>

          </div>
             </div>
      </div>
        <div className="container-fluid resarchdiv">

        <div className="container">
          <div className=" row my-5 ">
            <h2 className="fw-bold text-start">CM YUVA Udyami (Franchise) Abhiyan</h2>
            <h3 className="section-content fw-bold text-start" style={{ color: '#DF7C21', fontSize: '20px' }}>Empowering Youth, Building Businesses</h3>
            <h3 className="  text-start fw-bold">Your Gateway to Entrepreneurship</h3>
            <p className="section-content text-start" style={{ color: '#2E2E2E' }}>
              Entrepreneurship is one of the key drivers of economic growth, and CM YUVA Udyami  (Franchise) Abhiyan is committed to promoting a new wave of business leaders in Uttar  Pradesh. This initiative, Led by UPICON in collaboration with <a href="https://massentrepreneurship.org/" target="_blank">GAME</a> & <a href="https://www.franchiseindia.com/" target="_blank">Franchise </a>India,
              ,  provides a structured platform for the youth to start their own businesses through  established franchise models, ensuring a smoother and risk-free entrepreneurial journey.
            </p>
            <h5 className="text-start fw-bold mt-5">Being a part of this event, you will get a chance to:</h5>
            <ul className="text-start mt-3 yuvaul " style={{ color: '#2E2E2E', paddingLeft: '20px' }}>
              <li className="text-start fw-bold">Explore 30+ trusted franchise opportunities</li>
              <li className="text-start fw-bold">Avail ₹5-10 lakh collateral-free, interest-free loan under the CM Yuva Scheme</li>
              <li className="text-start fw-bold mb-3">Gain essential mentorship and guidance on business management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row accodiv">
            <div className="eleranacc col-lg-12 ">
              <Accordion defaultActiveKey={faqItems.map((_, index) => index.toString())} alwaysOpen>
                {(faqItems || []).map((item, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={index}
                    style={{
                      marginBottom: "20px",
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Accordion.Header>
                      <span style={{ flex: 1, fontWeight: "bold", color: "#fff" }}>
                        {item.question}
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>

                      <h5 className="text-start fw-bold mt-3">{item.heading}</h5>
                      <p className="text-start">{item.headingContent}</p>
                      <h5 className="text-start fw-bold mt-3">{item.howToStartHeading}</h5>
                      <ul>
                        {item.howToStartSteps?.map((step, stepIndex) => (
                          <li
                            className="text-start"
                            key={stepIndex}
                            style={{ listStyleType: "disc", marginLeft: "20px" }}
                          >
                            {step}
                          </li>
                        ))}
                      </ul>
                      <p className="text-start">{item.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Elearning;

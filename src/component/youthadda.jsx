import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import axios from '../apiConfig';
const Youthadda = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Youth Adda | Enterprise Customer facing Unit | UPICON',
    meta_description: 'Youth Adda powered by UPICON in Lucknow is a one-stop enterprise platform under MSME Clinic, offering GST registration, business loans, and CM Yuva Loan support through the CM Yuva Udyami Yojana',
    meta_keywords: 'Youth Adda, UPICON, MSME Clinic, GST Registration service, CM YUVA',
  });

  useEffect(() => {
    // Normalize the page name: remove spaces, make lowercase
    const pageName = "Youth Adda";
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

    const style = document.createElement("style");
    style.innerHTML = `
      .resarch {
        background: linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/main1.jpg');
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
        background-image: url('/assets/images/yuvabg.png');
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
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const faqItem = [
    {
      question: "Start your entrepreneurial journey with our online training program",
     howToStartSteps: [
  'What Does "Customer-Facing Unit" Mean for MSMEs?',
],

      para: [
        "In the MSME ecosystem, most institutions operate behind closed doors—policy desks, registration offices, financial nodal agencies. Youth Adda flips the model. It brings MSME interaction, opportunity, and exposure right to the youth, at the frontlines. Just like a showroom showcases products for customers, Youth Adda showcase MSMEs as live, evolving case studies and pathways, where youth are treated as the end-users of information, support."
      ],
    },
  ];

  const faqItems = [
    {
      questions: "Start your entrepreneurial journey with our online training program ",
      howToStartStep: [
        "What Happens at Youth Adda?",
      ],
      paragraph: [
        "Youth Adda is not a training centre. It is not a classroom. It is a customer experience zone for enterprise learning.",
        "Here’s what makes it unique:s",
      ],
      StartStep: [
        "MSME Clinics: Get help understanding business loans, registrations, GST, and schemes like PMEGP or CM Yuva Udyami Yojana",
        "Workshops on “Entrepreneurship 101” : Basics of market research, pitching, costing, packaging, and branding",
        "Exposure to Real Problems: MSMEs share challenges; youth brainstorm solutions—creating practical learning ecosystems",
        "Short-Term Skilling & Digital Enablement: Learn how to create UDYAM IDs, digital catalogs, WhatsApp storefronts, or run social media marketing",
        "Talks & Youth Interactions: Young business leaders, local entrepreneurs, and policymakers share their journeys and advice",
        "Idea Fairs: Showcasing ideas from schools, colleges, and communities to seed early innovation.",
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>

      <div className="container-fluid">
        <div className="row resarch">
          <h5 className="my-5 text-center p-5 text-white display-6 fw-bold">
            YOUTH ADDA Powered By UPICON
          </h5>
        </div>
      </div>


      {/* Entrepreneurship Details */}
      <div className="container-fluid">

        <div className="container">
          <div className="row">
            <h5 className="text-start fw-bold  sectionhead mt-5">Overview</h5>
            <div className="row">
              <div className="col-md-12 col-sm-6 text-end ">
                <h2 className="text-start fw-bold mt-3">
                  India’s First Entrepreneur Customer-Facing MSME Unit for Youth
                </h2>
              </div>



            </div>

            <p className="text-start my-2">
              Today youth are more ambitious than ever—but when it comes to stepping into entrepreneurship or exploring MSMEs, the path is often unclear.
              Youth Adda, launched by UPICON, is designed to fix that.
            </p>
            <p className="text-start mt-2 mb-5">
              It is India’s first customer-facing MSME unit, not run by youth—but created for youth. A physical and digital space where young minds can interact directly with real MSMEs, business models, support systems, and opportunities—just like a customer walking into a showroom or bank.
            </p>
          <div className="container mb-5">
  <div className="row accodiv">
    <div className="eleranacc col-12">
      <Accordion defaultActiveKey={faqItem.map((_, index) => index.toString())} alwaysOpen>
        {(faqItem || []).map((item, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className="mb-4 bg-white rounded"
          >
            <Accordion.Header>
              <div className="d-flex flex-wrap w-100 justify-content-between align-items-center gap-2">
                <h3 className="fw-bold text-white mb-0 flex-grow-1" style={{ minWidth: "200px" }}>
                  {item.question}
                </h3>
                <a
                  href="https://msmeosem.in/youth-adda-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white fw-bold"
                  style={{
                    background: "linear-gradient(90deg, rgb(223, 124, 33) 0%, rgb(53, 127, 129) 100%)",
                    fontSize: "15px",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    whiteSpace: "normal",
                    textAlign: "center",
                  }}
                >
                  Register Now
                </a>
              </div>
            </Accordion.Header>

            <Accordion.Body className="p-0">
              <div className="row align-items-center ">
                {/* Text Column */}
                <div className="col-lg-8 col-md-6 col-sm-12 mb-3 p-5">
                 
                  

                  {item.howToStartHeading && (
                    <h5 className="text-start fw-bold mt-3">{item.howToStartHeading}</h5>
                  )}

                  <ul style={{ lineHeight: "40px", paddingLeft: "1rem" , color:"#DF7C21" , fontSize:"20px"}}>
                    {item.howToStartSteps?.map((step, stepIndex) => (
                      <li className="text-start" key={stepIndex}  style={{ listStyleType: "disc",color:"orange", fontSize:"22px" }}>
                        {step}
                      </li>
                    ))}
               
                  </ul>
                       {item.para && <p className="text-start mt-3" style={{ fontSize:"20px" }}>{item.para}</p>}
                </div>

                {/* Image Column */}
                <div className="col-lg-4 col-md-6 col-sm-12 text-end ">
                  <img
                    src="/assets/images/box1.png"
                    alt="Youth Adda"
                    className="img-fluid rounded"
                    style={{ maxHeight: "366px", objectFit: "cover" }}
                  />
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
    <div className="eleranacc col-12">
      <Accordion defaultActiveKey={faqItems.map((_, index) => index.toString())} alwaysOpen>
        {(faqItems || []).map((item, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className="mb-4 bg-white rounded"
          >
            <Accordion.Header>
              <div className="d-flex flex-wrap w-100 justify-content-between align-items-center gap-2">
                <h3 className="fw-bold text-white mb-0 flex-grow-1" style={{ minWidth: "200px" }}>
                  {item.questions}
                </h3>
              </div>
            </Accordion.Header>

             <Accordion.Body className="p-0">
              <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-lg-4 col-md-6 col-sm-12 text-start mb-3">
                  <img
                    src="/assets/images/box2.png"
                    alt="Youth Adda"
                    className="rounded"
                    style={{ maxHeight: "641px", maxWidth:"600px" ,objectFit: "cover" }}
                  />
                </div>

                {/* Text Column */}
                <div className="col-lg-8 col-md-6 col-sm-12 p-5">
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

                  {/* First Bullet List (orange bullets) */}
                   <ul style={{ lineHeight: "40px", paddingLeft: "1rem" }}>
                    {item.howToStartStep?.map((step, stepIndex) => (
                      <li className="text-start" key={stepIndex} style={{ listStyleType: "disc", color:"#DF7C21" , fontSize:"22px"}}>
                        {step}
                      </li>
                    ))}
                  </ul>
                  
                

                  {/* Paragraph */}
                  {item.paragraph && (
                    <p className="text-start  mt-3"  style={{  fontSize:"20px"}}>{item.paragraph}</p>
                  )}

                  {/* Second Bullet List */}
                  <ul style={{ lineHeight: "40px", paddingLeft: "1rem" }}>
                    {item.StartStep?.map((step, stepIndex) => (
                      <li className="text-start" key={stepIndex} style={{ listStyleType: "disc", fontSize:"20px"}}>
                        {step}
                      </li>
                    ))}
                  </ul>
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
          <div className=" row mt-5 mb-3 p-5">
            <h2 className="fw-bold text-start" style={{ fontSize:"20px" }}>Why It’s a Big Deal</h2>

            <ul className="text-start mt-3 yuvaul " style={{ color: '#2E2E2E', paddingLeft: '20px' }}>
              <li className="text-start fw-bold" style={{ fontSize:"20px" }}>For the first time, youth aren’t treated as passive beneficiaries of schemes.</li>
              <li className="text-start fw-bold" style={{ fontSize:"20px" }}>They are treated as customers of opportunity—people who deserve responsive service, clear information, and real interaction.</li>
              <li className="text-start fw-bold mb-3" style={{ fontSize:"20px" }}>That’s what makes Youth Adda the first customer-facing MSME unit in India—a youth-first, problem-solving-first, business-as-experience model.</li>
            </ul>
          </div>
        </div>
      </div>
<div>
      <iframe
        title="Youth Adda Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3356910557304!2d81.0067155748932!3d26.861073762308862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be30f09877219%3A0xafe824851d7cc01e!2sYouth%20Adda%20powered%20by%20UPICON!5e0!3m2!1sen!2sin!4v1752038133730!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: '0px' }}
        allowFullScreen
      ></iframe>
    </div>


    </>
  );
};

export default Youthadda;

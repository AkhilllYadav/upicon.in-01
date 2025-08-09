import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import axios from '../apiConfig'; 
const Elearning = () => {
  const [meta, setMeta] = useState({
    meta_title: 'ESG | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'UPICON, industrial consultants',
  });

  useEffect(() => {
   
    axios.get('/meta-tags/esg') 
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
      .faq {
        background: linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/12.png');
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        padding: 120px 0; 
        display: flex;
        justify-content: center;
        align-items: center;
      }

      /* Background image only on right side */
      .elernaccimg {
        background-image: url('/assets/images/eaqbg.png');
        background-size: contain; 
        background-position: right;
        background-repeat: no-repeat;
        padding-top: 3rem;
      }

      .line-heading {
        position: relative;
        padding-top: 10px;
      }

      .line-heading::before {
        content: '';
        position: absolute;
        top: -10px;
        left: 0;
        width: 4%;
        height: 4px;
        border-top: 4px solid #DF7C21;
      }

      @media (max-width: 992px) {
        .articlesdiv {
          padding: unset !important;
        }
        .articlescol {
          padding: 1rem !important;
        }
        .eleranacc {
          padding-bottom: unset !important;
          padding-right: 1rem !important;
          padding-left: 1rem !important;
        }
        .lineheading {
          margin-top: 1rem !important;
        }
      }

      /* Ensure QR images are visible and responsive */
      .qr-image {
        max-width: 100%;
        // height: auto;
        display: block;
      }
        @media (max-width: 992px) {
  .qr-image {
    width: 100% !important; /* Adjust size for better fit */
    height: auto;
  }
       .qrimage {
        justify-content: center;
        display: flex;
    }
         .elernaccimg {
        background-image: none;
      }

}

    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Helmet>
                                              <title>{meta.meta_title}</title>
                                              <meta name="description" content={meta.meta_description} />
                                              <meta name="keywords" content={meta.meta_keywords} />
                                            </Helmet>
    

      <div className="container-fluid">
        <div className="row faq">
          <h5 className="my-5 text-center p-5 text-white display-4 fw-bold">
            Environmental, Social and Governance
          </h5>
        </div>
      </div>

      <div className="container-fluid elernaccimg">
        <div className="row px-5 articlesdiv">
          <div className="eleranacc col-lg-6 col-md-6 px-5">
            <h5 className="text-start fw-bold mt-5 sectionhead" style={{color:'#3EB7BB'}}>Workshops</h5>
            <h2 className="text-start fw-bold mt-5">ESG Workshop</h2>

            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li className="text-start" style={{ color: '#6E6E6E' }}>अपने उद्योग से संबंधित ESG की महत्वता |</li>
              <li className="text-start" style={{ color: '#6E6E6E' }}>MSME policy 2017, एवं 2022, में मिलने वाले लाभों के प्रावधानों की जानकारी |</li>
              <li className="text-start" style={{ color: '#6E6E6E' }}>ZED Certification के माध्यम से उद्योगों में कम लागत पर अधिकतम उत्पादन की प्रकिया की जानकारी |</li>
              <li className="text-start" style={{ color: '#6E6E6E' }}>अपने उद्योग से संबंधित तकनीकी उन्नयन की जानकारी |</li>
              <li className="text-start" style={{ color: '#6E6E6E' }}>Pledge Park से संबंधित जानकारी |</li>
              <li className="text-start" style={{ color: '#6E6E6E' }}>उद्योग संबंधित अन्य सरकारी नीतियों की जानकारी |</li>
              <li className="text-start" style={{ color: '#6E6E6E' }}>उद्योग विभाग एवं उद्योग जगत के प्रतिनिधियों के साथ सीधे वार्ता का अवसर |</li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-6 qrimage">
            <img src="/assets/images/Qr.png" alt="QR Code 1" className="qr-image mt-5 h-75 " />
          </div>
        </div>

        <div className="row px-5 articlesdiv">
          <div className="eleranacc col-lg-6 col-md-6 px-5 pb-5">
          <h5 className="text-start fw-bold mt-5 sectionhead" style={{color:'#3EB7BB'}}>Trainings</h5>
            <h2 className="text-start fw-bold mt-5">ESG Training Registration</h2>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li className="text-start" style={{ color: '#6E6E6E' }}>
                ESG का अर्थ पर्यावरण, सामाजिक और शासन है। यह हर कंपनी के पर्यावरणीय प्रभाव, सामाजिक जिम्मेदारियों और शासन प्रथाओं का मूल्यांकन करता है, जिससे उसकी स्थिरता और नैतिक मानकों का समग्र दृष्टिकोण मिलता है |
              </li>
              <li className="text-start" style={{ color: '#6E6E6E' }}>
                ESG प्रशिक्षण प्राप्त करने के लिए, निम्न QR कोड को स्कैन करें और जुड |
              </li>
            </ul>
          </div>

          <div className=" col-lg-6 col-md-6 qrimge">
            <img src="/assets/images/Qr1.png" alt="QR Code 2" className="qr-image mt-5 h-75" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Elearning;

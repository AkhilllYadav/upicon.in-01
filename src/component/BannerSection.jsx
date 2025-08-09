import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import AOS from 'aos';
import GLightbox from 'glightbox';
import '../index.css';

import heroBg from '../assets/images/web2-e-riska-1.b6a77be5f7e15f2d6c92.jpg';

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const [language, setLanguage] = useState('en');
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const lightbox = GLightbox({
      selector: '.glightbox',
    });

    // Event listener to check if the user has scrolled
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adding event listener for scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const isPopupShown = sessionStorage.getItem('popupShown');
    if (!isPopupShown) {
      setShowPopup(true);
      sessionStorage.setItem('popupShown', 'true');
    }
  }, []);
  return (
    <>
      <style>
        {`
          .book-now {
            background: #3EB7BB; /* Button background color */
            border-radius: 0px 0px 30px 30px;
            //  border-radius: 0px 30px;
                font-weight: 500;
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 1.1rem;
            height: 50px;
            line-height: 37px;
            position: fixed;
            transform: rotate(-90deg);
            width: 150px;
            left: 50px;
            margin-top: 363px;
            transform-origin: left bottom;
            z-index: 10; /* Ensure button is above the gradient */
             visibility: ${isScrolled ? 'hidden' : 'visible'};
            // opacity: ${isScrolled ? '0' : '1'}; /* Hide button on scroll */
            transition: opacity 0.3s ease; /* Smooth transition for opacity */
          }
          .moboleview {
    display: none;
}
.elearning{
   background: #DF7C21; /* Button background color */
            border-radius: 0px 0px 30px 30px;
            //  border-radius: 0px 30px;
                font-weight: 500;
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 1.1rem;
            height: 50px;
            line-height: 37px;
            position: fixed;
            transform: rotate(-90deg);
            width: 150px;
            left: 50px;
          margin-top: 185px;
            transform-origin: left bottom;
            z-index: 10; /* Ensure button is above the gradient */
              visibility: ${isScrolled ? 'hidden' : 'visible'};
            // opacity: ${isScrolled ? '0' : '1'}; 
            transition: opacity 0.3s ease; /* Smooth transition for opacity */
              }
          .elearning a:hover{
          color:white !important;
                  }
          /* Media Queries for responsiveness */
          @media (max-width: 1200px) {
            .book-now {
              font-size: 0.9rem;
              width: 130px;
                      margin-top: 360px;
              // margin-top: 200px;
            }
                 .elearning {
              font-size: 0.9rem;
              width: 130px;
                      margin-top: 216px;
             
            }
          }

          @media (max-width: 992px) {

 .moboleview {
             background: #3EB7BB;
            border-radius: 0px 0px 30px 30px;
         
                font-weight: 500;
            color: rgb(255, 255, 255);
            display: inline-block;
           font-size: 0.8rem;
            height: 50px;
            line-height: 37px;
            position: fixed;
            transform: rotate(-90deg);
           width: 120px;
               left: 40px;
              margin-top: 324px;
        
            transform-origin: left bottom;
            z-index: 10; 
             visibility: ${isScrolled ? 'hidden' : 'visible'};
           
            }


            .book-now {
              font-size: 0.8rem;
              width: 120px;
               left: 40px;
              margin-top: 463px;
            }
            .elearning{
              font-size: 0.8rem;
              width: 120px;
               left: 40px;
              margin-top: 193px;
             }
            .mainhead {
                font-weight: 700;
                font-size: 44px;
              }
          }

        @media (max-width: 768px) {
           .book-now {
                font-size: 0.75rem;
                width: 110px;
                margin-top: 444px;
                left: 40px;
           }
                  .moboleview{
              font-size: 0.75rem;
              width: 110px;
              margin-top: 300px;
              left: 40px;
           }
         .elearning{
              font-size: 0.75rem;
              width: 110px;
              margin-top: 172px;
              left: 40px;
           }
        .hero h1{
              font-size: 38px;
           }
         }

          @media (max-width: 576px) {
            .book-now  {
              font-size: 0.7rem;
              width: 100px;
              margin-top: 432px;
              left: 39px;
            }
          }

          #hero {
                 background: 
                            linear-gradient(90deg, rgba(62, 183, 187, 0.8) 11.9%, rgba(0, 0, 0, 0.2) 100%),
                            linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                            url(${heroBg});
                                    background-size: cover;          
                              background-position: center top;
                              background-repeat: no-repeat;
                              position: relative;
                }
          .book-now a:hover{
          color:black !important;
          }
.modal-backdrop {
  z-index: 1040 !important;
}

.modal {
  z-index: 1050;
}



        `}
      </style>


      <div className="container">
        <a href="http://udyami.upicon.in/" target="_blank" className="elearning webview fw-bold">
          e-Learning
        </a>
        <a href="/news" className=" book-now webview fw-bold">
          Latest News
        </a>
        <a href="/cmyuva" className="moboleview  fw-bold">
          CM Yuva
        </a>
      </div>

      {showPopup && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-danger text-white d-flex justify-content-between align-items-center w-100">
                <h5 className="modal-title">🚨 Important Notice: Strict Warning</h5>
                <div className="d-flex align-items-center gap-2">
                  <button className={`btn btn-sm ${language === 'en' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => setLanguage('en')}>
                    English
                  </button>
                  <button className={`btn btn-sm ${language === 'hi' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => setLanguage('hi')}>
                    हिंदी
                  </button>
                  <button type="button" className="btn-close" onClick={() => setShowPopup(false)}></button>
                </div>
              </div>

              <div className="modal-body">
                {language === 'en' ? (
                  <>
                    <p className='fs-6 text-start'> It has come to our attention that certain individuals and companies are involved in illegal, fake, and unauthorized activities using forged copies of our MD Sir’s signature and official company stamp for issuing fake GEM tenders, certificates, and company documents.</p>
                    <p className='fs-6 text-start'>Let this serve as a strict warning: </p>
                    <p className='fs-6 text-start'>Such fraudulent actions are a serious violation of our company policies and legal standards. Anyone found involved, supporting, or benefitting from these activities will face immediate <strong>legal action</strong>, including but not limited to imprisonment, heavy fines, and/or compensation as per applicable laws.</p>
                    <p className='fs-6 text-start'>The company has <strong>zero tolerance</strong> for such misconduct. We urge everyone to remain vigilant and report any suspicious activity immediately. </p>
                    <p className='fs-6 text-start fw-bold'>Strict legal consequences will follow without exception.</p>
                    <p className='fs-6 text-start fw-bold'>— Vigilance Department, UPICON</p>
                  </>
                ) : (
                  <>
                    <p className='fs-6 text-start'>यह जानकारी प्राप्त हुई है कि कुछ व्यक्ति और कंपनियाँ हमारे एम.डी. सर के हस्ताक्षर और कंपनी की आधिकारिक मुहर की नकली प्रतियां उपयोग करके फर्जी सरकारी ई-बाज़ार टेंडर, प्रमाण पत्र और दस्तावेज़ जारी कर रही हैं।</p>
                    <p className='fs-6 text-start'>यह एक गंभीर अपराध है और हमारी कंपनी की नीतियों व भारतीय कानूनों का सीधा उल्लंघन है।</p>
                    <p className='fs-6 text-start'>सभी को कड़ी चेतावनी दी जाती है कि यदि कोई व्यक्ति या संस्था इस प्रकार की गैरकानूनी गतिविधियों में शामिल, सहयोगी या लाभार्थी पाया गया, तो उसके खिलाफ तत्काल सख्त कानूनी कार्रवाई की जाएगी। इसमें जेल, भारी जुर्माना या दोनों शामिल हो सकते हैं।</p>
                    <p className='fs-6 text-start'>कंपनी ऐसी किसी भी गतिविधि के प्रति पूर्णतः असहिष्णु है। सभी से अनुरोध है कि सतर्क रहें और किसी भी संदिग्ध गतिविधि की तुरंत सूचना दें।</p>
                    <p className='fs-6 text-start fw-bold'>ऐसी किसी भी हरकत पर कोई भी ढील नहीं दी जाएगी।</p>
                    <p className='fs-6 text-start fw-bold'>— सतर्कता विभाग, यूपिकॉन</p>
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




      {/* {showPopup && (
  <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-danger text-white">
          <h5 className="modal-title">🚨 Important Notice: Strict Warning</h5>
          <button type="button" className="btn-close" onClick={() => setShowPopup(false)}></button>
        </div>
        <div className="modal-body">
          <p className='fs-6 text-start'><strong>English:</strong> It has come to our attention that certain individuals and companies are involved in illegal, fake, and unauthorized activities using forged copies of our MD Sir’s signature and official company stamp for issuing fake GEM tenders, certificates, and company documents.</p>
           <p className='fs-6 text-start'>Let this serve as a strict warning: </p>
          <p className='fs-6 text-start'>Such fraudulent actions are a serious violation of our company policies and legal standards. Anyone found involved, supporting, or benefitting from these activities will face immediate <strong> legal action</strong>, including but not limited to imprisonment, heavy fines, and/or compensation as per applicable laws.</p>
          <p className='fs-6 text-start'>The company has <strong>zero tolerance </strong>for such misconduct. We urge everyone to remain vigilant and report any suspicious activity immediately </p>
  <p className='fs-6 text-start fw-bold'>Strict legal consequences will follow without exception.</p>
   <p className='fs-6 text-start fw-bold'>— Vigilance Department, UPICON</p>
 <hr />
          <p className='fs-6 text-start'><strong>हिंदी:</strong> यह जानकारी प्राप्त हुई है कि कुछ व्यक्ति और कंपनियाँ हमारे एम.डी. सर के हस्ताक्षर और कंपनी की आधिकारिक मुहर की नकली प्रतियां उपयोग करके फर्जी सरकारी ई-बाज़ार टेंडर, प्रमाण पत्र और दस्तावेज़ जारी कर रही हैं। यह एक गंभीर अपराध है। दोषियों पर सख्त कार्रवाई की जाएगी।</p>
                 <p className='fs-6 text-start'>यह एक गंभीर अपराध है और हमारी कंपनी की नीतियों व भारतीय कानूनों का सीधा उल्लंघन है।</p>

          <p className='fs-6 text-start'>सभी को कड़ी चेतावनी दी जाती है कि यदि कोई व्यक्ति या संस्था इस प्रकार की गैरकानूनी गतिविधियों में शामिल, सहयोगी या लाभार्थी पाया गया, तो उसके खिलाफ तत्काल सख्त कानूनी कार्रवाई की जाएगी। इसमें जेल, भारी जुर्माना या दोनों शामिल हो सकते हैं।</p>

          <p className='fs-6 text-start'>कंपनी ऐसी किसी भी गतिविधि के प्रति पूर्णतः असहिष्णु है।
सभी से अनुरोध है कि सतर्क रहें और किसी भी संदिग्ध गतिविधि की तुरंत सूचना दें।
</p>
       <p className='fs-6 text-start fw-bold'>ऐसी किसी भी हरकत पर कोई भी ढील नहीं दी जाएगी।</p>
              <p className='fs-6 text-start fw-bold'>— सतर्कता विभाग, यूपिकॉन</p>
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
)} */}
      <section id="hero" className="hero">
        <div className="container-fluid position-relative">
          <div className="row gy-5 align-items-center justify-content-center text-center" data-aos="fade-in">
            <div className="col-lg-12 hero-content">
              <h1 className="text-white mainhead mt-5">
                UP Industrial Consultants Limited
              </h1>

              <h2
                className="mt-3"
                style={{
                  fontSize: typeof window !== 'undefined' && window.innerWidth < 768 ? '18px' : '30px',
                  lineHeight: '1.6',
                  color: '#fff'
                }}
              >
                Under the aegis of Department of MSME & Export Promotion, Govt of Uttar Pradesh
              </h2>

              <h3 className="fs-3 mt-4 mainhead" style={{ color: '#FFFFFF' }}>
                ADVANCING ON THE PATH OF PROGRESS
              </h3>

              <p className="mt-4" style={{ color: '#FFFFFF' }}>
                Established by Government of UP, SIDBI, IFCI & Nationalized Bank in 1974
              </p>

              <div className="d-flex justify-content-center my-5">
                <a
                  href="./assets/images/NRC-UPICL-2023-24-Management.pdf"
                  target="_blank"
                  style={{ color: '#DF7C21', zIndex: '10' }}
                  className="btn-get-started text-white"
                >
                  CAG REPORT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Banner;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Helmet } from 'react-helmet';
import axios from '../apiConfig'; 
const Retail = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Retail | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'UPICON, industrial consultants',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    axios.get('/meta-tags/retail') // URL encoded for spaces
    .then(response => {
      if (response.data && !response.data.error) {
        setMeta(response.data); // Update state with dynamic meta tags
      }
    })
    .catch(error => {
      console.error('Failed to fetch meta tags:', error);
    });
}, []); 
  return (
    <>

        <Helmet>
                            <title>{meta.meta_title}</title>
                            <meta name="description" content={meta.meta_description} />
                            <meta name="keywords" content={meta.meta_keywords} />
                          </Helmet>

    <div className="container-fluid mb-5">
      <div className="row retailimgbg">
        <div className="">
          <h1 className="my-5 text-center p-5 text-white display-3 fw-bold">
            Retail
          </h1>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row mt-5 mb-3">
          <div className="col-lg-6 ">
            <h5 className="text-start shorthead sectionhead">Business Unit</h5>
            <h2 className="text-start ">UP MSME Mart Display Center: Empowering Artisans and Uplifting Lives in Uttar Pradesh</h2>
            <p className="section-content text-start">
              In our relentless pursuit of social responsibility and a commitment to uplifting the financial and socioeconomic status of the talented craftsmen and artisans of Uttar Pradesh, we are proud to announce our partnership with these extraordinary individuals. At UP MSME Mart Display Center, we believe in giving back to society in the most pleasing way possible. With a profound sense of purpose, we have pledged to contribute 50% of our profits from the products sold through our display centers directly to these artisans, craftsmen, and designers.
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="/assets/images/23191_up2-3mWkT8.jpeg"
              alt="Entrepreneurship Development"
              className="img-fluid retailimg"
            />
          </div>
        </div>
        <div className="row mt-5 mb-3">
          <div className="col-lg-6">
            <img
              src="/assets/images/b5.webp"
              alt="Entrepreneurship Development"
              className="img-fluid retailimg"
            />
          </div>
          <div className="col-lg-6 ps-5 upmsme">
            <h5 className="text-start shorthead sectionhead mt-3">Business Unit</h5>
            <h2 className="text-start">UP MSME Mart Display Center: Empowering Artisans and Uplifting Lives in Uttar Pradesh</h2>
            <p className="section-content text-start">
              In our relentless pursuit of social responsibility and a commitment to uplifting the financial and socioeconomic status of the talented craftsmen and artisans of Uttar Pradesh, we are proud to announce our partnership with these extraordinary individuals. At UP MSME Mart Display Center, we believe in giving back to society in the most pleasing way possible. With a profound sense of purpose, we have pledged to contribute 50% of our profits from the products sold through our display centers directly to these artisans, craftsmen, and designers.
            </p>
          </div>
        </div>
        <div className="row my-5 retail-container">
          
          <div className="col-lg-6 retail-column">
            <div className="retail-card card bg-white">
              <div className="card-body retail">
                <div className="accordion" id="accordionExample1">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                        Data Analysis and Insights
                      </button>
                    </h2>
                    <div id="collapseOne1" className="accordion-collapse collapse " aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        Data is the fuel that powers the digital world. Our experts excel in gathering, analyzing, and interpreting data to extract meaningful insights. By leveraging advanced analytics techniques, we help our clients uncover hidden patterns, identify trends, and make data-driven decisions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                        Digital Marketing Strategies
                      </button>
                    </h2>
                    <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1" data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        Our team specializes in developing customized marketing campaigns that leverage various channels, such as social media, search engine optimization (SEO), content marketing, and email marketing. We ensure that our clients’ brand messages are delivered to the right people at the right time.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                        Cloud Computing and Infrastructure
                      </button>
                    </h2>
                    <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        Cloud computing has revolutionized the way businesses store, process, and access data. Our experts assist our clients in migrating their operations to the cloud, enabling them to leverage scalable and cost-effective infrastructure.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                        Artificial Intelligence and Automation
                      </button>
                    </h2>
                    <div id="collapseFour1" className="accordion-collapse collapse" aria-labelledby="headingFour1" data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        Artificial intelligence (AI) and automation have the potential to transform businesses across industries. Our team helps organizations harness the power of AI to streamline processes, enhance productivity, and deliver personalized customer experiences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="col-lg-6 retail-column">
            <div className="retail-card card bg-white">
              <div className="card-body retail">
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne2">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                      Quality Craftsmanship: The Heart of Our Endeavor

                      </button>
                    </h2>
                    <div id="collapseOne2" className="accordion-collapse collapse" aria-labelledby="headingOne2" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                      At UP MSME Mart Display Center, we recognize and celebrate the profound impact of exquisite craftsmanship on society. Each product featured in our display center embodies the legacy of generations of skilled artisans. We strive to maintain the highest standards of quality and authenticity, ensuring that every item we offer reflects the rich heritage and cultural identity of Uttar Pradesh.                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                      Enriching Lives, One Sale at a Time
                      </button>
                    </h2>
                    <div id="collapseTwo2" className="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                      When you choose to shop at our display center, you become an integral part of the larger mission to uplift lives and empower communities. With every purchase, you contribute to the financial well-being of artisans, craftsmen, and designers, providing them with a sustainable source of income. Your support directly translates into better education, improved healthcare, and a brighter future for the families and communities involved.

</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                      Unveiling the Beauty of Uttar Pradesh's Artistry
                      </button>
                    </h2>
                    <div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree2" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                      The products available at UP MSME Mart Display Center showcase the unrivaled beauty of Uttar Pradesh’s artistic traditions. From intricately woven textiles to finely carved wooden artifacts, each piece narrates a story of skill, passion, and cultural heritage. Whether you’re searching for a meaningful gift or adding a touch of elegance to your home, our collection offers a diverse array of choices that are sure to captivate your senses.                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                        Artificial Intelligence and Automation
                      </button>
                    </h2>
                    <div id="collapseFour2" className="accordion-collapse collapse" aria-labelledby="headingFour2" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        Artificial intelligence (AI) and automation have the potential to transform businesses across industries. Our team helps organizations harness the power of AI to streamline processes, enhance productivity, and deliver personalized customer experiences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Retail;

import React, { useState, useEffect } from 'react'; // Add useState and useEffect import
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';
import axios from '../apiConfig'; // Ensure axios is correctly imported





import bis01 from '../assets/images/bis2.png';
import bis02 from '../assets/images/finagroup1.png'
import bis03 from '../assets/images/fingroip2.png'
import bis04 from '../assets/images/bus1.png'


const BusinessUnits = () => {
  // State to store dynamic meta tags
  const [meta, setMeta] = useState({
    meta_title: 'Business Units | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'business units, UPICON, industrial consultants',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    axios.get('/meta-tags/business%20units') // URL encoded for spaces
      .then(response => {
        if (response.data && !response.data.error) {
          setMeta(response.data); // Update state with dynamic meta tags
        }
      })
      .catch(error => {
        console.error('Failed to fetch meta tags:', error);
      });
  }, []); // Empty dependency array to fetch data on component mount

  return (
    <>
      <style>
        {`
              @media (max-width: 992px) {
              .retail-column {
                     padding-right:unset !important;
                     padding-left:unset !important;
                 }
                     .imagedev{
                     padding: unset;
                     }
                 }
                 .imgbg1 {
                      background-image: url('/assets/images/bussinitbg1.png');
                      background-size: cover;
                      background-position: center;
                      background-repeat: no-repeat;
                      padding-top: 3rem; /* Adjust as needed */
                    }
                    .imgbg2 {
                      background-image: url('/assets/images/bussinitbg.png');
                      background-size: cover;
                      background-position: center;
                      background-repeat: no-repeat;
                      padding-top: 3rem; /* Adjust as needed */
                    }
                .imagedev{
                      padding: 43px;
                    }
          
              `}
      </style>
      <Helmet>
        <title>{meta.meta_title}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="keywords" content={meta.meta_keywords} />
      </Helmet>

      {/* <Helmet>
        <title>Business Units | UPICON</title>
        <meta name="description" content="Learn about our mission, vision, and the team behind My Website." />
        <meta name="keywords" content="about, mission, vision, team" />
      </Helmet> */}

      <div className="container-fluid">
        <div className='row inclusion'>
          <div className=''>
            <h1 className='my-5 text-center p-5 text-white display-4 fw-bold'>Business Unit</h1>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5 mb-3">
            <div className="col-lg-6 p-2">
              <h5 className="text-start underline">Business Unit</h5>
              <h2 className="text-start mt-3">Consultancy Group</h2>
              <p className="section-content text-start">
                Consultancy has gone from being a one-way street, to a two-way interactive process, to a process that evolves and personalises itself based on customised inputs from the client, to now being a new revolutionary process pioneered by U.P. Industrial Consultants Ltd.            </p>
              <p className="section-content text-start">
                With the opening up of the country’s economy in the early 90’s and the sudden boom in the early 2000, UPICON realised the importance of the growing Banking and Financial market and hence stepped into this segment in October 2006, with its Banking, Finance & Market Research (BFMR) division. The objective of commencing separate operations for this segment was to cater to its various needs with special attention and deliberation by a dedicated team of experienced bankers, technical and financial experts / consultants under a single roof. BFMR division provides techno-commercial guidance to the clients. We have technical experts from various industries for detailing the projects.            </p>
              <div className="row">
                <div className="col-lg-6 col-md-6  col-sm-6  text-center">
                  <img
                    src={bis02}
                    alt="Experts"
                    className="img-fluid rounded"
                    style={{ width: '80%', height: 'auto' }}
                  />
                </div>
                <div className="col-lg-6 col-md-6  col-sm-6  text-center">
                  <img
                    src={bis03}
                    alt="Assignments"
                    className="img-fluid rounded"
                    style={{ width: '80%', height: 'auto' }}
                  />
                </div>
              </div>
              <a href="/comingsoon" className="btn-get-started text-white float-start mt-4">Read More</a>
              {/* <div className="row">
              <div className="col-lg-6">
                <span className="progress-number text-start">50 </span>
                <h4 className='spanhead'>Experts</h4>
              </div>
              <div className="col-lg-6">
                <span className="progress-number text-start">2K</span>
                <h4 className='spanhead'>Assignments</h4>
              </div>
              <a href="#about" className="btn btn-primary float-start mt-5">Learn More</a>
            </div> */}

            </div>

            <div className="col-lg-6 p-5">
              <img
                src={bis01}
                alt="Entrepreneurship Development"
                className="img-fluid csrimg"
              />
            </div>
          </div>
          </div>
          <div className="container-fluid imgbg1">
            <div className="container">
            <div className="row ">

              <div className="col-lg-6 retail-column">
                <h5 className="text-start shorthead underline">Works with</h5>
                <h2 className="text-start mt-3">Consultancy Group</h2>
                <p className="text-start mt-3"> Consultancy has gone from being a one-way street, to a two-way interactive process, to a process that evolves and personalises itself based on customised inputs from the client, to now being a new revolutionary process pioneered by U.P. Industrial Consultants Ltd.</p>
                <div className="retail-card card bg-white">
                  <div className="card-body">
                    <div className="accordion" id="accordionExample1">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne1">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                            Technology Transfer Division
                          </button>
                        </h2>
                        <div id="collapseOne1" className="accordion-collapse collapse " aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                          <div className="accordion-body">
                            The organisation is playing an important role in the transfer of technology. This division locates and arranges transfer of appropriate technology to the prospective entrepreneur. The functions are carried out through a Technology Bank which keeps track of new developments in technologies clsewhere in the world.
                            UPICON keeps on participating in various seminars at national and international level to keep trace of the various technology commercially exploitable by the entrepreneurs in the context of Indian circumstances.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                            Rural Project Division
                          </button>
                        </h2>
                        <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1" data-bs-parent="#accordionExample1">
                          <div className="accordion-body">
                            With the continuing emphasis on development of rural sector. UPICON has opened a rural project division for providing consultancy senices by way of transfer of suitable technology beſitting to rural environment thereby raising the income levels of rural and tribal folks.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                            Management Services Division
                          </button>
                        </h2>
                        <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#accordionExample1">
                          <div className="accordion-body">
                            This division offers services for corporate planning, inventory control, financial planning, collaboration arrangement, labour relations industrial management, business administration etc. It also imparts consultancy services in the field of marketing by way of market intelligence studies and market sunvers etc. The studics relating to corporate plans and its achievement, remedies for achiving corporate goles to desired extent etc.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                            Revival and Modernization Division
                          </button>
                        </h2>
                        <div id="collapseFour1" className="accordion-collapse collapse show" aria-labelledby="headingFour1" data-bs-parent="#accordionExample1">
                          <div className="accordion-body">
                            Artificial intelligence (AI) and automation have the potential to transform businesses across industries. Our team helps organizations harness the power of AI to streamline processes, enhance productivity, and deliver personalized customer experiences.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src={bis04}
                  alt="Entrepreneurship Development"
                  className="img-fluid imagedev"

                />
              </div>
            </div>
          </div>
          </div>
          <div className="container-fluid imgbg2">
          <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <img
                src={bis04}
                alt="Entrepreneurship Development"
                className="img-fluid imagedev"
              />
            </div>
            <div className="col-lg-6 retail-column">
              <div className="retail-card card bg-white">
                <div className="card-body">
                  <div className="accordion" id="accordionExample1">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                          Training and EDP Division
                        </button>
                      </h2>
                      <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                        <div className="accordion-body">
                          This division looks after the training needs of entrepreneurs & executives throughout the State. A large number of specially designed programmes are being conducted at the instance of government department financial intitutions & commercial banks etc. with a view to motivate and improve the latent talent of potential entreprenureurs. Special training programmers are organised for the managers.  entrepreneurs & workers as per the need of the client. UPICON is conducting a number of practical training programme under MEGSAT (Mass Employment Generation through Science & Technology) Scheme of Govt. of India. Special programmes are organized for women entrepreneurs and for the entrepreneurs belonging to schedule and backward caste.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="true" aria-controls="collapseTwo1">
                          Food Processing Service Centre
                        </button>
                      </h2>
                      <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1" data-bs-parent="#accordionExample1">
                        <div className="accordion-body">
                          In order to provide better services to food processing industries through modernisation and transfer of technology, UPICON. in collaboration with Central Food Technological Research Institute. Mysore and Department of Scientific and Industrial Research has opened a separate centre at Kanpur. The activities of the centre are looked after by professionally qualified and experienced technocrats connected with food processing.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                          UPICON's Resources & Strength
                        </button>
                      </h2>
                      <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#accordionExample1">
                        <div className="accordion-body">
                          <p>The Company’s main strength and resources is its dedicated team of 26 professionals from different disciplines of engineering, finance management and marketing etc. with 10-25 years field experience. This team is supported by investigators, supporting and subordinate stall whose strength is at present 29. The Company has engineers and technocrats from mechanical, civil. chemical. electrical. mctallurgical, textile and food processing disciplines besides. MBAs professionals in financial marketing management. In order to have officient storage and retrieval of information and data, the Company has a number of computers with modern software. The Company is soon getting internet connection so that it may have direct access in the international market for various technologies and other related information. The Company has well cquipped library with computer facilities which provides latest information to the consultants and professionals in their related field. The Company is further going for ISO 9002 certification.</p>                      </div>
                        <p>UPICON maintains a fullledged Data Bank for more than 1000 industrial projects in the small, medium and large scale sector. The data of which is regularly updated, keeping in view the changes in the scenario and technologics.</p>
                        <p>UPICON has a broad horizon ahead and everyday a new idea is transformed into a useful proposition under its umbrella. UPICON is continuously sctling up higher targets thereby offering its catalytic röle towards spcedier industrialisation in all the sectors.</p>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                          Other Areas
                        </button>
                      </h2>
                      <div id="collapseFour1" className="accordion-collapse collapse" aria-labelledby="headingFour1" data-bs-parent="#accordionExample1">
                        <div className="accordion-body">
                          <p>UPICO has also successfully provided its services in following important arcas :- </p>
                          <p className='text-start'>1. Natural gas utilisation and distribution for cluster of industries.</p>
                          <p className='text-start'>2. Development of ancillaries.</p>
                          <p className='text-start'>3. Development of backward arcas of the state through project identification, infrastructure development studies and suggesting industrial development plans for upliftment of tribal population particularly in the hill arcas.</p>
                          <p className='text-start'>4. Techno-economic appraisal of the project on behalf of financial institutions.</p>
                          <p className='text-start'>5. Handling of new technology and Hi-tech projects for NRI such as medical Diagnostic Centre Gamma-Ray-Surgery.</p>
                          <p className='text-start'>6. Food processing.</p>
                          <p className='text-start'>7. Working capital assessment and planning for existing industrial units.</p>
                          <p className='text-start'>8. Valuation of current and fixed assets of textile and engineering industries.
                          </p>
                          <p className='text-start'>9. Census survey of handicraft artisans in the whole of Rajasthan State and computorization of data with regard to their cconomic status.</p>
                          <p className='text-start'>10. Infrastructure development studies for different districts of Uttar Pradesh under CIB (Critical Infrastructure Balancing) Scheme of Government of India.</p>
                          <p className='text-start'>11. Integrated arca development studies.</p>
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
      
      </div>
    </>
  );
};

export default BusinessUnits;

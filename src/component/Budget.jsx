import React, { useState, useEffect } from 'react';
import axios from '../apiConfig';
import { Helmet } from "react-helmet";

const BudgetSection = () => {
      const [meta, setMeta] = useState({
        meta_title: 'Key Features of Budget 2024-2025  | UPICON',
        meta_description: 'Learn about our mission, vision, and the team behind My Website.',
        meta_keywords: 'Learn about our mission, vision, and the team behind My Website.',
      });
  
      useEffect(() => {
        axios.get('/meta-tags/budget')
          .then(response => {
            if (response.data && !response.data.error) {
              setMeta(response.data);
            }
          })
          .catch(error => {
            console.error('Failed to fetch meta tags:', error);
          });
      }, []);
  const styles = {
    budgetContainer: {
      display: "flex",
      flexWrap: "wrap",
      padding: "30px",
      margin: "auto",
    },

    leftContent: {
      flex: 1,
      padding: "20px",
      maxWidth: "700px",
    },
    title: {
      fontWeight: "bold",
      color: "#0a3d62",
    },
    subtitle: {
      fontSize: "16px",
    },
    keyInitiatives: {
      background: "rgba(255, 165, 0, 0.1)",
      padding: "15px",
      borderRadius: "10px",
      // marginTop: "65px",
    },
    seckeyInitiatives: {
      // background: "rgba(255, 165, 0, 0.1)",
      padding: "15px",
      borderRadius: "10px",
      marginTop: "100px",
    },
    keyTitle: {
      color: "white",
    },
    seckeyTitle: {
      color: "black",
    },
    Title: {
      fontSize: "28px",
      color: "black",
      fontWeight: "bold",
    },
    seclistItem: {
      // padding: "5px 0",
      color: "black",
      // fontSize: "18px",
    },
    listItem: {
      // padding: "5px 0",
      color: "white",
      // fontSize: "18px",
    },
    rightContent: {
      flex: 1,
      textAlign: "center",
      position: "relative",
      maxWidth: "600px",
    },
    circularSection: {
      position: "relative",
      display: "inline-block",
    },
    budgetCircle: {
      width: "100%",
      height: "600px",
      maxWidth: "600px",
      marginTop: "-171px",
    },
    agricultureTitle: {
      position: "absolute",
      top: "14%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontSize: "34px",
      fontWeight: "bold",
      textAlign: "center",
      width: "100%",
    },
    focusText: {
      position: "absolute",
      top: "31%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontSize: "14px",
      fontWeight: "bold",
      textAlign: "center",
      width: "60%",
      wordWrap: "break-word",
      whiteSpace: "normal",
    },
    smallCircle: {
      position: "absolute",
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid white",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
    },
    topLeft: {
      top: "-10px",
      left: "10%",
    },
    topRight: {
      top: "-10px",
      right: "10%",
    },
    bottomLeft: {
      bottom: "-10px",
      left: "10%",
    },
    bottomRight: {
      bottom: "-10px",
      right: "10%",
    },
    employmentBox: {
      height: "200px",
      width: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      margin: "10px 0",
      borderRadius: "100px 15px 15px 15px",
      fontWeight: "bold",
      fontSize: "30px",
    },
    employmentBox2: {
      height: "200px",
      width: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      margin: "10px 0",
      borderRadius: "15px 15px 100px 15px",
      fontWeight: "bold",
      fontSize: "25px",
    },
    employmentTitle: {
      backgroundColor: "#3EB7BB",
    },
    employmentFocus: {
      backgroundColor: "#DF7C21",
    },
  };

  return (
    <>
     <Helmet>
               <title>{meta.meta_title}</title>
               <meta name="description" content={meta.meta_description} />
               <meta name="keywords" content={meta.meta_keywords} />
             </Helmet>

      <div className="container-fluid">
        <div className="row budget">
          <h5 className="my-5 text-center p-5 text-white display-4 fw-bold">
            Key Features of Budget 2024-2025
          </h5>
        </div>
      </div>
      <div className="container">
    <div className="row">
      {/* Left Section */}
      <div className="col-lg-7 col-md-8 col-sm-12 mt-4 mt-md-5 text-center text-md-start">
        <h2 style={styles.title}>Key Features Of Budget 2024-2025</h2>
        <p style={styles.subtitle}>
          Overall Theme of the Budget: <strong>"Roadmap for our pursuit of Viksit Bharat"</strong>
        </p>
        <p style={styles.subtitle}>
          Emphasizing a developed India through four key pillars: Women (Mahilayen), Poor (Garib),
          Youth (Yuva), and Farmers (Annadata).
        </p>
      </div>
    </div>
    </div>
    <div className="container-fluid img1">
    <div className="container">
    <div className="row">
      {/* Key Initiatives Section */}
      <div className="col-lg-6 col-md-12 col-sm-12 contetntsec1">
        <div style={styles.keyInitiatives} className="text-start">
          <h4 className="listItem" style={styles.keyTitle}>Key Initiatives:</h4>
          <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
            <li className="text-start listItem " style={styles.listItem}>Review of agricultural research for climate-resilient crops</li>
            <li className="text-start listItem" style={styles.listItem}>National Cooperation Policy for farmer benefits</li>
            <li className="text-start listItem" style={styles.listItem}>Self-reliance in oil seeds (mustard, soybean, etc.)</li>
            <li className="text-start listItem" style={styles.listItem}>Support for vegetable supply chains via FPOs</li>
            <li className="text-start listItem" style={styles.listItem}>Release of 109 new high-yield crop varieties</li>
            <li className="text-start listItem" style={styles.listItem}>Push for natural farming for 1 crore farmers</li>
            <li className="text-start listItem" style={styles.listItem}>Financing for shrimp farming and exports</li>
            <li className="text-start listItem" style={styles.listItem}>Digital Public Infrastructure (DPI) for agriculture</li>
          </ul>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className=" col-lg-6 col-md-12  col-sm-12 text-center ">
        <div style={styles.circularSection}>
          <img src="/assets/images/budget-circle.png" alt="Budget Circle" className="budgetcircule"  style={styles.budgetCircle} />
          <h2 style={styles.agricultureTitle} className="text-nowrap circon1">AGRICULTURE</h2>
          <p style={styles.focusText} className="circon2">Focus: Boost productivity and farmer livelihoods.</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="container-fluid section2">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
              <div className="divsec2" style={{ ...styles.employmentBox, ...styles.employmentTitle }}>
                Employment & Skilling
              </div>
              <div className="divsec2"  style={{ ...styles.employmentBox2, ...styles.employmentFocus }}>
                Focus: Create jobs and equip youth with skills.
              </div>
            </div>


            <div style={styles.seckeyInitiatives} className="text-start  col-md-6 col-sm-12">
              <h4 style={styles.seckeyTitle} className="text-start">Key Initiatives:</h4>
              <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
                <li className="text-start" style={styles.seclistItem}>Enhance women’s workforce participation.</li>
                <li className="text-start" style={styles.seclistItem}>Wage incentives for first-time employees.</li>
                <li className="text-start" style={styles.seclistItem}>Employment-linked incentives for new hires.</li>
                <li className="text-start" style={styles.seclistItem}>Skilling 20 lakh youth over 5 years.</li>
                <li className="text-start" style={styles.seclistItem}>Financial support for higher education loans.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 text-start  my-5">
              <h2 style={styles.Title} className="">Inclusive Human Resource Development and Social Justice</h2>

            </div>
            <div className="col-lg-3 col-md-12 col-sm-12  my-5" style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "16px" }}>
              <h4 style={styles.seckeyTitle} className="">Focus</h4>
              <p style={{ fontSize: '17px' }}> Promote inclusive growth for marginalized communities.</p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12  my-5">
              <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "16px" }}>
                <h4 style={styles.seckeyTitle} className="text-start">Key Initiatives:</h4>
                <ul style={{ listStyleType: "disc", padding: "0 20px"}}>
                  <li style={{textAlign: "start", ...styles.seclistItem }}>Purvodaya plan for eastern states’ economic growth.</li>
                  <li style={{textAlign: "start", ...styles.seclistItem }}>Over ₹3 lakh crore for women and girls' schemes.</li>
                  <li style={{ textAlign: "start", ...styles.seclistItem }}>Tribal development through Pradhan Mantri Janjatiya Unnat Gram Abhiyan.</li>
                  <li style={{textAlign: "start", ...styles.seclistItem }}>Support for the North East and Andhra Pradesh infrastructure.</li>
                </ul>
              </div>
            </div>
          </div>
      
        </div>
      </div>
      <div className="container-fluid section4">
        <div className="container">
          <div className="row">

            <div className=" col-lg-3 col-md-12 col-sm-12 my-5" style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "16px" }}>
            <h4 style={styles.seckeyTitle} className="">Focus</h4>
              <p style={{ fontSize: '17px' }}>Strengthen manufacturing and services sectors.</p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 my-5">
              <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "16px" }}>
                <h4 style={styles.seckeyTitle} className="text-start">Key Initiatives:</h4>
                <ul style={{ listStyleType: "disc", padding: "0 20px"}}>
                <li style={{textAlign: "start", ...styles.seclistItem }}>Purvodaya plan for eastern states’ economic growth.</li>
                <li style={{textAlign: "start", ...styles.seclistItem }}>Over ₹3 lakh crore for women and girls' schemes.</li>
                <li style={{textAlign: "start", ...styles.seclistItem }}>Tribal development through Pradhan Mantri Janjatiya Unnat Gram Abhiyan.</li>
                <li style={{textAlign: "start", ...styles.seclistItem }}>Support for the North East and Andhra Pradesh infrastructure.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 text-start  my-5"  style={{

    padding: "20px",
    borderRadius: "16px",
    width: "440px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}>
              <h2 style={styles.Title} className="">Manufacturing & Services</h2>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <img src="/assets/images/7.png" alt="img1" className="img1div" style={{width:"400px", borderRadius:"15px"}} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
            <img src="/assets/images/8.png" alt="img1" className="img1div"  style={{width:"400px",  borderRadius:"15px"}}/>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
            <img src="/assets/images/9.png" alt="img1" className="img1div" style={{width:"400px",  borderRadius:"15px"}} />
            </div>

          </div>
        </div>
      </div>


      <div className="container-fluid section5">
        <div className="container">
          <div className="row">

            <div className=" col-lg-4 col-md-12 col-sm-12 my-5 sec4head" style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "16px", width:"322px",marginLeft:"66px" }}>
              <h4 style={styles.Title} className="">Urban Development</h4>
            </div>
          </div>
          <div className="row">
            
            <div className="col-lg-6 col-md-12  col-sm-12 text-start  my-5" >
            <div className="sec5div" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "16px",width:"440px" }}>
            <h4 style={styles.seckeyTitle} className="text-center">Focus</h4>
              <p className="text-center" style={{ fontSize: '17px' }}>
              Create sustainable urban spaces.</p>

              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 my-5">

              <h4 style={styles.seckeyTitle} className="text-start">Key Initiatives:</h4>
              <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
                <li className="text-start" style={styles.seclistItem}>
                PM Awas Yojana Urban 2.0 for housing.
                </li>
                <li className="text-start" style={styles.seclistItem}>
                Development of street food hubs.
                </li>
                <li className="text-start" style={styles.seclistItem}>
                Development of street food hubs.
                </li>
                <li className="text-start" style={styles.seclistItem}>
                Water management projects for 100 cities
                </li>
              </ul>


            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid section6">
        <div className="container">
      

           
          <div className="row section6row">
            <div className="col-lg-3 col-md-12 col-sm-12 text-start  my-5" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "16px",   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h4 style={styles.seckeyTitle} className="text-center">Focus</h4>
              <p className="text-center" style={{ fontSize: '17px' }}>
                Create sustainable urban spaces.</p>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 my-5"  style={{ 
       backgroundColor: "#fff", 
       padding: "20px", 
       borderRadius: "16px", 
       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
     }}> 

              <h4 style={styles.seckeyTitle} className="text-start">Key Initiatives:</h4>
              <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
                <li className="text-start" style={styles.seclistItem}>
                Private sector involvement in nuclear energy.
                </li>
                <li className="text-start" style={styles.seclistItem}>
                Support for cleaner energy in MSMEs.
                </li>
                <li className="text-start" style={styles.seclistItem}>
                Renewable energy integration policies.
                </li>
                <li className="text-start" style={styles.seclistItem}>
                <span style={{textDecoration:"underline"}}>PM Surya Ghar Muft Bijli Yojana</span>
 for free electricity.
                </li>
              </ul>


            </div>
            <div className=" col-lg-4 col-md-12 col-sm-12 my-5" style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "16px" }}>
            <h4 style={styles.Title} className="text-start">Energy Security</h4>
            </div>
          </div>
       

        </div>
      </div>
      <div className="container-fluid section7">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12 text-start sec7div" style={{marginTop:"150px"}}>
              <h2 style={styles.Title} className="text-white">Infrastructure</h2>
              <p className="text-white">
              Focus: Build robust infrastructure for growth.</p>
              <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
                <li className="text-start text-white" style={styles.seclistItem}>
                ₹11,11,111 crore allocation for infrastructure.                </li>
                <li className="text-start text-white" style={styles.seclistItem}>
                All-weather rural road connectivity.                </li>
                <li className="text-start text-white" style={styles.seclistItem}>
                Flood mitigation and irrigation projects.                </li>
                
              </ul>
            </div>          
          </div>   
        </div>
      </div>

      <div className="container-fluid section8">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12 text-start my-5"  >
              <div className=" mt-5 sec8head" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "16px",marginLeft:"95px",width:"366px" }}>
              <h2 className="text-center" style={styles.Title}>Tourism</h2>
             
              </div>
              <div className="section8content mt-1" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "16px" }}>
              <p >
              Focus: Create sustainable urban spaces.</p>
              <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
                <li className="text-start " style={styles.seclistItem}>
                Development of spiritual tourism corridors (Kashi Vishwanath Temple Corridor)               </li>
                <li className="text-start " style={styles.seclistItem}>
                Revival of Nalanda University and development of Nalanda.                </li>
                <li className="text-start " style={styles.seclistItem}>
                Development and Support for Odisha’s tourism assets.             </li>
                
              </ul>
              </div>
            </div>          
          </div>   
        </div>
      </div>

      
      <div className="container-fluid section9">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12 text-start my-5"  >
              <h2 className="mt-5" style={styles.Title}>Innovation, Research & Development</h2>
           
              <p >
              Focus: Foster innovation and R&D culture.</p>
              <h4 style={styles.seckeyTitle} className="">Key Initiatives:</h4>
              <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
                <li className="text-start " style={styles.seclistItem}>
                Operationalization of Anusandhan National Research Fund.          </li>
                <li className="text-start " style={styles.seclistItem}>
                ₹1 lakh crore for private sector R&D support.           </li>
                <li className="text-start " style={styles.seclistItem}>
                Venture capital fund of ₹1,000 crore for the space economy.              </li>
                
              </ul>
              
            </div>          
          </div>   
        </div>
      </div>

      
      <div className="container-fluid section10">
        <div className="container">
          <div className="row ">
          <div className="col-lg-6 col-md-12 col-sm-12 text-start my-5"  >
              <h2 className="mt-5" style={styles.Title}>Next Generation Reforms</h2>
           
              <p >
              Focus: Improve governance and ease of doing business.</p>
              <h4 style={styles.seckeyTitle} className="">Key Initiatives:</h4>
              <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
                <li className="text-start " style={styles.seclistItem}>
                Unique Land Parcel Identification Number for land records.        </li>
                <li className="text-start " style={styles.seclistItem}>
                Enhanced climate finance investments.         </li>
                <li className="text-start " style={styles.seclistItem}>
                Simplified FDI regulations and data governance improvements.             </li>
                <li className="text-start " style={styles.seclistItem}>
                NPS Vatsalya plan for minors by parents and guardians' contribution.         </li>
              </ul>
              
            </div>           
          </div>   
        </div>
      </div>

      
      <div className="container-fluid section11">
        <div className="container">
          <div className="row ">
          <div className="col-lg-6 col-md-12 col-sm-12 text-start divcon11 my-5" style={{margin:"auto", padding:"0px 27px 0px 57px"}} >
              <h2 className="mt-5" style={styles.Title}>Tax Proposals</h2>
           
              <p >
              Focus: Simplification in Taxes.</p>
              <h4 style={styles.seckeyTitle} className="">Key Initiatives:</h4>
              <ul style={{ listStyleType: "disc", padding: "0 20px" }}>
                <li className="text-start " style={styles.seclistItem}>
                Review Of Income Tax Act 1961.         </li>
                <li className="text-start " style={styles.seclistItem}>
                Reduction of Custom Duties in mobile accessories and Jewellery metals.          </li>
                <li className="text-start " style={styles.seclistItem}>
                Reductions on ITR in salaries and family pensions.             </li>
                <li className="text-start " style={styles.seclistItem}>
                Abolish ANGEL tax for all classes of investors.            </li>
                <li className="text-start " style={styles.seclistItem}>
                Corporate tax rate on foreign companies reduced from 40% to 35%.          </li>
              </ul>
              
            </div>         
          </div>   
        </div>
      </div>
    </>
  );
};

export default BudgetSection;

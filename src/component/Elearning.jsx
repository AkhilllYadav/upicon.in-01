
import React, { useState, useEffect } from 'react';
import { Accordion } from "react-bootstrap";
import axios from '../apiConfig'; 
import { Helmet } from "react-helmet";
const Elearning = () => {
  const [meta, setMeta] = useState({
    meta_title: 'Faq | UPICON',
    meta_description: 'Learn about our mission, vision, and the team behind My Website.',
    meta_keywords: 'UPICON, industrial consultants',
  });

  useEffect(() => {
    // Fetch meta tags for the 'business units' page with URL encoding for space
    axios.get('/meta-tags/msme') 
  
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
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/faq.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        padding: 120px 0; 
        display: flex;
        justify-content: center;
        align-items: center;
      }
.elernacc {
    background-image: url('/assets/images/lernbg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 3rem; /* Adjust as needed */
}

    //   .elernacc {
    //     background-image: url('/assets/images/lernbg.png');
    //     background-size: cover;
    //     background-position: center;
    //     background-repeat: no-repeat;
    //   }

.accordion-button::after {
    background: url('/assets/images/plus.png') no-repeat center center;
    background-size: contain;
    content: "";
    height: 20px;
  width: 22px;
}

.accordion-button:not(.collapsed)::after {
    background: url('/assets/images/minus.png') no-repeat center center;
    background-size: contain;
    content: "";
    height: 20px;
  width: 22px;
}
  .eleranacc .accordion-body{
  text-align: justify;
  }

    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const faqItems = [
    { question: "1. Why is creating an MSME project report important? ", answer: "Creating an MSME project report is essential in securing loans, grants, or other financial support from banks, government schemes, or investors. It provides a detailed business overview, which helps stakeholders access details, evaluate its viability, and make an informed decision." },
    { question: "2. What is the ideal length for an MSME project report?", answer: "While there is no defined ideal length for an MSME project report, it should be thorough enough to address all necessary aspects of the business, including market analysis, financial projections, and funding requirements. Typically, it is made in 20 to 40 pages, depending on the project. " },
    { question: "3. Is it possible for me to create an MSME project report on my own? ", answer: "Absolutely! Yes, you can definitely prepare an MSME project report on your own. However, it is advisable to seek input from financial experts or business advisors to ensure that all the information is accurate and complete, especially regarding financial projections." },
    { question: "4. Is it mandatory to submit a project report to apply for MSME loans?  ", answer: "Yes, banks and financial institutions often expect a project report when you want to apply for MSME loans, especially when the amount is large or when applying under government schemes. " },
    { question: "5. What are the essential elements of a project report for MSMEs? ", answer: "The MSME project report typically includes an executive summary, business description, market research, product or service description, organizational structure, implementation plan, financial projections, and funding requirements" },
    { question: "6. How to calculate financial projections in an MSME project report?  ", answer: "Financial projections are developed by analyzing various factors, including market research, historical performance data, industry benchmarks, and informed assumptions regarding future revenues and expenses. This comprehensive approach allows businesses to estimate their financial outcomes with greater accuracy." },
    { question: "7. What does break-even analysis refer to in a project report for MSMEs? ", answer: "A break-even analysis is a financial assessment used in MSME project reports to identify the point in a business where total revenues equal total costs, resulting in neither profit nor loss. This is the point at which a business begins to generate profit. The analysis helps businesses determine the minimum sales required to cover both fixed and variable costs." },
    { question: "8. How does an MSME project report contribute to obtaining government subsidies? ", answer: "An MSME report is essential for getting government subsidies, as it provides a detailed overview of the business plan, financial projections, and operational strategies. Government schemes often require this report to evaluate the business's eligibility for financial assistance or subsidized support, ensuring that the proposed project aligns with regulatory standards and funding criteria." },
    { question: "9. Can startups utilize MSME project reports to secure funding? ", answer: "Yes, startups can use MSME project reports for funding. These reports describe the business plan, financial projections, and market analysis, helping to present the startup's viability to investors and financial institutions. A well-prepared project report can enhance credibility and improve the chances of securing funding." },
    { question: "10. How frequently should an MSME project report be revised? ", answer: "It is particularly important to revise the report whenever you are seeking new loans or financing options. Additionally, the report should be updated whenever there are significant changes in the business model, operational strategies, or financial projections.   " },

];

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
            FAQs about MSME Project Reports
          </h5>
        </div>
      </div>

      <div className="container-fluid elernacc">
    <div>
    <h2 className="mb-3 text-center fw-bold mt-5">Got Questions? We've Got Answers!</h2>
    </div>
      
        <div className="row p-5">
          <div className="eleranacc col-lg-12 col-md-6 p-5">
            <Accordion defaultActiveKey="0">
              {faqItems.map((item, index) => (
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
                    <span style={{ flex: 1, fontWeight: "bold", color: "#3E3E3E" }}>
                      {item.question}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Elearning;

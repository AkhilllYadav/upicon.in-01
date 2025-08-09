import React from 'react';
import Client from './Client'
import TeamComponent from './TeamComponent'
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <>
      <Helmet>
        <title>About | UPICON</title>
        <meta name="description" content="upicon" />
        <meta name="keywords" content="Business Consultants, Business Consultants Services" />
      </Helmet>
      <section id="aboutus">
        <div className="container-fluid about">
          <div className="container my-5">
            <h5 className='my-5 text-center p-5 text-white display-4 fw-bold mt-5'>We Have The Power To Impact Our Future</h5>
          </div>
        </div>
        <div className="container mt-5 px-3">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <h5 className='text-start sectionhead'>About Us</h5>
              <h2 className='text-start fw-bold mt-3'>
                We Have The Power To Impact Our Future, and We’re Doing Something About It
              </h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <p className="text-start" style={{ color: '#6E6E6E', fontSize:'17px' }}>
                In Uttar Pradesh, the heartland of India, Micro, Small, and Medium Enterprises (MSMEs)
                form the backbone of our economy, <strong style={{ color: 'black'}}>driving innovation, generating employment, and
                promoting inclusive entrepreneurial growth.</strong> At UPICON, we recognize the immense
                potential of this sector and are committed to taking the necessary steps to ensure its
                continued success.             </p>
              <p className="text-start" style={{ color: '#6E6E6E', fontSize:'17px'}}>
                UP Industrial Consultants Limited was established by the Government of Uttar Pradesh
                in 1974 and further restructured in 1976 by the Industrial Development Bank of India
                (IDBI). As a visionary consultancy organization, UPICON is dedicated to being a provider
                of end-to-end support to micro, small, and medium enterprises (MSMEs) while  <strong style={{ color: 'black'}}>building
                a dynamic entrepreneurial ecosystem. </strong>Our core mission has always been to
                encourage and nurture entrepreneurship by offering resources, mentorship, and
                financial assistance to local businesses to succeed and contribute to the economy
                growth.            </p>
            </div>
            <div className="col-lg-6">
              <video controls className="img-fluid rounded shadow mb-3 mt-2 w-100">
                <source src="/assets/images/1682918705027049.compressed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="text-start" style={{ color: '#6E6E6E', fontSize:'17px'}}>
            Uttar Pradesh is experiencing a surge in entrepreneurial spirit, with MSMEs venturing
            into diverse sectors such  <strong style={{ color: 'black'}}>as manufacturing, technology, agriculture,</strong> and  <strong style={{ color: 'black'}}>services</strong>.
            This growth reflects the evolving and adaptive small business ecosystem and the drive
            of entrepreneurs to explore new opportunities. To further support this growth,<strong style={{ color: 'black'}}> UPICON </strong>
             plays a crucial <strong style={{ color: 'black'}}>role in facilitating access to skill development through</strong> various
            training programs for <strong style={{ color: 'black'}}>artisans</strong> and <strong style={{ color: 'black'}}>aspiring entrepreneurs, providing consultancy</strong> for
            new businesses, <strong style={{ color: 'black'}}>assistance in securing financial aid, advocating for technology
            upgrades,</strong> and <strong style={{ color: 'black'}}>expanding access to markets.</strong>
          </p>
          <p className="text-start" style={{ color: '#6E6E6E', fontSize:'17px' }}>
            We firmly believe that government initiatives are crucial for the growth of Uttar
            Pradesh's economy. Programs like the <strong style={{ color: 'black'}}>ishwakarma Shram Samman Yojana (VSSY),
            World-Bank Funded Project – RAMP, SANKALP, One District One Product (ODOP),
            Jal Jeevan Mission, </strong> schemes for <strong style={{ color: 'black'}}>SC/ST/OBC communities, Handicraft, Mission
            Shakti,</strong> and many more are instrumental in <strong style={{ color: 'black'}}>uplifting the underprivileged, </strong> providing 
            <strong style={{ color: 'black'}}> skills and training to artisans </strong> and <strong style={{ color: 'black'}}>aspiring business owners, </strong> and empowering them
            to earn their livelihoods and build better lives. These initiatives not only strengthen
            individual livelihoods but also contribute significantly to the state's overall economic
            and entrepreneurship development.

          </p>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h5 className="text-start fw-bold sectionhead">Our Vision</h5>
              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>
                Our vision is to continuously evolve and innovate, addressing the needs of various industries while contributing positively to the community. We strive to build a sustainable future through our diverse range of projects and services, focusing on excellence, integrity, and growth.
              </p>
              <p className="section-content text-start" style={{ color: '#6E6E6E', fontSize:'17px' }}>
                We believe in leveraging our expertise to make a significant impact, not just in the industries we serve, but in the lives of people we reach. Join us in our mission to shape a better future for all.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-start fw-bold mt-3'>With Government Programs: UPICON Empowering MSMEs and
                Entrepreneurs</h2>
              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>
              <strong style={{ color: 'black'}}> UPICON takes a proactive role</strong> in <strong style={{ color: 'black'}}>executing</strong> these <strong style={{ color: 'black'}}>vital government initiatives,</strong> to
                ensure their <strong style={{ color: 'black'}}>effective implementation and maximum impact.</strong> We work closely with
                various government departments and agencies to:             </p>


              <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight:'29px' }}>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}> <strong style={{ color: 'black'}}>Facilitate awareness and outreach: </strong> We conduct awareness campaigns under
                  various schemes, including the <strong style={{ color: 'black'}}>handicraft program</strong> (over 500 getting trained),
                  <strong style={{ color: 'black'}}>VSSY</strong> (Over 26,000 trained in 27 districts), <strong style={{ color: 'black'}}>ODOP</strong> (over 6200 trained in 19
                  Districts), <strong style={{ color: 'black'}}> RAMP, ESG, ZED, Geriatric care training </strong>(Over 1200 trained in 7
                  districts) and many more, <strong style={{ color: 'black'}}>to give the right information to MSMEs, artisans,
                  and aspiring entrepreneurs</strong> about the available schemes and benefits. </li>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}> <strong style={{ color: 'black'}}>Provide Training and Skill Development: </strong> We facilitate training programs under
                  several government programs and made by UPICON across Uttar Pradesh aimed
                  at helping artisans and individuals acquire the necessary skills to start and
                  effectively manage their small businesses and maintain their finances. Over the
                  past year, we have  <strong style={{ color: 'black'}}> implemented approximately 20 different training
                  programs under various government initiatives, training more than 100,000
                  individuals.</strong> </li>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}> <strong style={{ color: 'black'}}>Support access to finance and markets: </strong> With the support of our strong
                  network and partnerships with organizations such as  <strong style={{ color: 'black'}}> SIDBI, RAMP (a World
                  Bank-funded program), ODOP, the Ministry of MSME, Jal Jeevan Mission,
                  Mission Shakti, and more,</strong> we assist new small businesses to access and gain
                  financial assistance or other benefits under several government schemes. We
                  also act as facilitators to connect these newbies with potential markets to
                  establish their products and services. </li>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}> <strong style={{ color: 'black'}}>Monitor and evaluate program effectiveness: </strong>We monitor and evaluate the
                  effectiveness of our programs by tracking the progress of the initiatives for which
                  we are responsible for the  <strong style={{ color: 'black'}}> end-to-end execution.</strong> We provide feedback to our
                  entire team and relevant members on  <strong style={{ color: 'black'}}> how to improve processes, training,
                  execution strategies,</strong> and other tasks to ensure continuous improvement. </li>
              </ul>


              <p className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}>
                UPICON maintains key relationships with government institutions, the Ministry of
                MSME, financial institutions (SBI, PNB, Union Bank, World Bank for RAMP, and many
                more), and other corporations. We uphold these relationships to always maintain our
                position as one of the <strong style={{ color: 'black'}}> prominent facilitators for promoting, financing, and
                developing the Micro, Small, and Medium enterprises (MSME) sector and
                establishing the entrepreneurial ecosystem across Uttar Pradesh and many other
                locations in India.</strong>
              </p>



            </div>
          </div>



          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-start fw-bold mt-3'>UPICON’s Initiatives to Empower MSMEs </h2>
              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>
                In addition to our role in executing government programs, UPICON is actively involved
                in several other initiatives to <strong style={{ color: 'black'}}>empower MSMEs and foster entrepreneurship</strong> in Uttar
                Pradesh. These include:            </p>


              <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight:'29px' }}>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}>Technology Upgradation:</strong> We assist MSMEs and established small businesses
                  in adopting modern technologies to enhance productivity, improve product
                  quality, and reduce costs. To help them make their small businesses
                  sustainable and high-tech, we facilitate <strong style={{ color: 'black'}}>MSMEs with ESG, RAMP, and other
                  training for upgrading technology, empowering and transforming the entire
                  small business ecosystem. </strong>   </li>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}>Market Access: </strong> We help small business owners participate in local trade fairs,
                  exhibitions, and buyer-seller meets. We arrange workshops under various
                  schemes with experts covering financial assistance policies, guides on how to
                  start the investment process, how to upgrade their manufacturing units, and
                  more. Besides, we also provide MSMEs and new small businesses with
                  opportunities to expand their market reach. </li>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}>Financial Assistance: </strong> We collaborate with various financial institutions,
                  including <strong style={{ color: 'black'}}> SBI, PNB, SIDBI, Union Bank, UCO, and several government
                  financial organizations along with other banks. </strong> Our primary goal in these
                  collaborations is to help MSMEs and aspiring business owners gain easy access
                  to credit and other financial services at competitive rates. Also, we assist them
                  in <strong style={{ color: 'black'}}> obtaining government-provided financial aid.</strong> </li>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}>Infrastructure Development: </strong> We advocate for the development of world-class
                  infrastructure, including <strong style={{ color: 'black'}}>industrial parks </strong> and <strong style={{ color: 'black'}}>communication systems (Bihar
                  Elder Line Call Center, RAMP call Centre for MSMEs),</strong> to support MSME growth
                  and facilitate the establishment of new businesses. </li>
              </ul>


              <p className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}>
                Uttar Pradesh is emerging as an attractive investment destination with a <strong style={{ color: 'black'}}> proactive
                government and a business-friendly environment.</strong> We are confident that the state's
                MSME sector, including its diverse community consisting of artisans and
                entrepreneurs, will continue to thrive, contributing significantly to the overall economic
                development of Uttar Pradesh and the nation.
              </p>

              <p className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}>
                At UPICON, we are proud to be a part of this journey, empowering MSMEs, artisans, and
                entrepreneurs to achieve their full potential and build a prosperous future for Uttar
                Pradesh.
              </p>


            </div>
          </div>



          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-start fw-bold mt-3'>UPICON’s Local History   </h2>
              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>
                With a legacy dating back to 1974, we began with the vision of supporting and
                empowering entrepreneurs across Uttar Pradesh. Over the years, we have established
                a rich history of advancing entrepreneurship, promoting skill development, and
                ensuring financial stability by assisting individuals in obtaining financial aid.
                This was all possible throughout these years only when we evolved and adopted new
                technology, IOT, AI, and many revolutionary processes. UPICON's consultancy and
                innovation-driven solutions have changed the small business ecosystem of Uttar
                Pradesh with its commitment to evolution and adaptability.           </p>


            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-start fw-bold mt-3'>Offices That Have Grown Over Time  </h2>
              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>
                We started with our <strong style={{ color: 'black'}}>  headquarters in Kanpur; now, we have expanded to five more
                branches, totalling six offices across the country,</strong> including <strong style={{ color: 'black'}}> Lucknow, Bhopal,
                Prayagraj, Patna, and Noida.</strong> This strategic positioning allows us to serve the industrial
                sector's diverse needs effectively. UPICON's evolution reflects our commitment to
                adapting and expanding our services to <strong style={{ color: 'black'}}> help the industrial landscape and
                entrepreneurship graph grow.  </strong>       </p>


            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-start fw-bold mt-3'>What Problems Can UPICON Solve?  </h2>
              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>
                The <strong style={{ color: 'black'}}> vision</strong> of UPICON is to address the challenges of rural development and <strong style={{ color: 'black'}}> promote
                entrepreneurship</strong> across Uttar Pradesh and, eventually Pan India.</p>

              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>The <strong style={{ color: 'black'}}> Mission</strong> of UPICON is to provide consultancy to micro, small, and medium
                enterprises (MSMEs) while building and promoting a micro-business ecosystem. We
                are able to achieve this by facilitating skills training and development under various
                government programs, ensuring banking inclusion, enhancing workforce development,
                implementing social welfare projects, empowering women, ensuring safety and
                auditing, acquiring innovation, and adopting technology to secure prosperity.        </p>


            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-start fw-bold mt-3'>How We Execute Projects</h2>
              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>
                At UPICON, we believe in the power of micro, small, and medium-sized industries to
                drive economic progress and prosperity to the state. We have a network of dedicated
                professionals, including office staff, field workers, trainers, and managers, who work
                tirelessly to provide new businesses with the expertise, resources, and support they
                need to thrive. We<strong style={{ color: 'black'}}>  manage and execute each project </strong> end-to-end through our detailed
                execution plans, which include:         </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight:'29px' }}>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}> Strategic Planning:</strong> We develop comprehensive plans and strategies to support
                  industrial growth and entrepreneurship. We ensure our plans include a clear
                  execution roadmap, from grassroots levels to appropriately placing manpower,
                  resulting in more entrepreneurs.  </li>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}> Support & Guidance:</strong> We provide continuous support and guidance to the small
                  businesses at every stage of their development. This includes helping them plan,
                  get training, assist in getting financial aid, and also help them strategize their
                  marketing and sales.   </li>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px'}}><strong style={{ color: 'black'}}> Defining Roles and Duties:</strong> We are establishing clear hierarchical structures
                  and defining roles for the team to ensure efficient operations without delays for
                  both field and office.  </li>
                <li className="text-start" style={{ color: '#6E6E6E' ,fontSize:'17px'}}><strong style={{ color: 'black'}}> Financial Assistance:</strong> We facilitate newcomers to the business industry's
                  access to financial resources through our partnerships with government and
                  non-government financial institutions. We are partners with several banks and
                  financial institutions, such as Agri-loan for agricultural needs, SIDBI, the World
                  Bank for the RAMP project, SBI, UCO, PNB, and more.   </li>

                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}> Entrepreneurial Support and Development:</strong> Creating a nurturing environment,
                  providing market access, and facilitating with more support for entrepreneurs to
                  thrive and succeed. For this, we have:   </li>
                <ul className="my-2" style={{ listStyle: 'circle', paddingLeft: '20px', lineHeight:'29px' }}>
                  <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}> Communication, Marketing, and Promotional Strategies:</strong> We help new
                    businesses execute effective communication, marketing, and
                    promotional strategies successfully. This we do by arranging for different
                    workshops with expert speakers under different programs for new
                    entrepreneurs.   </li>
                  <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}> Call Centre Support System: </strong>We offer a robust call centre support
                    system to assist new businesses or aspiring entrepreneurs with their
                    queries, needs, and grievances.   </li>
                </ul>
                <li className="text-start" style={{ color: '#6E6E6E',fontSize:'17px' }}><strong style={{ color: 'black'}}> Project Management:</strong> We ensure every project we have in hand is managed
                  efficiently from inception to completion. We are able to do this with the help of a
                  professional workforce placed in all the required places appropriately and
                  managed under the proper hierarchy. We have successfully completed the
                  <strong style={{ color: 'black'}}>  Vishwakarma Shram Samman Yojana project, training more than 26,000
                  people across 27 districts. </strong> In addition, under the <strong style={{ color: 'black'}}>  Mission Shakti initiative, we
                  trained more than 18,000 women in Uttar Pradesh.</strong> The <strong style={{ color: 'black'}}>  Jal Jeevan Mission
                  saw over 40,000 individuals trained in 5 districts.</strong> We also provided <strong style={{ color: 'black'}}> Geriatric
                  care training,</strong> with more than <strong style={{ color: 'black'}}> 1200 participants trained in 7 districts.</strong> In total,
                  <strong style={{ color: 'black'}}>  we trained over 1 Lakh+ people during the FY 2024-2025 and still counting. </strong> </li>
                <li className="text-start" style={{ color: '#6E6E6E' }}><strong style={{ color: 'black'}}> Financial Advisory: </strong>Following our training programs, we organize several
                  workshops to provide financial guidance that helps micro businesses make
                  informed decisions and achieve their financial goals. These workshops offer
                  valuable advice, assist in getting started with financial processes, and also help
                  them complete their files with the necessary documents.  </li>
              </ul>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-start fw-bold mt-3'>What Problems Can UPICON Solve?  </h2>
              <p className="section-content text-start mt-3" style={{ color: '#6E6E6E', fontSize:'17px' }}>
              <strong style={{ color: 'black'}}> UPICON is dedicated to building a future where industry and society grow together. 
Our commitment to socio-economic development is evident in our initiatives that 
empower communities, support small businesses, and create sustainable growth 
opportunities. We are proud to be a trusted partner to small businesses, helping 
them overcome the complexities of the industrial world.   </strong>   </p>
                <p className="section-content text-start my-3 " style={{ color: '#6E6E6E', fontSize:'17px' }}>
                We are working tirelessly to pave the way for a brighter, more inclusive Uttar Pradesh 
and India. Together, we can achieve great things and make a lasting impact on the 
entire small Business Ecosystem. All the initiatives that UPICON takes are to promote 
entrepreneurship and support the growth of startups in the entire Uttar Pradesh & 
eventually pan India.
</p>

            </div>
          </div>

          {/* New Section Added Here */}

          {/* <TeamComponent/> */}
          {/* <Client /> */}

        </div>
      </section>
    </>
  );
};

export default About;

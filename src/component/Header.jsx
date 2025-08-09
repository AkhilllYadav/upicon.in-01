import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import '../css/index.css'; // Corrected path to the CSS file
import '../css/Header.css';

import logoImage from '../assets/images/upicon.jpg';
import menuIconImage from '../assets/images/Menu.png';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/business-units', label: 'Business Units' },
  { path: '/cmyuva', label: 'CM Yuva' },
  { path: 'https://youthadda.msmeosem.in/', label: 'Youth Adda', external: true },
];

const MEGA_MENU_ITEMS = [
    {
    title: 'About Us',
    className: 'col-lg-2 col-md-6 col-sm-6',
    links: [
      { path: '/comingsoon', label: 'Overview' },
      { path: '/comingsoon', label: 'Clients' },
      { path: '/comingsoon', label: 'Board of Directors' },
      { path: '/comingsoon', label: 'Historical Journey' },
    ],
  },
  {
    title: 'Our Verticals',
    className: 'col-lg-3 col-md-6 col-sm-6',
    links: [
      { path: '/consultancy-group', label: 'Consultancy' },
      { path: '/retail', label: 'Retail' },
      { path: '/skill-development', label: 'Skill Development and Entrepreneurship' },
      { path: '/csr-training', label: 'CSR Training' },
    ],
  },
  {
    title: 'Our Verticals',
    className: 'col-lg-2 col-md-6 col-sm-6',
    links: [
      { path: '/financial-Inclusion', label: 'Banking and Financial Inclusion' },
      { path: '/technology', label: 'Technology and Innovation' },
      { path: '/empowerment', label: 'Workforce Empowerment' },
    ],
  },
  {
    title: 'Initiatives',
    className: 'col-lg-3 col-md-6 col-sm-6',
    links: [
      { path: '/comingsoon', label: 'E-Learning for Micro Entrepreneurs' },
      { path: '/comingsoon', label: 'Financing for Entrepreneurs' },
    ],
  },
  {
    title: 'Media',
    className: 'col-lg-2 col-md-6 col-sm-6',
    links: [
      { path: '/news', label: 'Latest News' },
      { path: '/comingsoon', label: 'Social Media' },
      { path: '/comingsoon', label: 'Events' },
    ],
  },
  {
    title: 'Finance/Loans',
    className: 'col-lg-2 col-md-6 col-sm-6 mt-5 mb-5',
    links: [
      { path: '/comingsoon', label: 'E-Rickshaw Financing' },
      { path: '/comingsoon', label: 'MSME Financing' },
      { path: '/comingsoon', label: 'Agri Financing' },
    ],
  },
  {
    title: 'Projects',
    className: 'col-lg-3 col-md-6 col-sm-6 mt-5 mb-5',
    links: [
      { path: '/comingsoon', label: 'Vishwakarma Shram Samman Yojna' },
      { path: 'https://upmissionshakti.in/', label: 'Mission Shakti' },
      { path: '/comingsoon', label: 'One District One Product' },
      { path: '/comingsoon', label: 'Jal Jeevan Mission' },
      { path: 'https://msmeosem.in/', label: 'MSME OSEM' },
    ],
  },
  {
    title: 'Projects',
    className: 'col-lg-3 col-md-6 col-sm-6 mt-5 mb-5',
    links: [
      { path: '/comingsoon', label: 'PRAVEEN (Secondary Education)' },
      { path: '/comingsoon', label: 'Short Term Training (STT)' },
      { path: '/comingsoon', label: 'OBC Training' },
      { path: '/comingsoon', label: 'SC ST Hub' },
      { path: 'https://upmsmemart.com/', label: 'MSME Mart' },
    ],
  },
  {
    title: 'Projects',
    className: 'col-lg-3 col-md-6 col-sm-6 mt-5 mb-5',
    links: [
      { path: '/comingsoon', label: 'PM Daksh' },
      { path: '/comingsoon', label: 'GERIATRIC' },
      { path: '/comingsoon', label: 'SANKALP' },
      { path: '/comingsoon', label: 'Atal Bhujal Yojna' },
      { path: '/comingsoon', label: 'PMKVY 4.0' },
    ],
  },
];


const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const [isKnowledgeBankOpen, setIsKnowledgeBankOpen] = useState(false);
  const [isFaqsOpen, setIsFaqsOpen] = useState(false);
  const knowledgeBankRef = useRef(null);

  // Close all menus on route change
  useEffect(() => {
    setIsMobileNavOpen(false);
    setMenuVisible(false);
    setIsKnowledgeBankOpen(false);
    setIsFaqsOpen(false);
  }, [location]);

  // Effect to handle clicks outside of the Knowledge Bank dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (knowledgeBankRef.current && !knowledgeBankRef.current.contains(event.target)) {
        setIsKnowledgeBankOpen(false);
        setIsFaqsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const toggleMenuVisibility = () => setMenuVisible((prev) => !prev);

  const toggleKnowledgeBank = (e) => {
    e.preventDefault();
    setIsKnowledgeBankOpen((prev) => !prev);
    if (isKnowledgeBankOpen) setIsFaqsOpen(false);
  };

  const toggleFaqsDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFaqsOpen((prev) => !prev);
  };

  return (
    <>
      <header id="header" className="fixed-top d-flex shadow align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/" onClick={() => setIsMobileNavOpen(false)}>
              <img src={logoImage} alt="Logo" className="img-fluid" />
            </Link>
          </div>

          <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
            <ul>
              {NAV_LINKS.map(({ path, label, external }) => (
                <li key={path}>
                  {external ? (
                    <a href={path} target="_blank" rel="noopener noreferrer">{label}</a>
                  ) : (
                    <Link className={`nav-link scrollto ${location.pathname === path ? 'active' : ''}`} to={path}>
                      {label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="dropdown" ref={knowledgeBankRef}>
                <a href="#" onClick={toggleKnowledgeBank}>
                  <span>Knowledge Bank</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul className={isKnowledgeBankOpen ? 'dropdown-active' : ''}>
                  <li><Link to="/articles-research">Articles & Research</Link></li>
                  <li className="dropdown">
                    <a href="#" onClick={toggleFaqsDropdown}>
                      <span>FAQs & Articles</span> <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul className={isFaqsOpen ? 'dropdown-active' : ''}>
                      <li><Link to="/cmyuva">CM Yuva</Link></li>
                      <li><Link to="/msme">MSME Project Reports</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/webinars">Webinars & Record Sessions</Link></li>
                  <li><Link to="/glossary">Glossary of Terms</Link></li>
                  <li><Link to="/industry_news">Industry News & Updates</Link></li>
                  <li><Link to="/case_studies">Case Studies</Link></li>
                  <li><Link to="/tools&resources">Tools & Resources</Link></li>
                  <li><Link to="/discussion-form">Discussion Form</Link></li>
                  <li><Link to="/expert-contributions">Expert Contributions</Link></li>

                </ul>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/careers">Careers</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}></i>
          </nav>

          <div className="d-flex align-items-center">
            <Link className="btn-get-started scrollto" to="/contact">Contact Us</Link>
            <button className="btn-menu" onClick={toggleMenuVisibility}>
               <img src={menuIconImage} alt="Mega Menu" />
            </button>
          </div>
        </div>
      </header>

      {menuVisible && (
        <div className="mega-menu">
          <div className="container">
            <div className="row">
              {MEGA_MENU_ITEMS.map(({ title, links, className }) => (
                <div key={title} className={className}>
                  <h3>{title}</h3>
                  <ul>
                    {links.map((link) => (
                      <li key={link.label}>
                        {link.path.startsWith('http') ? (
                          <a href={link.path} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        ) : (
                          <Link to={link.path}>{link.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
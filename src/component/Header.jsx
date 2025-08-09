import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import logo from '../assets/images/upicon.jpg'; // Adjust the path to your logo image
import menu from '../assets/images/Menu.png'; // Adjust the path to your menu image
import menubg from '../assets/images/menubg.svg'; // Adjust the path to your menu background image

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/business-units', label: 'Business Units' },
  { path: '/cmyuva', label: 'CM Yuva' },
  { path: 'https://youthadda.msmeosem.in/', label: 'Youth Adda', external: true },
];

const MEGA_MENU_ITEMS = [
  {
    title: 'Menu', // Group for mobile only
    className: 'mobviews  col-md-6 col-sm-6', // Add a class to identify this group
    links: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About Us' },
      { path: '/business-units', label: 'Business Units' },
      { path: '/cmyuva', label: 'CM Yuva' },
      { path: 'https://youthadda.msmeosem.in/', label: 'Youth Adda', external: true },

      {
        label: 'Knowledge Bank',
        isDropdown: true,
        links: [
          { path: '/articles-research', label: 'Articles & Research Papers' },
          { path: '/comingsoon', label: 'Guides & Tutorials' },
          {
            label: 'FAQs & Knowledge Articles',
            isDropdown: true,
            links: [
              { path: '/cmyuva', label: 'CM Yuva' },
              { path: '/msme', label: 'MSME Project Reports' },
            ],
          },
          { path: '/webinars', label: 'Webinars & Recorded Sessions' },
          { path: '/comingsoon', label: 'Glossary of Terms' },
          { path: '/industry_news', label: 'Industry News & Updates' },

          { path: '/comingsoon', label: 'Case Studies' },
          { path: '/comingsoon', label: '  Tools & Resources' },
          { path: '/comingsoon', label: ' Discussion Forum' },
          { path: '/comingsoon', label: ' Expert Contributions' },
        ],
      },
      { path: '/careers', label: 'Careers' },
      { path: '/contact', label: 'Contact Us' },
    ],
  },
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
      { path: '/comingsoon', label: 'RAMP' },
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
      { path: '/comingsoon', label: 'Bihar Elderline' },
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
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Track if the image is loaded
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  useEffect(() => {
    setIsOpen(false);
    setMenuVisible(false);
  }, [location]);

  useEffect(() => {
    setSubmenuVisible(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleMenuVisibility = () => setMenuVisible((prev) => !prev);
  const toggleDropdown = (label) => setOpenDropdown(openDropdown === label ? null : label);
  const toggleSubDropdown = (label) => setOpenSubDropdown(openSubDropdown === label ? null : label);
  const handleImageLoad = () => {
    setImageLoaded(true); // Set to true when image is loaded
  };

  const activeLinkStyle = {
    width: '221px',
    backgroundColor: '#DF7C21',
    borderRadius: '30px',
    padding: '14px',
    color: 'white'
  };
  const inactiveLinkStyle = {
    width: '221px',
    backgroundColor: '#F9F9F9',
    borderRadius: '30px',
    padding: '14px',
    color: 'black', // Adjust text color for inactive state if needed
  };

  return (
    <>
      <header id="header" className={`fixed-top d-flex shadow align-items-center ${isOpen ? 'navbar-mobile' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <h1 className="logo">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="Logo" className="logo mt-2" height="60" />
            </Link>
          </h1>
          <nav id="navbar" className={`navbar ${isOpen ? 'navbar-mobile' : ''}`}>
            <ul className="justify-content-center m-0">
              {NAV_LINKS.map(({ path, label }) => (
                <li key={path}>
                  {path.startsWith('http') ? (
                    <a
                      className="nav-link scrollto"
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      className={`nav-link scrollto ${location.pathname === path ? 'active' : ''}`}
                      to={path}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}

              {/* Dropdown */}



              <li className="dropdown">
                <Link
                  to="#"
                  className="nav-link scrollto"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setIsOpen((prev) => !prev); // Toggle dropdown
                  // }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen((prev) => !prev); // Toggle dropdown
                    setMenuVisible(false); // Close mega menu
                  }}
                >
                  Knowledge Bank <i className="bi bi-chevron-down"></i>
                </Link>
                <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} style={{ textAlign: 'center' }}>
                  <Link
                    className="dropdown-item text-center"
                    to="/articles-research"
                    style={location.pathname === '/articles-research' ? activeLinkStyle : inactiveLinkStyle}
                  // style={location.pathname === '/home' ? activeLinkStyle : {}}
                  >
                    Articles & Research Papers
                  </Link>
                  <li>
                    <Link className="dropdown-item" to="/comingsoon"
                      style={location.pathname === '/comingsoon' ? activeLinkStyle : inactiveLinkStyle}>
                      Guides & Tutorials
                    </Link>
                  </li>
                  <li>
                    {/* <Link className="dropdown-item" to="/faq"
                 style={location.pathname === '/faq' ? activeLinkStyle : inactiveLinkStyle}>
                    FAQs & Knowledge Articles
                    </Link> */}


                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="#" style={location.pathname === '' ? activeLinkStyle : inactiveLinkStyle} onClick={(e) => e.preventDefault()}>
                        FAQs & Knowledge Articles
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/cmyuva" style={location.pathname === '/cmyuva' ? activeLinkStyle : inactiveLinkStyle}>CM Yuva </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/msme" style={location.pathname === '/msme' ? activeLinkStyle : inactiveLinkStyle}>MSME Project Reports</Link>
                        </li>

                      </ul>
                    </li>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/webinars"
                      style={location.pathname === '/webinars' ? activeLinkStyle : inactiveLinkStyle}>
                      Webinars & Recorded Sessions

                    </Link>

                  </li>
                  <li>
                    <Link className="dropdown-item" to="/comingsoon"
                      style={location.pathname === '/comingsoon' ? activeLinkStyle : inactiveLinkStyle}>
                      Glossary of Terms

                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/industry_news"
                      style={location.pathname === '/industry_news' ? activeLinkStyle : inactiveLinkStyle}>
                      Industry News & Updates

                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/comingsoon"
                      style={location.pathname === '/comingsoon' ? activeLinkStyle : inactiveLinkStyle}>
                      Case Studies

                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/comingsoon"
                      style={location.pathname === '/comingsoon' ? activeLinkStyle : inactiveLinkStyle}>
                      Tools & Resources


                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/comingsoon"
                      style={location.pathname === '/comingsoon' ? activeLinkStyle : inactiveLinkStyle}>
                      Discussion Forum


                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/comingsoon"
                      style={location.pathname === '/comingsoon' ? activeLinkStyle : inactiveLinkStyle}>
                      Expert Contributions

                    </Link>
                  </li>
                </ul>
              </li>
              <li className="">
                <Link className="webview scrollto  fw-bold" to="/careers">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
          {/* Buttons */}

          <div className="d-flex align-items-center gap-3">
            <Link className="btn-get-started text-white webview scrollto" to="/contact">
              Contact Us
            </Link>
            <button className="btn-menu" style={{ backgroundColor: 'unset', border: 'unset' }} onClick={toggleMenuVisibility}>
              <img src={menu} alt="Menu" height="40" />
            </button>
          </div>
        </div>
      </header>
      {menuVisible && (
        <div
          className="mega-menu text-white"
          style={{
            background: `url(${menubg})`, // Background image once it's loaded

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'fixed',
            left: 0,
            top: '11%',
            width: '100%',
            zIndex: 9999,
            overflowY: 'auto',
            padding: '20px',
          }}
        >
          <img
            src="/assets/images/menubg.svg"
            alt="Background"
            onLoad={handleImageLoad} // This will fire when the image is loaded
            style={{ display: 'none' }} // Hide the image, we just need to track the load event
          />
          <div className="container">
            <div className="row mega-menu mt-5 mb-5">
              {MEGA_MENU_ITEMS.map(({ title, links, className }) => (
                <div
                  key={title}
                  className={` ${className || ''}`}
                  style={{ padding: '10px' }}
                >
                  <h3 className="text-start" style={{ fontSize: '20.28px' }}>{title}</h3>
                  <ul className="text-start ps-0">
                    {links.map((link) =>
                      link.isDropdown ? (
                        <li key={link.label} className="dropdown">
                          <span onClick={() => toggleDropdown(link.label)}>{link.label}</span>
                          {openDropdown === link.label && (
                            <ul>
                              {link.links.map((subLink) =>
                                subLink.isDropdown ? (
                                  <li key={subLink.label} className="dropdown">
                                    <span onClick={() => toggleSubDropdown(subLink.label)}>{subLink.label}</span>
                                    {openSubDropdown === subLink.label && (
                                      <ul>
                                        {subLink.links.map((item) => (
                                          <li key={item.label}>
                                            {item.path.startsWith('http') ? (
                                              <a href={item.path} target="_blank" rel="noopener noreferrer">{item.label}</a>
                                            ) : (
                                              <Link to={item.path}>{item.label}</Link>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ) : (
                                  <li key={subLink.label}>
                                    {subLink.path.startsWith('http') ? (
                                      <a href={subLink.path} target="_blank" rel="noopener noreferrer">{subLink.label}</a>
                                    ) : (
                                      <Link to={subLink.path}>{subLink.label}</Link>
                                    )}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ) : (
                        <li key={link.label}>
                          {link.path.startsWith('http') ? (
                            <a href={link.path} target="_blank" rel="noopener noreferrer">{link.label}</a>
                          ) : (
                            <Link to={link.path}>{link.label}</Link>
                          )}
                        </li>
                      )
                    )}
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


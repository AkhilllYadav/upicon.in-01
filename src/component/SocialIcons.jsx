import React from "react";

// React Functional Component
const SocialIcons = () => {
  const styles = {
    container: {
      position: "fixed",
      top: "50%",
      opacity:'.7',
      right: "18px", // Positioning it to the right side
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: "10px", // Space between icons
      zIndex: 1000,
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "42px",
      height: "42px",
      backgroundColor: "#DF7C21",
      color: "white", // Icon color
      textDecoration: "none",
      fontSize: "1rem",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      border: "2px solid #DF7C21", // Border to highlight the icon
    },
    iconHover: {
      backgroundColor: "#df7c21", // Hover color
      transform: "scale(1.1)", // Hover zoom effect
    },
  };

  // List of social links
  const socialLinks = [
    { href: "https://www.facebook.com/people/Upicon/100091460436785/?mibextid=LQQJ4d", icon: "fab fa-facebook-f" },
    { href: "https://twitter.com/InfoUpicon", icon: "fab fa-twitter" },
    { href: "https://www.instagram.com/upicon_1974/?igsh=bnNoYmF3eHA5Z284", icon: "fab fa-instagram" },
    { href: "https://www.linkedin.com/company/upicon1974/", icon: "fab fa-linkedin-in" },
  ];

  return (
    <div style={styles.container}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = styles.iconHover.backgroundColor)
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#DF7C21")}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

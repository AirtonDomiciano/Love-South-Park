import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

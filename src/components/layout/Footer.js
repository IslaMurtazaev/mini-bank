import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto">
        <p className="text-center">
          Project of <strong>CS 203: Intro to Web Technologies</strong>.
        </p>
        <div className="footer-copyright text-center text-secondary">
          © 2018 Copyright: &nbsp;
          <a href="http://www.iaau.edu.kg/" className="btn-link">
            Computer Science department, AIU.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

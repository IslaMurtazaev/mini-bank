import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer footer">
      <div className="mx-auto">
        <p className="text-center">
          Project of <strong>CS 203: Intro to Web Technologies</strong>.
        </p>
        <div class="footer-copyright text-center text-secondary">
          © 2018 Copyright: &nbsp;
          <Link to="http://www.iaau.edu.kg/" className="btn-link">
            Computer Science department, AIU.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

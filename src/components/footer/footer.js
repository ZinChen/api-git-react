import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
	return (
    <Fragment>
      <footer className="footer text-center bg-dark">
        <div className="container">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <Link to="#" className="social-link rounded-circle text-white mr-3">
                <i className="icon-social-facebook"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="social-link rounded-circle text-white mr-3">
                <i className="icon-social-twitter"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="social-link rounded-circle text-white mr-3">
                <i className="icon-social-github"></i>
              </Link>
            </li>
          </ul>
          <p className="text-muted small mb-0">Copyright &copy; Your Website 2019</p>
        </div>
      <Link to="#page-top" className="scroll-to-top rounded js-scroll-trigger">
        <i className="fas fa-angle-up"></i>
      </Link>
      </footer>
    </Fragment>
	);
};

export default Footer;
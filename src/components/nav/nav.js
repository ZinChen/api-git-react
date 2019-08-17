import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './nav.css';
 
const Nav = () => {
  return (
    <Fragment>
      <nav id="mainNav" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <Link to="#" className="navbar-brand">Geo Api</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="#header" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="#weather" className="nav-link">Weather</Link>
            </li>
            <li className="nav-item">
              <Link to="#about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>

    </Fragment>
  );
};

export default Nav;


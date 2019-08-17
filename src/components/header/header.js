import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <header id="header" className="masthead d-flex bg-warning">
      <div className="container text-center my-auto">
        <h1 className="mb-1">Weather</h1>
        <h3 className="mb-5">
          <em>Worldwide Weather</em>
        </h3>
        <Link to="#about" className="btn btn-primary btn-xl js-scroll-trigger btn-header">Find Out More</Link>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default Header;


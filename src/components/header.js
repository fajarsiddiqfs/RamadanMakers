import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import logo from '../images/Ramadan-Logo-Dark.jpg';
import headLogo from '../images/headlogo.svg';
import './header.css';
import { PageImage, PageTitle, PageDescription } from '../styles';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <img src={headLogo} alt="logo" />
    </nav>
    <div className="header-section">
      <PageImage src={logo} alt="Ramadhan" />
      <PageTitle>
        Welcome to <br />
        RamadanMakers.com
      </PageTitle>
      <PageDescription>
        We are from Indie-Makers Community from all around the world. Our goal is to inspire more muslim entrepreneurs,
        digital nomads, designers, developers & makers.
      </PageDescription>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

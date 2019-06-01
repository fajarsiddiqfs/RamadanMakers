import PropTypes from 'prop-types';
import React from 'react';

import logo from '../images/Ramadan-Logo-Dark.jpg';
import headLogo from '../images/headlogo.svg';
import './header.css';
import { PageImage, PageTitle, PageDescription, FeaturedImage } from '../styles';

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
        We are members of the Indie-Maker Community from all around the world. Our goal is to inspire more muslim
        entrepreneurs, digital nomads, designers, developers & makers.
      </PageDescription>
      <a
        href="https://www.producthunt.com/posts/ramadan-makers?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ramadan-makers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FeaturedImage
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=157145&theme=light"
          alt="Ramadan Makers - An open community to all Muslim makers around the world 🌙 | Product Hunt Embed"
          style={{ width: 250, height: 54 }}
          width="250px"
          height="54px"
        />
      </a>
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

import React from 'react';
import './footer.styles.scss';
import FooterLogo from '../../assets/footer/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={FooterLogo} alt="footer-logo" />
      </div>
      <div className="copy-right">
        Copyright © 2018 動物認養平台. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

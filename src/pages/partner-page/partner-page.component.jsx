import React from 'react';
import './partner-page.styles.scss';
import NavBar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';
import AboutWrapper from '../../component/about-wrapper/about-wrapper.component';

const PartnerPage = () => {
  const partners = [
    { path: require('../../assets/partner/partner1.jpg'), name: '台灣之心' },
    { path: require('../../assets/partner/partner2.jpg'), name: '中大汪汪社' },
    {
      path: require('../../assets/partner/partner3.jpg'),
      name: '高師大愛護動物社',
    },
    {
      path: require('../../assets/partner/partner4.jpg'),
      name: '陽明大學懷生社',
    },
    { path: require('../../assets/partner/partner5.jpg'), name: '雲科汪汪社' },
    { path: require('../../assets/partner/partner6.jpg'), name: '中大汪汪社' },
    {
      path: require('../../assets/partner/partner7.jpg'),
      name: '慈濟大學懷生社',
    },
    {
      path: require('../../assets/partner/partner8.jpg'),
      name: '中原動物服務社',
    },
  ];
  return (
    <div className="partner-page">
      <NavBar />
      <AboutWrapper />
      <div className="partner-wrapper">
        <div className="partner-title">
          <h1>認養合作夥伴</h1>
          <p>歡迎各單位加入為流浪毛小孩努力!</p>
        </div>
        <div className="partner-pic">
          {partners.map((partner) => (
            <div className="partner-thumb">
              <img src={partner.path} alt="" />
              <h2>{partner.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerPage;

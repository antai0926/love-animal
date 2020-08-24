import React from 'react';
import './navbar.styles.scss';
import NavLogo from '../../assets/navbar/nav-logo.png';

const NavBar = () => {
  return (
    <nav>
      <a href="/" className="nav-logo">
        <img src={NavLogo} alt="nav-logo" />
      </a>
      <ul className="menu">
        <li>
          <a href="/">首頁</a>
        </li>
        <li>
          <a href="/about">關於我們</a>
        </li>
        <li className="dropDown">
          <a href="/#">動物認養</a>
          <ul className="subMenu">
            <li>
              <a href="/#">認養須知</a>
            </li>
            <li>
              <a href="/#">認養狗狗</a>
            </li>
            <li>
              <a href="/#">認養貓咪</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/news">動物新聞</a>
        </li>
        <li>
          <a href="/partner">活動夥伴</a>
        </li>
        <li>
          <a href="/contact">聯絡我們</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import './navbar.styles.scss';
import NavLogo from '../../assets/navbar/nav-logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={NavLogo} alt="nav-logo" />
      </Link>
      <ul className="menu">
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/about">關於我們</Link>
        </li>
        <li className="dropDown">
          <Link to="/#">動物認養</Link>
          <ul className="subMenu">
            <li>
              <Link to="/#notice-id">認養須知</Link>
            </li>
            <li>
              <Link to="/#dog-id">認養狗狗</Link>
            </li>
            <li>
              <Link to="/#cat-id">認養貓咪</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/news">動物新聞</Link>
        </li>
        <li>
          <Link to="/partner">活動夥伴</Link>
        </li>
        <li>
          <Link to="/contact">聯絡我們</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

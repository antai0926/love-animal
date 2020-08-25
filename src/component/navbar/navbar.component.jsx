import React from 'react';
import './navbar.styles.scss';
import NavLogo from '../../assets/navbar/nav-logo.png';

const NavBar = () => {
  const projectName = 'love-animal-react';
  return (
    <nav>
      <a href={`/${projectName}`} className="nav-logo">
        <img src={NavLogo} alt="nav-logo" />
      </a>
      <ul className="menu">
        <li>
          <a href={`/${projectName}`}>首頁</a>
        </li>
        <li>
          <a href={`/${projectName}/about`}>關於我們</a>
        </li>
        <li className="dropDown">
          <a href={`/${projectName}/#`}>動物認養</a>
          <ul className="subMenu">
            <li>
              <a href={`/${projectName}/#notice-id`}>認養須知</a>
            </li>
            <li>
              <a href={`/${projectName}/#dog-id`}>認養狗狗</a>
            </li>
            <li>
              <a href={`/${projectName}/#cat-id`}>認養貓咪</a>
            </li>
          </ul>
        </li>
        <li>
          <a href={`/${projectName}/news`}>動物新聞</a>
        </li>
        <li>
          <a href={`/${projectName}/partner`}>活動夥伴</a>
        </li>
        <li>
          <a href={`/${projectName}/contact`}>聯絡我們</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

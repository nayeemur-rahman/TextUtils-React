import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <a href="#">{props.title}</a>
        </h1>
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </nav>
        <button id="theme-toggler" onClick={props.toggleTheme}>
          {props.theme === 'dark-theme' ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
        </button>
      </div>
    </header>
  );
}

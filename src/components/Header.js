import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <a href="/">{props.title}</a>
        </h1>
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </nav>
        <button id="theme-toggler" title={`Turn on ${props.theme === 'dark-theme' ? 'light' : 'dark'} mode`} onClick={props.toggleTheme}>
          <i class={`fas fa-${props.theme === 'dark-theme' ? 'sun' : 'moon'}`}></i>
        </button>
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import "./navbar.css"
import logo from "./assets/img/main/download.png"
import { useEffect } from 'react';

const Navbar = () => {
  const scrollMenuIds = React.useRef([]);

  const mobileMenu = () => {
    const navElement = document.getElementById('nav');
    navElement.classList.toggle('nav-visible');
  };

  const windowResize = () => {
    if (window.innerWidth > 800) {
      const navElement = document.getElementById('nav');
      navElement.classList.remove('nav-visible');
    }
  };

  const scrollEvent = () => {
    const scrollPosition = window.pageYOffset;

    scrollMenuIds.current.forEach((link) => {
      const container = link.getAttribute('href');
      const containerElement = document.querySelector(container);

      if (containerElement) {
        const containerOffset = containerElement.offsetTop;
        const containerHeight = containerElement.offsetHeight;
        const containerBottom = containerOffset + containerHeight;

        if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  };

  useEffect(() => {
    scrollMenuIds.current = Array.from(document.querySelectorAll('a.nav-link[href]'));

    window.addEventListener('resize', windowResize);
    document.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('resize', windowResize);
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <div>
    <header id="nav-wrapper">
      <nav id="nav">
        <div className="nav left">
          <span className="gradient skew">
            <h1 className="logo un-skew">
              <a href="#home"><img src={logo} alt='' /></a>
            </h1>
          </span>
          <button id="menu" className="btn-nav" onClick={mobileMenu}>
            <span className="fas fa-bars"></span>
          </button>
        </div>
        <div className="nav right">
          <a href="#home" className="nav-link active">
            <span className="nav-link-span">
              <span className="u-nav">صفحه اصلی</span>
            </span>
          </a>
          <a href="#about" className="nav-link">
            <span className="nav-link-span">
              <span className="u-nav">درباره ی ما</span>
            </span>
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-link-span">
              <span className="u-nav">رویدادها</span>
            </span>
          </a>
          <a href="#work" className="nav-link">
            <span className="nav-link-span">
              <span className="u-nav">ورود/عضویت</span>
            </span>
          </a>
        </div>
      </nav>
    </header>

    </div>
  );
};

export default Navbar;
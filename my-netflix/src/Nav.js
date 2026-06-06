import React, { useState, useEffect } from 'react';
import './style.css'; // ይህ ከCSS ፋይልህ ጋር ያገናኘዋል

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      {/* canባLeft side: Logo and Links */}
      <div className="nav__left">
        <img 
          className="nav__logo" 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" 
        />
        <div className="nav__links">
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
        </div>
      </div>

      {/* Right side: Search, Avatar, and Logout (This fixes the layout) */}
      <div className="nav__right">
        <input type="text" className="search" placeholder="Search movies..." />
        <div className="nav__avatar">H</div>
        <button className="nav__logout">Logout</button>
      </div>
    </nav>
  );
}

export default Nav;
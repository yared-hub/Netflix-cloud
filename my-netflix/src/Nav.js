import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav({ search, setSearch, userPhoto, logout }) {
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

      <div className="nav__right">
        <input
          type="text"
          className="search"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <img
          className="nav__avatar"
          src={userPhoto || "https://via.placeholder.com/40"}
          alt="Profile"
        />

        <button className="nav__logout" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Nav;
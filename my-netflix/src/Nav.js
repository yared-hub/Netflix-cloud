import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav({ search, setSearch }) {

  const [show, handleShow] = useState(false);

  useEffect(() => {

    const listener = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };

  }, []);

  return (
    <div className={'nav ${show && "nav_black"}'}>

      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <div className="nav_links">
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>New & Popular</span>
      </div>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

    </div>
  );
}

export default Nav;
import React from 'react';
import './banner.css';

function Banner() {
  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: "url('https://en.wikipedia.org/wiki/The_Dark_Knight_%28soundtrack%29')",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">The Movie Title</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests...
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
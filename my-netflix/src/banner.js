import React from 'react';
import './banner.css';

function Banner() {
  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: "url('https://i.pinimg.com/1200x/ea/a2/6e/eaa26e2c3bfa234c3cdd3c4d9fabad35.jpg')",
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
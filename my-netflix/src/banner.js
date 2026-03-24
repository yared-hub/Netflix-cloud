import React from 'react';
import './banner.css';

function banner() {
  return (
    <header className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">The Movie Title</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
      </div>
    </header>
  );
}

export default banner;
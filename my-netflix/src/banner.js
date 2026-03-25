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
      <h1 className='banner_description'>"When the menace known as the Joker wreaks
         havoc and chaos on the people of Gotham, Batman must accept one of the greatest 
         psychological and physical tests of his ability to fight injustice."</h1>
    </header>
  );
}

export default banner;
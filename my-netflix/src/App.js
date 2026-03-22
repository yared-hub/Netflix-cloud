import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <div className="nav">
  <img 
    className="nav_logo"
    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
    alt="Netflix Logo" 
  />
  <img 
    className="nav_avatar"
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
    alt="User Avatar" 
  />
</div>

      {/* Banner (የፊልም ማስታወቂያ ቦታ) */}
      <div className="banner">
         <h1 className="banner_title">The name of the movie will be placed here.</h1>
         <button className="banner_button">Play</button>
         <button className="banner_button">My List</button>
      </div>
    </div>
  );
}

export default App;
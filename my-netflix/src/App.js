import React from 'react';
import './App.css';
import Banner from './banner';

function App() {
  return (
    <div className="app">
      {/* Nav bar goes here */}
      
      <Banner />
      
      {/* Movie rows will be added here */}
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} /> */}
      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> */}
    </div>
  );
}

export default App;
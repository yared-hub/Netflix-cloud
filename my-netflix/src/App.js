import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './banner';
import Nav from './Nav'; // Navbar ፋይልህ Nav.js ከሆነ
import Footer from './Footer'; // Footer ፋይልህ Footer.js ከሆነ

function App() {
  return (
    <div className="app">
      {/* 1. Navbar ሁሌም ከላይ መሆን አለበት */}
      <Nav /> 

      {/* 2. ትልቁ ምስል (Banner) */}
      <Banner />

      {/* 3. የፊልሞች ዝርዝር (Rows) */}
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true} 
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      {/* 4. Footer ሁሌም ከመጨረሻው Row በታች ይገባል */}
      <Footer />
    </div>
  );
}

export default App;
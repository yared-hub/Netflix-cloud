import React, { useState, useEffect } from "react";
import "./App.css";

import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import Footer from "./Footer";

import requests from "./requests";

import { auth } from "./firebase";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    signOut(auth);
  };

  const filteredMovies = allMovies.filter(
    (movie) =>
      movie?.title?.toLowerCase().includes(search.toLowerCase()) ||
      movie?.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (!user) {
    return (
      <div className="loginScreen">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />

        <div className="loginBody">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>

          <button onClick={signIn}>Sign In With Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Nav search={search} setSearch={setSearch} />

      <Banner />
      {search && (
  <div className="searchResults">
    {filteredMovies.map((movie) => (
      <img
        key={movie.id}
        className="row__poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
      />
    ))}
  </div>
)}

      <div className="profileSection">
        <img className="profilePic" src={user.photoURL} alt="" />
        <button onClick={logout}>Logout</button>
      </div>

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        search={search}
        setAllMovies={setAllMovies}
      />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        search={search}
        setAllMovies={setAllMovies}
      />

      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        search={search}
        setAllMovies={setAllMovies}
      />

      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        search={search}
        setAllMovies={setAllMovies}
      />

      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        search={search}
        setAllMovies={setAllMovies}
      />

      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        search={search}
        setAllMovies={setAllMovies}
      />

      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        search={search}
        setAllMovies={setAllMovies}
      />

      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        search={search}
        setAllMovies={setAllMovies}
      />

      <Footer />
    </div>
  );
}

export default App;
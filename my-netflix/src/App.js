import React, { useState, useEffect } from "react";
import "./App.css";

import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

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

  // LOGIN SCREEN
  if (!user) {
const filteredMovies = allMovies.filter(
  (movie) =>
    movie?.title?.toLowerCase().includes(search.toLowerCase()) ||
    movie?.name?.toLowerCase().includes(search.toLowerCase())
);
    return (

      <div className="loginScreen">

        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />

        <div className="loginBody">

          <h1>
            Unlimited movies, TV shows, and more
          </h1>

          <h2>
            Watch anywhere. Cancel anytime.
          </h2>

          <button onClick={signIn}>
            Sign In With Google
          </button>

        </div>

      </div>

    );
  }

  // HOME SCREEN
  return (

    <div className="app">

      <Nav search={search} setSearch={setSearch} />

      <div className="profileSection">

        <img
          className="profilePic"
          src={user.photoURL}
          alt=""
        />

        <button onClick={logout}>
          Logout
        </button>

      </div>
      <div className="searchBox">



</div>

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        search={search}
      />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
       search={search} 
      />

      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        search={search}
      />

      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        search={search}
      />

      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        search={search}
      />

      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        search={search}
      />

      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        search={search}
      />

      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        search={search}
      />

      <Footer />

    </div>

  );
} 

export default App;
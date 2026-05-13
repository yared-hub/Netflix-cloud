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

      <Nav />

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

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />

      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />

      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />

      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />

      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />

      <Footer />

    </div>

  );
}

export default App;
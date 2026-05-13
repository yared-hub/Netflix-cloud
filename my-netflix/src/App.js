import React, { useState, useEffect } from "react";
import "./App.css";

import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

import { auth, provider } from "./firebase";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

    setUser(currentUser);

  });

  return () => unsubscribe();

}, []);

  // SIGN IN
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);

        setUser(result.user);

        alert("Login Successful");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  // LOGOUT
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert("Logged Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">

      <Nav />

      <div style={{ padding: "20px" }}>

        {!user ? (

          <button onClick={signIn}>
            Sign In With Google
          </button>

        ) : (

          <div>

            <h2>
              Welcome {user.displayName}
            </h2>

            <img
              src={user.photoURL}
              alt="profile"
              width="80"
              style={{ borderRadius: "50%" }}
            />

            <br />
            <br />

            <button onClick={logout}>
              Logout
            </button>

          </div>

        )}

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
import React from "react";
import "./App.css";

import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";

function App() {

  // GOOGLE SIGN IN
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
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
        <button onClick={signIn}>
          Sign In With Google
        </button>

        <button onClick={logout} style={{ marginLeft: "10px" }}>
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
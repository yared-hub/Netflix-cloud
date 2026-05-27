import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import { auth, db } from "./firebase";

import {
  doc,
  setDoc
} from "firebase/firestore";

function Row({ title, fetchUrl, isLargeRow, setAllMovies,allMovies, search, }) {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      setAllMovies((prev) => [
  ...prev,
  ...request.data.results,
]);


      return request;
    }

    fetchData();

  }, [fetchUrl]);


  const handleClick = (movie) => {

    if (trailerUrl) {

      setTrailerUrl("");

    } else {

      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {

          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));

        })
        .catch((error) => console.log(error));
    }
  };

const saveMovie = async (movie) => {
  console.log("button clicked");
  
  const user = auth.currentUser;
  alert(user?.uid);

  if (!user) {
    alert("Please sign in first");
    return;
  }

  try {
    alert("before setDoc");
    await setDoc(
      doc(
        db,
        "users",
        user.uid,
        "favorites",
        movie.id.toString()
      ),
      {
        id: movie.id,
        title: movie.title || movie.name,
        poster: movie.poster_path,
        rating: movie.vote_average,
      }
    );
alert("after setDoc");
    alert("Movie saved ❤️");

  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

//  const filteredMovies = movies.filter((movie) =>
//     movie?.title?.toLowerCase().includes(search.toLowerCase()) ||
//     movie?.name?.toLowerCase().includes(search.toLowerCase())
//   );
const filteredMovies = movies.filter((movie) => {
  const title = (movie.title || "").toLowerCase();
  const name = (movie.name || "").toLowerCase();
  const query = (search || "").toLowerCase();

  return title.includes(query) || name.includes(query);
});
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  

  return (
    <div className="row">

      <h2>{title}</h2>
    

     <div className="row__posters">
  {filteredMovies
    .filter((movie) => movie.poster_path)
    .map((movie) => (
  <div key={movie.id}>

    <img
      onClick={() => handleClick(movie)}
      className={`row__poster ${
        isLargeRow && "row__posterLarge"
      }`}
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title || movie.name}
    />

    <button onClick={() => saveMovie(movie)}>
      ❤️
    </button>

  </div>
))}


      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
    </div>
  );
}

export default Row;
import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow, search }) {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

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

//  const filteredMovies = movies.filter((movie) =>
//     movie?.title?.toLowerCase().includes(search.toLowerCase()) ||
//     movie?.name?.toLowerCase().includes(search.toLowerCase())
//   );
const filteredMovies = movies;
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row-posters">

      <h2>{title}</h2>

      <div className="row">

        {filteredMovies.map((movie) => (

          <img
            key={movie.id}

            onClick={() => handleClick(movie)}

            className={`row_poster ${isLargeRow && "row_posterLarge"}`}

            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}

            alt={movie.name}
        />

        ))}

      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
}

export default Row;
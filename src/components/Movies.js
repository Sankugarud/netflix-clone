import React, { useState, useEffect } from 'react';
import data from './api';
import axios from 'axios';
import './movie.css'; 
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [trailerurl, setTrailerUrl] = useState('');

  const imgUrl = 'https://image.tmdb.org/t/p/original/';

  const handleClick = (movie) => {
    if (trailerurl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title)
        .then((url) => {
          const urlparams = new URL(url);
          setTrailerUrl(urlparams.searchParams.get('v'));
        })
        .catch((error) => {
          alert('Something went wrong. Try again later.');
          console.error(error);
        });
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios.get(data.movie_list);
        setMovies(result.data.results);
      } catch (error) {
        console.error(error);
        alert('Unable to fetch movie data. Please try again later.');
      }
    };

    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="movie">
      <div className="hide">
        {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
      </div>
      <div className="movies">
        {movies.map((movie) => (
          <div className="img" key={movie.id}>
            <img
              onClick={() => handleClick(movie)}
              src={`${imgUrl}${movie.poster_path}`}
              alt="movie_img"
              className="movieimg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

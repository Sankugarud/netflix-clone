import React, { useState, useEffect, useRef } from 'react';
import data from './api';
import axios from 'axios';
import './banner.css';
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [trailerurl, setTrailerUrl] = useState("");
  const [randome3, setrandome3] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderInterval = useRef(null);

  const handleClick = () => {
    if (trailerurl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name).then((url) => {
        const urlparams = new URL(url);
        setTrailerUrl(urlparams.searchParams.get('v'));
      }).catch((e) => {
        alert("Something went wrong. Try again later.");
      });
    }
  }

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
        const result = await axios.get(data.netflix_original);

        const randomIndex = Math.floor(Math.random() * result.data.results.length);
        const randomMovie = result.data.results[randomIndex];
        setMovie(randomMovie);

        const movies = result.data.results;

        // Get 3 random movies
        const randomMovies = [];
        const numRandomMovies = 3;
        for (let i = 0; i < numRandomMovies; i++) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          randomMovies.push(movies[randomIndex]);

          movies.splice(randomIndex, 1);
        }

        setrandome3(randomMovies);
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.netflix_original]);

  useEffect(() => {
    
    sliderInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % randome3.length);
    }, 10000); 

    return () => {
      if (sliderInterval.current) {
        clearInterval(sliderInterval.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randome3]);
console.log(randome3);
  return (
    <div>
      <div className="renderbanner">
        {randome3.length > 0 && randome3.map((item, index) => (
          <div
            className="header"
            key={index}
            style={{
              backgroundSize: "cover",
              backgroundColor: "grey",
              backgroundBlendMode: "multiply",
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${item?.backdrop_path})`,
              display: index === currentIndex ? 'block' : 'none'
            }}
          >
           <div className="banner-contain">
             {item && (
              <>
                <h1>{item?.title || item?.name}</h1>
                <div className="banner_buttons">
                  <button className='btn' onClick={handleClick}>Play</button>
                  <button className='btn'>My List</button>
                </div>
                <p> {item?.overview}</p>
              </>
            )}
          </div>

          </div>
        ))}
      </div>

      {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </div>
  );
};

export default Banner;

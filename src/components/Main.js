import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './main.css'
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const imgUrl = "https://image.tmdb.org/t/p/original/";
const Main = ({ title, apiRequest, original }) => {
  const [state, setState] = useState([]);
  const [trailerurl, setTrailerUrl] = useState("");

  const rowContainerRef = useRef(null); // Ref to access the row container

  const handleClick = (movie) => {
    if (trailerurl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title).then((url) => {
        const urlparams = new URL(url);
        setTrailerUrl(urlparams.searchParams.get('v'));
      }).catch((e) => { alert("Something went wrong. Please try again later.") });
    }
    console.log(movie);
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
        const result = await axios.get(apiRequest);
        setState(result.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [apiRequest]);

  const handleScroll = (direction) => {
    const container = rowContainerRef.current;
    const scrollAmount = 200; 
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
     
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
     
    }
  }

  return (
    <div className="main">
      <div className="title">
        <p> {title} </p>
      </div>
      <div className="single-row">
        <button className="arrow" onClick={() => handleScroll("left")}><FaLessThan /></button>
        <div className="row-data" ref={rowContainerRef}>
          {
            state.map((element) => (
              <img
                onClick={() => handleClick(element)}
                src={`${imgUrl}${original ? element.poster_path : element.backdrop_path}`}
                alt={element.name}
                key={element.id}
                className={original ? "original" : "img-poster"}
              />
            ))
          }
        </div>
        <button className="arrow" onClick={() => handleScroll("right")}><FaGreaterThan /></button>
      </div>
      {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </div>
  )
}

export default Main;

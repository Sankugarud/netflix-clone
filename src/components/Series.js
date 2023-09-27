import React, {useState, useEffect} from 'react'
import data from './api';
import axios from 'axios';
import './movie.css'
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Series = () => {
    const [series, setSeries] = useState([]);
    const [trailerurl, setTrailerUrl] = useState("");

    const imgUrl = "https://image.tmdb.org/t/p/original/";
    const handleClick = (movie) => {
      if(trailerurl){
        setTrailerUrl('');
      }else{
        movieTrailer(movie?.name || movie?.title).then( (url)=>{
          const urlparams = new URL(url);
          setTrailerUrl(urlparams.searchParams.get('v'));
        }).catch((e)=>{alert("something Wrong, Try Sometime later")});
       
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
              const result = await axios.get(data.tv_series);
              
              setSeries(result.data.results);
            } catch (error) {
              console.log(error);
            }
          };
    
        getdata();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [data]);
 
  return (
    <div className='movie'>


      <div className="hide">
        {trailerurl && <YouTube videoId={trailerurl}opts={opts}  />}
      </div>
         <div className="movies">
         {
            series.map( (movie) => (
              <div className="img" key={movie.id}>
                  <img onClick={()=>
                      handleClick(movie)} src={`${imgUrl}${movie.poster_path}`} alt="movie_img"   className="movieimg"/>
              </div>
                
            ))
        }
         </div>
       
       
    </div>
  )
}

export default Series
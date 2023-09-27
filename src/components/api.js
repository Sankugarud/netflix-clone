const api_key = "e4f6f9274a4c7a06117eb111cbb3f8ad";

const data = {
    api : `https://api.themoviedb.org/3/`,
    tv_series: `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US`,
    movie_list:`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`,
    top_rated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    trending : `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`,
    netflix_original : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213&language=en-US`,
    actionmovies:  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28&language=en-US`,
    comedymovie:  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35&language=en-US`,
    horrormovie:  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27&language=en-US`,
    romantic:  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749&language=en-US`,
    documentry:  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99&language=en-US`,
    new_popular: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US`
}

export default data;
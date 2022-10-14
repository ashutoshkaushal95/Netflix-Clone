//Standerd practice store in {process.env.API_KEY}


const API_KEY = "44ccf68509bab56064b82761b05d1910";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`, //working
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`, //working
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, //working
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`, //working
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`, //working
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`, //working
    fetchTvPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`, //working
    LatestTvShows: `/tv/latest?api_key=${API_KEY}&language=en-US`, //working
    // fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`, // not working
    // fetchDocumetaries: `/discover/movie?api_keys=${API_KEY}&with_genre=99`,
    // fetchGenre: `/genre/movie/list?api_key=${API_KEY}&language=en-US`
};

export default requests;
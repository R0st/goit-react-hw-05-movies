
// const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'ac10d1e55c4d2ca36328b9aab1a704b5';

async function fetchWithErrorHanding(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
}

export function fetchSearchMovies() {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`)
}

export function fetchGetMoviesDetails(movieId) {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`)
}

export function fetchGetMoviesCredits(movieId) {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
}

export function fetchGetMoviesRewiews() {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`)
}


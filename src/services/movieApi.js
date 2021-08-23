
// const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'ac10d1e55c4d2ca36328b9aab1a704b5';
export const IMG = 'https://image.tmdb.org/t/p/w300/'

async function fetchWithErrorHanding(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
}

export function fetchSearchMovies(query) {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
}

export function fetchGetMoviesDetails(movieId) {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`)
}

export function fetchGetMoviesCredits(movieId) {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
}

export function fetchGetMoviesRewiews(movieId) {
    return fetchWithErrorHanding(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`)
}


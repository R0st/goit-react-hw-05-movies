import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import PageHeading from "../components/PageHeading/PageHeading";
import * as movieApi from '../services/movieApi';
import { Route } from "react-router-dom";
// import Cast from "./Cast";
// import Reviews from "./Reviews";
import styles from '../components/Navigation/Navigation.module.css'
import { IMG} from '../services/movieApi'
const Cast = lazy(() => import('./Cast'/*webpackChunkName: "cast" */))
const Reviews = lazy(() => import('./Reviews'/*webpackChunkName: "reviews" */))

export default function MovieDetailsView() {
    
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const history = useHistory();
    const location = useLocation();
    // console.log(history)
    // console.log(location);
    
    const searchQuery = new URLSearchParams(location.search).get('query')
    console.log(searchQuery)
    useEffect(() => {
        if (location.searchQuery !== '') {
            return;
        }

    })


    useEffect(() => {
        movieApi.fetchGetMoviesDetails(movieId).then(setMovie);
    }, [movieId])
    
    return (
        <>
            {/* <PageHeading text={`Movie ${movieId}`} /> */}
            <PageHeading text={`Movie ${movieId}`} />
            {movie && ( 
                <>
                    <img src={IMG+movie.poster_path} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>Release date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <p>Overview: {movie.overview}</p>
                </>
            )}
            <hr />

            {/* <NavLink to="/movies/:movieId/:cast">Cast</NavLink> */}
            <Suspense fallback={<h2>LOADING...</h2>}>
                <NavLink
                    to={{
                        pathname: `/movies/${movieId}/cast`,
                        state: '/'
                    }} > Cast
                </NavLink>

                <Route
                    path="/movies/:movieId/:cast"
                    className={styles.link}
                    activeClassName={styles.activeLink}>
                    {movie && <Cast movieId={movieId} />}
                </Route>

                <NavLink
                    to={{
                        pathname: `/movies/${movieId}/reviews`,
                        state: '/'
                    }} > Reviews
                </NavLink>
                
                <Route
                    // path="/movies/:movieId/:reviews"
                    path={`/movies/${movieId}/reviews`}
                    className={styles.link}
                    activeClassName={styles.activeLink}>
                    {movie &&
                        <Reviews movieId={movieId} />}
                </Route>
            </Suspense>
             
        </>
    )
}


// import { useHistory, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// const KEY = 'ac10d1e55c4d2ca36328b9aab1a704b5';

// export default function MovieDetailsView({ match: { params } }) {
//     const [data, setData] = useState('');
//     const { movieId } = params;
//     const { state } = useLocation();
//     const history = useHistory();

//     // console.log(qs.parse(search));

//     const handleGoBack = () => {
//         history.push({
//             pathname: state?.backUrl || '/movies',
//             search: `query=${state.value}`,

//         })
//     }

//     useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`)
//             .then(res => res.json())
//             .then((response)=>setData(response))
//     }, [])

//     return (
//         <div>
//             <h1>MovieDetails</h1>
//             <h2>{data.movieId}</h2>
//             <p>{data.overview}</p>
//             <button onClick={handleGoBack}>Back</button>
//         </div>
//     )
// }
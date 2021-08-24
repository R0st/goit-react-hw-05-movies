import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, Switch, useParams, useHistory, useLocation, useRouteMatch, Route} from "react-router-dom";
// import PageHeading from "../components/PageHeading/PageHeading";
import { fetchGetMoviesDetails, IMG } from '../services/movieApi';
// import Cast from "./Cast";
// import Reviews from "./Reviews";
import styles from '../components/Navigation/Navigation.module.css'
const Cast = lazy(() => import('./Cast.js'/*webpackChunkName: "cast" */))
const Reviews = lazy(() => import('./Reviews.js'/*webpackChunkName: "reviews" */))

export default function MovieDetailsView() {
    
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const history = useHistory();
    const location = useLocation();
    const { url, path } = useRouteMatch();
    // console.log(history)
    // console.log('location:' , location);
    
    useEffect(() => {
        fetchGetMoviesDetails(movieId).then(setMovie);
    }, [movieId])
    
    const onGoBack = () => {
        history.push(location?.state?.from ?? '/movies' );
    }

    return (
        <>
            <button type="button" onClick={onGoBack} className={styles.Button}>Go Back</button>
            {/* <PageHeading text={`Movie ${movieId}`} /> */}
            {/* <PageHeading text={`Movie ${movieId}`} /> */}

            <div className="DetailsMovie">
                {movie && ( 
                <>
                   <img
                        src={IMG + movie.poster_path}
                        alt={movie.title}
                        className={ styles.imgMovie}
                        />
                        
                        <div className="DescMovie">
                            <h2>{movie.title}</h2>
                            <p>Release date: {movie.release_date}</p>
                            <p>Rating: {movie.vote_average}</p>
                            <p>Overview: {movie.overview}</p>
                        </div>
                </>
            )}
            </div>
            <hr />
            
                <NavLink
                    to={{
                        pathname: `${url}/cast`,
                        state: { from: location?.state?.from }
                        // pathname: `/movies/${movieId}/cast`,
                        // state: '/'
                    }}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                > Cast
                </NavLink>
                <br/>  
                <NavLink 
                    to={{
                        pathname: `${url}/reviews`,
                        state: { from: location?.state?.from }
                        // pathname: `/movies/${movieId}/reviews`,
                        // state: '/'
                    }}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                    > Reviews
                </NavLink>
            
            <Suspense fallback={<h2>LOADING...</h2>}>
                <Switch>
                    <Route path={`${path}/cast`}>
                        <Cast movieId={movieId} />
                    </Route>

                    <Route path={`${path}/reviews`}>
                        <Reviews movieId={movieId} />
                    </Route>
                </Switch>
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
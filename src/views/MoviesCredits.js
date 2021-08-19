// import { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";
// // import { useParams } from "react-router-dom";
// import { NavLink, useRouteMatch } from "react-router-dom";
// import PageHeading from "../components/PageHeading/PageHeading";
// import * as movieApi from '../services/movieApi'


// export default function MoviesCredits(movieId) {
//     const [credits, setCredits] = useState('');
//     const {url} = useRouteMatch();
//     console.log({url})

//     useEffect(() => {
//         movieApi.fetchGetMoviesCredits(movieId).then(setCredits);
//     }, [movieId])

//     return (
//         <>
//             <PageHeading text="Cast" />
//             {credits && (
//                 <NavLink to={`${url}`}>
//                     <p>Cast: { credits.cast}</p>
//                 </NavLink>
//             )}
//         </>
//     )
// }

// import { useParams } from "react-router-dom";

// // import MoviesCredits from "./MoviesCredits";
// // import { Link } from 'react-router-dom';

// export default function MoviesCredits({ movies }) {
//     const { movieId } = useParams();
//     const movie = movies.find(movie => movie.id === Number(movieId));
    
//     return (
//         <>
//             MoviesCredits 
//         </>
//     )
// }
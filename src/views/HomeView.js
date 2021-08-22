import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PageHeading from "../components/PageHeading/PageHeading";
import * as movieApi from '../services/movieApi'


export default function HomeView() {
    const [movies, setMovies] = useState(null);
    const {url} = useRouteMatch();  //свойство с useRouteMatch для вложенной навигации
    

    useEffect(() => {
        movieApi.fetchTrendingMovies().then(setMovies);
    }, []);

    return (
        <>
            <PageHeading text='Trending' />
            
            {movies && (
                <ul>
                    {movies.results.map(movie =>(
                        <li key={movie.id}>
                            <Link to={{
                                pathname: `${url}movies/${movie.id}`,
                                state: { from: '/' },
                            }}>
                                <h2>{movie.title}</h2>
                            </Link>
                            {/* <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link> */}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

// import { useEffect, useState } from "react";
// import { Link, useLocation, useHistory } from "react-router-dom";
// import qs from 'query-string';

// // import * as movieApi from '../services/movieApi'
// // import PageHeading from "../components/PageHeading/PageHeading";
// const KEY = 'ac10d1e55c4d2ca36328b9aab1a704b5';

// export default function TrendingMovies() {
//     const [movies, setMovies] = useState([]);
//     const { pathname, search } = useLocation();
//     const [value, setValue] = useState(qs.parse(search)?.query || '');
//     const history = useHistory();

//     // console.log(qs.parse(search));

//     const handleChangeInput = (e) => {
//         setValue(e.target.value);
//         history.push({
//             pathname,
//             search: `?query=${e.target.value}`,
//     });
//     }

//     useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
//             .then((res) => res.json())
//             .then(({ results }) => {
//                 console.log(results);
//                 setMovies(results);
//             })
//     }, [])

//     return (
       
//         <div>
//             <h1>Movies</h1>
//             <input type="text" onChange={handleChangeInput} value={value} />

//             <ul>
//                 {movies.map(({ id, title }) => (
//                     <li key={id}>
//                         <Link to={{
//                             pathname: `${pathname}/${id}`,
//                             state: {
//                                 backUrl: pathname,
//                                 value,
//                             }
//                         }}>{title}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
            
//     );
// }



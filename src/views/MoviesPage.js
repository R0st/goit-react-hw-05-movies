import { useState, useEffect } from 'react';
import { fetchSearchMovies, IMG } from '../services/movieApi';
import { useRouteMatch, useLocation, useHistory, Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import defaultAvatar from './defaultAvatar.png';
// import styles from './MoviesView.module.css';
import '../style.css'

export default function MoviesView() {
    const [, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const location = useLocation();
    const history = useHistory();
     const { url } = useRouteMatch();
    const query = new URLSearchParams(location.search).get('query') ?? '';

    
    useEffect(() => {
        if (!query) {
            return;
        }
        fetchSearchMovies(query).then(request => {
            setMovies(request.results);
        });
        // fetchSearchMovies(query).then(setMovies);
        }, [query])
    
    const onChangeQuery = query => {
        setMovies([]);
        setQuery(query);
        history.push({...location, search: `query=${query}`,
        });
      };       
    
    return (
        <>
            <SearchBar onSubmit={onChangeQuery} />
            
            {/* {movies && <MoviesGallery movies={movies} />} */}
            {movies &&
                <ul className="MoviesGallery">
                    {movies.map(movie => (
                        <li key={movie.id} >
                
                    <Link to={{
                        pathname: `${url}/${movie.id}`,
                        state: {from: location},
                            }}>
                                {movie.poster_path
                                    ? <img
                                        src={IMG + movie.poster_path}
                                        alt={movie.title}
                                        width={300}
                                    />
                                    : <img src={defaultAvatar} alt={movie.title} width={300}/>
                                }
                                        {/* // {actor.profile_path ? <img src={`${IMG}${actor.profile_path}`} alt={actor.name} /> : */}
                                        {/* //     <img src={defaultAvatar} alt={actor.name} />}
                                        // src={IMG + movie.poster_path}
                                        // alt={movie.title}
                                        // width={300} />} */}
                        <p>{movie.title}</p>
                </Link>
            </li>
            ))}
        </ul>}
        </>
        
    )
}

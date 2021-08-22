import { useState, useEffect } from "react";
import * as movieApi from '../services/movieApi';


export default function Reviews(movieId) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        movieApi.fetchGetMoviesRewiews(movieId).then(setMovie);
    }, [movieId])

    return (
        <>
            {/* <h2>{movie.title}</h2> */}
            
            <ul>
                    {movie.map(review =>(
                        <li key={review.id}>
                            <img src={review.profile_path} alt={review.name} />
                        </li>
                    ))}
                </ul>
            </>
    )
}
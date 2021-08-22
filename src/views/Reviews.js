import { useState, useEffect } from "react";
import * as movieApi from '../services/movieApi';

export default function Reviews({ movieId }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {movieApi.fetchGetMoviesRewiews(movieId).then(data => setMovie(data.results))
        
    }, [movieId])
 
    return (
        <>
            {/* <h2>{movie.title}</h2> */}
            {movie.length > 0 
                ? (
                    <ul>
                        {movie.map(review => 
                            // return console.log(review);
                            (<li key={review.id}>
                                <p>{ review.author}</p>
                                <p>{ review.content}</p>
                            </li>
                        ))}
                    </ul>)
                : (<h3>We don't have any reviews for this movie</h3>)}
            {/* {movie.length > 0 && 
                <ul>
                        {movie.map(review => 
                            (<li key={review.id}>
                                <p>{ review.author}</p>
                                <p>{ review.content}</p>
                            </li>)
                        )}
                </ul>}
            <h3>We don't have any reviews for this movie</h3> */}
        </>
    )
}


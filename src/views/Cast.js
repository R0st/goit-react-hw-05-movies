import { useState, useEffect } from "react";
// import PageHeading from "../components/PageHeading/PageHeading";
import { fetchGetMoviesCredits, IMG } from '../services/movieApi';
import defaultAvatar from './defaultAvatar.png';

export default function Cast({ movieId }) {
    const [credits, setCredits] = useState(null);

    useEffect(() => {
        fetchGetMoviesCredits(movieId).then(data => {
            setCredits(data)})
    }, [movieId])

    return (
        <>
        <ul>
        {credits && credits.cast && credits.cast.map((actor, idx) => 
            (<li key={idx} className={actor}>
            {actor.profile_path ? <img  src={`${IMG}${actor.profile_path}`} alt={actor.name} /> :
                <img  src={defaultAvatar} alt={actor.name} />}
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
             </li>)
            )}
        </ul>
        </>
    )
}
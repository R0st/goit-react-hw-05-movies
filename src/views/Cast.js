import { useState, useEffect } from "react";
import PageHeading from "../components/PageHeading/PageHeading";
import { fetchGetMoviesCredits, IMG } from '../services/movieApi';

export default function Cast({ movieId }) {
    const [credits, setCredits] = useState(null);

    useEffect(() => {
        fetchGetMoviesCredits(movieId).then(setCredits);
    }, [movieId])

    return (
        <>
            <PageHeading text="Cast" />
            {credits && (
               <ul>
                {credits.map(cast => (
                    <li key={cast.id}>
                        {/* <img src={IMG + cast.profile_path} alt={cast.name} /> */}
                        <img src={`${IMG}${cast.profile_path}`} alt={cast.name} />
                        <p>{ cast.name}</p>
                    </li>
                    ))
                }
                </ul> 
                )
            }
        </>
    )
}
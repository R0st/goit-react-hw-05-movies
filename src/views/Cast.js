import { useState, useEffect } from "react";
// import * as movieApi from '../services/movieApi';
import PageHeading from "../components/PageHeading/PageHeading";
// import { IMG } from '../services/movieApi';
import { fetchGetMoviesCredits, IMG } from '../services/movieApi';

export default function Cast(movieId) {
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
                        <img src={IMG + cast.profile_path} alt={cast.name} />
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

// import { useParams } from "react-router-dom";
// // import { Link } from 'react-router-dom';

// export default function Cast({ movie }) {
//     const { movieId } = useParams();
//     const cast = movie.find(movie => movie.id === movieId);

//     return <>Cast {movieId} </>
// }
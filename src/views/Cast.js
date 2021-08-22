import { useState, useEffect } from "react";
import * as movieApi from '../services/movieApi';
import PageHeading from "../components/PageHeading/PageHeading";

export default function Cast(movieId) {
    const [credits, setCredits] = useState('');

    useEffect(() => {
        movieApi.fetchGetMoviesCredits(movieId).then(setCredits);
    }, [movieId])

    return (
        <>
            <PageHeading text="Cast" />
            {credits && (
               <ul>
                {credits.map(cast => (
                    <li key={cast.id}>
                        <img src={cast.profile_path} alt={cast.name} />
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


// export default function Cast({ movies }) {
//     const { movieId } = useParams();
//     const movie = movies.find(movie => movie.id === Number(movieId));
    
//     return (
//         <>
//             Cast 
//         </>
//     )
// }
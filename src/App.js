import { Switch, Route } from 'react-router-dom';
import AppBar from "./components/AppBar/AppBar";
import Container from './components/Container'

import HomeView from './views/HomeView'
import NotFoundView from './views/NotFoundView';
import MovieDetailsView from './views/MovieDetailsView';
// import MoviesCredits from './views/MoviesCredits'


export default function App() {
    return (
        <Container>
            <AppBar />
            
            <Switch>
                <Route path="/" exact>
                    <HomeView />
                </Route>
               
                <Route path="/movies" exact>
                    <MovieDetailsView />
                </Route>

                <Route path="/movies/:movieId"> 
                    <MovieDetailsView />
                </Route>
                
                <Route>
                    <NotFoundView />
                </Route>
            </Switch>
        </Container>
    )
}
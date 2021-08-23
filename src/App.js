import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from "./components/AppBar/AppBar";
import Container from './components/Container'
// import HomeView from './views/HomeView'
// import NotFoundView from './views/NotFoundView';
// import MovieDetailsView from './views/MovieDetailsView';
// import Cast from './views/Cast'
const HomeView = lazy(() => import('./views/HomeView.js'
/*webpackChunkName: "home-view" */))
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView.js'
/*webpackChunkName: "movie-details-view" */))
const NotFoundView = lazy(() => import('./views/NotFoundView.js'
/*webpackChunkName: "not-found-view" */))
const MoviesPage = lazy(() => import('./views/MoviesPage.js'
/*webpackChunkName: "movies-page" */))

export default function App() {
    return (
        <Container>
            <AppBar />
            
            <Suspense fallback={<h2>LOADING...</h2>}>
                <Switch>
                    <Route path="/" exact>
                        <HomeView />
                    </Route>
                
                    <Route path="/movies" exact>
                        <MoviesPage />
                    </Route>

                    <Route path="/movies/:movieId" > 
                        <MovieDetailsView />
                    </Route>
                    
                    <Route>
                        <NotFoundView />
                    </Route>
                </Switch>
           </Suspense>
        </Container>
    )
}
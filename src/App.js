import React from 'react';
import './App.css';
import Banner from './components/banner/banner';
import Navbar from './components/navBar/navbar';
import FaveMovieListProvider from './context/movieListContext';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
} from 'react-router-dom';
import FaveItemsPage from './pages/faveItemsPage/FaveItemsPage';
import LandingPage from './pages/LandingPage/landingPage';
function App() {
	return (
		<>
			<Router>
				<Switch>
					<FaveMovieListProvider>
						<Route path="/favorites" exact component={FaveItemsPage} />
						<Route path="/" exact>
							<Navbar />
							<Banner />
							<LandingPage />
						</Route>
					</FaveMovieListProvider>
					<Route path="/movie/:id" exact>
						<MovieView />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;

const MovieView = () => {
	const { banner } = useParams();
	console.log('params', banner);
	return <div className="text-red-500 text-3xl">hi</div>;
};

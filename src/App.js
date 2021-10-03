import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import ResultArea from './components/ResultArea';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
	const [movies, setMovies] = useState([]);
	const [searchInput, setSearchInput] = useState('spider');
	const [genre, setGenre] = useState('');

	const API_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`;
	const API_GENRE = `https://api.themoviedb.org/3/discover/movie?api_key=22701a046650518975b9defab51561ae&with_genres=${genre}`;

	const handleSearch = (input) => {
		setSearchInput(input);
	};

	const displaySearchResults = () => {
		fetch(API_SEARCH_URL)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		handleGenreSelect(genre);
	}, [genre]);

	const handleGenreSelect = (genreID) => {
		setGenre(genreID);

		fetch(API_GENRE)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			})
			.catch((err) => {
				console.log(err);
			});

		// const displayCategory = (genreID) => {
		// 	const API_GENRE = `https://api.themoviedb.org/3/discover/movie?api_key=22701a046650518975b9defab51561ae&with_genres=${genre}`;

		// 	fetch(API_GENRE)
		// 		.then((res) => res.json())
		// 		.then((data) => {
		// 			setMovies(data.results);
		// 		})
		// 		.catch((err) => {
		// 			console.log(err);
		// 		});
		// };
	};

	// handleGenreSelect={handleGenreSelect}
	// displayCategory={displayCategory}

	return (
		<div className="app">
			<Header handleGenreSelect={handleGenreSelect} />
			<SearchBar
				displaySearchResults={displaySearchResults}
				handleSearch={handleSearch}
			/>
			<div className="content-area">
				<ResultArea>
					{movies.map((movie) => {
						return <Result key={movie.id} {...movie} />;
					})}
				</ResultArea>
			</div>
		</div>
	);
}

export default App;

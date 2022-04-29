import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ResultArea from './components/ResultArea';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
	const [movies, setMovies] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [genreID, setGenreID] = useState('');
	const [genreTitle, setGenreTitle] = useState('');

	const API_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`;
	const API_GENRE = `https://api.themoviedb.org/3/discover/movie?api_key=22701a046650518975b9defab51561ae&with_genres=${genreID}`;

	const handleSearch = (input) => {
		setSearchInput(input);
	};

	useEffect(() => {
		handleGenreSelect(genreID, genreTitle);
	}, []);

	const displaySearchResults = async () => {
		if (searchInput) {
			try {
				const res = await axios.get(API_SEARCH_URL);
				setMovies(res.data.results);
			} catch (err) {
				console.error(err);
			}
		}
	};

	const handleGenreSelect = async (genreID, genreTitle) => {
		setGenreID(genreID);
		setGenreTitle(genreTitle);

		try {
			const res = await axios.get(API_GENRE);
			setMovies(res.data.results);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="app">
			<Header handleGenreSelect={handleGenreSelect} />

			<div className="content-area">
				<ResultArea
					currentGenre={genreTitle}
					displaySearchResults={displaySearchResults}
					handleSearch={handleSearch}
				>
					{movies.map((movie) => {
						return <Result key={movie.id} {...movie} />;
					})}
				</ResultArea>
			</div>
		</div>
	);
}

export default App;

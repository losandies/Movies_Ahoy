import React from 'react';
import SearchBar from './SearchBar';
import './ResultArea.css';

const ResultArea = ({
	currentGenre,
	displaySearchResults,
	handleSearch,
	...props
}) => {
	return (
		<div className="result-area">
			<div className="result-header">
				<div className="genre-name">{currentGenre}</div>
				<div>
					<SearchBar
						className="search-bar"
						displaySearchResults={displaySearchResults}
						handleSearch={handleSearch}
					/>
				</div>
			</div>
			<div className="results">{props.children}</div>
		</div>
	);
};

export default ResultArea;

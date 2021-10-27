import React from 'react';
import SearchBar from './SearchBar';
import './ResultArea.css';

const ResultArea = ({ currentGenre, ...props }) => {
	return (
		<div className="result-area">
			<div className="result-header">
				<div className="genre-name">{currentGenre}</div>
				<div>
					<SearchBar
						className="search-bar"
						displaySearchResults={props.displaySearchResults}
						handleSearch={props.handleSearch}
					/>
				</div>
			</div>
			<div className="results">{props.children}</div>
		</div>
	);
};

export default ResultArea;

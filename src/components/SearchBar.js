import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearch, displaySearchResults }) => {
	return (
		<div className="search-area">
			<input
				type="text"
				className="search-bar"
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<button onClick={displaySearchResults}>Search</button>
		</div>
	);
};

export default SearchBar;

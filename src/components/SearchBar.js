import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ handleSearch, displaySearchResults }) => {
	return (
		<form
			className="search-container"
			onSubmit={(e) => {
				e.preventDefault();
				displaySearchResults();
			}}
		>
			<input
				type="search"
				className="search-bar"
				placeholder="Search Movies"
				onChange={(e) => handleSearch(e.target.value)}
			/>

			<SearchIcon
				className="search-icon"
				color="disabled"
				onClick={displaySearchResults}
			/>
		</form>
	);
};

export default SearchBar;

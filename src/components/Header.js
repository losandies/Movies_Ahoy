import React from 'react';
import './Header.css';

const Header = ({ handleGenreSelect }) => {
	return (
		<div className="header">
			<ul className="categories">
				<li
					className="genre"
					value={28}
					onClick={(e) => handleGenreSelect(e.target.value)}
				>
					Action/Adventure
				</li>
				<li
					className="genre"
					value={35}
					onClick={(e) => handleGenreSelect(e.target.value)}
				>
					Comedy
				</li>
				<li
					className="genre"
					value={18}
					onClick={(e) => handleGenreSelect(e.target.value)}
				>
					Drama
				</li>
				<li
					className="genre"
					value={53}
					onClick={(e) => handleGenreSelect(e.target.value)}
				>
					Thriller
				</li>
				<li
					className="genre"
					value={27}
					onClick={(e) => handleGenreSelect(e.target.value)}
					handleGenreSelect
				>
					Horror
				</li>
				{/* <li className="genre">More...</li> */}
			</ul>
		</div>
	);
};

export default Header;

import React from 'react';
import './Result.css';

const API_IMAGE = 'https://image.tmdb.org/t/p/w500/';

const Result = ({ title, poster_path, vote_average, overview, id }) => {
	if (poster_path) {
		return (
			<div>
				<div className="movie-card">
					<img
						className="thumbnail"
						src={API_IMAGE + poster_path}
						alt={title}
					/>
					<h5 className="result-title">{title}</h5>
				</div>
			</div>
		);
	}

	return (
		<div className="no-photo-div">
			<div className="movie-card">
				<img
					className="no-image"
					src="https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg"
					alt={title}
				/>
				<h3 className="result-title">{title}</h3>
			</div>
		</div>
	);
};

export default Result;

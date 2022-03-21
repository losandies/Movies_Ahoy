import React from 'react';
import './Modal.css';

const Modal = ({ title, poster_path, vote_average, overview, id }) => {
	return (
		<div className="movie-modal">
			<h2>{title}</h2>
		</div>
	);
};

export default Modal;

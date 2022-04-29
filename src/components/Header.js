import React from 'react';
import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const categoryData = [
	{
		title: 'Action/Adventure',
		id: 28,
	},
	{
		title: 'Comedy',
		id: 35,
	},
	{
		title: 'Drama',
		id: 18,
	},
	{
		title: 'Thriller',
		id: 53,
	},
	{
		title: 'Horror',
		id: 27,
	},
];

const Header = ({ handleGenreSelect }) => {
	return (
		<div className="navbar">
			<Navbar variant="dark" bg="transparent" expand="lg" className="navbar">
				<Container fluid>
					<Navbar.Brand href="#home">MOVIES A'HOY</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbar-dark-example" />
					<Navbar.Collapse id="navbar-dark-example">
						<Nav>
							<NavDropdown
								id="nav-dropdown-dark-example"
								title="Genres"
								menuVariant="dark"
							>
								{categoryData.map(({ title, id }) => (
									<NavDropdown.Item
										onClick={() => handleGenreSelect(id, title)}
										key={id}
									>
										{title}
									</NavDropdown.Item>
								))}
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;

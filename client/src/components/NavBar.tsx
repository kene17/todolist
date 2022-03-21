import React from 'react';

import './NavBar.css';

const NavBar = () => {
	return (
		<header className="header">
			<div className="header__logo">Todo list</div>
			<nav className="header__nav">
				<ul>
					<li>
						{' '}
						<a href="#">All Quotes</a>{' '}
					</li>
					<li>
						{' '}
						<a href="#">New Quote</a>{' '}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;

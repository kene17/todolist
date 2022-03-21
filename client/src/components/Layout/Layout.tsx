import React from 'react';

import NavBar from '../NavBar';
import './Layout.css';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<NavBar />
			<main className="main">{children}</main>
		</>
	);
};

export default Layout;

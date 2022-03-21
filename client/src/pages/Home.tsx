import React from 'react';
import NavBar from '../components/NavBar';
import TodoList from '../components/TodoList';
import Layout from '../components/Layout/Layout';

const Home = () => {
	return (
		<div>
			<Layout>
				<TodoList />
			</Layout>
		</div>
	);
};

export default Home;

import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

type todo = {
	id: number;
	person: string;
	text: string;
};

const DUMMY_TODO: todo[] = [
	{ id: 1, person: 'Max', text: 'Learn more about django' },
	{ id: 2, person: 'Max', text: 'Learn more about django' },
];

const TodoList = () => {
	return (
		<ul className="todolist">
			{DUMMY_TODO.map((item) => (
				<TodoItem key={item.id} person={item.person} text={item.text} />
			))}
		</ul>
	);
};

export default TodoList;

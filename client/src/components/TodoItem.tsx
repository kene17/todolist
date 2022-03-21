import React from 'react';

import './TodoItem.css';

interface TodoItemProps {
	person: string;
	text: string;
}

const TodoItem = ({ person, text }: TodoItemProps) => {
	return (
		<li className="todo-item">
			<figure>
				<blockquote>
					<p>{text}</p>
				</blockquote>
				<figcaption>{person}</figcaption>
			</figure>
			<button className="todo-item__button">Delete</button>
			{/* <p className="todo-item__title">{person}</p>
			<div className="todo-item__text">{text}</div> */}
		</li>
	);
};

export default TodoItem;

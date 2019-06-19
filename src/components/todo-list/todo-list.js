import React from 'react';

import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ( { todos, onToggleImportant, onToggleDone, deleteItem } ) => {
	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<li key={id} className="list-group-item">
				<ToDoListItem { ...itemProps }
					// label={ item.label }
					// important={ item.important }
					onToggleImportant={ ()=>onToggleImportant(id) }
					onToggleDone={ ()=>onToggleDone(id) }
					deleteItem={()=>deleteItem(id)}
				/>
			</li>
		);
	});

 	return (
		<ul className="list-group todo-list">
			{ elements }
		</ul>
 		);
}

export default ToDoList;
import React, { Component } from 'react';

import './todo-list-item.css';

class ToDoListItem extends Component {
	constructor() {
		super();
	}
	
	render() {
		const { label,
				onToggleImportant,
				onToggleDone,
				done, important,
				deleteItem } = this.props;
		
		let className = 'todo-list-item';
		if(done) {
			className += ' done';
		}

		if(important) {
			className += ' important';
		}

		return (
	 		<span className={ className } >
				<span
					className="todo-list-item-label"
					onClick={ onToggleDone } >
					{ label }
				</span>
				<button type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick={ deleteItem } >
					<i className="fa fa-trash-o"></i>
				</button>
				<button type="button"
					className="btn btn-outline-success btn-sm float-right"
					onClick={ onToggleImportant } >
					<i className="fa fa-exclamation"></i>
				</button>
			</span>		
	 		);
	}
 	
}

export default ToDoListItem;
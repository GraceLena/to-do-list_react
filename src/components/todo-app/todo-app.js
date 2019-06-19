import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ToDoList from '../todo-list';
import ItemAddForm  from '../item-add-form';

class ToDoApp extends Component {
	constructor() {
		super();

		this.maxId = 100;

		this.createTodoItem = (label) => {
			return {
				id: this.maxId++,
				label,
				important: false,
				done: false
			}
		}

		this.state = { todoData: [
			this.createTodoItem('drink coffee'),
			this.createTodoItem('learn react'),
			this.createTodoItem('make react app')
			],
			term: '',
			filter: 'all'
		};

		this.deleteItem = (id) => {
			this.setState(({ todoData }) => {
				const idx = todoData.findIndex((el) => el.id === id);
				const newArr = [
					...todoData.slice(0, idx),
					...todoData.slice(idx + 1)
				];
				return {
					todoData: newArr
				};
			});
		}

		this.addItem = (text) => {
			const newItem = this.createTodoItem(text);
			this.setState(({ todoData }) => {
				const newArr = [
					...todoData,
					newItem
				]
				return {
					todoData: newArr
				}
			});
		}

		this.toggleProperty = (arr, id, propName) => {
			const idx = arr.findIndex((el) => el.id === id);
			const oldItem = arr[idx];
			const newItem = {...oldItem, [propName]: !oldItem[propName]}
				
			return [
				...arr.slice(0, idx),
				newItem,
				...arr.slice(idx + 1)
			]
		}

		this.onToggleImportant = (id) => {
			this.setState(({ todoData }) => {
				return {
					todoData: this.toggleProperty(todoData, id, 'important')
				}
			});
		}
		
		this.onToggleDone = (id) => {
			this.setState(({ todoData }) => {
				return {
					todoData: this.toggleProperty(todoData, id, 'done')
				}
			});
		};

		this.onSearchChange = (term) => {
			this.setState({ term });
		};

		this.onFilterChange = (filter) => {
			this.setState({ filter });
		};

		this.search = (items, term) => {
			if(term.length === 0) {
				return items;
			}
			return items.filter((item) => {
				return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
			});
		}

		this.filter = (items, filter) => {
			switch(filter) {
				case 'all':
					return items;
				case 'active':
					return items.filter((item) => !item.done);
				case 'done':
					return items.filter((item) => item.done);
				default:
					return items;
			};
		};
	}

	render() {
		const { todoData, term, filter } = this.state;

		const visibleItems = this.filter(this.search(todoData, term), filter);
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
	 		<div className="todo-app container">
	 			<AppHeader toDo={ todoCount } done={ doneCount } />
	 			<div className="top-panel d-flex">
		 			<SearchPanel
		 				onSearchChange={ this.onSearchChange } />
		 			<ItemStatusFilter
		 				filter={ filter }
		 				onFilterChange={ this.onFilterChange } />
	 			</div>	 			
	 			<ToDoList
	 				todos={ visibleItems }
		 			onToggleImportant = { this.onToggleImportant }
		 			onToggleDone = { this.onToggleDone }
	 				deleteItem={ this.deleteItem } />
	 			<ItemAddForm addItem={ this.addItem } />
	 		</div>
	 		);
	} 	
}

export default ToDoApp;
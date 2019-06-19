import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
	constructor() {
		super();

		this.state = {
			term: ''
		};

		this.onSearchChange = (event) => {
			const term = event.target.value;
			this.setState({ term });
			this.props.onSearchChange(term);
		};
	}

	render() {
		const searchText = 'Type here to search';
		return (
 			<input type="text"
 				className="form-control search-input"
 				placeholder={ searchText }
 				value={ this.state.term }
 				onChange={ this.onSearchChange } /> 
 		);
	}
}

export default SearchPanel;
import React, { Component } from 'react';

export default class App extends Component {

	state = { data: [] };

	componentDidMount() {
		fetch("http://api.open-notify.org/astros.json")
		.then(response => response.json())
		.then(object => {
			this.setState({
				data: object.people
			});
		});
	}
	render() {
		const elements = [];

		for (let i = 0; i < this.state.data.length; i++) {
			elements.push(<p key={i} >{this.state.data[i].name}</p>)
		}

		return(
			<div>
				<h3>People in space:</h3>
				{elements}
			</div>
		);
	}
}

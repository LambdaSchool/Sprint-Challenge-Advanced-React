import React from 'react';

export default class Player extends React.Component {
	render() {
		const { player } = this.props;
		return (
			<div className="player">
				<h2>Player{player.id}</h2>
				<p>Name: {player.name}</p>
				<p>Country: {player.country}</p>
				<p>Searched {player.searches}</p>
			</div>
		);
	}
}
import React from 'react';
import PlayerCard from './Player.card'

export const Players = props => (
    <div className='player-cards'>
        {props.players.map(players => (
            <PlayerCard key={players.id} players={players} />
        ))}
    </div>
);

export default Players;
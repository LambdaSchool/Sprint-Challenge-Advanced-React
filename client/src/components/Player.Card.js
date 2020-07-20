  
import React from 'react';

function PlayerCard(props) {
    console.log(props.players)
    return (
        <div className='player'>
            <h1 className='name info'>{props.players.name}</h1>
            <h2 className='country info'>{props.players.country}</h2>
            <h2 className='searches info'>{props.players.searches}</h2>
        </div>
    )
}

export default PlayerCard
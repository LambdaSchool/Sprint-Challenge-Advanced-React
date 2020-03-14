import React from 'react';

    const Player = (props) => {
        return (
        <div>
            <p data-testid="player-display" className="player-info">{props.name} : {props.country}</p>
        </div>
    )
}

export default Player;
import React from "react";
import Player from "./Player";

class PlayerList extends React.Component{
    render(props){
        return(
            <div className = "playerList">
                {this.props.data.map(player =>{
                    return(
                        <Player 
                            key={player.name}
                            name={player.name}
                            country={player.country}
                        />
                    );
                })}
            </div>
        );
    }
}

export default PlayerList;
import React from "react";
import '.././App.css';

class Player extends React.Component{
    render(props){
        return(
            <div className = "player">
                <h3>{this.props.name}</h3>
                <h4>{this.props.country}</h4>
            </div>
        );
    }
}

export default Player;
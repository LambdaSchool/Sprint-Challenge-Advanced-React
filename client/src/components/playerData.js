import React from "react";
import "./playerData.css";


class PlayerData extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then((res) => res.json())
      .then((players) => {
        console.log(players);
        this.setState({ players: players });
      })
      .catch((err) => console.error(err));
  }
  
  render() {
    const { players } = this.state;
    
    return (
      <div      >
        <h1>Soccer Players</h1> 
        {players.map((player) => (
          <div className="profile">
            <h2>ID: {player.id}</h2>
            <h2>Player: {player.name}</h2>
            <h2>Country {player.country}</h2>
            <h2>Searches {player.searches}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default PlayerData;

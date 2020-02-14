import React from 'react';
import { Component } from React;
import axios from 'axios';
import PlayerCard from './component/PlayerCard';
import Nav from './components/Nav';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state ={
      players:[]
    };
  }

  componentDidMount() {
    axios.get('   ')
    .then(res => {
      console.log('players', res.data);
      this.setState({players: res.data})
    })
    .catch(err => {
      console.log("There is an error", err)
    })

  }
  render () {
    return (
      <div className="container">
        <Nav />
        {this.state.players.map(player => (
          <PlayerCard
          key={player.id}
          name={player.name}
          rank={player.rank}
          team={player.team}
          />
        ))
        };
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';

const API = 'http://localhost:5000/api/players';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  componentDidMount() {
    Axios.get(API)
     .then(res => {
      console.log(res.data)
      this.setState({players: res.data})
    })
  }
  render() {
    const { players } = this.state;
    console.log(players);
      return (
      <ul>
        
        {this.state.players.map(player =>
          <li key={player.id}>
        {player.name} from {player.country} with {player.searches} searches.
          </li>
        )}
      </ul>
    );
  }
}
export default App;
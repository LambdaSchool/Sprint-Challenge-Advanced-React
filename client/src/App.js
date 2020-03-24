import React from 'react';
import Player from './component/Player';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    // fetch('http://localhost:5000/api/players')
    //   .then(res => res.json())
    //   .then(playerData => {
    //     console.log('PlayerData', playerData);
    //     this.setState({ players: playerData });
    //   });
  }
  render() {
    return (
      <div>
        <Player players={this.state.players} />
      </div>
    );
  }
}
export default App;

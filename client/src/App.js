import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import useDarkMode from './useDarkMode'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then((response) => {
      this.setState({ players: response.data });
    })
    .catch(error => {
      console.log(error)
    return <h1>you have a get-request error</h1>
    })
  }


  render() {
    return (
      <div className="App">
        <Players players={this.state.players}/>
        <button type="button" onClick={toggleTheme}>
        Switch theme
        </button>
      </div>
    );
  }
}

export default App;

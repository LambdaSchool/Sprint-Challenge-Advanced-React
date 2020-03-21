import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PlayerCard from "./components/PlayerCard";
import Header from "./components/Header";
import Chart from "./components/Chart";

class App extends React.Component {
  state = {
    players: []
  }
  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
      .then((res) => res.json())
      .then((res) => this.setState({ players: res }))
      .catch((err) => console.log(err))
  }

  playerCountByCountries = () => {
    let countries = {}
    this.state.players.forEach((player) => {
      if (player.country in countries) {
        countries[player.country] = countries[player.country] + 1
      } else {
        countries[player.country] = 0
      }
    })
    return Object.keys(countries).map((country) =>  { 
      return {country , count: countries[country]} 
    })
  }
  
  render() {
    console.log(this.playerCountByCountries())
    console.log(this.playerCountByCountries())
    return (
      <div className="App" >
        <Header />
        <Chart data={this.playerCountByCountries()} xAxisDataKey="country" barDataKey="count"  />
        {this.state.players.map((player) => <PlayerCard key={player.id} {...player} />)}
      </div>
    );
  }
}

export default App;

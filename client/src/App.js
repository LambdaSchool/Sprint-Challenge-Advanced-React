import React from "react";

import './App.css';
import { Container } from "semantic-ui-react";

//components
import PlayerCard from './components/PlayerCard'
import Search from './components/SearchCountery'
//data
import Axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading:true,
      players:[]
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          isLoading:false,
          players:res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container >
        <Search countries={this.state} />
        <PlayerCard players={this.state} />
      </Container>
    );
  }
}

export default App;

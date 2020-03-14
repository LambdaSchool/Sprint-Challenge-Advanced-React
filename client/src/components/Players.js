import React from 'react';
import axios from 'axios';
import Player from './Player';
import SearchForm from "./SearchForm";

class Players extends React.Component {
    state = {
        players: [],
        originalPlayers: [],
        searchText: ""

    };

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(res => {
            this.setState({
                players: res.data,
                originalPlayers: res.data
            });
        })
        .catch(err => console.log(err.message));
    }

    setSearch(s) {
        const results = this.state.originalPlayers.filter(p => p.name.toLowerCase().includes(s.toLowerCase()) );
        this.setState({
            searchText: s,
            players: results
        })
    }
    render() {
        return(
            <div>
                <SearchForm setSearchText={s => this.setSearch(s)} searchText={this.state.searchText}/>
                {this.state.players.map(p => 
                    <Player
                        key={p}
                        name={p.name}
                        country={p.country} />  
                )}
                
            </div>
        )
    }
}

export default Players;

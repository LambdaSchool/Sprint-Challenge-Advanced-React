import React from 'react';
import axios from 'axios';
import PlayCard from './playercard';


class Players extends React.Component {
    state= {
        players: []
    };

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
            .then(response =>{
                console.log(response);
                this.setState({players: response.data});
            })
            .catch (error =>{
                console.log('players not playing', error)
            })
    }

    render(){
        const {players} = this.state;

        return(
            players.map(player =>{
                const {id} = player;
                return (
                    <PlayCard key= {id} user={player}/>
                )
            })
        )
    }
}

export default Players;
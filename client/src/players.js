import React from 'react';
import axios from 'axios';
import PlayersCard from './playersCard';


class Players extends React.Component{
constructor() {
    super();
    this.state ='';
}

componentDidMount(){
axios.get(`http://localhost:5000/api/players`)
    .then(response =>{
        this.setState(response.data);
        console.log(response)
    } )
    .catch(error => {
        console.log(error)
    })
}
render(){
    return <div>
        <PlayersCard play={this.state}/>
        <br/>
    </div>
}
}

export default Players
   
import React from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


import PlayerCard from './PlayerCard';

class CardList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
  
    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
          .then((res) => {
              console.log(res); this.setState({data: res.data})})
          .catch((err) => console.log(err))
    }
  
    componentDidUpdate() {
        console.log(this.state.data)
    }
      render() {
          return ( <Grid container justify='center' alignContent='center' spacing={10}>
              {this.state.data.map((item) => {
                return (<Grid item>
                  <PlayerCard name={item.name} country={item.country} searches={item.searches}/>
                </Grid>)
              })}
            </Grid>)
      }
}


export default CardList;
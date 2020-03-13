import React from 'react'
import styled from 'styled-components';

const Back = styled.div`
background-color: pink;`
const Text = styled.p`
color: white;
font-size: 24px;`


function PlayersCard (props){
    const players = props.play
    return (
        <>
        {Object.keys(players).map((item, i) => (
            <Back key={i}>
               <Text> {players[item].name}</Text>
              <Text>  Country: {players[item].country}</Text>
              <Text>Searches: {players[item].searches}</Text>
              <br></br>
               
            </Back>
        ))}
        </>
    )
}

export default PlayersCard;
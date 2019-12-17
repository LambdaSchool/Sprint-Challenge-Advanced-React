import React, {useState} from "react";
import { Card, Segment, Flag, Header } from "semantic-ui-react";
import useStyling from '../hooks/useStyling'



const PlayerCardContent = props => {

  const [eventHandler, eventHander2] = useStyling()

  return (
    <Card.Group itemsPerRow={6}>
      {props.playerInfo.players.map(player => {
        return (
          <Card key={player.id} style={{ textAlign: "center" }}>
            <Card.Content>
              <Card.Header>{player.name}</Card.Header>
              <Card.Meta>of</Card.Meta>
        <Card.Meta>{player.country}</Card.Meta>
            </Card.Content>
            <Segment className='wobble' onMouseEnter={eventHandler} onMouseLeave={eventHander2} >
              <Flag name={player.country.toLowerCase()} />
            </Segment>
          </Card>
        );
      })}
    </Card.Group>
  );
};

export default PlayerCardContent;
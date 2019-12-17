import React from "react";
import { Container, Card, Dimmer, Loader, Segment } from "semantic-ui-react";
import PlayerCardContent from './PlayerCardContent'

const PlayerCard = ({players}) => {
    return(
        <div className="loading">
            {
                <Container>
                    <Card.Header>
                        {players.isLoading ? (
                            <Segment>
                                <Dimmer active inverted>
                                    <Loader />
                                </Dimmer>
                            </Segment>
                        ) : (
                            <PlayerCardContent playerInfo={players} />
                        )}
                    </Card.Header>
                </Container>
            }
        </div>
    )
}

export default PlayerCard
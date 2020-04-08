import React from 'react';


const PlayCard = (props) => {

    const {
        name,
        country,
        searches,
        id } = props.user;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
            <p>Id: {id}</p>
        </div>
    )
}

export default PlayCard;
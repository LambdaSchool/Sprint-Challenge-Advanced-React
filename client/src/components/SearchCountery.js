import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

export default function SearchCountery(props) {

    const eventHandler = (event) => {
        console.log(event.target.value)
    }


    return (
        <Search onChange={eventHandler} placeholder='Search By Country' style={{marginBottom:'2%', marginTop:'10%'}}/>
    )
}

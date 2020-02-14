import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {useTheme, makeStyles} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles({
    large: {
      width: '250px',
      height: '150px',
      transition: 'background-color 4s ease'

    },
    mobile: {
        width: '400px',
        height: '150px',
        transition: 'background-color 4s ease'
    },
    typography: {
        transition: 'color 4s ease'
    }
  })

export default function PlayerCard(props) {
        const theme = useTheme()
        const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
        const classes = useStyles();

        return (
            <Card  className={isMobile ? classes.mobile : classes.large}>
                <CardContent>
                    <Typography variant="h5" className={classes.typography}>{props.name}</Typography>
                    <Typography variant="h6" className={classes.typography}>{props.country}</Typography>
                    <Typography variant="body1" className={classes.typography}>{props.searches} searches.</Typography>
                </CardContent>
            </Card>
        )
}

import React, {useState} from 'react';


import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';


import {ThemeProvider} from '@material-ui/core/styles';
import CSSBaseline from '@material-ui/core/CssBaseline';
import {useTheme} from '@material-ui/core/styles';

import {lightTheme, darkTheme} from './themes';

import CardList from './components/CardList';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode('isDarkMode', false);
  const theme = useTheme();
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CSSBaseline />
   <Container maxWidth='md' style={{margin: '0 auto'}}>
     <AppBar position='relative' color='default' style={{marginBottom: theme.spacing(6), transition: 'background-color 4s ease'}}>
       <Toolbar  style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography variant='h5' style={{transition: 'color 4s ease'}}>Player searches</Typography> <Typography variant='body1'>Use dark mode?<Switch color='primary' checked={isDarkTheme} onChange={() => {setIsDarkTheme(!isDarkTheme)}}/></Typography>
       </Toolbar>
     </AppBar>
    <CardList/>
   </Container>
   </ThemeProvider>
  )
}

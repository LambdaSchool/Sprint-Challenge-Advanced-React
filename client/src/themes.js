import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
      primary: purple,
      secondary: green,
    },
    status: {
      danger: 'orange',
    },
  })

const darkTheme = createMuiTheme({
    palette: {
    type: 'dark',
      primary: purple,
      secondary: green,
    },
    status: {
      danger: 'orange',
    },
  })


  export {
      lightTheme,
      darkTheme,
  }
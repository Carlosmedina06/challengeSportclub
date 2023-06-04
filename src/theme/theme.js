import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#202129',
    },
    secondary: {
      main: '#FFFFFF',
    },

    tertiary: {
      main: '#ffd300',
    },
  },

  typography: {
    fontFamily: 'Roboto',
  },
})

export default theme

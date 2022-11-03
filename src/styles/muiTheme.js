import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0061a4'
    },
    secondary: {
      main: '#6e5480'
    },
    background: {
      default: '#fdfcff'
    },
    error: {
      main: '#ba1a1a'
    }
  }
})

export default theme

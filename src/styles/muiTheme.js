import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    surfaces: {
      one: '#0060a405',
      two: '#0060a408',
      three: '#0060a412',
      four: '#0060a414',
      five: '#D2E4FE'
    },
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

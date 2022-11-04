import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navs/Navbar'
import { Balance } from './pages/Balance'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import theme from './styles/muiTheme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<Navbar />}>
            <Route path="/Balance" element={<Balance />} />
          </Route>
        </Routes>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App

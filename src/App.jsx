import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home'
import { Balance } from './pages/Balance'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/muiTheme'

function App () {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error404 />} />
          <Route path='/balance' element={<Balance />} />
        </Routes>
    </ThemeProvider>
  )
}

export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navs/Navbar'
<<<<<<< HEAD
import { AdminPanel } from './pages/Admin/AdminPanel'
=======
import ProtectRoutes from './helpers/ProtectRoutes'
import RedirectHome from './helpers/RedirectHome'
>>>>>>> main
import { Balance } from './pages/Balance/Balance'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Movements } from './pages/Movements'
import { Register } from './pages/Register'
import { Send } from './pages/Send/Send'

function App() {
  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes>
          <Route element={<Home />}>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<Navbar />}>
            <Route path='/Balance' element={<Balance />} />
            <Route path='/Movements' element={<Movements />} />
            <Route path='/send' element={<Send />} />
            <Route path='/admin' element={<AdminPanel />} />
          </Route>

          <Route path='*' element={<Error404 />} />
        </Routes>
      </CssBaseline>
    </ThemeProvider>
=======
    <Routes>
      <Route element={<Home />}>
        <Route path='/Login' element={<RedirectHome><Login /></RedirectHome>} />
        <Route path='/register' element={<RedirectHome><Register /></RedirectHome>} />
      </Route>
      <Route element={<Navbar />}>
        <Route path='/' element={<ProtectRoutes><Balance /></ProtectRoutes>} />
        <Route path='/Movements' element={<ProtectRoutes><Movements /></ProtectRoutes>} />
        <Route path='/send' element={<ProtectRoutes><Send /></ProtectRoutes>} />
      </Route>
      <Route path='*' element={<Error404 />} />
    </Routes>
>>>>>>> main
  )
}

export default App

import { Box, useMediaQuery, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '../Footer'
import { MobileNav } from './MobileNav'
import './Navbar.css'
import { SideNav } from './SideNav'

export const Navbar = () => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

  const logout = () => {
    localStorage.clear()
    sessionStorage.clear()
    navigate('/login')
  }
  const pages =
    JSON.parse(sessionStorage.getItem('role')) !== 1
      ? [
          {
            text: 'Balance',
            route: '/',
            icon: 'account_balance'
          },
          {
            text: 'Movimientos',
            route: 'movements',
            icon: 'trending_up'
          },
          {
            text: 'Enviar',
            route: 'send',
            icon: 'groups'
          }
        ]
      : [
          {
            text: 'Transacciones',
            route: 'admin',
            icon: 'insights'
          },
          {
            text: 'Categorias',
            route: 'admin/categories',
            icon: 'category'
          },
          {
            text: 'Usuarios',
            route: 'admin/users',
            icon: 'groups'
          }
        ]

  const propPack = {
    pages,
    logout
  }

  return (
    <div className={match ? 'pageWrapper' : ''}>
      {match ? <SideNav {...propPack} /> : <MobileNav {...propPack} />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          minHeight: '100vh',
          paddingTop: { md: '40px' }
        }}
      >
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </div>
  )
}

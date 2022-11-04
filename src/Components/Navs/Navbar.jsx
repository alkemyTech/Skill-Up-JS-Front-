import { useMediaQuery, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { MobileNav } from './MobileNav'
import './Navbar.css'
import { SideNav } from './SideNav'

export const Navbar = () => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))
  const pages = [{
    text: 'Balance',
    route: 'balance',
    icon: 'account_balance'
  }, {
    text: 'Cargar',
    route: 'addmoney',
    icon: 'account_balance'
  }, {
    text: 'Enviar',
    route: 'sendomoney',
    icon: 'account_balance'
  }]
  const sampleImg = 'https://via.placeholder.com/150/92c952'

  const propPack = {
    pages,
    img: sampleImg
  }

  return (
    <div className={match ? 'pageWrapper' : ''}>
      {match ? <SideNav {...propPack}/> : <MobileNav {...propPack}/>}
      <div className={match ? 'outlet_container' : ''}>
        <Container>
          <Outlet />
        </Container>
        <Footer/>
      </div>
    </div>
  )
}

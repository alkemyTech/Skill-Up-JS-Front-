import { useMediaQuery, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { MobileNav } from './MobileNav'
import './Navbar.css'
import { SideNav } from './SideNav'

export const Navbar = () => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))
  // const pages = ['Balance', 'test', 'test1', 'test2', 'test3', 'test4']
  const pages = [{
    text: 'Balance',
    route: 'balance',
    icon: 'AccountBalanceIcon'
  }]

  return (
    <>
      {match ? <SideNav pages={pages}/> : <MobileNav pages={pages}/>}
      <div className={match ? 'outlet_container' : ''}>
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  )
}

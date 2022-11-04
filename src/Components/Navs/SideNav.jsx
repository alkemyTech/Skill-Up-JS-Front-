import { Button, Typography } from '@mui/material'
import React from 'react'
import { CustomNavLink } from './CustomNavLink'

export const SideNav = ({ pages }) => {
  return <div className='sidenav'>
    <Typography variant="h6" sx={{ color: 'primary.main' }}>AlkyBank</Typography>
    <div className="sidenav_links">
      {pages.map((page) => (
        <CustomNavLink page={page} key={page}/>
      ))}
    </div>
    <Button className='navlink active' sx={{ justifyContent: 'flex-start' }}>
      Logout
    </Button>
  </div>
}

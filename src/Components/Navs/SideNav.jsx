import { Avatar, Button, Icon, Typography } from '@mui/material'
import React from 'react'
import { CustomNavLink } from './CustomNavLink'

export const SideNav = ({ pages, img }) => {
  return <div className='sidenav'>
    <div className='sidenav_pages'>
      <Typography variant="h6" sx={{ color: 'primary.main' }}>AlkyBank</Typography>
      <Avatar src={img} sx={{
        width: 63,
        height: 63
      }}/>
      <div>
        {pages.map((page) => (
          <CustomNavLink page={page} key={page.route}/>
        ))}
      </div>
    </div>
    <Button className='navlink active' sx={{ justifyContent: 'flex-start' }}>
      <Icon sx={{ fontSize: 17 }}>logout</Icon> Salir
    </Button>
  </div>
}

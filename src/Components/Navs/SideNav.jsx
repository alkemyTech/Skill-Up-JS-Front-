import { Avatar, Box, Button, Icon, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { ModalUserProfile } from '../../pages/Profile/ModalUserProfile'
import { CustomNavLink } from './CustomNavLink'

export const SideNav = ({ pages, logout }) => {
  const user = useSelector((state) => state.user.user)
  return (
    <Box className='sidenav' sx={{ backgroundColor: 'surfaces.one' }}>
      <div className='sidenav_pages'>
        <Typography variant='h6' sx={{ color: 'primary.main' }}>
          AlkyBank
        </Typography>
        <Avatar
          sx={{
            width: 63,
            height: 63
          }}
        >
          {user?.firstName?.charAt(0)}
        </Avatar>
        <ModalUserProfile />
        <div>
          {pages.map((page) => (
            <CustomNavLink page={page} key={page.route} />
          ))}
        </div>
      </div>
      <Button
        className='navlink'
        sx={{ justifyContent: 'flex-start', backgroundColor: 'surfaces.four' }}
        onClick={logout}
      >
        <Icon sx={{ fontSize: 17 }}>logout</Icon> Salir
      </Button>
    </Box>
  )
}

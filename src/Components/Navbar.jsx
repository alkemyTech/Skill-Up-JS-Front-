import './Navbar.css'
import { AppBar, Avatar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  console.log(open)
  return (
    <>
      <AppBar position='static' color='transparent' className='navbar'
        sx={{ display: { md: 'none', sm: 'block' }, padding: '20px 0' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" noWrap color='primary'>
            AlkyBank
          </Typography>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: 31, height: 31 }}
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_avatar.asp&psig=AOvVaw2j8ai91nGcXhIh7Eg5x61T&ust=1667591752874000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIC_wcHlkvsCFQAAAAAdAAAAABAE" />
        </Container>
      </AppBar>
    </>)
}

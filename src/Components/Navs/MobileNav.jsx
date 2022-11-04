import { AppBar, Avatar, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { CustomNavLink } from './CustomNavLink'

export const MobileNav = ({ pages }) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  console.log(theme)
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          padding: '20px 0'
        }}
      >
        <Container
          className="navbar_container"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" noWrap color="primary">
            AlkyBank
          </Typography>

          <Avatar
            onClick={() => setOpen((prev) => !prev)}
            sx={{
              width: 31,
              height: 31,
              cursor: 'pointer'
            }}
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_avatar.asp&psig=AOvVaw2j8ai91nGcXhIh7Eg5x61T&ust=1667591752874000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIC_wcHlkvsCFQAAAAAdAAAAABAE"
          />
        </Container>
      </AppBar>
      <Box
        className={open ? 'navbar_menu active' : 'navbar_menu'}
        sx={{
          backgroundColor: theme.palette.background.default
        }}
      >
        <div className="mobilenav_links">

          {pages.map((page) => (
            <CustomNavLink page={page} key={page}/>
          ))}
            </div>
      </Box>
    </>
  )
}

import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Person from '../assets/img/person.jpg'

export const Home = () => {
  return (
    <Grid container sx={{ height: '100vh', width: '100vw' }} >
      <Grid
      item
      xs={false}
      md={7}
      sx={{
        backgroundImage: `url(${Person})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}/>
      <Grid item xs={12} md={5} >
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'Center',
          height: '100vh',
          gap: '10px'
        }}>

          <Typography variant="h4" color="primary.main">AlkyBank</Typography>
          <Box sx={{ width: '75%' }}>
            <Outlet />
          </Box>
        </Container >
      </Grid>
    </Grid>
  )
}

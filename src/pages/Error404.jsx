import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

export const Error404 = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'primary.main'
    }}
  >
    <Typography variant="h1" style={{ color: 'white' }}>
      404
    </Typography>
    <Link component={RouteLink} sx={{ color: 'white' }} to="/">Ir al inicio</Link>
  </Box>
  )
}

import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const Register = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
      variant="h6"
      textAlign={'center'}
      >Registrate</Typography>
      <Typography textAlign={'right'}>¿Tienes cuenta?
        <Link
        to="/"
        component={RouterLink}
        underline="none">¡Inicia sesión!
        </Link>
      </Typography>
    </Box>
  )
}

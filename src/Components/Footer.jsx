import { Container } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Container sx={{ color: 'grey.400', display: 'flex', justifyContent: 'center', gap: '20px' }}>&copy;{new Date().getFullYear() }
    <span> AlkyBank </span>
    </Container>
  )
}

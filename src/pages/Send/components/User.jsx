import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

export const User = ({ img, name }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar src={img} />
      <Typography color='grey.600'>{name}</Typography>
    </Box>
  )
}

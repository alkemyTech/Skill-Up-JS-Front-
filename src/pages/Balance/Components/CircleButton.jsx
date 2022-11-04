import styled from '@emotion/styled'
import { Box, Button, Icon, useTheme } from '@mui/material'
import React from 'react'

export const CircleButton = ({ icon, onClick, text }) => {
  const theme = useTheme()

  const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    padding: '1rem',
    width: '75px',
    height: '75px',
    borderRadius: '50%'
  }))
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <StyledButton variant="contained" onClick={onClick}
        style={{ backgroundColor: theme.palette.surfaces.four }}>
           <Icon sx={{ fontSize: '27px' }}>{icon}</Icon>
        </StyledButton>
        {text}
    </Box>
  )
}

import { Button, styled } from '@mui/material'
import React from 'react'

export const CustomButton = ({ children, color, textColor }) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette[textColor],
    backgroundColor: theme.palette[textColor],
    padding: '1rem',
    width: '100%',
    borderRadius: 20
  }))
  return (
    <StyledButton variant="contained" disableElevation >
        {children}
    </StyledButton>
  )
}

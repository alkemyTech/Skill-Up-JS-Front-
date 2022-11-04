import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Surface } from '../../Components/Surface'
import { CircleButton } from './Components/CircleButton'

export const Balance = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '20px', md: 'false' },
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Paper sx={{ padding: '20px', borderRadius: '20px' }} className="card">
            <Typography color="grey.300">Balance total</Typography>
            <Typography variant="h2">$20000</Typography>
          </Paper>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <CircleButton icon="attach_money" text="Cargar saldo"/>
            <CircleButton icon="payments"text="Enviar dinero"/>
          </Box>
        </Box>
      <Surface >
        Ultimos movimientos
      </Surface>
    </Box>
  )
}

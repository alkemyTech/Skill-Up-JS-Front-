import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Surface } from '../../Components/Surface'
import { User } from './components/User'

export const Send = () => {
  return (
    <>
      <Typography
        color='grey.400'
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        Enviar dinero
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center'
        }}
      >
        <Box className='card' sx={{ padding: '20px', borderRadius: '20px' }}>
          Formulario de envio
        </Box>
        <Surface>
          <Typography color='grey.400'>Usuarios</Typography>
          <Grid container>
            <Grid item>
              <User name={'example user'} />
            </Grid>
          </Grid>
        </Surface>
      </Box>
    </>
  )
}

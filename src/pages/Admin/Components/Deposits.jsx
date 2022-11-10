import Typography from '@mui/material/Typography'
import * as React from 'react'
import Title from './Title'

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Ultima transacción</Title>
      <Typography component='p' variant='h4'>
        $3,024.00
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
    </React.Fragment>
  )
}

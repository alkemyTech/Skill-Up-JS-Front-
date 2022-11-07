import { Typography } from '@mui/material'
import React from 'react'
import { MoneyMove } from '../Components/MoneyMove'
import { Surface } from '../Components/Surface'

export const Movements = () => {
  const exampleData = [
    {
      categoryId: 'outcome',
      description: 'Pago de netflix',
      amount: '5000',
      date: new Date().toDateString()
    },
    {
      categoryId: 'income',
      description: 'Recibí plata',
      amount: '5000',
      date: new Date().toDateString()
    }
  ]
  return (
    <>
      <Typography
        color='grey.400'
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        Movimientos
      </Typography>
      <Surface>
        {exampleData.map((data) => (
          <MoneyMove
            variant={data?.categoryId}
            data={data}
            key={data.description}
          />
        ))}
      </Surface>
    </>
  )
}

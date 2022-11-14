import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBalance, getTransactions } from '../../app/actions'
import { MoneyMove } from '../../Components/MoneyMove'
import { Surface } from '../../Components/Surface'
import { CircleButton } from './Components/CircleButton'
import { Modal } from './Components/Modal'

export const Balance = () => {
  const [open, setOpen] = useState(false)
  const [currentTransaction, setCurrentTransaction] = useState({})
  const dispatch = useDispatch()
  const transactions = useSelector((state) => state.transactions)

  useEffect(() => {
    dispatch(getTransactions()).then(() => dispatch(getBalance()))
  }, [dispatch, transactions.transactions.length])

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '20px', md: 'false' },
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
            alignItems: 'center'
          }}
        >
          <Paper sx={{ padding: '20px', borderRadius: '20px' }} className='card'>
            <Typography color='grey.300'>Balance total</Typography>
            <Typography variant='h2'>${transactions.balance}</Typography>
          </Paper>

          <CircleButton icon='payments' text='Nuevo movimiento' onClick={() => handleOpen()} />
        </Box>
      </Box>
      <Surface>
        {transactions?.transactions.length > 0 ? (
          <Typography>Ultimos movimientos</Typography>
        ) : (
          <Typography>No hay movimientos para mostrar</Typography>
        )}
        {transactions?.transactions.length > 0 &&
          transactions?.transactions
            ?.slice(0, 10)
            .map((data) => (
              <MoneyMove
                setCurrentTransaction={setCurrentTransaction}
                handleOpen={handleOpen}
                variant={data.categoryId}
                data={data}
                key={data.id}
              />
            ))}
      </Surface>
      <Modal
        currentTransaction={currentTransaction}
        setCurrentTransaction={setCurrentTransaction}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  )
}

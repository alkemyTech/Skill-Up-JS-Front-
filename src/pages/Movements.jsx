import { Pagination, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../app/actions'
import { MoneyMove } from '../Components/MoneyMove'
import { Surface } from '../Components/Surface'

export const Movements = () => {
  const transactions = useSelector((state) => state.transactions)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch, transactions.length])

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = transactions.transactions.slice(indexOfFirstPost, indexOfLastPost)
  const pageNumbers = Math.ceil(transactions.transactions.length / postsPerPage)

  return (
    <>
      <Typography color='grey.400' sx={{ display: { xs: 'none', md: 'block' } }}>
        Movimientos
      </Typography>
      {transactions.transactions.length > 0 ? (
        <Surface>
          {currentPosts.map((data) => (
            <MoneyMove variant={data?.categoryId} data={data} key={data.id} />
          ))}
          {pageNumbers !== 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Pagination
                count={pageNumbers}
                page={currentPage}
                onChange={(e, p) => setCurrentPage(p)}
                color='primary'
              />
            </Box>
          )}
        </Surface>
      ) : (
        <Typography variant='h6'> No hay movimientos para mostrar</Typography>
      )}
    </>
  )
}

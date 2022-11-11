import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getCategories } from '../../../app/actions'
import { FormCategory } from '../../FormCategory'

export const Categories = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories()).then((res) => setData(res))
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <FormCategory />
      <Divider />
      <Typography variant='subtitle2'>Categorías</Typography>
      {data?.payload?.map((x) => (
        <Typography variant='caption' key={x.id}>
          {x.name}
        </Typography>
      ))}
    </Box>
  )
}

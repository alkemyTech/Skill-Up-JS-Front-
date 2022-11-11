import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../../app/actions'

export const Users = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers()).then((res) => setData(res))
  }, [])
  return (
    <div>
      {data?.payload?.map((x) => (
        <Typography variant='caption' key={x.id}>
          {x.name}
        </Typography>
      ))}
    </div>
  )
}

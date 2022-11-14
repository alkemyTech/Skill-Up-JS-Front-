import { Avatar, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../app/actions'
import { stringToColor } from '../helpers/ColorGenerator'
import Title from '../pages/Admin/Components/Title'
import { Surface } from './Surface'

export const Users = ({ onClick }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  const data = useSelector((state) => state.user)
  const cursor = onClick ? 'pointer' : 'default'
  return (
    <>
      <Title>Usuarios</Title>
      <Surface>
        <Grid container rowSpacing={'10px'}>
          {data.users?.map((x) => (
            <Grid
              item
              key={x.id}
              xs={3}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor }}
              gap={'10px'}
              onClick={() => onClick && onClick(x)}
            >
              <Avatar sx={{ bgcolor: stringToColor(x.firstName) }}>{x.firstName.charAt(0)}</Avatar>
              <Typography color='grey.600'>{`${x.firstName} ${x.lastName}`}</Typography>
            </Grid>
          ))}
        </Grid>
      </Surface>
    </>
  )
}

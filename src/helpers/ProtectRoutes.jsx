import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getUser } from '../app/actions'

const ProtectRoutes = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const user = useSelector((state) => state.user)

  if (!Object.keys(user).length === 0 || !token) {
    return <Navigate to='/login' replace={true} />
  }
  return <Outlet />
}

export default ProtectRoutes

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getUser } from '../app/actions'
import { decodeToken } from './decodeToken'

const ProtectRoutes = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const decode = token && decodeToken(token)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  if (!token) {
    return <Navigate to='/login' replace={true} />
  } else if (decode.exp * 1000 < Date.now()) {
    localStorage.clear()
    sessionStorage.clear()
    return <Navigate to='/login' replace={true} />
  }
  return <Outlet />
}

export default ProtectRoutes

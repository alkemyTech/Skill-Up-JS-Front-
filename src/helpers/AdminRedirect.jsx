import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

export const AdminRedirect = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('role')) === 1) {
      navigate('/admin')
    }
  }, [user])
  return <Outlet />
}

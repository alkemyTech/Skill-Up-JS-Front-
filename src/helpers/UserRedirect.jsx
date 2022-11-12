import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const UserRedirect = () => {
  const navigate = useNavigate()
  useEffect(() => {
    ;(async function () {
      if (JSON.parse(sessionStorage.getItem('role')) !== 1) {
        navigate('/')
      }
    })()
  }, [])
  return <Outlet />
}

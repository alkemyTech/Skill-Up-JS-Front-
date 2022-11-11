import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RedirectHome = ({ children }) => {
  const user = useSelector(state => state.user)
  const token = localStorage.getItem('token')

  if (Object.keys(user).length === 0 && token) {
    return <Navigate to="/" replace={true} />
  }

  return children
}

export default RedirectHome

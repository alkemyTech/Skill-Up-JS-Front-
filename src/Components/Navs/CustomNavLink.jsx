import { useTheme } from '@mui/material'
import Icon from '@mui/material/Icon'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const CustomNavLink = ({ page, onClick }) => {
  const theme = useTheme()
  return (
    <NavLink
      key={page.route}
      style={({ isActive }) =>
        isActive
          ? {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.surfaces.four
            }
          : {
              color: '#000'
            }
      }
      className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
      to={page.route}
      end
      onClick={onClick}
    >
      <Icon sx={{ fontSize: 17 }}>{page.icon}</Icon>
      {page.text}
    </NavLink>
  )
}

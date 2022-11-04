import { useTheme } from '@mui/material'
import Icon from '@mui/material/Icon'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const CustomNavLink = ({ page }) => {
  const theme = useTheme()
  return (
    <NavLink
              key={page.route}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: theme.palette.primary.main

                    }
                  : {
                      color: theme.palette.grey[600]
                    }
              }
              className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}
              to={page.route}
              end
            >
                <Icon>star</Icon>
             {page.text}
            </NavLink>
  )
}

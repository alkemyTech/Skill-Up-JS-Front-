import { Box, Button, Modal } from '@mui/material'
import Icon from '@mui/material/Icon'
import React from 'react'
import { UserProfile } from './UserProfile'

export const ModalUserProfile = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpenUserProfile = () => {
    setOpen(true)
  }
  const handleCloseUserProfile = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Button
        onClick={handleOpenUserProfile}
        className='navlink'
        sx={{ justifyContent: 'flex-start' }}
      >
        <Icon>person</Icon> Perfil de usuario
      </Button>
      <Modal
        open={open}
        onClose={handleCloseUserProfile}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box>
          <UserProfile />
        </Box>
      </Modal>
    </Box>
  )
}

import React from 'react'
import { Box, Modal } from '@mui/material'
import { CustomButton } from '../../../Components/CustomButton'
import { FormUser } from './FormEdit'

export const ModalEditUser = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpenEditUser = () => {
    setOpen(true)
  }
  const handleCloseEditUser = () => {
    setOpen(false)
  }
  return (
    <Box>
        <CustomButton sx={{ ml: 2, mr: 2, width: 200 }} onClick={handleOpenEditUser}>Editar usuario</CustomButton>
        <Modal
        open={open}
        onClose={handleCloseEditUser}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
            <Box>
              <FormUser handleCloseEditUser={handleCloseEditUser} />
            </Box>
        </Modal>
    </Box>
  )
}

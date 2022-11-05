import { Box } from '@mui/system'
import React from 'react'

export const Modal = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
        <Box>
            Hola
        </Box>
    </Modal>
  )
}

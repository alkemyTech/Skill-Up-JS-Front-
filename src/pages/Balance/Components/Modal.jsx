import { Box, Modal as MuiModal } from '@mui/material'
import React from 'react'

export const Modal = ({ open, setOpen }) => {
  return (
    <MuiModal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          borderRadius: '20px'
        }}
      >
        Hola
      </Box>
    </MuiModal>
  )
}

import { Container, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Footer = () => {
  const socialLinks = [{
    name: 'Tomás Sánchez',
    url: 'https://www.linkedin.com/in/stomas418/'
  },
  {
    name: 'Juan Sevillano',
    url: 'https://www.linkedin.com/in/juan-sevillano/'
  }, {
    name: 'Gaston Federico Cajal Skaf',
    url: 'https://www.linkedin.com/in/gaston-cajal-skaf-fullstack/'
  }, {
    name: 'Carlos Kachuk',
    url: 'https://www.linkedin.com/in/carloskachuk/'
  }, {
    name: 'Daniel Gutierrez',
    url: 'https://www.linkedin.com/in/daniel-gutierrez-460a8417b/'
  }, {
    name: 'Thomas Barreto',
    url: 'https://www.linkedin.com/in/thomas-barreto-50ab71204'
  }, {
    name: 'Juan Manuel Fernandez',
    url: 'https://www.linkedin.com/in/juan-manuel-fernandez-4b701629/'
  }, {
    name: 'Lisandro Rubianes',
    url: 'https://www.linkedin.com/in/lisandrorubianes/'
  }
  ]

  return (
    <Container sx={{
      color: 'grey.400',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <div>
        &copy;{new Date().getFullYear() }
        <span> AlkyBank </span>
      </div>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        flexDirection: { xs: 'column', md: 'row' },
        fontSize: '10px'
      }}>
        {socialLinks.map(link =>
        <Link key={link.url}
          href={link.url}
          underline="none"
          target="_blank"
          rel="noopener"
          color="inherit"
          >
           <i className="fa-brands fa-linkedin"></i> {link.name}
        </Link>)}
      </Box>
      </Container>
  )
}

import React from 'react'
import { Box, Container, Typography, Link, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Footer: React.FC = () => {
  const linkSx = {
    textDecoration: 'none',
    '&:hover': { color: 'secondary.light' },
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
              Useful Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/" color="inherit" sx={linkSx}>
                Home
              </Link>
              <Link component={RouterLink} to="/about" color="inherit" sx={linkSx}>
                About
              </Link>
              <Link component={RouterLink} to="/projects" color="inherit" sx={linkSx}>
                Projects
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" sx={linkSx}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              New York, NY
              <br />
              United States
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Box component="span" sx={{ color: 'text.secondary' }}>Email: </Box>
              <Link href="mailto:kkuc234@gmail.com" color="inherit" sx={linkSx}>
                kkuc234@gmail.com
              </Link>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link
                href="https://github.com/kkuc100"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={linkSx}
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/kevinkuc"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={linkSx}
              >
                LinkedIn
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'divider',
            mt: 3,
            pt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © Copyright <Box component="strong" sx={{ color: 'text.primary' }}>Kevin Kuc</Box>. All Rights Reserved
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designed by{' '}
            <Link
              href="https://www.linkedin.com/in/kevinkuc"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={linkSx}
            >
              Kevin Kuc
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

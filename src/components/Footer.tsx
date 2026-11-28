import React from 'react'
import { Box, Container, Typography, Link, Grid } from '@mui/material'
import { Email, GitHub, LinkedIn, LocationOn } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

const contactLinks = [
  { icon: <Email />, label: 'kkuc234@gmail.com', href: 'mailto:kkuc234@gmail.com', external: false },
  { icon: <LinkedIn />, label: 'linkedin.com/in/kevinkuc', href: 'https://www.linkedin.com/in/kevinkuc', external: true },
  { icon: <GitHub />, label: 'github.com/kkuc100', href: 'https://github.com/kkuc100', external: true },
  { icon: <LocationOn />, label: 'New York, NY', href: null, external: false },
]

const Footer: React.FC = () => {
  const linkSx = {
    textDecoration: 'none',
    '&:hover': { color: 'secondary.light' },
  }

  return (
    <Box
      component="footer"
      id="contact"
      aria-labelledby="contact-heading"
      sx={{
        scrollMarginTop: '64px',
        backgroundColor: 'background.default',
        color: 'text.primary',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={6}>
            <Typography
              id="contact-heading"
              variant="h6"
              component="h2"
              sx={{ mb: 2, color: 'primary.light' }}
            >
              Get in touch
            </Typography>
            <Box
              component="ul"
              sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}
            >
              {contactLinks.map(({ icon, label, href, external }) => (
                <Box component="li" key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                  <Box component="span" aria-hidden sx={{ display: 'flex', color: 'primary.main', '& svg': { fontSize: 20 } }}>
                    {icon}
                  </Box>
                  {href ? (
                    <Link
                      href={href}
                      color="inherit"
                      sx={linkSx}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {label}
                    </Link>
                  ) : (
                    <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
                      {label}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" component="p" sx={{ mb: 2, color: 'primary.light' }}>
              Site
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/" color="inherit" sx={linkSx}>
                Home
              </Link>
              <Link component={RouterLink} to="/#about" color="inherit" sx={linkSx}>
                About
              </Link>
              <Link component={RouterLink} to="/projects" color="inherit" sx={linkSx}>
                Projects
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

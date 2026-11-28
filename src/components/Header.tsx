import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItemButton, ListItemText, useTheme, useMediaQuery } from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen((open) => !open)
  }

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ]

  const isActive = (path: string) => location.pathname === path

  // "Contact" isn't a page: it scrolls to the footer's contact section on the
  // current page. In the mobile drawer, wait for the drawer to finish closing
  // (it locks page scrolling while open) before scrolling.
  const goToContact = (event: React.MouseEvent) => {
    event.preventDefault()
    const scroll = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    if (mobileOpen) {
      setMobileOpen(false)
      window.setTimeout(scroll, theme.transitions.duration.leavingScreen + 50)
    } else {
      scroll()
    }
  }

  const contactTextSx = { fontWeight: 500, color: 'text.primary' }

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <IconButton
        aria-label="close menu"
        onClick={handleDrawerToggle}
        sx={{ position: 'absolute', right: 8, top: 8, color: 'text.primary' }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ pt: 6 }}>
        {navigationItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            aria-current={isActive(item.path) ? 'page' : undefined}
            sx={{ justifyContent: 'center', py: 1.5 }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: {
                  textAlign: 'center',
                  fontWeight: isActive(item.path) ? 700 : 500,
                  color: isActive(item.path) ? 'primary.light' : 'text.primary',
                },
              }}
            />
          </ListItemButton>
        ))}
        <ListItemButton component="a" href="#contact" onClick={goToContact} sx={{ justifyContent: 'center', py: 1.5 }}>
          <ListItemText primary="Contact" primaryTypographyProps={{ sx: { textAlign: 'center', ...contactTextSx } }} />
        </ListItemButton>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="fixed" color="default" enableColorOnDark>
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: { xs: '16px', sm: '20px' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              minWidth: 0,
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Kevin Kuc
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, color: 'primary.light' }}>
                {' · Senior Applied Scientist'}
              </Box>
            </Link>
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open menu"
              aria-expanded={mobileOpen}
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, flexShrink: 0 }}>
              {navigationItems.map((item) => (
                <Typography
                  key={item.path}
                  component={Link}
                  to={item.path}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  sx={{
                    color: isActive(item.path) ? 'primary.light' : 'text.primary',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: isActive(item.path) ? 700 : 500,
                    '&:hover': {
                      color: 'secondary.light',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
              <Typography
                component="a"
                href="#contact"
                onClick={goToContact}
                sx={{
                  ...contactTextSx,
                  textDecoration: 'none',
                  fontSize: '14px',
                  '&:hover': { color: 'secondary.light' },
                }}
              >
                Contact
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header

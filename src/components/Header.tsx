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
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <IconButton
        aria-label="close menu"
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
            sx={{ justifyContent: 'center', py: 1.5 }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                textAlign: 'center',
                fontWeight: isActive(item.path) ? 700 : 500,
                color: isActive(item.path) ? 'primary.light' : 'text.primary',
              }}
            />
          </ListItemButton>
        ))}
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
                {' · Senior Data Scientist'}
              </Box>
            </Link>
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open menu"
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

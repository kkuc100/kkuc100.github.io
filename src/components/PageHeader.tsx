import React from 'react'
import { Box, Typography, Breadcrumbs, Link } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'

type PageHeaderProps = {
  title: string
  subtitle?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        mb: 4,
        py: 4,
        px: 3,
        borderRadius: 2,
        background: `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.secondary.main, 0.14)} 100%)`,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {subtitle}
        </Typography>
      ) : (
        <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '14px', color: 'text.secondary' }}>
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="hover"
            sx={{ '&:hover': { color: 'secondary.light' } }}
          >
            Home
          </Link>
          <Typography component="span" sx={{ fontSize: 'inherit', color: 'text.primary' }} aria-current="page">
            {title}
          </Typography>
        </Breadcrumbs>
      )}
    </Box>
  )
}

export default PageHeader

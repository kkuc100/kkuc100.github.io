import React from 'react'
import { Container, Typography, Button, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { usePageMeta } from '../utils/usePageMeta'

const NotFound: React.FC = () => {
  usePageMeta('Page not found')

  return (
    <Container maxWidth="lg" sx={{ py: 4, marginTop: '80px' }}>
      <PageHeader title="Page not found" />
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        The page you're looking for doesn't exist or has moved.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" component={RouterLink} to="/">
          Go home
        </Button>
        <Button variant="outlined" component={RouterLink} to="/projects">
          View projects
        </Button>
      </Stack>
    </Container>
  )
}

export default NotFound

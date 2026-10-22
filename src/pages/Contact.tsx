import React from 'react'
import { Container, Typography, Box, Grid, Paper, Card, CardContent } from '@mui/material'
import { LocationOn, Email, Phone } from '@mui/icons-material'
import { alpha, useTheme } from '@mui/material/styles'

const Contact: React.FC = () => {
  const theme = useTheme()

  return (
    <Container maxWidth="lg" sx={{ py: 4, marginTop: '80px' }}>
      {/* Breadcrumb */}
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
        <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          Contact
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Home / Contact
        </Typography>
      </Box>

      {/* Contact Section */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardContent>
                  <LocationOn sx={{ fontSize: 32, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    My Address
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    New York, NY
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ textAlign: 'center', p: 2, height: '100%' }}>
                <CardContent>
                  <Email sx={{ fontSize: 32, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    Email Me
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:kkuc234@gmail.com"
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.light' } }}
                  >
                    kkuc234@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ textAlign: 'center', p: 2, height: '100%' }}>
                <CardContent>
                  <Phone sx={{ fontSize: 32, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    Phone
                  </Typography>
                  <Typography
                    component="a"
                    href="tel:+19085818869"
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.light' } }}
                  >
                    +1 908 581 8869
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, border: '1px solid', borderColor: 'divider', height: '100%' }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeY5CuN-bw9fHxOYK5hCFZdqPFPkKqFdfZao0AEkEz3QhYnoA/viewform?embedded=true"
              width="100%"
              height="480"
              style={{ border: 0, display: 'block' }}
              title="Contact Form"
            >
              Loading…
            </iframe>
          </Paper>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Paper sx={{ p: 0, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
        <iframe
          src="https://www.google.com/maps?q=New%20York,%20NY&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </Paper>
    </Container>
  )
}

export default Contact

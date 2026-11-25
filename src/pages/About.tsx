import React from 'react'
import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { alpha, useTheme } from '@mui/material/styles'
import { getImagePath } from '../utils/imageUtils'

const About: React.FC = () => {
  const theme = useTheme()
  const canadaImagePath = getImagePath('/img/canada.jpg')

  const facts = [
    { number: 2024, label: 'UC Berkeley MIDS Graduate' },
    { number: 2020, label: 'USMC Captain (2020-2024)' },
    { number: 2026, label: 'Senior Applied Scientist Role' },
    { number: 1, label: 'Active TS/SCI Clearance' },
  ]

  const achievements = [
    'Senior Applied Scientist at a stealth NYC startup since May 2026, working on drone imagery segmentation with SAM 3, GraphRAG systems, and MCP tools for production ML workflows',
    'Previously at KAI: Built air-gapped llama.cpp LLM deployments for a Fortune 100 utility, managed vLLM serving infrastructure on NVIDIA DGX clusters, and engineered petabyte-scale log processing pipelines',
    'Deloitte: Data scientist on TS/SCI programs with production LLM applications for defense and intelligence customers',
    'SciTec / Space Development Agency: CNN externship focused on space-based defense systems and advanced analytics',
    'US Marine Corps Ground Intelligence Officer, Captain (2020-2024): Led intelligence operations and analytical workflows. Active TS/SCI clearance holder',
    'UC Berkeley Master of Information and Data Science (MIDS) 2024; University of Alabama BSME with Mathematics minor 2020',
    'Founder of Neural Runner LLC: Data science, machine learning, and AI consulting. Previously ran a profitable CAD consultancy',
  ]

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
          About Me
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Home / About Me
        </Typography>
      </Box>

      {/* About Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={canadaImagePath}
            alt="Kevin Kuc standing at a mountain overlook"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              display: 'block',
              border: '1px solid',
              borderColor: 'divider',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
            I'm a Senior Applied Scientist specializing in LLMs, RAG systems, and geospatial computer vision. Currently building production ML at a stealth NYC startup. Former US Marine Corps Intelligence Officer with active TS/SCI clearance. I bring technical depth, operational discipline, and a track record of deploying ML systems that solve real-world problems.
          </Typography>
          <Box>
            {achievements.map((achievement, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <CheckCircle sx={{ color: theme.palette.primary.main, mr: 2, mt: 0.5, flexShrink: 0 }} />
                <Typography variant="body2">
                  {achievement}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Facts Section */}
      <Paper sx={{ p: 4, mb: 6, border: '1px solid', borderColor: 'divider' }}>
        <Grid container spacing={4}>
          {facts.map((fact, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: '48px',
                    color: theme.palette.primary.light,
                    fontWeight: 'bold',
                  }}
                >
                  {fact.number}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', color: 'text.secondary' }}>
                  {fact.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}

export default About

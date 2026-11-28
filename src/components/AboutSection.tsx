import React from 'react'
import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

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

// The "About" content, shown on the home page. /about redirects to /#about.
const AboutSection: React.FC = () => {
  const theme = useTheme()

  return (
    <Container
      component="section"
      id="about"
      aria-labelledby="about-heading"
      maxWidth="lg"
      sx={{ pt: 8, scrollMarginTop: '64px' }}
    >
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/img/canada.webp"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
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
          <Typography id="about-heading" variant="h4" component="h2" gutterBottom sx={{ mt: 2 }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
            I'm a Senior Applied Scientist specializing in LLMs, RAG systems, and geospatial computer vision. Currently building production ML at a stealth NYC startup. Former US Marine Corps Intelligence Officer with active TS/SCI clearance. I bring technical depth, operational discipline, and a track record of deploying ML systems that solve real-world problems.
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {achievements.map((achievement) => (
              <Box component="li" key={achievement} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <CheckCircle aria-hidden sx={{ color: theme.palette.primary.main, mr: 2, mt: 0.5, flexShrink: 0 }} />
                <Typography variant="body2">{achievement}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Paper sx={{ p: 4, border: '1px solid', borderColor: 'divider' }}>
        <Grid container spacing={4}>
          {facts.map((fact) => (
            <Grid item xs={6} md={3} key={fact.label}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: '48px',
                    lineHeight: 1.2,
                    color: theme.palette.primary.light,
                    fontWeight: 700,
                  }}
                >
                  {fact.number}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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

export default AboutSection

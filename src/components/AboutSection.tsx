import React from 'react'
import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

const facts = [
  { number: 5, label: 'Clients' },
  { number: 37, label: 'Projects' },
  { number: 320, label: 'Project Hours Worked' },
  { number: 27, label: "Master's in Data Science Credits" },
]

const achievements = [
  'Master of Information and Data Science from UC Berkeley, specializing in machine learning and production ML systems',
  'Bachelor of Science in Mechanical Engineering with Mathematics minor from the University of Alabama, providing strong analytical foundations',
  'Built production ML systems: XGBoost model on AWS SageMaker for real estate predictions, RAG applications for legal document analysis, and decentralized AI platforms with blockchain integration',
  'Developed deep learning models: LSTM achieving 92% accuracy for diabetic patient readmission prediction, BERT-based NLP models for sentiment analysis, and transformer architectures for various NLP tasks',
  'Full-stack development experience: React/TypeScript frontends, FastAPI backends, serverless AWS architectures, and smart contract development on Ethereum/Arbitrum',
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
            I'm a senior applied scientist building production ML systems and AI applications. My background spans machine learning, NLP, and full-stack development, with experience deploying models to production and creating end-to-end data science solutions.
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

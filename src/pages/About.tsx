import React from 'react'
import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { alpha, useTheme } from '@mui/material/styles'
import { getImagePath } from '../utils/imageUtils'

const About: React.FC = () => {
  const theme = useTheme()
  const canadaImagePath = getImagePath('/img/canada.jpg')

  const facts = [
    { number: 5, label: 'Clients' },
    { number: 37, label: 'Projects' },
    { number: 320, label: 'Project Hours Worked' },
    { number: 27, label: 'Masters of Data Science Credits' },
  ]

  const achievements = [
    'Master of Information and Data Science from UC Berkeley, specializing in machine learning and production ML systems',
    'Bachelor of Science in Mechanical Engineering with Mathematics minor from the University of Alabama, providing strong analytical foundations',
    'Built production ML systems: XGBoost model on AWS SageMaker for real estate predictions, RAG applications for legal document analysis, and decentralized AI platforms with blockchain integration',
    'Developed deep learning models: LSTM achieving 92% accuracy for diabetic patient readmission prediction, BERT-based NLP models for sentiment analysis, and transformer architectures for various NLP tasks',
    'Full-stack development experience: React/TypeScript frontends, FastAPI backends, serverless AWS architectures, and smart contract development on Ethereum/Arbitrum',
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
            I'm a senior data scientist building production ML systems and AI applications. My background spans machine learning, NLP, and full-stack development, with experience deploying models to production and creating end-to-end data science solutions.
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

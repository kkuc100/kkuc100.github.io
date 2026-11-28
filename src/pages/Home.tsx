import React from 'react'
import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent, Button, Stack } from '@mui/material'
import { SmartToy, TrendingUp, Gavel, Psychology } from '@mui/icons-material'
import { alpha, useTheme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import { usePageMeta } from '../utils/usePageMeta'
import AboutSection from '../components/AboutSection'

const Home: React.FC = () => {
  const theme = useTheme()
  usePageMeta('/')
  const heroBackground = `linear-gradient(100deg, ${alpha(theme.palette.background.default, 0.92)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 48%, ${alpha(theme.palette.primary.main, 0.28)} 100%), url('/img/hero-bg.webp') center center / cover no-repeat`

  const featuredProjects = [
    {
      icon: <SmartToy />,
      title: 'RAGMint - Decentralized AI Platform',
      description: 'Full-stack decentralized AI platform with token-based payments on Arbitrum L2. Integrates multiple LLMs via AWS Bedrock, with React Native mobile apps, FastAPI backend, and Solidity smart contracts.',
    },
    {
      icon: <TrendingUp />,
      title: 'Real Estate Market Analysis',
      description: 'Production ML system predicting property days on market using XGBoost deployed on AWS SageMaker. Serverless architecture with React frontend, Lambda proxy, and real-time predictions via API Gateway.',
    },
    {
      icon: <Gavel />,
      title: 'Lawyer RAG Application',
      description: 'Retrieval-Augmented Generation system for legal document analysis. React/TypeScript frontend with Firebase auth, AWS S3 document storage, and AI chatbot with multiple instruction modes.',
    },
    {
      icon: <Psychology />,
      title: 'ClearanceAI - DISS Management',
      description: 'AI-powered security clearance management system with intelligent recommendations, incident tracking, and multi-source CSV data integration with UUID-based linking.',
    },
  ]

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          background: heroBackground,
          position: 'relative',
          overflowX: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '80px',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              color: 'text.primary',
              mb: 4,
              fontSize: { xs: '30px', md: '48px' },
            }}
          >
            Building Intelligent Systems with Data
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.primary',
              maxWidth: '80%',
              mx: 'auto',
              fontSize: { xs: '16px', md: '18px' },
            }}
          >
            I’m Kevin, a senior applied scientist focused on LLMs, deep learning, and production ML. I turn raw data into deployable, measurable impact.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4, justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/kkuc100"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                color: 'primary.light',
                borderColor: 'primary.main',
                backgroundColor: alpha(theme.palette.background.default, 0.55),
                backdropFilter: 'blur(6px)',
                '&:hover': { backgroundColor: alpha(theme.palette.background.default, 0.75) },
              }}
              href="https://www.linkedin.com/in/kevinkuc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Button>
          </Stack>
        </Container>
      </Box>

      <AboutSection />

      {/* Featured Projects Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center' }}>
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {featuredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                  },
                  '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                    '&:hover': { transform: 'none' },
                  },
                }}
              >
                <CardActionArea
                  component={RouterLink}
                  to="/projects"
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        backgroundColor: alpha(theme.palette.primary.main, 0.16),
                      }}
                    >
                      <Box sx={{ color: theme.palette.primary.light, display: 'flex', '& svg': { fontSize: 36 } }}>
                        {project.icon}
                      </Box>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/projects"
          >
            View all projects
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home

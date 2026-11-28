import React from 'react'
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import PageHeader from '../components/PageHeader'
import { usePageMeta } from '../utils/usePageMeta'

type Project = {
  title: string
  description: string
  tags: string[]
  links: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: 'Yelp Sentiment Ensemble',
    description:
      'Review sentiment classification combining RoBERTa and DeBERTa softmax outputs with stacked ensembles. 79% macro F1 on 3-class and 62% on 5-class, beating a Naive Bayes baseline by 11 and 15 points. UC Berkeley MIDS project with an ACL-style paper.',
    tags: ['NLP', 'Transformers', 'RoBERTa', 'DeBERTa', 'Ensembles', 'PyTorch'],
    links: [
      { label: 'View Code', href: 'https://github.com/kkuc100/Yelp-Sentiment-Analysis' }
    ]
  },
  {
    title: 'RAGMint - Decentralized AI Platform',
    description:
      'Full-stack decentralized AI platform with token-based payments on Arbitrum L2. Integrates multiple LLMs (Llama 3, Claude 3.5 Sonnet, Amazon Nova) via AWS Bedrock, with React Native mobile apps, FastAPI backend, and Solidity smart contracts.',
    tags: ['Blockchain', 'LLMs', 'React Native', 'FastAPI', 'Solidity', 'AWS Bedrock', 'Arbitrum'],
    // Private repo (github.com/kkuc100/crypto_agent); no public link.
    links: []
  },
  {
    title: 'Lawyer RAG Application',
    description:
      'Retrieval-Augmented Generation system for legal document analysis. React/TypeScript frontend with Firebase auth, AWS S3 document storage, and AI chatbot with multiple instruction modes (Research, Client Communication, Paralegal Support). Role-based access control.',
    tags: ['RAG', 'React', 'Firebase', 'AWS S3', 'NLP', 'TypeScript', 'Redux'],
    // Private repo (github.com/kkuc100/lawyer_rag); no public link.
    links: []
  },
  {
    title: 'ClearanceAI - DISS Management',
    description:
      'AI-powered security clearance management system for Defense Information System for Security (DISS). Features intelligent clearance recommendations, incident tracking, investigation deadline calculations, and multi-source CSV data integration with UUID-based linking.',
    tags: ['React', 'TypeScript', 'AI Recommendations', 'Data Integration', 'Security'],
    // Private repo (github.com/kkuc100/security_clearance); no public link.
    links: []
  },
  {
    title: 'GPS Converter (ECEF Velocity)',
    description:
      'Geospatial analysis tool computing Earth-Centered, Earth-Fixed (ECEF) velocities from LLA CSV data. Features vectorized NumPy operations, robust data parsing, and reproducible CLI interface for batch processing.',
    tags: ['Python', 'NumPy', 'Geospatial', 'Data Processing'],
    links: [
      { label: 'View Code', href: 'https://github.com/kkuc100/lla_ecef_coding_challenge' }
    ]
  },
  {
    title: 'Project Happy',
    description:
      'Interactive data visualization platform exploring factors influencing national happiness. Built on World Happiness Report data with engaging visualizations and data storytelling techniques for educational insights.',
    tags: ['Analytics', 'Visualization', 'Dashboards', 'Data Storytelling'],
    links: []
  }
]

const Projects: React.FC = () => {
  const theme = useTheme()
  usePageMeta('/projects')

  return (
    <Container maxWidth="lg" sx={{ py: 4, marginTop: '80px' }}>
      <PageHeader
        title="Projects"
        subtitle="Selected work in ML, NLP, and full-stack AI. Public repos are linked; client work is private."
      />

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ mb: 0, flex: 1 }}>
                    {project.title}
                  </Typography>
                  <Chip
                    label={project.links.length > 0 ? 'Public' : 'Private'}
                    size="small"
                    sx={{
                      backgroundColor: project.links.length > 0
                        ? alpha(theme.palette.secondary.main, 0.16)
                        : alpha(theme.palette.text.secondary, 0.12),
                      color: project.links.length > 0
                        ? theme.palette.secondary.light
                        : theme.palette.text.secondary,
                      borderColor: project.links.length > 0
                        ? theme.palette.secondary.main
                        : 'divider',
                      ml: 1,
                      height: '24px',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.14),
                        color: theme.palette.primary.light,
                        borderColor: alpha(theme.palette.primary.main, 0.4),
                      }}
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </CardContent>
              {project.links.length > 0 && (
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Stack direction="row" spacing={1}>
                    {project.links.map((l) => (
                      <Button
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.light',
                          '&:hover': {
                            borderColor: 'primary.light',
                            backgroundColor: alpha(theme.palette.primary.main, 0.12),
                          }
                        }}
                      >
                        {l.label}
                      </Button>
                    ))}
                  </Stack>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Projects



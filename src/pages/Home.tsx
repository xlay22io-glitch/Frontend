import { Box, Container, Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar';

const Home = () => (
  <Box>
    <Navbar />
    <Container maxWidth='lg' sx={{ pt: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            fontWeight: 800,
            color: 'primary.main',
            fontSize: '60px',
            lineHeight: '60px',
            letterSpacing: '-3px',
            textAlign: 'center',
          }}
        >
          BACK LAYS
        </Typography>
        <Typography
          variant='h2'
          component='h2'
          sx={{
            fontWeight: 800,
            color: 'common.white',
            fontSize: '60px',
            lineHeight: '60px',
            letterSpacing: '-3px',
            textAlign: 'center',
          }}
        >
          TRANSFER RISK
        </Typography>
        <Typography variant='subtitle1' sx={{ mt: 2, color: 'grey.400' }}>
          Build your bank with Tradelayback by safely transferring risk!
        </Typography>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant='contained' size='large'>
            Open Account
          </Button>
          <Button
            variant='outlined'
            size='large'
            sx={{ color: 'common.white', borderColor: 'common.white' }}
          >
            Sign in
          </Button>
        </Box>
      </Box>

      {/*
        You can break these into their own components later—
        e.g. <NoBadLuck />, <Features />, <Steps />, <PaymentMethods />
      */}
      <Box id='no-bad-luck' sx={{ mb: 10 }}>
        {/* NO BAD LUCK / Take control section */}
      </Box>

      <Box id='features' sx={{ mb: 10 }}>
        {/* Cashback / Intuitive platform */}
      </Box>

      <Box id='steps' sx={{ mb: 10 }}>
        {/* Steps to get started */}
      </Box>

      <Box id='payments' sx={{ mb: 10 }}>
        {/* Payment methods & footer */}
      </Box>
    </Container>
  </Box>
);

export default Home;

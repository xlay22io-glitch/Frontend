import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../components/common/CustomButton';
import useAuthStore from '../store/auth-store';

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Box
      sx={{
        py: 10,
        px: 6,
        '@media (max-width: 900px)': {
          px: 4,
        },
        '@media (max-width: 640px)': {
          px: 2,
          py: 8,
        },
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: '60px',
            fontWeight: 600,
            fontFamily: 'Inter',
            color: (theme) => theme.palette.primary.main,
            textAlign: 'center',
            lineHeight: '60px',
            '@media (max-width: 400px)': {
              fontSize: '48px',
              lineHeight: '50px',
            },
          }}
        >
          BACK LAYS
        </Typography>
        <Typography
          sx={{
            fontSize: '60px',
            fontWeight: 600,
            fontFamily: 'Inter',
            color: 'white',
            textAlign: 'center',
            lineHeight: '60px',
            '@media (max-width: 400px)': {
              fontSize: '48px',
              lineHeight: '50px',
            },
          }}
        >
          TRANSFER RISK
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 400,
          fontFamily: 'Inter',
          color: '#B2B2B2',
          lineHeight: '28px',
          textAlign: 'center',
        }}
      >
        Build your bank with Tradelayback by safely transferring risk!
      </Typography>

      {!isAuthenticated && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            mt: 8,
          }}
        >
          <CustomButton
            onClick={() => navigate('/register')}
            variant='primary'
            sx={{ borderRadius: '10px', maxWidth: '400px', width: '100%' }}
          >
            Open Account
          </CustomButton>
          <CustomButton
            onClick={() => navigate('/login')}
            variant='primary'
            sx={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid white',
              borderRadius: '20px',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            Sign in
          </CustomButton>
        </Box>
      )}

      <Box
        sx={{
          mt: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: 900,
              fontFamily: 'Inter',
              color: (theme) => theme.palette.primary.main,
              lineHeight: '44px',
              '@media (max-width: 400px)': {
                lineHeight: '50px',
              },
            }}
          >
            NO BAD LUCK
          </Typography>
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: 900,
              fontFamily: 'Inter',
              color: 'white',
              lineHeight: '44px',
              '@media (max-width: 400px)': {
                lineHeight: '50px',
              },
            }}
          >
            TAKE CONTROL OF YOUR ACTION
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            background:
              'linear-gradient(359.34deg, #111111 0.55%, rgba(63, 86, 0, 0.2) 99.45%)',
            px: 3,
            py: 5,
            borderRadius: '50px',
            mt: 8,
            width: '100%',
            maxWidth: '668px',
          }}
        >
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: 900,
              color: (theme) => theme.palette.primary.main,
              fontFamily: 'Inter',
              lineHeight: '44px',
            }}
          >
            CASHBACK{' '}
            <Typography
              sx={{
                fontSize: '40px',
                fontWeight: 900,
                color: 'white',
                fontFamily: 'Inter',
                lineHeight: '44px',
              }}
              component='span'
            >
              30%
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: '#B2B2B2',
              fontWeight: 400,
              fontSize: '20px',
              fontFamily: 'Inter',
              lineHeight: '28px',
              mt: 5,
            }}
          >
            Back your prematch lay for full odds and get cash back for weekly
            negative balance up to 30%. Back your lays and transfer risk to us.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

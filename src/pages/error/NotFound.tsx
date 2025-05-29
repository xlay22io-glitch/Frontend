import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/common/CustomButton';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 90px - 78px)',
        backgroundColor: (theme) => theme.palette.customColors.smoothGray,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant='h1'
        sx={{ fontSize: '6rem', fontWeight: 700, color: 'white' }}
      >
        404
      </Typography>
      <Typography variant='h5' sx={{ color: '#909A9F', mb: 3 }}>
        Oops! Page not found.
      </Typography>
      <CustomButton
        variant='primary'
        onClick={() => navigate('/')}
        sx={{ px: 4, py: 1, fontWeight: 600 }}
      >
        Go Home
      </CustomButton>
    </Box>
  );
};

export default NotFound;
